
import { TransactionResponse } from "@ethersproject/providers";
import { Contract, ethers, Signer } from "ethers";
import deploymentJson from "../contracts/deployment.json";

export function getWWTokenContract(signer?: Signer) {
    const contractData = deploymentJson[97][0].contracts.WWTokenERC20;
    const abi =  contractData.abi;
    const address = contractData.address;
    return new ethers.Contract(address, abi, signer);
}

export function getVaultContract(signer?: Signer): Contract {
    const contract = deploymentJson[97][0].contracts.Vault;
    const abi =  contract.abi;
    const address = contract.address;
    console.log("address = ", address);
    
    return new ethers.Contract(address, abi, signer);
}

export async function balanceOf(account: string, signer: Signer): Promise<string> {
    const contract = getWWTokenContract(signer);
    const result = await contract.balanceOf(account);
    
    console.log("result  = ", ethers.utils.formatEther(result));
    return ethers.utils.formatEther(result);
    
}

export async function depositeToken(account: string, signer: Signer, amount: string) {

    const contract = getWWTokenContract(signer);
    const valutContract = getVaultContract(signer);

    //1.判断是否需要授权
    const isApproved = await approve(contract, account, valutContract.address, amount);

    if (!isApproved) { return } //授权失败

    //2. 存款
    const result: TransactionResponse = await valutContract.deposite(ethers.utils.parseEther(amount));
    const tx = await result.wait()
    console.log("deposite result = ", tx);
    
}

export async function withdrawToken(signer: Signer, amount: string) {

    const valutContract = getVaultContract(signer);

    const result: TransactionResponse = await valutContract.withdraw(ethers.utils.parseEther(amount));
    const tx = await result.wait()
    console.log("withdrawToken result = ", tx);
}


export async function allowance(contract: Contract, account: string, contractAddress: string, approveAmount: string): Promise<boolean> {
    let allowanceAmount = await contract.allowance(account, contractAddress);
    
    const amount = Number(approveAmount);
    allowanceAmount = ethers.utils.formatEther(allowanceAmount);
    if (allowanceAmount < amount) {
        console.log("需要授权");
        return true;
    }
    return false;
}

export async function approve(contract: Contract , account: string, contractAddress: string, amount: string): Promise<boolean> {
    const isNeedApprove = await allowance(contract, account, contractAddress, amount);
    if(!isNeedApprove) { return true }
    try {
        const result: TransactionResponse = await contract.approve(contractAddress,  ethers.utils.parseEther(amount));
        const tx = await result.wait();
        console.log("approve tx = ", tx);
        return true;
    } catch (error) {
        console.log("error = ", error);
        
        return false
    }
}
//存款金额
export async function getDepositeBalance(account: string, signer: Signer): Promise<string>{
    const contract = getVaultContract(signer);
    const result = await contract.getOwnerDepositAmount(account);
    console.log("depositeAmount = ", ethers.utils.formatEther(result));
    
    return ethers.utils.formatEther(result);
}