
import { ethers } from "ethers";
import { deployments, getNamedAccounts } from "hardhat";

export default async function deployToken() {

    
    const { deployer } = await getNamedAccounts();

    const deploy = deployments.deploy;

    const aAmount = ethers.utils.parseUnits("200000", 18);

    const ATokenDeployResult = await deploy("Token", {
        from: deployer,
        args: ["A Token", "AToken", aAmount]
    });

    console.log("AToken address = ", ATokenDeployResult.address);
    
    const BTokenDeployResult = await deploy("Token", {
        from: deployer,
        args: ["BToken", "BToken", aAmount]
    });

    console.log("BToken address = ", BTokenDeployResult.address);
    
}

deployToken.tags = ["Token"]

