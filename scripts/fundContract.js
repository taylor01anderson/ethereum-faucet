const { ethers } = require('hardhat');
const { formatEther, parseEther } = require('ethers');

async function main() {
  const [user] = await ethers.getSigners();
  console.log('Running tests with the account:', user.address);

  // Fund the contract by sending Ether directly
  const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'; // Replace with actual deployed contract address
  const tx = await user.sendTransaction({
    to: contractAddress,
    value: parseEther('1.0'), // Sends 1 Ether
  });
  await tx.wait();
  console.log('Contract funded!');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
