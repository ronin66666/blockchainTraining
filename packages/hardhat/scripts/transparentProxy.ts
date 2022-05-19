

import { TransactionRequest } from "@ethersproject/abstract-provider";
import { Contract } from "ethers";
import { CoerceFunc, defaultAbiCoder, Deferrable, toUtf8Bytes } from "ethers/lib/utils";
import { deployments, ethers, getNamedAccounts } from "hardhat";
import { int } from "hardhat/internal/core/params/argumentTypes";
import deployCallLogic from "../deploy/04-callLogic";
import { CallLogic, ProxyAdmin, TransparentUpgradeableProxy } from "../typechain";
import { callData } from "./callData";

async function main() {
    await sendTransaction();
    await call();
    // await open(7);
}

async function sendTransaction() {
    const { user1 } = await getNamedAccounts();
    const tranparentProx =  (await deployments.get("TransparentUpgradeableProxy")).address;
    const contract = await ethers.getContract<TransparentUpgradeableProxy>("TransparentUpgradeableProxy", user1);

    const id =  ethers.utils.hexDataSlice(ethers.utils.id('add(uint256,uint256)'), 0 , 4);
    console.log("id = ", id);
    let param = defaultAbiCoder.encode(['uint256', 'uint256'],[30, 22]);
    param = param.substring(2, param.length);
    
    console.log("param = ", param);
    
    const data = id + param;
    console.log("data = ", data);
    
    const tr:Deferrable<TransactionRequest> = {
        to: tranparentProx,
        data: data
    };
    
    const result = await contract.signer.sendTransaction(tr).then(tx => tx.wait());
    console.log("result = ", result);
}

async function call () {
    const tranparentProx =  (await deployments.get("TransparentUpgradeableProxy")).address;

    const contract = await ethers.getContract<TransparentUpgradeableProxy>("TransparentUpgradeableProxy");

    let callData =  ethers.utils.hexDataSlice(ethers.utils.id('getValue()'), 0 , 4);
    console.log("data = ", callData);
    console.log("tranparentProx = ", tranparentProx);

    const tr:Deferrable<TransactionRequest> = {
        to: tranparentProx,
        data: callData
    };
    
    const result = await contract.signer.call(tr);
    console.log(result);
    
}


async function open(tokenId: number) {

    const { game } = await getNamedAccounts();
    const heroBoxTransparentProxy = await ethers.getContract<TransparentUpgradeableProxy>("HeroBoxTransparentProxy", game);
    const signerAddr = await heroBoxTransparentProxy.signer.getAddress();
    console.log("signerAddr = ", signerAddr);

    const data = callData("open(uint)", ['uint'], [tokenId]);
    const tr: Deferrable<TransactionRequest> = {
        from: game,
        to: "0x84eB36c6b248ebfd668C959f95383ae6a33e9944",
        data: data
    }

    const result = await heroBoxTransparentProxy.signer.sendTransaction(tr).then( tx => tx.wait());
    console.log("result = ", result);
}


main().catch((error) => {
    console.log(error);
    process.exit(1);
})