// Navigation
export type Route =
  | "/"
  | "/tournaments"
  | "/how-it-works"
  | "/scouting"
  | "/sign-in";

export interface NavItem {
  label: string;
  href: Route;
}

export interface HeroCta {
  label: string;
  href: Route;
  variant: "primary" | "outline";
  withIcon?: boolean;
  className: string;
}
