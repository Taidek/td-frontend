import type { FooterData } from "@/types/footer";

export const FOOTER_DATA: FooterData = {
  tagline:
    "Protocolo de torneos competitivos de alta fidelidad con liquidación en cadena instantánea sobre Solana.",
  badge: {
    status: "verified",
    text: "SOLANA MAINNET VERIFICADO",
  },
  columns: [
    {
      title: "ECOSISTEMA",
      links: [
        { label: "Circuito Profesional", href: "#" },
        { label: "Smart Contracts", href: "#" },
        { label: "Oráculos de Juego", href: "#" },
        { label: "Subvenciones de Comunidad", href: "#" },
      ],
    },
    {
      title: "COMUNIDAD",
      links: [
        { label: "Discord Oficial", href: "#" },
        { label: "X / Twitter Broadcast", href: "#" },
        { label: "Comité de Integridad", href: "#" },
        { label: "Centro de Ayuda", href: "#" },
      ],
    },
    {
      title: "LEGAL",
      links: [
        { label: "Términos de Competencia", href: "#" },
        { label: "Políticas Anti-Cheat", href: "#" },
        { label: "Privacidad y Datos", href: "#" },
        { label: "Licencias de Torneo", href: "#" },
      ],
    },
  ],
  newsletter: {
    title: "RADAR DE TORNEOS",
    description:
      "Recibe convocatorias de brackets clasificatorios y alertas de prize pools.",
    placeholder: "jugador@dominio.gg",
    disclaimer: "SIN SPAM. FRECUENCIA DE BRACKET QUINCENAL.",
  },
  bottom: {
    copyright:
      "© 2025 TAIDEK PROTOCOL. OPERACIONES DEPORTIVAS DESCENTRALIZADAS.",
    latency: "LATENCIA: 14MS",
    version: "ESPORTS ENGINE v3.4.1",
  },
};
