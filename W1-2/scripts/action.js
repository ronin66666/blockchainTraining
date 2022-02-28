
const {ethers, network} = require("hardhat");

const Counter = require(`../deployments/${network.name}/Counter.json`)

async function main() {
  let [owner]  = await ethers.getSigners();

  console.log("counter address = ", Counter.address);

  let counterContract = await ethers.getContractAt("Counter",
    Counter.address,
    owner);

  const tx = await counterContract.add(10);
  await tx.wait();
    
  const newValue = await counterContract.getCount();

  console.log("newValue: " + newValue)

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 0;
  });
  