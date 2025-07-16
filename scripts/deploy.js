async function main() {
  const Voting = await ethers.getContractFactory("EncryptedVoting");
  const voting = await Voting.deploy();
  await voting.deployed();
  console.log("Contract deployed at:", voting.address);
}

main().catch(console.error);
