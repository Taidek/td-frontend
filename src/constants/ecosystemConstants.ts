import type { EcosystemCardProps } from "@/types/ecosystem";

export const ecosystemCards: EcosystemCardProps[] = [
  {
    number: "01",
    role: "JUGADOR",
    title: "JUGADOR AMATEUR",
    description:
      "Convierte tus noches de juego en ingresos reales y un historial competitivo verificado que nadie puede borrar.",
    features: [
      "Emparejamiento por nivel real",
      "Cero intermediarios que no pagan",
      "Retiro inmediato en stablecoins",
    ],
    buttonText: "BUSCAR TORNEOS PARA NOVATOS",
    buttonHref: "#",
  },
  {
    number: "02",
    role: "ÁRBITRO",
    title: "JUEZ / ÁRBITRO",
    description:
      "Monetiza tu conocimiento de juego validando disputas y resultados con staking de reputación.",
    features: [
      "Comisiones por fallo verificado",
      "Sistema de apelaciones on-chain",
      "Voto respaldado por tokens de gobernanza",
    ],
    buttonText: "POSTULARSE COMO JUEZ",
    buttonHref: "#",
  },
  {
    number: "03",
    role: "SCOUT",
    title: "PATROCINANTE & SCOUT",
    description:
      "Descubre talento emergente antes que nadie y patrocina torneos con trazabilidad garantizada del 100% de los fondos.",
    features: [
      "Métricas de retención y habilidad",
      "Colocación de marca en contratos y streams",
      "Acceso directo a jugadores destacados",
    ],
    buttonText: "CREAR TORNEO PATROCINADO",
    buttonHref: "#",
  },
];
