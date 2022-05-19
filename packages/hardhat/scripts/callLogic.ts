import { CallOverrides, Contract, Overrides, PayableOverrides } from "ethers";
import { ethers } from "hardhat";
import { CallLogic, Logic } from "../typechain";

async function main() {
    init();
}

async function init() {


    const contract = await ethers.getContract<Logic>("Logic");
    const result = await contract.add(10, 20).then(tx => tx.wait());
    console.log(result);
    

    // const result = await contract.initial().then(tx => tx.wait());
    // console.log(result);

    // const value = await contract.getValue();
    // console.log(value.toNumber);
    
}

async function test() {
    const contract = await ethers.getContract<CallLogic>("CallLogic");
    const result = await contract.add(10, 20).then(tx => tx.wait());
    console.log("result = ", result);
}
main().catch((error) => {
    console.log(error);
    process.exit(1);
})