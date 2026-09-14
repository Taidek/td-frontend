"use client";

import { usePrivy } from "@privy-io/react-auth";
import { useWallets } from "@privy-io/react-auth/solana";
import { type Address, address, isAddress } from "@solana/kit";
import { createContext, type ReactNode, useCallback, useMemo } from "react";
import type { UserContextValue } from "@/types";

export const WalletContext = createContext<UserContextValue>({
  userWallet: null,
  solanaWallet: null,
  wallets: [],
  user: null,
  isAuthenticated: false,
  isLoadingUser: true,
  login: () => {},
  logout: async () => {},
  connectWallet: () => {},
  refetchAccounts: async () => {},
});

export function WalletContextProvider({ children }: { children: ReactNode }) {
  const { ready, authenticated, user, login, logout, connectWallet } =
    usePrivy();
  const { wallets, ready: walletsReady } = useWallets();

  const userWallet = useMemo<Address | null>(() => {
    if (wallets && wallets.length > 0) {
      const activeAddress = wallets[0].address;
      if (isAddress(activeAddress)) {
        return address(activeAddress);
      }
    }

    if (user?.wallet?.chainType === "solana" && user.wallet.address) {
      if (isAddress(user.wallet.address)) {
        return address(user.wallet.address);
      }
    }

    if (user?.linkedAccounts) {
      const solanaLinked = user.linkedAccounts.find(
        (acc) =>
          acc.type === "wallet" &&
          "chainType" in acc &&
          acc.chainType === "solana" &&
          "address" in acc &&
          typeof acc.address === "string",
      );

      if (
        solanaLinked &&
        "address" in solanaLinked &&
        typeof solanaLinked.address === "string" &&
        isAddress(solanaLinked.address)
      ) {
        return address(solanaLinked.address);
      }
    }

    return null;
  }, [wallets, user]);

  const solanaWallet = useMemo(() => {
    if (wallets && wallets.length > 0) {
      return wallets[0];
    }
    return null;
  }, [wallets]);

  const isLoadingUser = useMemo(() => {
    return !ready || !walletsReady;
  }, [ready, walletsReady]);

  const isAuthenticated = useMemo(() => {
    return Boolean(authenticated && user);
  }, [authenticated, user]);

  const refetchAccounts = useCallback(async () => {
    // Refresh handler for user and account state
  }, []);

  const value = useMemo<UserContextValue>(
    () => ({
      userWallet,
      solanaWallet,
      wallets: wallets ?? [],
      user: user ?? null,
      isAuthenticated,
      isLoadingUser,
      login,
      logout,
      connectWallet,
      refetchAccounts,
    }),
    [
      userWallet,
      solanaWallet,
      wallets,
      user,
      isAuthenticated,
      isLoadingUser,
      login,
      logout,
      connectWallet,
      refetchAccounts,
    ],
  );

  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  );
}
