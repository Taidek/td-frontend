import type { Base64EncodedWireTransaction } from "@solana/kit";
import type {
  ParsedTransactionError,
  SimulationResult,
  SolanaClient,
} from "@/types";

export const DEFAULT_SIMULATION_ERROR =
  "No pudimos validar tu transacción on-chain. Inténtalo de nuevo.";

const TRANSACTION_ERROR_MESSAGES: Record<string, string> = {
  BlockhashNotFound:
    "La transacción expiró. Prepara la operación nuevamente e inténtalo.",
  SignatureFailure: "La transacción no pudo validar las firmas requeridas.",
  InsufficientFundsForFee:
    "No tienes suficiente saldo para cubrir la tarifa de la transacción.",
  AccountInUse: "Una cuenta de la transacción está en uso. Inténtalo de nuevo.",
  AccountNotFound: "Una cuenta requerida por la transacción no existe.",
  InvalidAccountIndex: "La transacción hace referencia a una cuenta inválida.",
  MissingSignatureForFee:
    "La cuenta que paga la tarifa no está firmada correctamente.",
};

const INSTRUCTION_ERROR_MESSAGES: Record<string, string> = {
  GenericError: "Ocurrió un error genérico durante la instrucción.",
  InvalidArgument: "Uno de los argumentos de la instrucción es inválido.",
  InvalidInstructionData: "Los datos de la instrucción son inválidos.",
  InvalidAccountData: "Los datos de una cuenta son inválidos.",
  AccountDataTooSmall: "El espacio asignado a la cuenta es insuficiente.",
  InsufficientFunds: "Fondos insuficientes para ejecutar la operación.",
  IncorrectProgramId: "El ID del programa proporcionado no es correcto.",
  MissingRequiredSignature: "Falta una firma requerida para la instrucción.",
  AccountAlreadyInitialized: "La cuenta ya ha sido inicializada.",
  UninitializedAccount: "La cuenta requerida no está inicializada.",
  NotEnoughAccountKeys: "No se proporcionaron suficientes cuentas.",
  AccountBorrowFailed: "No se pudo acceder a los datos de la cuenta.",
  MaxSeedLengthExceeded: "La semilla del PDA excede la longitud máxima.",
  InvalidSeeds: "Las semillas del PDA son inválidas.",
  Custom:
    "El programa on-chain rechazó la operación con un error personalizado.",
};

const ANCHOR_ERROR_CODE_RE = /Error Code:\s*([A-Za-z0-9_]+)/;

function extractAnchorErrorName(logs: string[] | null): string | undefined {
  if (!logs) return undefined;
  for (const line of logs) {
    const match = ANCHOR_ERROR_CODE_RE.exec(line);
    if (match) return match[1];
  }
  return undefined;
}

function parseFailedSimulation(
  err: unknown,
  logs: string[] | null,
): ParsedTransactionError {
  const name = extractAnchorErrorName(logs);

  if (!err) {
    return { kind: "unknown", message: DEFAULT_SIMULATION_ERROR };
  }

  if (typeof err === "string") {
    return {
      kind: "transaction",
      name,
      message:
        TRANSACTION_ERROR_MESSAGES[err] ??
        `La transacción fue rechazada por la red (${err}).`,
    };
  }

  if (typeof err === "object" && err !== null && "InstructionError" in err) {
    const instructionErrorTuple = (
      err as { InstructionError: [number, unknown] }
    ).InstructionError;
    const [index, instructionError] = instructionErrorTuple;

    if (
      typeof instructionError === "object" &&
      instructionError !== null &&
      "Custom" in instructionError
    ) {
      const code = Number(
        (instructionError as { Custom: number | string }).Custom,
      );
      return {
        kind: "instruction-custom",
        index,
        name,
        code,
        message: `El programa on-chain rechazó la operación (código ${code}${
          name ? `: ${name}` : ""
        }).`,
      };
    }

    if (
      typeof instructionError === "string" &&
      INSTRUCTION_ERROR_MESSAGES[instructionError]
    ) {
      return {
        kind: "instruction",
        index,
        name,
        message: INSTRUCTION_ERROR_MESSAGES[instructionError],
      };
    }

    return {
      kind: "instruction",
      index,
      name,
      message: `La instrucción falló durante la simulación (${String(
        instructionError,
      )}).`,
    };
  }

  return { kind: "unknown", name, message: DEFAULT_SIMULATION_ERROR };
}

export async function simulateEncodedTransaction(
  client: SolanaClient,
  encodedTransaction: Base64EncodedWireTransaction,
): Promise<SimulationResult> {
  try {
    const response = await client.rpc
      .simulateTransaction(encodedTransaction, {
        encoding: "base64",
        sigVerify: false,
        innerInstructions: true,
      })
      .send();

    const value = response?.value;
    if (!value || value.err === null) {
      return { ok: true, logs: value?.logs ?? null };
    }

    return {
      ok: false,
      logs: value.logs,
      error: parseFailedSimulation(value.err, value.logs),
    };
  } catch (rpcError) {
    console.error("simulateTransaction RPC failed:", rpcError);
    return {
      ok: false,
      logs: null,
      error: { kind: "rpc", message: DEFAULT_SIMULATION_ERROR },
    };
  }
}
