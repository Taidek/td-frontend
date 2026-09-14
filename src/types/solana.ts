import type { createSolanaClient } from "@/lib/solana";

export type ClusterNames = "mainnet" | "devnet" | "testnet" | "localnet";

export type SolanaClient = ReturnType<typeof createSolanaClient>;

export type RpcType = Pick<SolanaClient, "rpc">;

export interface NetworkContextType {
  selectedCluster: ClusterNames;
  client: SolanaClient;
  explorerUrl: (path: string) => string;
}
