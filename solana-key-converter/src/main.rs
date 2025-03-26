use clap::{Parser, Subcommand};
use bs58;
use anyhow::Result;
use std::io::{self, Write};

#[derive(Parser)]
#[command(name = "solana-key-converter")]
#[command(about = "A CLI tool to convert between Base58 and Solana wallet byte arrays", long_about = None)]
struct Cli {
    #[command(subcommand)]
    command: Commands,
}

#[derive(Subcommand)]
enum Commands {
    /// Convert a Base58 string to a wallet byte array
    Base58ToWallet,
    /// Convert a wallet byte array to a Base58 string
    WalletToBase58,
}

fn main() -> Result<()> {
    let cli = Cli::parse();

    match cli.command {
        Commands::Base58ToWallet => {
            print!("Enter your Base58 private key: ");
            io::stdout().flush()?;
            let mut base58 = String::new();
            io::stdin().read_line(&mut base58)?;
            let base58 = base58.trim();

            match bs58::decode(base58).into_vec() {
                Ok(wallet) => println!("Byte array: {:?}", wallet),
                Err(e) => eprintln!("Invalid Base58 string: {}", e),
            }
        }
        Commands::WalletToBase58 => {
            print!("Enter your byte array (comma-separated numbers): ");
            io::stdout().flush()?;
            let mut input = String::new();
            io::stdin().read_line(&mut input)?;
            let input = input.trim();

            let numbers: Result<Vec<u8>, _> = input
                .split(',')
                .map(|num| {
                    num.trim()
                        .parse::<u8>()
                        .map_err(|e| anyhow::anyhow!("Invalid input: {}", e))
                })
                .collect();

            match numbers {
                Ok(wallet) => {
                    let base58 = bs58::encode(&wallet).into_string();
                    println!("Base58 string: {}", base58);
                }
                Err(e) => eprintln!("Invalid byte array: {}", e),
            }
        }
    }

    Ok(())
}