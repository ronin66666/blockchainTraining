import { HardhatRuntimeEnvironment } from "hardhat/types";
import { ethers, getNamedAccounts, network } from "hardhat";
import { WWTokenERC20 } from "../typechain";


const contractName = "WWTokenERC20";

async function deployWWToken(hre: HardhatRuntimeEnvironment) {
    const { deployer } = await getNamedAccounts();
    console.log(`deployer address = ${deployer}, network = ${network.name} chainId = ${network.config.chainId}`);

    const deploy = hre.deployments.deploy;

    const deployResult = await deploy(contractName, {
        from: deployer,
    });

    console.log("deoloy token address = ", deployResult.address);
    
    const tokenContract = await ethers.getContract<WWTokenERC20>(contractName);
    let totalSupply = await tokenContract.totalSupply();
    console.log("初始发行量 = ", ethers.utils.formatEther(totalSupply));
    
    //增加发行量
    await tokenContract.mint(deployer, ethers.utils.parseEther("50000000")).then(tx => tx.wait());
    
    totalSupply = await tokenContract.totalSupply();

    console.log(`增加发行量后总量 = ${ethers.utils.formatEther(totalSupply)}`);
    
}

export default deployWWToken;

deployWWToken.tags = ["WWToken"];