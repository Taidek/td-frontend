import type { ClusterNames } from "@/types";

export const CLUSTERS: ClusterNames[] = [
  "mainnet",
  "devnet",
  "testnet",
  "localnet",
];

export const DEFAULT_NETWORK: ClusterNames = (() => {
  const clusterEnv = process.env.NEXT_PUBLIC_DEFAULT_NETWORK;

  return CLUSTERS.find((pred) => pred === clusterEnv) || "devnet";
})();

export const RPC_URL: string =
  process.env.NEXT_PUBLIC_RPC_URL || "https://api.devnet.solana.com";

export const WS_URL: string =
  process.env.NEXT_PUBLIC_WS_URL || RPC_URL.replace(/^http/, "ws");

export const PRIVY_APP_ID: string = process.env.NEXT_PUBLIC_PRIVY_APP_ID || "";

export const PRIVY_CLIENT_ID: string | undefined =
  process.env.NEXT_PUBLIC_PRIVY_CLIENT_ID;
