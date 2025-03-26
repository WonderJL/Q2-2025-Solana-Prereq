# Solana Key Converter

A command-line interface (CLI) tool written in Rust to convert between Base58-encoded private keys (e.g., Phantom wallet format) and Solana wallet byte arrays. This tool is designed for developers working with Solana wallets who need to switch between these formats.

## 📋 Features

- Convert Base58-encoded private keys to byte arrays
- Convert byte arrays to Base58-encoded strings
- Interactive command-line interface
- Robust error handling and input validation
- Cross-platform compatibility

## 🔧 Prerequisites

- [Rust](https://www.rust-lang.org/tools/install) (latest stable version)
- Cargo (included with Rust)

## 🚀 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/WonderJL/Q2-2025-Solana-Prereq.git
   cd Q2-2025-Solana-Prereq/solana-key-converter
   ```

## 💻 Usage

1. You can either build the project or install it globally:

Option 1 - Build the project:

```bash
cargo build --release
 ```

The binary will be available at:

```bash
target/release/solana-key-converter
 ```

Option 2 - Install globally:

```bash
cargo install --path .
 ```

This will install the binary to your cargo bin directory ( ~/.cargo/bin ).

### Base58 to byte-array Conversion

```bash
./target/release/solana-key-converter base58-to-byte-array
```

**Example:**

```plaintext
Enter your Base58 private key: 5MaiiCavjCmn9Hs1o3eznqDEhRwxo7pXiAYez7keQUviUkauRiTMD8DrESdrNjN8zd9mTmVhRvBJeg5vhyvgrAhG
```

### byte-array to Base58 Conversion

```bash
./target/release/solana-key-converter byte-array-to-base58
```

**Example:**

```plaintext
Enter your byte array (comma-separated numbers): 34, 46, 55, 124, 141, 190, 24, 204, 134, 91, 70, 184
```

## 🛠 Development

### Running Tests

```bash
cargo test
```

### Code Formatting

```bash
cargo fmt
```

### Linting

```bash
cargo clippy
```

### Building in Debug Mode

```bash
cargo build
```

## 📁 Project Structure

```
solana-key-converter/
├── src/
│   └── main.rs      # Main application code
├── Cargo.toml       # Project dependencies and metadata
├── Cargo.lock       # Lock file for dependencies
└── README.md        # This file
```

## 📦 Dependencies

- `clap` - Command-line argument parsing
- `bs58` - Base58 encoding/decoding
- `anyhow` - Error handling

## ⚠️ Error Handling

The tool handles various error cases:

- Invalid Base58 strings
- Invalid byte array inputs
- Input/output errors
- Invalid number formats

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## ✨ Authors

- WonderJL

## 🙏 Acknowledgments

- Solana Foundation for their excellent documentation
- The Rust community for their helpful resources

The changes include:

- Added emojis for better section visibility
- Improved code block formatting
- Better organization of examples
- Clearer structure with visual hierarchy
- Consistent styling throughout the document
- Better separation between sections
