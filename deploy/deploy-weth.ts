
import { deployments, ethers, getNamedAccounts } from "hardhat";
import { WETH9 } from "../typechain";

export default async function deployWeth() {

    
    const { deployer } = await getNamedAccounts();

    const deploy = deployments.deploy;


    const deployResult = await deploy("WETH9", {
        from: deployer,
    });

    console.log("WETH address = ", deployResult.address);

    const wethContract = await ethers.getContract<WETH9>("WETH9", deployer);
    const mintResult = await wethContract.mint(ethers.utils.parseEther("1000000")).then(tx => tx.wait());
    console.log("mint result = ", mintResult);
    
    const balance = await wethContract.balanceOf(deployer);
    console.log("balance = ", ethers.utils.formatEther(balance));
    
}

deployWeth.tags = ["Weth"]

