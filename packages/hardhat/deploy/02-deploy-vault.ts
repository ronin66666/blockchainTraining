import { HardhatRuntimeEnvironment } from "hardhat/types";
import { getNamedAccounts, network } from "hardhat";

const contractName = "Vault";

async function deployVault(hre: HardhatRuntimeEnvironment) {

    const { deployer } = await getNamedAccounts();
    console.log(`deployer address = ${deployer}, network = ${network.name} chainId = ${network.config.chainId}`);

    const wwTokenAddress = await hre.deployments.get("WWTokenERC20").then(deployment => deployment.address);
    console.log("部署传入 WWTokenAddress = ", wwTokenAddress);
    
    const deploy = hre.deployments.deploy;

    const deployResult = await deploy(contractName, {
        from: deployer,
        args: [wwTokenAddress]
    });

    console.log("deoloy Vault address = ", deployResult.address);
}

export default deployVault;

deployVault.tags = ["Vault"];