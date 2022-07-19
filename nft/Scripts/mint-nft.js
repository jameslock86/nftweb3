// require('dotenv').config();
// const API_URL = process.env.API_URL;
// const PUBLIC_KEY = process.env.PUBLIC_KEY;
// const PRIVATE_KEY = process.env.PRIVATE_KEY;

// const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
// const web3 = createAlchemyWeb3(API_URL);



// //step 2: Define our contract ABI (Application Binary Interface) & adresses

// const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");
// const contractAddress = "0x42bc3f3cdbb751c1f1bca7c11c13c0d201591c50";
// const nftContract = new web3.eth.Contract(contract.abi, contractAddress);


// //step 3: Define the minting function
// async function mintNFT(tokenURI) {
//     const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest'); //get latest nonce
  
//     //the transaction
//     const tx = {
//       'from': PUBLIC_KEY,
//       'to': contractAddress,
//       'nonce': nonce,
//       'gas': 500000,
//       'maxPriorityFeePerGas': 1999999987,
//       'data': nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI()
//     };


//     //step 4: Sign the transaction
//   const signedTx = await web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
//   const transactionReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  
//   console.log(`Transaction receipt: ${JSON.stringify(transactionReceipt)}`);
// }


//     //step 5: Call the mintNFT function
// mintNFT("https://gateway.pinata.cloud/ipfs/QmR7HfsPyPmk64xjTTdhDxbjmBFL9MfeGR2ajGtwohmuvw");






// const path = require('path')
// require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

//step 1: You define your variables from .env file
require('dotenv').config();
const API_URL = process.env.API_URL;
console.log("stuff here : ",API_URL);
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);

//step 2: Define our contract ABI (Application Binary Interface) & adresses
const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");
const contractAddress = "0x42bc3f3cdbb751c1f1bca7c11c13c0d201591c50";
const nftContract = new web3.eth.Contract(contract.abi, contractAddress);

//step 3: Define the minting function
async function mintNFT(tokenURI) {
  const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest'); //get latest nonce

  //the transaction
  const tx = {
    'from': PUBLIC_KEY,
    'to': contractAddress,
    'nonce': nonce,
    'gas': 500000,
    'maxPriorityFeePerGas': 1999999987,
    'data': nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI()
  };

  //step 4: Sign the transaction
  const signedTx = await web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
  const transactionReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  
  console.log(`Transaction receipt: ${JSON.stringify(transactionReceipt)}`);
}

//step 5: Call the mintNFT function
mintNFT("https://gateway.pinata.cloud/ipfs/QmR7HfsPyPmk64xjTTdhDxbjmBFL9MfeGR2ajGtwohmuvw");
// const metadatalinks = ["https://gateway.pinata.cloud/ipfs/QmR7HfsPyPmk64xjTTdhDxbjmBFL9MfeGR2ajGtwohmuvw" , "https://gateway.pinata.cloud/ipfs/QmR7HfsPyPmk64xjTTdhDxbjmBFL9MfeGR2ajGtwohmuvw/all-traits.json"]
// for (const s of metadatalinks) {
//   mintNFT(s)
// };