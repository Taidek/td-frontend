"use client";

import { useNetwork } from "@/hooks/useNetwork";
import type { SolanaClient } from "@/types";

export function useSolanaClient(): SolanaClient {
  const { client } = useNetwork();
  return client;
}
