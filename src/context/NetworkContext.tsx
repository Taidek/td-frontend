"use client";

import { createContext, type ReactNode, useMemo } from "react";
import { createSolanaClient } from "@/lib/solana";
import type { ClusterNames, NetworkContextType } from "@/types";
import { DEFAULT_NETWORK, RPC_URL, WS_URL } from "@/utils/constants";
import { getExplorerUrl } from "@/utils/getExplorerUrl";

export const NetworkContext = createContext<NetworkContextType>({
  selectedCluster: DEFAULT_NETWORK as ClusterNames,
  client: createSolanaClient(RPC_URL, WS_URL),
  explorerUrl: (path: string) =>
    getExplorerUrl(path, DEFAULT_NETWORK as ClusterNames),
});

export function NetworkProvider({ children }: { children: ReactNode }) {
  const client = useMemo(() => createSolanaClient(RPC_URL, WS_URL), []);

  const explorerUrl = useMemo(
    () => (path: string) =>
      getExplorerUrl(path, DEFAULT_NETWORK as ClusterNames),
    [],
  );

  const value = useMemo(
    () => ({
      selectedCluster: DEFAULT_NETWORK as ClusterNames,
      client,
      explorerUrl,
    }),
    [client, explorerUrl],
  );

  return (
    <NetworkContext.Provider value={value}>{children}</NetworkContext.Provider>
  );
}
