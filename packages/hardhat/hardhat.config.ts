import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";

import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "hardhat-deploy";

import fs from "fs";
dotenv.config();

// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});

const accounts = fs.readFileSync(".secret").toString().trim().split(",");

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
const defaultNetwork = "localhost";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.9",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.6.7",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  defaultNetwork: defaultNetwork,
  networks: {
    localhost: {
      url: "http://localhost:8545",
      accounts: accounts,
    },
    bsctest: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      chainId: 97,
      accounts: ['3cd352e32a47d93af584f7715406faf49bfc1980efd0ae85da3c3451184bf4d7', '716088445008fb54daf6e6d8f27ef07a80d93cef07e7e7850dfa05fec3beac00'],
      //live: false, //指定是否是一个线上的链，localhost and hardhat where the default is false
      //tags: ["bsctest"] //设置网络别名，可通过hre.network.tags获得
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
    user1: {
      default:1
    }
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
