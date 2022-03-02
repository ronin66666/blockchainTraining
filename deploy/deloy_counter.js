
const { ethers, network } = require("hardhat");

module.exports = async ({ getNamedAccounts, deployments, getChainId }) => {

    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();
    const chaind = await getChainId();
    console.log("deployments = " + deployments);

    console.log("deployer address = " + deployer);
    console.log("deployer network = " + network + " chaind = " + chaind);

    await deploy("Counter", {
        from: deployer,
        // args: []
        log: true
    });
    const CounterContract = await ethers.getContract("Counter", deployer);
    const result = await CounterContract.getCount();

    console.log("result = " + result);
}

module.exports.tags = ["Counter"]