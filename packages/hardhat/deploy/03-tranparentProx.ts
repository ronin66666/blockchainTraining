
import { toUtf8Bytes } from "ethers/lib/utils";
import { deployments, getNamedAccounts } from "hardhat";

export default async function deployTransparentUpgradeableProxy() {
    
    const {deployer} = await getNamedAccounts();
    
    const admin =  (await deployments.get("ProxyAdmin")).address;
    const logic =  (await deployments.get("Logic")).address;

    const deploy = deployments.deploy;
    const deployment = await deploy("TransparentUpgradeableProxy", {
        from: deployer,
        log: true,
        args:[logic, admin, toUtf8Bytes("")]
    })
    console.log("address = ", deployment.address);
}

deployTransparentUpgradeableProxy.tags = ["tranparentProx"];
