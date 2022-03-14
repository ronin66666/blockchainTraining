import { ethers, getNamedAccounts } from "hardhat";
import { LCTokenERC721 } from "../typechain";

async function transferToken() {
    const { deployer } = await getNamedAccounts();
    const contract = await ethers.getContract<LCTokenERC721>("LCTokenERC721", deployer);
    
    //获取我的tokenId总数
    const balance = await contract.balanceOf(deployer);
    const amount = balance.toNumber();
    console.log(`owner = ${deployer} balance = ${amount}`);
    
    if(balance.lte(0)) {
        console.log("还没有获得token");
        return
    }
    const tokenId = await contract.tokenOfOwnerByIndex(deployer, amount - 1);
    console.log("tokenid  = ", tokenId.toString());

transferToken().catch((error) => { 
    console.log(error);
    process.exit(0);
});

export default transferToken;
