import { ShieldCheck, Zap } from "lucide-react";

import type { Guarantee } from "@/types/guarantees";

export const GUARANTEES: Guarantee[] = [
  {
    icon: ShieldCheck,
    text: "Auditado por OtterSec & Certik",
    iconColor: "text-primary-soft",
    iconSize: "size-[17px]",
  },
  {
    icon: Zap,
    text: "Finalidad 400ms Solana",
    iconColor: "text-success",
    iconSize: "size-4",
  },
];
