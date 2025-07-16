import "@fhenixprotocol/hardhat-plugin";

export default {
  solidity: "0.8.20",
  networks: {
    fhenix: {
      url: "https://api.fhenix.zone:7747",
      chainId: 42069,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
