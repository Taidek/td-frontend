import type { Base64EncodedWireTransaction } from "@solana/kit";

export function toTransactionBytes(
  tx: Uint8Array | string | { serialize: () => Uint8Array },
): Uint8Array {
  if (tx instanceof Uint8Array) {
    return tx;
  }
  if (typeof tx === "string") {
    return Uint8Array.from(Buffer.from(tx, "base64"));
  }
  if (
    typeof tx === "object" &&
    tx !== null &&
    "serialize" in tx &&
    typeof tx.serialize === "function"
  ) {
    return tx.serialize();
  }
  throw new Error("Formato de transacción inválido");
}

export function toBase64WireTransaction(
  tx: Uint8Array | string | { serialize: () => Uint8Array },
): Base64EncodedWireTransaction {
  if (typeof tx === "string") {
    return tx as Base64EncodedWireTransaction;
  }
  const bytes = toTransactionBytes(tx);
  return Buffer.from(bytes).toString("base64") as Base64EncodedWireTransaction;
}
