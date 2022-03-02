import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/dist/types";
import { artifacts, ethers } from "hardhat";
import { Greeter } from "../typechain";


const greeterDeploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {

    const { deployments, getNamedAccounts } = hre;
    const { deploy, getArtifact, get } = deployments;
    const { deployer, testAccount } = await getNamedAccounts();
    
    // const artifact = await artifacts.readArtifact("Greeter");
    const artifact = await getArtifact("Greeter");


    console.log(`deployer = ${deployer} testAccount = ${testAccount}`);
    
    const greeter = await deploy("Greeter", {
        from: deployer,
        args: ["new greeter"],
        log: true
    })
    
    console.log("greeter address = ", greeter.address);
    
     
    const [owner, test] = await ethers.getSigners();
    const contract = await ethers.getContractAt("Greeter", greeter.address, owner);
    const result = await contract.greet();
    console.log("result = ", result);
    
}

export default greeterDeploy;
greeterDeploy.tags = ["Greeter"]

