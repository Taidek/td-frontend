"use client";

import {
  PrivyProvider as BasePrivyProvider,
  type PrivyClientConfig,
} from "@privy-io/react-auth";
import { toSolanaWalletConnectors } from "@privy-io/react-auth/solana";
import { type ReactNode, useMemo } from "react";
import { PRIVY_APP_ID, PRIVY_CLIENT_ID } from "@/utils/constants";

export interface PrivyProviderProps {
  children: ReactNode;
  appId?: string;
  clientId?: string;
  config?: PrivyClientConfig;
}

export function PrivyProvider({
  children,
  appId = PRIVY_APP_ID,
  clientId = PRIVY_CLIENT_ID,
  config,
}: PrivyProviderProps) {
  const solanaConnectors = useMemo(() => toSolanaWalletConnectors(), []);

  const mergedConfig: PrivyClientConfig = useMemo(
    () => ({
      appearance: {
        theme: "dark",
        accentColor: "#676FFF",
        walletChainType: "solana-only",
        walletList: [
          "detected_wallets",
          "phantom",
          "binance",
          "solflare",
          "backpack",
        ],
        ...config?.appearance,
      },
      externalWallets: {
        solana: {
          connectors: solanaConnectors,
        },
        ...config?.externalWallets,
      },
      embeddedWallets: {
        solana: {
          createOnLogin: "users-without-wallets",
        },
        ...config?.embeddedWallets,
      },
      ...config,
    }),
    [config, solanaConnectors],
  );

  return (
    <BasePrivyProvider
      appId={appId || "placeholder-app-id"}
      clientId={clientId}
      config={mergedConfig}
    >
      {children}
    </BasePrivyProvider>
  );
}
