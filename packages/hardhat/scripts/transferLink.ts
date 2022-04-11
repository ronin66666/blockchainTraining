import { deployments, ethers, getNamedAccounts } from "hardhat";
import { MGFToken } from "../typechain";


async function main () {
    const randomAddress = ( await deployments.get("RandomGenerator")).address;
    const contract = await ethers.getContractAt<MGFToken>("MGFToken", "0x84b9B910527Ad5C03A9Ca831909E21e236EA7b06");
    const result = await contract.balanceOf(randomAddress);
    console.log("balance = ", ethers.utils.formatEther(result));
}

main().catch((error) => {
    console.log(error);
    process.exit(1);
})