export interface OrganizerCtaData {
  tag: string;
  title: string;
  description: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton: {
    text: string;
    locked: boolean;
  };
}
