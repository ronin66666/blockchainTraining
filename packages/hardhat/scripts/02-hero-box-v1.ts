// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>`
import { BigNumberish } from "ethers";
import { deployments, ethers, getNamedAccounts } from "hardhat";
import { Card721, HeroBoxV1, MGFToken } from "../typechain";


async function initialize() {
  //测试账户,在 hardhat.config.ts 中配置
  const { deployer } = await getNamedAccounts();
  console.log(deployer);

  // We get the contract to deploy
  const heroBoxv1 = await ethers.getContract<HeroBoxV1>("HeroBoxV1", deployer);

  // console.log(testUser1);

  const card = (await deployments.get("Card721")).address;
  const mgfToken = (await deployments.get("MGFToken")).address;
  const random = (await deployments.get("RandomGenerator")).address;
  console.log(card)

  const cardids = [1, 2, 3];
  const cardnums = [10, 20, 30];
  const result = await heroBoxv1.initialize(card,
    "test",
    mgfToken,
    ethers.utils.parseEther("1"),
    deployer,
    cardids,
    cardnums,
    random).then(tx => tx.wait());
  // const result = await heroBoxv1.mintMulti(1).then(tx => tx.wait());
  console.log(result);
}


async function setRandomGenerator() {
  const { deployer } = await getNamedAccounts();
  const random = (await deployments.get("RandomGenerator")).address;



  const heroBoxv1 = await ethers.getContract<HeroBoxV1>("HeroBoxV1", deployer);

  let result = await heroBoxv1.pause().then(tx => tx.wait());
  console.log(result);

   result = await heroBoxv1.setRandomGenerator(random).then(tx => tx.wait());
  console.log(result);
  
  result = await heroBoxv1.unpause().then(tx => tx.wait());
  console.log(result);

}

async function setCurrToken(address: string) {
  //测试账户,在 hardhat.config.ts 中配置
  const { deployer } = await getNamedAccounts();
  console.log(deployer);

  // We get the contract to deploy
  const heroBoxv1 = await ethers.getContract<HeroBoxV1>("HeroBoxV1", deployer);

  let result = await heroBoxv1.pause().then(tx => tx.wait());
  console.log(result);

  result = await heroBoxv1.setCurrToken(address).then(tx => tx.wait());
  console.log(result);

  result = await heroBoxv1.unpause().then(tx => tx.wait());
  console.log(result);

  console.log("set currToken address: ", heroBoxv1.currToken)
}

async function setPublicBuyableQuota(amount: number) {
  //测试账户,在 hardhat.config.ts 中配置
  const { deployer } = await getNamedAccounts();
  console.log(deployer);

  // We get the contract to deploy
  const heroBoxv1 = await ethers.getContract<HeroBoxV1>("HeroBoxV1", deployer);

  let result = await heroBoxv1.pause().then(tx => tx.wait());
  console.log(result);
  result = await heroBoxv1.setPublicBuyableQuota(amount).then(tx => tx.wait());
  console.log(result);
  result = await heroBoxv1.unpause().then(tx => tx.wait());
  console.log(result);
}

async function mintMulti(amount: number) {
  const { game } = await getNamedAccounts();
  console.log(game);

  // We get the contract to deploy
  const heroBoxv1 = await ethers.getContract<HeroBoxV1>("HeroBoxV1", game);

  const result = await heroBoxv1.mintMulti(amount).then(tx => tx.wait());

  console.log(result);
}

async function setApprovalForAll(addr: string, approved: boolean) {
  const { deployer } = await getNamedAccounts();
  console.log(deployer);

  // We get the contract to deploy
  const heroBoxv1 = await ethers.getContract<HeroBoxV1>("HeroBoxV1", deployer);
  console.log(heroBoxv1.address)

  let result = await heroBoxv1.setApprovalForAll(addr, true);
  console.log(result);
}

async function approvalToHeroBox() {
  const { deployer, game } = await getNamedAccounts();
  console.log(game);

  // We get the contract to deploy
  const heroBoxv1 = await ethers.getContract<HeroBoxV1>("HeroBoxV1", game);
  console.log(heroBoxv1.address)

  const mgfToken = await ethers.getContract<MGFToken>("MGFToken", game);
  const result = await mgfToken.approve(heroBoxv1.address, ethers.utils.parseEther("1000000")).then(tx => tx.wait());
  console.log(result);
}

async function open(tokenId: BigNumberish) {
  const { game } = await getNamedAccounts();
  console.log(game);

  // We get the contract to deploy
  const heroBoxv1 = await ethers.getContract<HeroBoxV1>("HeroBoxV1", game);
  console.log(heroBoxv1.address)

  let result = await heroBoxv1.open(tokenId).then(tx => tx.wait());
  console.log(result);
}

async function main() {
  // initialize();
  // setCurrToken('0x87304B34F9EfE7A52DaFF679E32099e43f91A307');
  // setPublicBuyableQuota(10);
  // await approvalToHeroBox();
  // await balance();
  // await mintMulti(2);
  await open(2);
  // await setRandomGenerator();
}

async function balance() {
  const { game } = await getNamedAccounts();

  const heroBoxv1 = await ethers.getContract<HeroBoxV1>("HeroBoxV1", game);
  const balance = await heroBoxv1.balanceOf(game);
  console.log("balance = ", ethers.utils.formatUnits(balance, "wei"));

  const id = await heroBoxv1.tokenByIndex(1);
  console.log("tokenId = ", ethers.utils.formatUnits(id, "wei"));

}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
