// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers, getNamedAccounts } from "hardhat";
import { MGFToken } from "../typechain";

async function main() {
  // We get the contract to deploy
  // await mint();
  await transfer();
}

async function mint() {
  const {deployer, game } = await getNamedAccounts()
  const token = await ethers.getContract<MGFToken>("MGFToken");

  const result = await token.mint(deployer, ethers.utils.parseEther("1000000000")).then(tx => tx.wait())

  console.log(result)
}

async function transfer() {
  const {deployer, game } = await getNamedAccounts()
  const token = await ethers.getContract<MGFToken>("MGFToken");
  const result = await token.transfer(game, ethers.utils.parseEther("2000000")).then(tx => tx.wait());
  console.log(result)

  const balance = await token.balanceOf(game);
  console.log("balance = ", ethers.utils.formatEther(balance));
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
