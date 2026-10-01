export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterData {
  tagline: string;
  badge: {
    status: string;
    text: string;
  };
  columns: FooterColumn[];
  newsletter: {
    title: string;
    description: string;
    placeholder: string;
    disclaimer: string;
  };
  bottom: {
    copyright: string;
    latency: string;
    version: string;
  };
}
