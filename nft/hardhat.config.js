
 /**
// * @type import('hardhat/config').HardhatUserConfig
 */
// require('dotenv').config();
// require("@nomiclabs/hardhat-ethers");
// const { API_URL, PRIVATE_KEY } = process.env;
// module.exports = {
//    solidity: "0.7.3",
//    defaultNetwork: "goerli",
//    networks: {
//       hardhat: {},
//       goerli: {
//          url: API_URL,
//          accounts: [`0x${PRIVATE_KEY}`]
//       }
//    },
// }


const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
require("@nomiclabs/hardhat-ethers");

// let API_URL = 
// let PRIVATE_KEY = 
// API_URL = "https://eth-goerli.g.alchemy.com/v2/Y1R7strM3zRedtqt3N9aCH1KUA8DdIJf"         
// PRIVATE_KEY = "effe3d7d0af0f5555868264c8490bb2a71fa7cf36ec50b959f3ec39bc22dcfc2"
const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.1",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};