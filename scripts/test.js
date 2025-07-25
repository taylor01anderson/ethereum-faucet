const { ethers } = require('hardhat');
const { formatEther, parseEther } = require('ethers');

async function main() {
  const [user] = await ethers.getSigners();
  console.log('Running tests with the account:', user.address);
  const Faucet = await ethers.getContractFactory('Faucet');

  //Assume contract is already deployed
  const address = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'; // Replace with actual deployed contract address
  const faucet = Faucet.attach(address);

  // Check the balance of the faucet before contract interaction
  const balanceBefore = await ethers.provider.getBalance(faucet.target);
  console.log('Balance before interaction:', formatEther(balanceBefore));

  // Call the faucet's withdraw function
  const tx = await faucet.connect(user).withdraw(parseEther('0.1')); // Withdraw 0.1 ether
  await tx.wait();

  // Check the balance of the faucet after contract interaction
  const balanceAfter = await ethers.provider.getBalance(user.address);
  console.log('Balance after interaction:', formatEther(balanceAfter));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
