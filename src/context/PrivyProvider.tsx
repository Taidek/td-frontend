"use client";

import {
  PrivyProvider as BasePrivyProvider,
  type PrivyClientConfig,
} from "@privy-io/react-auth";
import { toSolanaWalletConnectors } from "@privy-io/react-auth/solana";
import { type ReactNode, useEffect, useMemo, useState } from "react";
import { PRIVY_APP_ID, PRIVY_CLIENT_ID } from "@/utils/constants";

const PRIVY_ACCENT_CSS_VAR = "--color-privy-accent";
const PRIVY_ACCENT_FALLBACK = "#676fff";

function getPrivyAccentColor(): `#${string}` {
  if (typeof window === "undefined") {
    return PRIVY_ACCENT_FALLBACK as `#${string}`;
  }
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(PRIVY_ACCENT_CSS_VAR)
    .trim();
  return (value || PRIVY_ACCENT_FALLBACK) as `#${string}`;
}

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
  const [accentColor, setAccentColor] = useState<`#${string}`>(
    PRIVY_ACCENT_FALLBACK as `#${string}`,
  );

  useEffect(() => {
    setAccentColor(getPrivyAccentColor());
  }, []);

  const mergedConfig: PrivyClientConfig = useMemo(
    () => ({
      appearance: {
        theme: "dark",
        accentColor,
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
    [accentColor, config, solanaConnectors],
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
