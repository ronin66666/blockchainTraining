
import { deployments, getNamedAccounts } from "hardhat";

export default async function deployFactory() {
    const { deployer } = await getNamedAccounts();
    const deploy = deployments.deploy;
    
    const deployResult = await deploy("UniswapV2Factory",{
        from: deployer,
        args: [deployer]
    })
    console.log("deploy factory address = ", deployResult.address);
    
}

deployFactory.tags = ["factory"];