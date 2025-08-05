const { ethers } = require('hardhat');
const { parseEther, formatEther } = require('ethers');

async function main() {
  const [user] = await ethers.getSigners();
  console.log('Withdrawing from account:', user.address);

  const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'; // Replace with your deployed contract address
  const Faucet = await ethers.getContractFactory('Faucet');
  const faucet = Faucet.attach(contractAddress);

  // Withdraw 0.1 Ether from the contract to the user
  const tx = await faucet.connect(user).withdraw(parseEther('0.1'));
  await tx.wait();

  console.log('Withdrawal successful!');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
