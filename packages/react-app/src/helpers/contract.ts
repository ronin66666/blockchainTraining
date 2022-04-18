import { ethers, Signer, BigNumberish } from "ethers";
import ERC2612Json  from "../contracts/ERC2612.json";
import { ECDSASignature } from "ethereumjs-util";
import { TransactionResponse } from "@ethersproject/providers";

export function getERC2612Contract(signer?: Signer) {

    const abi = ERC2612Json.abi;
    const address = ERC2612Json.address;
    signer?.sendTransaction
    return new ethers.Contract(address, abi, signer)
}

export async function balanceOf(account: string, signer: Signer): Promise<string> {
    const contract = getERC2612Contract()
    const result = await contract.balanceOf(account);
    const balance = ethers.utils.formatEther(result);
    console.log("balance  = ", balance);
    return balance;
}


//接收方先调用签名验证, 验证成功相当于授权了
export async function permit(owner: string, spender: string, value: BigNumberish, deadline: BigNumberish, signature: ECDSASignature) {
    const contract = getERC2612Contract();
    const response: TransactionResponse  = await contract.permit(owner, spender, value, deadline, signature.v, signature.r, signature.s);
    const receipet = await response.wait();
    console.log("permit receipet = ", receipet);
}


//接收方调用转账，发送方不需要付手续费
export async function transferFrom(from:string, to: string, amount: BigNumberish) {
    const contract = getERC2612Contract();
    const response: TransactionResponse  = await contract.transferFrom(from, to, amount);
    const receipet = await response.wait();
    console.log("permit receipet = ", receipet);
}