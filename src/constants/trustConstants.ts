import { Globe, History, Lock, Scale } from "lucide-react";

import type { TrustItem } from "@/types/trust";

export const TRUST_ITEMS: TrustItem[] = [
  {
    title: "FONDOS EN ESCROW",
    description: "Smart contract verificado sin retención manual de dinero.",
    icon: Lock,
  },
  {
    title: "JUECES DESCENTRALIZADOS",
    description: "Validación comunitaria de partidas con staking penalidad",
    icon: Scale,
  },
  {
    title: "HISTORIAL ON-CHAIN",
    description: "Cada victoria, KDA y premio grabados permanentemente.",
    icon: History,
  },
  {
    title: "PAGO SIN FRONTERAS",
    description:
      "USDC/SOL directo a tu Phantom/Solflare sin retrasos ni bancos.",
    icon: Globe,
  },
];
