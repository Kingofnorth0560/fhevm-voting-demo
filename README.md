# Encrypted DAO Voting Demo (FHEVM)

A minimal example of **fully‑encrypted on‑chain voting** using Zama's FHEVM.

## What it does
* Accepts **encrypted votes**.
* Adds them on‑chain **without decryption**.
* Anyone with the private key can decrypt the final tally off‑chain.

## Stack
* Solidity `EncryptedVoting` contract (see `contracts/EncryptedVoting.sol`)
* Hardhat for builds & tests
* `@fhenixprotocol/fhevmjs` to encrypt votes client‑side
* Fhenix testnet RPC (`api.fhenix.zone`)

## Quick start

```bash
git clone YOUR_REPO_URL
cd fhevm-voting-demo
npm install
cp .env.sample .env            # fill PRIVATE_KEY & CONTRACT_ADDR
npx hardhat compile            # needs Fhenix fork of solc

# deploy contract (example)
npx hardhat run scripts/deploy.js --network fhenix

# cast an encrypted vote
node castVote.js
```

Read the full FHEVM docs → <https://docs.zama.ai>
