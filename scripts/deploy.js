const { ethers } = require('hardhat');
const { parseEther } = require('ethers'); // <-- Add this line

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log('Deploying contracts with the account:', deployer.address);

  const Faucet = await ethers.getContractFactory('Faucet');
  const faucet = await Faucet.deploy();
  await faucet.waitForDeployment();
  console.log('Faucet contract deployed to:', faucet.target);

  // Fund the faucet with Ether
  const tx = await deployer.sendTransaction({
    to: faucet.target,
    value: parseEther('1.0'),
  });
  await tx.wait();
  console.log('Faucet funded with 1 Ether');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
