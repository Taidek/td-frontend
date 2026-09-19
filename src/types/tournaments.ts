import type { LucideIcon } from "lucide-react";

// TournamentCard
export type TournamentStatus = "open" | "live" | "full" | "finished";

export interface TournamentCardProps {
  status: TournamentStatus;
  game: string;
  title: string;
  subtitle: string;
  prizeLabel: string;
  prizeValue: string;
  metaLine1Left: string;
  metaLine1Right: string;
  progress?: number;
  footerLeft: { icon?: LucideIcon; text: string };
  footerAction: { type: "button" | "link"; label: string; href?: string };
  stripClassName: string;
}

// TournamentCups
export type CupStatus = "open" | "live" | "finished";

export interface TournamentCupCard {
  id: string;
  status: CupStatus;
  game: string;
  title: string;
  subtitle: string;
  prizeValue: string;
}
