
const {ethers, network, artifacts} = require("hardhat");
const { writeAbiAddr } = require('./artifact_saver.js');

async function main() {
 
  const [owner] = await ethers.getSigners();
  console.log("deploy address = ", owner.address);

  const Counter = await ethers.getContractFactory("Counter", owner);
  const counter = await Counter.deploy();

  await counter.deployed();

  console.log("Counter deployed to:", counter.address);

  let Artifact = await artifacts.readArtifact("Counter");
  
  //note: 需要手动创建对应的文件
  await writeAbiAddr(Artifact, counter.address, "Counter", network.name);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
