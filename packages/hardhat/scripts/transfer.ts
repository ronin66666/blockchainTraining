
//测试离线签名：A 离线签名 -> B 拿到签名调用合约 permit 校验， 授权， -> B 调用transferFrom转账

import { deployments, ethers, getNamedAccounts, network } from "hardhat";
import { version } from "process";
import { ERC2612 } from "../typechain";
import { getPermit, recover, signatureFromPrivateKey } from "./signature";


async function transfer() {
    const { deployer, user1 } = await getNamedAccounts();

    const contract = await ethers.getContract<ERC2612>("ERC2612", deployer);

    const tokenAddress = await deployments.get("ERC2612").then(deployment => deployment.address);

    const name = await contract.name();
    const nonce = (await contract.nonces(deployer)).add(1);
    const chainId = Number(network.config.chainId);
    const deadline = getTimeAfter(30 * 60 * 1000); //有效时间30分
    const approve = {
        owner: deployer,
        spender: user1,
        value: ethers.utils.parseEther("30000") // A -> B 金额
    }
    console.log(`name = ${name}, nonce = ${nonce}, chainId = ${chainId} deadline = ${deadline} approve = ${approve}`);

    //离线签名
    const sign = signatureFromPrivateKey(name, "1", chainId, contract.address, nonce, deadline, approve);

    // console.log(`A 签名: v = ${sign.v}, r = ${sign.r} s = ${sign.s}`);
    console.log(`A 签名: v = ${sign}`);


    const degist = getPermit(name, version, chainId, tokenAddress, nonce, deadline, approve);

    const address = recover(degist, sign)

    console.log("address = ", address);
    

    //B 验证签名（授权）， 收款
    // const bContract = await ethers.getContract<ERC2612>("ERC2612", user1);
  
    // const recepit = await bContract.permit(deployer, user1, approve.value, deadline, v, r, s).then(tx => tx.wait());
    // console.log("permit recepit = ", recepit);


    // let balance = await bContract.balanceOf(user1)
    // console.log("balance = ", balance);

    // //收款
    // let transferRecepit = await bContract.transferFrom(deployer, user1, approve.value).then(tx => tx.wait);
    // console.log("transfer = ", transferRecepit);
    
    // balance = await bContract.balanceOf(user1)
    // console.log("new balance = ", balance);


    // transferRecepit = await bContract.transferFrom(deployer, user1, approve.value).then(tx => tx.wait);
    // console.log("transfer2 = ", transferRecepit);
    
    // balance = await bContract.balanceOf(user1)
    // console.log("new balance2 = ", balance);

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