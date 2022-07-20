// require('dotenv').config();
// const ethers = require('ethers');

// // Get Alchemy API Key
// const API_KEY = process.env.API_KEY;

// // Define an Alchemy Provider
// const provider = new ethers.providers.AlchemyProvider('goerli', process.env.API_URL);


// const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");
// console.log(JSON.stringify(contract.abi));

// // Create a signer
// const privateKey = process.env.PRIVATE_KEY
// const signer = new ethers.Wallet(privateKey, provider)

// // Get contract ABI and address
// const abi = contract.abi
// const contractAddress = 'QmeJ36m4hrCy1RpBoAat8UmFqCsXjpnjGUXK1GJ1MiMdFj'

// // Create a contract instance
// const myNftContract = new ethers.Contract(contractAddress, abi, signer)

// // Get the NFT Metadata IPFS URL
// const tokenUri = "https://gateway.pinata.cloud/ipfs/QmeJ36m4hrCy1RpBoAat8UmFqCsXjpnjGUXK1GJ1MiMdFj"

// // Call mintNFT function
// const mintNFT = async () => {
//     let nftTxn = await myNftContract.mintNFT(signer.address, tokenUri)
//     await nftTxn.wait()
//     console.log(`NFT Minted! Check it out at: https://goerli.etherscan.io/tx/${nftTxn.hash}`)
// }

// mintNFT()
//     .then(() => process.exit(0))
//     .catch((error) => {
//         console.error(error);
//         process.exit(1);
//     });






    require('dotenv').config();
const ethers = require('ethers');

// Get Alchemy App URL
const API_KEY = process.env.API_KEY;

// Define an Alchemy Provider
const provider = new ethers.providers.AlchemyProvider('goerli', process.env.API_KEY)

// Get contract ABI file
const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");

// Create a signer
const privateKey = process.env.PRIVATE_KEY
const signer = new ethers.Wallet(privateKey, provider)

// Get contract ABI and address
const abi = contract.abi
const contractAddress = '0xf5f8384eba495870aeffc9390b5bad21225f6fde'

// Create a contract instance
const myNftContract = new ethers.Contract(contractAddress, abi, signer)

// Get the NFT Metadata IPFS URL
const tokenUri = "https://gateway.pinata.cloud/ipfs/QmeJ36m4hrCy1RpBoAat8UmFqCsXjpnjGUXK1GJ1MiMdFj"

// Call mintNFT function
const mintNFT = async () => {
    let nftTxn = await myNftContract.mintNFT(signer.address, tokenUri)
    await nftTxn.wait()
    console.log(`NFT Minted! Check it out at: https://goerli.etherscan.io/tx/${nftTxn.hash}`)
}

mintNFT()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

