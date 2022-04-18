
import { Contract } from "ethers";
import { deployments, ethers } from "hardhat";
import deployCallLogic from "../deploy/04-callLogic";
import { CallLogic, ProxyAdmin } from "../typechain";

async function main() {
    await changeImple();
    
}

async function changeImple() {
    const tranparentProx =  (await deployments.get("TransparentUpgradeableProxy")).address;
    const logic = (await deployments.get("Logic")).address;
    const contract = await ethers.getContract<ProxyAdmin>("ProxyAdmin");

    let result = await contract.upgrade(tranparentProx, logic).then(tx => tx.wait());
    console.log("result = ", result);
    
    const imp = await contract.getProxyImplementation(tranparentProx);
    console.log("result = ", imp);
}

main().catch((error) => {
    console.log(error);
    process.exit(1);
})