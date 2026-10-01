export interface StoryStat {
  label: string;
  value: string;
  color?: "default" | "success";
}

export interface StorySectionData {
  tag: string;
  title: string;
  quote: string;
  author: string;
  stats: StoryStat[];
  ctaQuestion: string;
  ctaButtonText: string;
  ctaButtonHref?: string;
  image: {
    src: string;
    alt: string;
  };
  telemetry: {
    txId: string;
    settlementTime: string;
  };
}
