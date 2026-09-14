"use client";

import { useNetwork } from "@/hooks/useNetwork";
import type { SolanaClient } from "@/types";

export function useSolanaRpc(): SolanaClient["rpc"] {
  const { client } = useNetwork();
  return client.rpc;
}
