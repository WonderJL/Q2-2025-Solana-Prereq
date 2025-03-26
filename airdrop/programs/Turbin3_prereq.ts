import { Idl } from "@coral-xyz/anchor";

export interface Turbin3Prereq extends Idl {
  version: "0.1.0";
  name: "turbine_prereq";
  instructions: {
    name: string;
    discriminator: number[];
    accounts: {
      name: string;
      writable?: boolean;
      signer?: boolean;
      pda?: {
        seeds: {
          kind: string;
          value?: number[];
          path?: string;
        }[];
      };
      address?: string;
    }[];
    args: {
      name: string;
      type: "bytes" | "pubkey" | "string" | "u8" | "u16" | "u32" | "u64" | "u128" | "i8" | "i16" | "i32" | "i64" | "i128" | "bool";
    }[];
  }[];
}

export const IDL: Turbin3Prereq = {
  version: "0.1.0",
  name: "turbine_prereq",
  metadata: {
    name: "turbine_prereq",
    version: "0.1.0",
    spec: "0.1.0",
    description: "Created with Anchor",
  },
  instructions: [
    {
      name: "submit",
      discriminator: [88, 166, 102, 181, 162, 127, 170, 48],
      accounts: [
        {
          name: "signer",
          writable: true,
          signer: true,
        },
        {
          name: "prereq",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [112, 114, 101, 81, 50, 50, 53], // "preQ225"
              },
              {
                kind: "account",
                path: "signer",
              },
            ],
          },
        },
        {
          name: "system_program",
          address: "11111111111111111111111111111111",
        },
      ],
      args: [
        {
          name: "github_username",
          type: "bytes",
        },
      ],
    },
  ],
  address: "Trb3aEx85DW1cEEvoqEaBkMn1tfmNEEEPaKzLSu4YAv",
};
