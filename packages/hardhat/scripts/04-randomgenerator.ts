// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { AbiCoder, toUtf8Bytes } from "ethers/lib/utils";
import { deployments, ethers, getNamedAccounts } from "hardhat";
import { RandomGenerator } from "../typechain";

async function main() {
    await getRole();
    // await pullFunds();
}

async function getRole() {
  const { deployer, game } = await getNamedAccounts();

  // We get the contract to deploy
  const token = await ethers.getContract<RandomGenerator>("RandomGenerator", deployer);

  const role = ethers.utils.keccak256(toUtf8Bytes("CONSUMER_ROLE"));
  const hero = (await deployments.get("HeroBoxV1")).address;

  const result = await token.grantRole(role, hero).then(tx => tx.wait());
  console.log(result)

 const hasRole = await token.hasRole(role, hero);
 console.log("hasRole = ", hasRole);
 
}

async function pullFunds() {
  const { deployer, game } = await getNamedAccounts();

  // We get the contract to deploy
  const token = await ethers.getContract<RandomGenerator>("RandomGenerator", deployer);
  const result = await token.pullFunds("0x84b9B910527Ad5C03A9Ca831909E21e236EA7b06").then(tx => tx.wait());
  console.log(result);
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
