import type { HeroCta, NavItem, Route } from "@/types/navigation";

export const ROUTES = {
  home: "/",
  tournaments: "/tournaments",
  howItWorks: "/how-it-works",
  scouting: "/scouting",
  signIn: "/sign-in",
} as const satisfies Record<string, Route>;

export const NAV_LINKS: NavItem[] = [
  { label: "Torneos", href: ROUTES.tournaments },
  { label: "Cómo Funciona", href: ROUTES.howItWorks },
  { label: "Scouting", href: ROUTES.scouting },
];

export const HERO_CTAS: HeroCta[] = [
  {
    label: "VER TORNEOS ACTIVOS",
    href: ROUTES.tournaments,
    variant: "primary",
    withIcon: true,
    className: "h-[43px] px-[30px] font-sans text-sm font-bold",
  },
  {
    label: "CÓMO FUNCIONA",
    href: ROUTES.howItWorks,
    variant: "outline",
    className: "h-[43px] px-10 font-sans text-sm font-bold",
  },
];
