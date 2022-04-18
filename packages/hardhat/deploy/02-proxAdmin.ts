
import { deployments, getNamedAccounts } from "hardhat";


export default async function deployProxyAdmin() {
    
    const {deployer} = await getNamedAccounts();
    
    const deploy = deployments.deploy;
    const deployment = await deploy("ProxyAdmin", {
        from: deployer,
        log: true,
    })
    console.log("address = ", deployment.address);
}

deployProxyAdmin.tags = ["proxAdmin"];