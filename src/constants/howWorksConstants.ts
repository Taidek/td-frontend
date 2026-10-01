import type { HowWorksCardProps } from "@/types/howWorks";

export const howWorksCards: HowWorksCardProps[] = [
  {
    number: "01",
    text: "INSCRÍBETE",
    content:
      "Conecta tu wallet o regístrate con email. Deposita el entry fee que va directo al escrow auditado.",
    footer: "DEPÓSITO INMUTABLE",
  },
  {
    number: "02",
    text: "COMPITE",
    content:
      "Juega tu partida en las salas oficiales coordinadas por nuestro bot de Discord y panel web.",
    footer: "SERVIDORES ASIGNADOS",
  },
  {
    number: "03",
    text: "REPORTA",
    content:
      "Sube captura o sincroniza tu API ID. Los jueces verifican el resultado con consenso descentralizado.",
    footer: "VALIDACIÓN MULTI-FIRMA",
  },
  {
    number: "04",
    text: "COBRA",
    content:
      "El contrato inteligente libera el premio a tu dirección en menos de 2 segundos. 100% tuyo.",
    footer: "< 2S LIQUIDACIÓN DIRECTA",
    featured: true,
  },
];
