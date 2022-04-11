// herobox 盲盒合约部署脚本

import { ethers, network } from "hardhat";
import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const contractName = "RandomGenerator";

const deployRandom: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployer } = await hre.getNamedAccounts();

    console.log(`deployer = ${deployer} \n  network = ${network.name} chainId = ${network.config.chainId}`);

    const deploy = hre.deployments.deploy;
    const deployResult = await deploy(contractName, {
        from: deployer,
        log: true,
        
        args: ["0xa555fC018435bef5A13C6c6870a9d4C11DEC329C", 
        "0x84b9B910527Ad5C03A9Ca831909E21e236EA7b06", 
        "0xcaf3c3727e033261d383b315559476f48034c13b18f8cafed4d871abe5049186",
        ethers.utils.parseEther("0.1")]
    });
    console.log("deploy " + contractName + " address = ", deployResult.address);
}

export default deployRandom;

deployRandom.tags = [
    "RandomGenerator"
];
