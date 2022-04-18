import { deployments, getNamedAccounts } from "hardhat";


export default async function deployLogic() {
    
    const {deployer} = await getNamedAccounts();
    
    const deploy = deployments.deploy;
    
    const deployment = await deploy("Logic", {
        from: deployer,
        log: true,
    })
    console.log("address = ", deployment.address);
}

deployLogic.tags = ["logic"];