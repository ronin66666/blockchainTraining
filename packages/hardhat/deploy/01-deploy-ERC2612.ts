import { deployments, getNamedAccounts } from "hardhat";


async function deployToken() {
    
    const {deployer} = await getNamedAccounts();
    
    const deploy = deployments.deploy;
    const deployment = await deploy("ERC2612", {
        from: deployer,
        log: true,
        args:["permit", "permit"]
    })

    console.log("address = ", deployment.address);
}

export default deployToken;
deployToken.tags = ["ERC2612"];