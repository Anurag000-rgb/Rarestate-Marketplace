require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString()
const id = "c7a77cb6a01ee65090f5609a";

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    testnet:{
      url: `https://speedy-nodes-nyc.moralis.io/${id}/avalanche/testnet`,
      accounts: [privateKey]
    },
  },
  solidity: "0.8.4"
};

