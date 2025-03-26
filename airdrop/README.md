# Solana Airdrop Directory Guide

This repository contains TypeScript utilities created by following the "Prerequisites: Enrollment dApp" guide for the Turbin3 Q2 2025 cohort. The scripts are designed to interact with the Solana blockchain on Devnet, focusing on wallet management, token airdrops, SOL transfers, and enrollment in the Turbin3 prerequisite program. Below is a breakdown of the scripts and their functionality, as implemented per the guide.

## Core Scripts

### 1. Keygen (`keygen.ts`)

- **Purpose**: Generates a new Solana keypair (wallet).
- **Output**: Displays the public key and saves the private key as a byte array in a wallet file.
- **Usage**:

  ```bash
  yarn keygen
  ```

### 2. Airdrop (`airdrop.ts`)

- **Purpose**: Requests 2 SOL tokens from the Solana Devnet faucet and sends them to your wallet.
- **Usage**:

  ```bash
  yarn airdrop
  ```

### 3. Transfer (`transfer.ts`)

- **Purpose**: Transfers 0.01 SOL to a specified wallet address, handling transaction signing and confirmation.
- **Usage**:

  ```bash
  yarn transfer
  ```

### 4. Enroll (`enroll.ts`)

- **Purpose**: Enrolls your GitHub username in the Turbine program using a Program Derived Address (PDA).
- **PDA Seed**: `"preQ225"`
- **Usage**:

  ```bash
  yarn enroll
  ```

### 5. Clean Up Wallet (`cleanUpWallet.ts`)

- **Purpose**: Transfers all remaining SOL (minus transaction fees) from the wallet, useful for emptying development wallets.
- **Usage**:

  ```bash
  yarn cleanUpWallet
  ```

## Helper Utilities

### Base58 Conversion Tools

1. **Base58 to Byte Array** (`helper/base58ToByteArray.ts`)
   - **Purpose**: Converts a Base58-encoded private key string to a byte array.
   - **Interactive**: Command-line tool prompting for input.
   - **Usage**:

     ```bash
     yarn base58ToByteArray
     ```

2. **Byte Array to Base58** (`helper/byteArrayToBase58.ts`)
   - **Purpose**: Converts a byte array back to a Base58-encoded private key string.
   - **Interactive**: Command-line tool prompting for input.
   - **Usage**:

     ```bash
     yarn byteArrayToBase58
     ```

## Technical Details

- **Network**: Solana Devnet
- **Program ID**: `Trb3aEx85DW1cEEvoqEaBkMn1tfmNEEEPaKzLSu4YAv`
- **Dependencies**:
  - `@solana/web3.js`: Solana Web3 library for blockchain interactions.
  - `@coral-xyz/anchor`: Framework for Solana program interaction.
  - `bs58`: Library for Base58 encoding/decoding.
  - `typescript` & `ts-node`: For writing and running TypeScript code.

## Getting Started

1. **Install Dependencies**:

   ```bash
   yarn install
   ```

2. **Generate a New Wallet**:

   ```bash
   yarn keygen
   ```

3. **Request Test SOL**:

   ```bash
   yarn airdrop
   ```

4. **Enroll in the Program**:

   ```bash
   yarn enroll
   ```

## Usage Notes

- Ensure you have a Solana wallet configured (e.g., a keypair file like `dev-wallet.json`) before running scripts.
- The scripts assume you're connected to the Solana Devnet. Configure this with:
  
  ```bash
  solana config set --url https://api.devnet.solana.com
  ```
  
- Check `package.json` for additional script configurations or dependencies.

## Example Workflow

1. Generate a wallet with `yarn keygen`.
2. Fund it with `yarn airdrop`.
3. Enroll your GitHub username with `yarn enroll`.
4. (Optional) Transfer SOL or clean up with `yarn transfer` or `yarn cleanUpWallet`.

This directory serves as a toolkit for Solana blockchain development tasks, particularly for prerequisite work like cohort enrollment.

# Enrollment Success Record

Below is the successful output of enrolling a GitHub username in the Turbine program on Solana Devnet using the `enroll.ts` script.

```bash
yarn enroll
yarn run v1.22.22
$ ts-node ./enroll.ts
Success! Check out your TX here:
https://explorer.solana.com/tx/56GhMAXcvce9FhSaRUXqzwwkhpMtagvYgUKwjN1634emP1uobm6PGKgxtpzD5w6nxkmtWUKowT5dhuw5L78BiEk8?cluster=devnet