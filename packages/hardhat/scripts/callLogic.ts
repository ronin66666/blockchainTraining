import { CallOverrides, Contract, Overrides, PayableOverrides } from "ethers";
import { ethers } from "hardhat";
import { CallLogic } from "../typechain";

async function main() {
    const contract = await ethers.getContract<CallLogic>("CallLogic");
    const result = await contract.add(10, 20).then(tx => tx.wait());
    console.log("result = ", result);

    
}

main().catch((error) => {
    console.log(error);
    process.exit(1);
})