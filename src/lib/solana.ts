import { createClient } from "@solana/kit";
import { rpc, rpcAirdrop } from "@solana/kit-plugin-rpc";
import { RPC_URL, WS_URL } from "@/utils/constants";

export function createSolanaClient(
  rpcUrl: string = RPC_URL,
  wsUrl: string = WS_URL,
) {
  return createClient()
    .use(rpc(rpcUrl, { url: wsUrl }))
    .use(rpcAirdrop());
}
