import { Connection, Keypair, PublicKey, SystemProgram } from "@solana/web3.js";
import { Program, Wallet, AnchorProvider } from "@coral-xyz/anchor";
import wallet from "./Turbin3-wallet.json";
import { IDL, Turbin3Prereq } from "./programs/Turbin3_prereq";

// Import keypair from the wallet file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

// Create a devnet connection
const connection = new Connection("https://api.devnet.solana.com");

// GitHub account encoded as a buffer
const github = Buffer.from("WonderJL", "utf8");

// Create Anchor provider
const provider = new AnchorProvider(connection, new Wallet(keypair), {
  commitment: "confirmed",
});

// Create the program instance
const program: Program<Turbin3Prereq> = new Program(IDL, provider);

const enrollmentSeeds = [
  Buffer.from("preQ225"), // This should match the program's expected seed
  keypair.publicKey.toBuffer()
];
const [enrollmentKey, _bump] = PublicKey.findProgramAddressSync(
  enrollmentSeeds,
  program.programId
);

(async () => {
  try {
    const txhash = await program.methods
      .submit(github)
      .accounts({
        signer: keypair.publicKey,
        prereq: enrollmentKey,
        systemAccount: SystemProgram.programId,
      })
      .signers([keypair])
      .rpc();
    console.log(`Success! Check out your TX here:
https://explorer.solana.com/tx/${txhash}?cluster=devnet`);
  } catch (e) {
    console.error(`Oops, something went wrong: ${e}`);
  }
})();
