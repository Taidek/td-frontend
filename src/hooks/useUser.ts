"use client";

import type { UserContextValue } from "@/types";
import { useWalletContext } from "./useWallet";

export function useUser(): UserContextValue {
  return useWalletContext();
}
