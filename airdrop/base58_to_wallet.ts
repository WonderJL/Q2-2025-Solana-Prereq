import bs58 from "bs58";
import promptSync from "prompt-sync";

// Initialize prompt-sync
const prompt = promptSync({ sigint: true });

// Function to convert Base58 to byte array (like `base58_to_wallet`)
function base58ToWallet() {
  console.log("Enter your Base58 private key:");
  const base58 = prompt("> "); // Example: gdtKSTXYULQNx87fdD3YgXkzVeyFeqwtxHm6WdEb5a9YJRnHse7GQr7t5pbepsyvUCk7VvksUGhPt4SZ8JHVSkt
  try {
    const wallet = bs58.decode(base58);
    console.log("Byte array:", Array.from(wallet)); // Convert Uint8Array to regular array for readability
  } catch (error) {
    if (error instanceof Error) {
      console.error("Invalid Base58 string:", error.message);
    } else {
      console.error("Invalid Base58 string: An unknown error occurred");
    }
  }
}

// Function to convert byte array to Base58 (like `wallet_to_base58`)
function walletToBase58() {
  console.log("Enter your byte array (comma-separated numbers):");
  const input = prompt("> ");
  try {
    const numbers = input.split(',').map(num => parseInt(num.trim(), 10));
    if (numbers.some(isNaN)) {
      throw new Error("Invalid input: all values must be numbers");
    }
    const wallet = new Uint8Array(numbers);
    const base58 = bs58.encode(wallet);
    console.log("Base58 string:", base58);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Invalid byte array:", error.message);
    } else {
      console.error("Invalid byte array: An unknown error occurred");
    }
  }
}

// Add execution of both functions if not already present
console.log("=== Base58 to Wallet ===");
base58ToWallet();
console.log("\n=== Wallet to Base58 ===");
walletToBase58();
