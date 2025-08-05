const { ethers } = require('hardhat');
const { formatEther, parseEther } = require('ethers');

async function main() {
  const [user] = await ethers.getSigners();
  console.log('Running tests with the account:', user.address);
  const Faucet = await ethers.getContractFactory('Faucet');

  // Assume contract is already deployed
  const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'; // Replace with actual deployed contract address
  const faucet = Faucet.attach(contractAddress);

  // Check the balance of the contract after the interaction
  const contractBalance = await ethers.provider.getBalance(faucet.target);
  console.log(
    'Contract Balance after interaction:',
    formatEther(contractBalance)
  );

  // Check the balance of the faucet after contract interaction
  const faucetBalance = await ethers.provider.getBalance(user.address);
  console.log('Faucet Balance after interaction:', formatEther(faucetBalance));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
