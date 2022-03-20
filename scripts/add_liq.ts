import { ethers, getNamedAccounts } from "hardhat";
import { IUniswapV2Router02, MyTokenMarket, Token, UniswapV2Factory, WETH9 } from "../typechain";

export async function addLiq() {

    const { deployer, user1 } = await getNamedAccounts();

    // market
    const tokenMarket = await ethers.getContract<MyTokenMarket>("MyTokenMarket", deployer);
    console.log("market address = ", tokenMarket.address);

    //token
    const tokenContract = await ethers.getContract<Token>("Token", deployer);
    //授权
    tokenContract.approve(tokenMarket.address, ethers.constants.MaxUint256)

    //weth
    const weth = await ethers.getContract<WETH9>("WETH9", deployer);
    console.log("weth address = ", weth.address);

    const transResult = await weth.transfer(tokenMarket.address, ethers.utils.parseEther("100000")).then(tx => tx.wait());
    console.log("transResult = ", transResult);
    

    let balance = await weth.balanceOf(deployer);
    console.log("weth balance = ",ethers.utils.formatEther(balance));

    //router02
    const router = await ethers.getContract<IUniswapV2Router02>("UniswapV2Router02", deployer);
    console.log("router address = ", router.address);


    //添加流动性
    const receipt = await tokenMarket.addLiquidity(
        tokenContract.address,
        ethers.utils.parseEther("1000"),
        { value: ethers.utils.parseEther("100") })
        .then(tx => tx.wait);

    console.log("add lq result = ", receipt);

    //factory
    const factory = await ethers.getContract<UniswapV2Factory>("UniswapV2Factory", deployer);
    let pair = await factory.getPair(tokenContract.address, weth.address);
    console.log("pair address = ", pair);


}

addLiq().catch((error) => {
    console.log(error);
    process.exit(1);

});