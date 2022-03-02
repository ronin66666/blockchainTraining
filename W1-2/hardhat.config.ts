import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "@nomiclabs/hardhat-ethers";
import "hardhat-deploy";

import fs from "fs";

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const defaultNetwork: string = "bsctest"; 

//使用助记词
function mnenoinc(): string {
  try {
    return fs.readFileSync("./mnemonic.txt").toString().trim();
  } catch (error) {
    if (defaultNetwork !== "localhost") {
      console.log(
        "☢️ WARNING: No mnemonic file created for a deploy account."
      );
    }
  }
  return "";
}

//使用私钥的方式
function privateKey(): string[] {
  try {
    return fs.readFileSync(".secret").toString().trim().split(",");
  } catch (error) {
    console.log(
        "☢️ WARNING: No secret file created for a deploy account."
      );
  }
  return [];
}

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  defaultNetwork: defaultNetwork,
  namedAccounts: { //如果使用getNamedAccounts来获取地址，则必须在这里配置
    deployer: 0,
    testAccount: 1
  },
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    bsctest:{
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      chainId:  97,
      accounts: privateKey()
    },
    ropsten: {
      url: process.env.ROPSTEN_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
  paths:{
    sources: 'contracts'
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

export default config;
