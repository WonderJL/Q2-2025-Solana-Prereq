import {
  Transaction,
  SystemProgram,
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  sendAndConfirmTransaction,
  PublicKey,
} from "@solana/web3.js";

// Import our wallet and recreate the Keypair object using its private key
import wallet from "./dev-wallet.json";

// Import our dev wallet keypair from the wallet file
const from = Keypair.fromSecretKey(new Uint8Array(wallet));

// Define our Turbin3 public key
const to = new PublicKey("GLtaTaYiTQrgz411iPJD79rsoee59HhEy18rtRdrhEUJ");

// Create a Solana devnet connection
const connection = new Connection("https://api.devnet.solana.com");

(async () => {
  try {
    // Get the balance of the source wallet
    const balance = await connection.getBalance(from.publicKey);

    // Create a test transaction to calculate fees
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: from.publicKey,
        toPubkey: to,
        lamports: balance,
      })
    );

    // Set the recent blockhash for the transaction
    transaction.recentBlockhash = (
      await connection.getLatestBlockhash("confirmed")
    ).blockhash;
    transaction.feePayer = from.publicKey;

    // Calculate the exact transaction fee
    const fee =
      (
        await connection.getFeeForMessage(
          transaction.compileMessage(),
          "confirmed"
        )
      ).value || 0;

    // Remove the initial transfer instruction
    transaction.instructions.pop();

    // Add the corrected transfer instruction with fees deducted
    transaction.add(
      SystemProgram.transfer({
        fromPubkey: from.publicKey,
        toPubkey: to,
        lamports: balance - fee,
      })
    );

    // Sign, broadcast, and confirm the transaction
    const signature = await sendAndConfirmTransaction(connection, transaction, [
      from,
    ]);

    console.log(
      `Success! Check out your TX here: ` +
        `https://explorer.solana.com/tx/${signature}?cluster=devnet`
    );
  } catch (e) {
    console.error(`Oops, something went wrong: ${e}`);
  }
})();
