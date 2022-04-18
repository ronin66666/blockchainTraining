
import { toUtf8Bytes } from "ethers/lib/utils";
import { deployments, getNamedAccounts } from "hardhat";


export default async function deployCallLogic() {
    
    const {deployer} = await getNamedAccounts();
    
    const proxy =  (await deployments.get("TransparentUpgradeableProxy")).address;

    const deploy = deployments.deploy;
    const deployment = await deploy("CallLogic", {
        from: deployer,
        log: true,
        args:[proxy]
    })
    console.log("address = ", deployment.address);
}

deployCallLogic.tags = ["callLogic"];
