import { deployments, ethers, getNamedAccounts } from "hardhat";
import { WWTokenERC20 } from "../typechain";

//设置VaultRole
async function setVaultRole() {
    const {deployer} = await getNamedAccounts();
    const tokenContract = await ethers.getContract<WWTokenERC20>("WWTokenERC20", deployer);
    const vaultAddress = await deployments.get("Vault").then(deployment => deployment.address);

    console.log("设置vault合约 为 Vault 角色");
    const result = await tokenContract.setValutRole(vaultAddress).then(tx => tx.wait());
    console.log("result = ", result);
}

setVaultRole().catch((error) => {
    console.log(error);
    process.exit(0);
});