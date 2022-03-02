require("dotenv").config();

require("@nomiclabs/hardhat-waffle");
require("solidity-coverage");

require("hardhat-deploy");
require("hardhat-gas-reporter");

require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");


const fs = require("fs");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// 使用私钥
const accounts = fs.readFileSync(".secret").toString().trim().split(",");

// 读取助记词
function mnemonic() {
  try {
    return fs.readFileSync("./mnemonic.txt").toString().trim();
  } catch (e) {
    if (defaultNetwork !== "localhost") {
      console.log(
        "☢️ WARNING: No mnemonic file created for a deploy account."
      );
    }
  }
  return "";
}

const defaultNetwork = "bactest";
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: defaultNetwork,
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    bactest: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      chainId: 97,
      accounts: accounts
      //使用助记词
      // accounts: { 
      //   mnemonic: mnemonic()
      // }
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.4",
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
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
