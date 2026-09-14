import type { User } from "@privy-io/react-auth";
import type { ConnectedStandardSolanaWallet } from "@privy-io/react-auth/solana";
import type { Address } from "@solana/kit";

export interface UserContextValue {
  userWallet: Address | null;
  solanaWallet: ConnectedStandardSolanaWallet | null;
  wallets: ConnectedStandardSolanaWallet[];
  user: User | null;
  isAuthenticated: boolean;
  isLoadingUser: boolean;
  login: () => void;
  logout: () => Promise<void>;
  connectWallet: () => void;
  refetchAccounts: () => Promise<void>;
}
