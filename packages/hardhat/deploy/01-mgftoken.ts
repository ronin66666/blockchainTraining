// herobox 盲盒合约部署脚本

import { network } from "hardhat";
import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const contractName = "MGFToken";

const deployMGFToken: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployer } = await hre.getNamedAccounts();

    console.log(`deployer = ${deployer} \n  network = ${network.name} chainId = ${network.config.chainId}`);

    const deploy = hre.deployments.deploy;
    const deployResult = await deploy(contractName, {
        from: deployer,
        log: true
    });
    console.log("deploy " + contractName + " address = ", deployResult.address);


}

export default deployMGFToken;

deployMGFToken.tags = [
    "MGFToken"
];
