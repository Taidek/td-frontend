"use client";

import {
  type ConnectedStandardSolanaWallet,
  useSignAndSendTransaction,
  useWallets,
} from "@privy-io/react-auth/solana";
import { type Address, getBase58Decoder } from "@solana/kit";
import { useCallback, useMemo, useState } from "react";
import { toast } from "sonner";
import { useNetwork } from "@/hooks/useNetwork";
import { useWalletContext } from "@/hooks/useWallet";
import {
  DEFAULT_SIMULATION_ERROR,
  simulateEncodedTransaction,
} from "@/lib/simulateTransaction";
import type { SignAndSendTxResult } from "@/types";
import {
  toBase64WireTransaction,
  toTransactionBytes,
} from "@/utils/serializeTransaction";

export type TransactionInput =
  | Uint8Array
  | string
  | { serialize: () => Uint8Array };

export function useSignAndSendTx(walletAddress?: Address | null) {
  const [signature, setSignature] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { client } = useNetwork();
  const { userWallet } = useWalletContext();
  const { wallets } = useWallets();
  const { signAndSendTransaction } = useSignAndSendTransaction();

  const targetAddress = walletAddress ?? userWallet;

  const activeWallet = useMemo<ConnectedStandardSolanaWallet | null>(() => {
    if (!wallets || wallets.length === 0) return null;
    if (targetAddress) {
      const match = wallets.find((w) => w.address === targetAddress.toString());
      if (match) return match;
    }
    return wallets[0];
  }, [wallets, targetAddress]);

  const handleSignAndSend = useCallback(
    async (
      transaction: TransactionInput,
      options?: { skipSimulation?: boolean; optimisticBroadcast?: boolean },
    ): Promise<SignAndSendTxResult> => {
      if (!targetAddress || !activeWallet) {
        toast.error("Por favor, conecta tu wallet para continuar.");
        return {
          status: false,
          error: new Error("No hay wallet conectada"),
        };
      }

      try {
        setLoading(true);

        const encodedTx = toBase64WireTransaction(transaction);

        if (!options?.skipSimulation) {
          const simulation = await simulateEncodedTransaction(
            client,
            encodedTx,
          );
          if (!simulation.ok) {
            console.error("Fallo de simulación:", simulation.error);
            toast.error(simulation.error?.message ?? DEFAULT_SIMULATION_ERROR);
            return {
              status: false,
              error: simulation.error,
              simulationFailed: true,
            };
          }
        }

        const txBytes = toTransactionBytes(transaction);

        const result = await signAndSendTransaction({
          transaction: txBytes,
          wallet: activeWallet,
          options: {
            skipSimulation: true,
            optimisticBroadcast: options?.optimisticBroadcast,
          },
        });

        const txSignature = getBase58Decoder().decode(result.signature);
        setSignature(txSignature);

        return {
          status: true,
          signature: txSignature,
          simulationFailed: false,
        };
      } catch (error: unknown) {
        console.error("Error al firmar y enviar la transacción:", error);
        return { status: false, error };
      } finally {
        setLoading(false);
      }
    },
    [targetAddress, activeWallet, client, signAndSendTransaction],
  );

  return { handleSignAndSend, signature, loading };
}
