# FHE Voting Demo (Zama FHEVM)

This repository contains a **minimal but fully‑functional** encrypted DAO voting demo built for the Zama *Knowledge Sharer* challenge.

## What it demonstrates
- **Encrypted inputs:** voters submit ciphertexts generated with `fhevmjs`.
- **On‑chain homomorphic addition:** the contract aggregates votes with `FHE.add` — never decrypting.
- **Encrypted output:** anyone entitled to the decryption key can reveal the tally off‑chain.

## Folder structure
```
contracts/EncryptedVoting.sol   # smart‑contract
castVote.js                     # JS script to encrypt & send votes
EncryptedVotingABI.json         # ABI (generated after compile)
hardhat.config.js               # hardhat + FHEVM network config
.env.sample                     # put secrets here
```

## Quick start

```bash
git clone https://github.com/Kingofnorth0560/fhevm-voting-demo.git
cd fhevm-voting-demo
npm install
cp .env.sample .env   # fill PRIVATE_KEY & CONTRACT_ADDR
npx hardhat compile   # requires @fhenixprotocol/hardhat-plugin
# deploy (example)
npx hardhat run scripts/deploy.js --network fhenix
node castVote.js      # cast encrypted vote
```

## Docs & Links
* Zama docs – <https://docs.zama.ai>
* Fhenix testnet RPC – `https://api.fhenix.zone:7747`
