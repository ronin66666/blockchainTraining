import { ethers, network, getChainId, artifacts} from "hardhat";

async function deployTeacher({getNamedAccounts, deployments}) {

    console.log(`deploy net = ${network.name} chianId = ${network.config.chainId}`);
    artifacts.readArtifact();

    const { deploy } = deployments;
    const { deployer, user1 } = await getNamedAccounts();
    console.log("deployer =  ", deployer);

    const teacherDeployment = await deploy("Teacher", {
        from: deployer,
        // args: ""
        log: true
    })

    console.log("deploy teacher address =  ", teacherDeployment.address);

}

deployScore().catch((error) => {
    console.log(error);
    process.exit(0);
});