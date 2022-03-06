import { ethers, network, getChainId, artifacts} from "hardhat";

async function deployScore({getNamedAccounts, deployments}) {

    // const chainId = await getChainId();

    console.log(`deploy net = ${network.name} chianId = ${network.config.chainId}`);
    artifacts.readArtifact();

    const { deploy } = deployments;
    const { deployer, user1 } = await getNamedAccounts();
    console.log("deployer =  ", deployer);

    const scoreDeployment = await deploy("Score", {
        from: deployer,
        // args: ""
        log: true
    })

    console.log("deploy score address =  ", scoreDeployment.address);

    // const scoreContract = ethers.getContractAt("Score", scoreDeployment.address, deployer);


}
deployScore().catch((error) => {
    console.log(error);
    process.exit(0);
});