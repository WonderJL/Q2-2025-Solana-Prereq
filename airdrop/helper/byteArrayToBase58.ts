import bs58 from "bs58";
import promptSync from "prompt-sync";

// Initialize prompt-sync
const prompt = promptSync({ sigint: true });

// Function to convert byte array to Base58 (like `wallet_to_base58`)
function byteArrayToBase58() {
  console.log("Enter your byte array (comma-separated numbers):");
  const input = prompt("> ");
  try {
    const numbers = input.split(",").map((num) => parseInt(num.trim(), 10));
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

console.log("\n=== Byte Array to Base58 ===");
byteArrayToBase58();
