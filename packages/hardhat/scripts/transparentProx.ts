

import { TransactionRequest } from "@ethersproject/abstract-provider";
import { Contract } from "ethers";
import { CoerceFunc, defaultAbiCoder, Deferrable, toUtf8Bytes } from "ethers/lib/utils";
import { deployments, ethers } from "hardhat";
import { int } from "hardhat/internal/core/params/argumentTypes";
import deployCallLogic from "../deploy/04-callLogic";
import { CallLogic, ProxyAdmin, TransparentUpgradeableProxy } from "../typechain";

async function main() {
    await sendTransaction();
    await call();
}
async function sendTransaction() {
    const tranparentProx =  (await deployments.get("TransparentUpgradeableProxy")).address;
    const logic = (await deployments.get("Logic")).address;
    const contract = await ethers.getContract<TransparentUpgradeableProxy>("TransparentUpgradeableProxy");

    const id =  ethers.utils.hexDataSlice(ethers.utils.id('add(uint256,uint256)'), 0 , 4);
    console.log("id = ", id);
    let param = defaultAbiCoder.encode(['uint256', 'uint256'],[20, 22]);
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

main().catch((error) => {
    console.log(error);
    process.exit(1);
})