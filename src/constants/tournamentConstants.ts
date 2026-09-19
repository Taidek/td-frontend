import { Clock, Radio } from "lucide-react";

import { ROUTES } from "@/constants/navigation";
import type {
  TournamentCardProps,
  TournamentCupCard,
} from "@/types/tournaments";

export const FILTERS = [
  "TODOS",
  "VALORANT",
  "LEAGUE OF LEGENDS",
  "FC27",
  "CLASH ROYALE",
];

export const TOURNAMENTS: TournamentCardProps[] = [
  {
    status: "open",
    game: "VALORANT 5v5",
    title: "COPA BARRIOS LATAM",
    subtitle: "Nivel Amateur / Rango Plata a Diamante",
    prizeLabel: "BOLSA DE PREMIOS",
    prizeValue: "$1,200 USDC",
    metaLine1Left: "Entry fee: $10 USDC",
    metaLine1Right: "Slots: 28/32",
    progress: 87,
    footerLeft: { icon: Clock, text: "Cierra en 02h 45m" },
    footerAction: { type: "button", label: "INSCRIBIRME" },
    stripClassName: "h-[2px] bg-success-deep",
  },
  {
    status: "live",
    game: "ROCKET LEAGUE 2v2",
    title: "APEX NOCTURNO",
    subtitle: "Ronda 3 de Semifinales en curso",
    prizeLabel: "BOLSA DE PREMIOS",
    prizeValue: "$650 USDC",
    metaLine1Left: "Entry fee: $5 USDC",
    metaLine1Right: "16/16 Lleno",
    progress: 100,
    footerLeft: { icon: Radio, text: "En stream y bracket" },
    footerAction: {
      type: "link",
      label: "VER MATCH",
      href: ROUTES.tournaments,
    },
    stripClassName: "h-[3px] bg-primary",
  },
  {
    status: "full",
    game: "FC 24 (1v1)",
    title: "DUELO DE TITANES 1V1",
    subtitle: "Eliminación directa • Modo 95 OVR",
    prizeLabel: "BOLSA DE PREMIOS",
    prizeValue: "$400 USDC",
    metaLine1Left: "Entry fee: $8 USDC",
    metaLine1Right: "64/64 Slots",
    progress: 100,
    footerLeft: { icon: Clock, text: "Inicia en 18m" },
    footerAction: { type: "button", label: "LLENO" },
    stripClassName: "h-[2px] bg-warning-deep",
  },
  {
    status: "finished",
    game: "SF6 (FT2)",
    title: "BRAWLER NIGHT",
    subtitle: "32 Participantes • Liquidado on-chain",
    prizeLabel: "BOLSA DE PREMIOS",
    prizeValue: "$500 USDC",
    metaLine1Left: "Ganador: Viper_K1dd",
    metaLine1Right: "#4x89..settled",
    footerLeft: { text: "Finalizado hace 1h" },
    footerAction: {
      type: "link",
      label: "TX PROOF",
      href: ROUTES.tournaments,
    },
    stripClassName: "h-[2px] bg-ink-border",
  },
];

export const CUPS: TournamentCupCard[] = [
  {
    id: "copa-barrios-latam",
    status: "open",
    game: "VALORANT 5V5",
    title: "COPA BARRIOS LATAM",
    subtitle: "Nivel Amateur / Rango Plata a Diamante",
    prizeValue: "$1,200 USDC",
  },
  {
    id: "copa-rafaga",
    status: "live",
    game: "COUNTER STRIKE 2 (5v5)",
    title: "COPA RÁFAGA",
    subtitle: "Nivel Elite / Rango Legendario",
    prizeValue: "$800 USDC",
  },
  {
    id: "kings-cup",
    status: "open",
    game: "CLASH ROYALE (1v1)",
    title: "KING'S CUP",
    subtitle: "Abierto / Trofeos 4000+",
    prizeValue: "$300 USDC",
  },
  {
    id: "copa-del-alba",
    status: "finished",
    game: "LEAGUE OF LEGENDS (5v5)",
    title: "COPA DEL ALBA",
    subtitle: "Clasificatoria / Rango Diamante+",
    prizeValue: "$1,500 USDC",
  },
  {
    id: "copa-centinela",
    status: "finished",
    game: "DOTA 2 (5v5)",
    title: "COPA CENTINELA",
    subtitle: "Abierto / Rango Divino+",
    prizeValue: "$2,000 USDC",
  },
];
