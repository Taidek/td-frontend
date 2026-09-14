import type { Address, Base64EncodedWireTransaction } from "@solana/kit";
import type { SolanaClient } from "./solana";

export type SimulationErrorKind =
  | "instruction-custom"
  | "instruction"
  | "transaction"
  | "rpc"
  | "unknown";

export interface ParsedTransactionError {
  kind: SimulationErrorKind;
  index?: number;
  code?: number;
  program?: Address;
  name?: string;
  message: string;
}

export interface SimulationResult {
  ok: boolean;
  logs: string[] | null;
  error?: ParsedTransactionError;
}

export interface SimulateEncodedTransactionArgs {
  client: SolanaClient;
  encodedTransaction: Base64EncodedWireTransaction;
}

export interface SignAndSendTxResult {
  status: boolean;
  signature?: string;
  error?: unknown;
  simulationFailed?: boolean;
}
