import { ethers } from "hardhat";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { LCTokenERC721 } from "../typechain";

const contractName = "LCTokenERC721";

async function deployLCToken(hre: HardhatRuntimeEnvironment) {
  const { deployer, user1 } = await hre.getNamedAccounts();
  const deploy = hre.deployments.deploy;

  const deployResult = await deploy(contractName, {
    from: deployer,
  });

  console.log("deploy tokenERC721 address = ", deployResult.address);

  const lcTokenContract = await ethers.getContract<LCTokenERC721>(
    contractName,
    deployer
  );

//   const user1TextContract = await ethers.getContract<LCTokenERC721>(
//     contractName,
//     user1
//   );

  await lcTokenContract.mint(deployer).then((tx) => tx.wait());

//   // 连续创建10个tokenId
//   for (let index = 0; index < 10; index++) {
//     if (index < 5) {
//       await lcTokenContract.mint(deployer).then((tx) => tx.wait());
//     } else {
//       await user1TextContract.mint(user1).then((tx) => tx.wait());
//     }
//   }
}

export default deployLCToken;
deployLCToken.tags = ["LCToken"];
