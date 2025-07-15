// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@fhenixprotocol/contracts/FHE.sol";
import "@fhenixprotocol/contracts/FHEHelpers.sol";

contract EncryptedVoting {
    // encrypted total votes (euint32)
    euint32 private encryptedTotal;

    constructor() {
        encryptedTotal = FHE.asEuint32(0);
    }

    /// @notice cast an encrypted vote (1 = yes, 0 = no, or any u32)
    /// @param encryptedVote bytes produced off‑chain via fhevmjs.encrypt32()
    function vote(bytes calldata encryptedVote) external {
        euint32 newVote = FHE.asEuint32(encryptedVote);
        encryptedTotal = FHE.add(encryptedTotal, newVote);
    }

    /// @notice get encrypted tally for off‑chain decryption
    function getEncryptedTotal() external view returns (bytes memory) {
        return FHE.toBytes(encryptedTotal);
    }
}
