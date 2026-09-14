"use client";

import { useContext } from "react";
import { WalletContext } from "@/context/WalletContext";
import type { UserContextValue } from "@/types";

export function useWalletContext(): UserContextValue {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error(
      "useWalletContext must be used within a WalletContextProvider",
    );
  }
  return context;
}
