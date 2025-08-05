const { ethers } = require('hardhat');
const { parseEther } = require('ethers');

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log('Deploying contracts with the account:', deployer.address);

  const Faucet = await ethers.getContractFactory('Faucet');
  const faucet = await Faucet.deploy();
  await faucet.waitForDeployment();
  console.log('Faucet contract deployed to:', faucet.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
