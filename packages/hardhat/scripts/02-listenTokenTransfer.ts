import { getNamedAccounts, ethers } from "hardhat";
import { LCTokenERC721 } from "../typechain";

const contractName = "LCTokenERC721";

async function listenLCToken() {
  const { deployer } = await getNamedAccounts();

  const lcTokenContract = await ethers.getContract<LCTokenERC721>(
    contractName,
    deployer
  );

  const mintEvent = lcTokenContract.filters.MintToken;
  const transferEvent = lcTokenContract.filters.Transfer;

  lcTokenContract.on(mintEvent, (...args) => {
    console.log(args);
  });
  
  lcTokenContract.on(transferEvent, (...args) => {
    console.log(args);
  });

  console.log("开始监听事件");
}

listenLCToken().catch((error) => {
  console.log(error);
  // eslint-disable-next-line no-process-exit
  process.exit(0);
});
