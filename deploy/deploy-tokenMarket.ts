
import { deployments, getNamedAccounts } from "hardhat";


const uniswapRouter02 = "0x8536bdC5c89Cf73261199CB5C1676fc8e73520Ac";

export default async function deployWeth() {

    
    const { deployer } = await getNamedAccounts();

    const deploy = deployments.deploy;


    const deployResult = await deploy("MyTokenMarket", {
        from: deployer,
        args: [uniswapRouter02]
    });

    console.log("Token Market address = ", deployResult.address);
    
}

deployWeth.tags = ["Market"]



