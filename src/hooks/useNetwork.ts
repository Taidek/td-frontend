"use client";

import { useContext } from "react";
import { NetworkContext } from "@/context/NetworkContext";
import type { NetworkContextType } from "@/types";

export function useNetwork(): NetworkContextType {
  const context = useContext(NetworkContext);
  if (!context) {
    throw new Error("useNetwork must be used within a NetworkProvider");
  }
  return context;
}
