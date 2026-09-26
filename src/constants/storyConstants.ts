import type { StorySectionData } from "@/types/story";

export const STORY_DATA: StorySectionData = {
  tag: "HISTORIA REAL DE COMPETICIÓN",
  title: "DEL CUARTO DE TU CASA AL RECONOCIMIENTO ON-CHAIN.",
  quote:
    "“Llevaba 4 años ganando torneos locales donde los organizadores desaparecían con la plata o tardaban 3 meses en transferir por PayPal. En Taidek gané mi primera copa de Valorant a las 11:42 PM y a las 11:43 PM los $450 USDC ya estaban en mi wallet.”",
  author: "— MATEO “K4IZER” R., 21 AÑOS, BUENOS AIRES",
  stats: [
    {
      label: "PREMIO GANADO",
      value: "$450.00 USDC",
      color: "default",
    },
    {
      label: "RANGO COMPETITIVO",
      value: "Diamante I",
      color: "success",
    },
  ],
  ctaQuestion: "¿Listo para competir con garantías?",
  ctaButtonText: "CREAR PERFIL DE JUGADOR",
  ctaButtonHref: "#",
  image: {
    src: "/images/story/Chatgpt-taidek-image.webp",
    alt: "Gamer compitiendo desde su setup en casa",
  },
  telemetry: {
    txId: "TX Solana: #5Z9q...Verified",
    settlementTime: "Escrow Settlement: 1.4s",
  },
};
