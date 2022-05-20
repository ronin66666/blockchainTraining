
//测试离线签名：A 离线签名 -> B 拿到签名调用合约 permit 校验， 授权， -> B 调用transferFrom转账

import { SignatureLike } from "@ethersproject/bytes";
import { recoverAddress } from "ethers/lib/utils";
import { deployments, ethers, getNamedAccounts, network } from "hardhat";
import { ERC20Permit, ERC2612 } from "../typechain";
import { Token } from "../typechain/Token";
import { getPermitDigest, sign, userPrivateKey } from "./signature";

const contractName = "ERC2612";

async function transfer() {
    const { deployer, user1 } = await getNamedAccounts();

    const contract = await ethers.getContract<ERC2612>(contractName, deployer);

    const tokenAddress = await deployments.get(contractName).then(deployment => deployment.address);
    
    const name = await contract.name();
    let nonce = await contract.nonces(deployer);
    const chainId = Number(network.config.chainId);

    const deadline = getTimeAfter(30 * 60 * 1000); //有效时间30分
    const approve = {
        owner: deployer,
        spender: user1,
        value: ethers.utils.parseEther("300") // A -> B 金额
    }

    console.log(`name = ${name}, nonce = ${nonce}, chainId = ${chainId} deadline = ${deadline} approve = ${approve}`);
    const digest = getPermitDigest(name, tokenAddress, chainId, approve, nonce, deadline);

    const signature = sign(digest, userPrivateKey);


    const sl: SignatureLike = {
        r:  "0x" + signature.r.toString('hex'),
        s: "0x" + signature.s.toString('hex'),
        v: signature.v
    };

    console.log(`v = ${sl.v}, r = ${sl.r}, s = ${sl.s}`);

    const address = recoverAddress(digest, sl)
    console.log("address = ", address);
    
    const contractA = await ethers.getContract<ERC2612>(contractName, user1);
    //验证签名，授权
    const recepit = await contractA.permit(approve.owner, approve.spender, approve.value, deadline, sl.v!, sl.r, sl.s!)
    .then(tx => tx.wait());
    console.log("recepit = ", recepit);

    const allowance = await contractA.allowance(approve.owner, approve.spender);
    console.log("allowance = ", ethers.utils.formatEther(allowance));
    

    let balance = await contractA.balanceOf(user1);
    
    console.log("balance = ", ethers.utils.formatEther(balance));
    
    const result = await contractA.transferFrom(approve.owner, approve.spender , approve.value).then(tx => tx.wait());
    console.log("result = ", result);

     balance = await contractA.balanceOf(user1);
    
    console.log("new balance = ", ethers.utils.formatEther(balance));
    
}


function getTimeAfter(milliseconds: number): number {
    let date = new Date();
    let afterMilliseconds = date.getMilliseconds() + milliseconds;  //转为毫秒
    let after = date.setMilliseconds(afterMilliseconds)
    return after
}

transfer().catch((error) => {
    console.log(error);
    process.exit(1);
})