import { Wallet, providers, Contract } from "ethers";
import { createInstance } from "@fhenixprotocol/fhevmjs";
import * as fs from "fs";
import * as dotenv from "dotenv";
import abi from "./EncryptedVotingABI.json" assert { type: "json" };

dotenv.config();

// ======= CONFIG ======= //
const RPC_URL = process.env.RPC_URL || "https://api.fhenix.zone:7747";
const CONTRACT_ADDR = process.env.CONTRACT_ADDR; // deployed contract
const PRIVATE_KEY = process.env.PRIVATE_KEY;     // dev wallet
// ======================= //

async function main() {
  const provider = new providers.JsonRpcProvider(RPC_URL);
  const wallet = new Wallet(PRIVATE_KEY, provider);

  // fetch chainId & on‑chain FHE public key
  const { chainId } = await provider.getNetwork();
  const publicKey = await provider.send("fhe_getPublicKey", []);

  // instance of fhevmjs
  const fhevm = await createInstance({ chainId, publicKey });

  // encrypt vote value = 1
  const encryptedVote = await fhevm.encrypt32(1);

  const voting = new Contract(CONTRACT_ADDR, abi, wallet);
  const tx = await voting.vote(encryptedVote, { gasLimit: 300_000 });
  console.log("Tx sent:", tx.hash);
  await tx.wait();
  console.log("Encrypted vote submitted ✔️");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
