import { Clock, Radio } from "lucide-react";

import { ROUTES } from "@/constants/navigation";
import type { TournamentCardProps } from "@/types/tournaments";

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
    game: "VALORANT 5V5",
    title: "COPA BARRIOS LATAM",
    subtitle: "Nivel Amateur / Rango Plata a Diamante",
    prizeLabel: "BOLSA DE PREMIOS",
    prizeValue: "$1,200 USDC",
    metaLine1Left: "Entry fee: $10 USDC",
    metaLine1Right: "Slots: 28/32",
    progress: 83,
    footerLeft: { icon: Clock, text: "Cierra en 02h 45m" },
    footerAction: { type: "button", label: "INSCRIBIRME" },
    stripClassName: "h-[2px] bg-success-deep",
    image: {
      src: "/images/tournaments/valorant-image-taidek.webp",
      alt: "Torneo COPA BARRIOS LATAM",
    },
  },
  {
    status: "live",
    game: "ROCKET LEAGUE 2V2",
    title: "APEX NOCTURNO",
    subtitle: "Ronda 3 de Semifinales en curso",
    prizeLabel: "BOLSA DE PREMIOS",
    prizeValue: "$1,200 USDC",
    metaLine1Left: "Entry fee: $5 USDC",
    metaLine1Right: "16/16 Lleno",
    progress: 83,
    footerLeft: { icon: Radio, text: "En stream y bracket" },
    footerAction: {
      type: "link",
      label: "VER MATCH",
      href: ROUTES.tournaments,
    },
    stripClassName: "h-[3px] bg-primary",
    image: {
      src: "/images/tournaments/rocket-image-taidek.webp",
      alt: "Torneo APEX NOCTURNO",
    },
  },
  {
    status: "full",
    game: "FC 27 1V1",
    title: "DUELO DE TITANES 1V1",
    subtitle: "Eliminación directa • Modo 95 OVR",
    prizeLabel: "BOLSA DE PREMIOS",
    prizeValue: "$400 USDC",
    metaLine1Left: "Entry fee: $5 USDC",
    metaLine1Right: "64/64 Lleno",
    progress: 83,
    footerLeft: { icon: Clock, text: "Inicia en 18m" },
    footerAction: { type: "button", label: "LLENO" },
    stripClassName: "h-[2px] bg-warning-deep",
    image: {
      src: "/images/tournaments/fc27-image-taidek.webp",
      alt: "Torneo DUELO DE TITANES 1V1",
    },
  },
  {
    status: "finished",
    game: "BRAWLS STAR 1V1",
    title: "BRAWLER NIGHT",
    subtitle: "32 Participantes • Liquidado on-chain",
    prizeLabel: "PREMIO LIQUIDADO",
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
    image: {
      src: "/images/tournaments/brawl-image-taidek.webp",
      alt: "Torneo BRAWLER NIGHT",
    },
  },
];
