// scripts/deploy.js
const hre = require("hardhat");

async function main() {
  console.log("🚀 Deploying EncryptedVoting contract...");

  const Voting = await hre.ethers.getContractFactory("EncryptedVoting");
  const voting = await Voting.deploy();
  await voting.deployed();

  console.log(`✅ Contract deployed at: ${voting.address}`);
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exit(1);
});