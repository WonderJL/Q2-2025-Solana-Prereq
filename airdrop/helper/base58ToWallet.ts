import bs58 from "bs58";
import promptSync from "prompt-sync";

// Initialize prompt-sync
const prompt = promptSync({ sigint: true });

// Function to convert Base58 to byte array (like `base58_to_wallet`)
function base58ToWallet() {
  console.log("Enter your Base58 Wallet Address:");
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

console.log("=== Base58 to Wallet ===");
base58ToWallet();
