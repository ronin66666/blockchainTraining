// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { BigNumberish } from "ethers";
import { deployments, ethers, getNamedAccounts } from "hardhat";
import { Card721 } from "../typechain";

class CardInfo {
  name: string;
  cardId: BigNumberish;
  camp: BigNumberish;
  rarity: BigNumberish;
  maxAmount: BigNumberish;
  cardURI: string;
  constructor(
    _name: string,
    _cardId: BigNumberish,
    _camp: BigNumberish,
    _rarity: BigNumberish,
    _maxAmount: BigNumberish,
    _cardURI: string
  ) {
    this.name = _name
    this.cardId = _cardId
    this.camp = _camp;
    this.rarity = _rarity;
    this.maxAmount = _maxAmount;
    this.cardURI = _cardURI
  }
}

async function main() {
  // We get the contract to deploy
  balance();

}

async function balance() {
  const {deployer, game } = await getNamedAccounts();

  const cardContract = await ethers.getContract<Card721>("Card721");
  const balance = await cardContract.balanceOf(game);
  console.log("balance, ", ethers.utils.formatUnits(balance, "wei") );
  
}

async function newCards() {
  
  const cardContract = await ethers.getContract<Card721>("Card721");
  const cardS = new CardInfo("s", 1, 100, 1, 1000, "");
  const cardSS = new CardInfo("ss", 2, 100, 2, 1000, "");
  const cardSSS = new CardInfo("sss", 3, 100, 3, 1000, "");

  const cardlist  = [cardS, cardSS, cardSSS];

  for (let index = 0; index < cardlist.length; index++) {
    const card = cardlist[index];
    const result = await newCard(cardContract, card);
    console.log("name = ", card.name," result = ", result);
  }

}

async function superMinter() {
  const card = await ethers.getContract<Card721>("Card721");
  const heroBox = (await deployments.get("HeroBoxV1")).address;
  const result = await card.setSuperMinter(heroBox).then(tx => tx.wait());
  console.log("result = ", result);
  
}

async function newCard(contract: Card721, cardInfo: CardInfo) {
  return contract.newCard(cardInfo.name, cardInfo.cardId, cardInfo.camp, cardInfo.rarity, cardInfo.maxAmount, cardInfo.cardURI).then(tx => tx.wait());
}

//初始化
async function initialize(cardInfo: CardInfo) {
  const card = await ethers.getContract<Card721>("Card721");
  //盲盒地址
  const boxAddress = (await deployments.get("HeroBoxV1")).address;
  const result = await card.initialize(boxAddress, "aaa").then(tx => tx.wait());
  console.log("result = ", result);
}

async function carInfos() {
  const card = await ethers.getContract<Card721>("Card721");
  const carInfo =  await card.cardInfoes(3);
  console.log("carInfo = ", carInfo);
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
