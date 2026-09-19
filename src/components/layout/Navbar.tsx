import { ArrowRight } from "lucide-react";
import Link from "next/link";

import LinkButton from "@/components/common/LinkButton";
import { NAV_LINKS, ROUTES } from "@/constants/navigation";
import TaidekLogo from "@/icons/TaidekLogo";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-line bg-transparent font-sans backdrop-blur-md">
      <nav className="relative flex w-full items-center justify-between gap-12 px-6 py-5 sm:px-10 lg:h-[95px] lg:px-16 xl:px-20 2xl:px-28">
        <Link
          href={ROUTES.home}
          aria-label="Taidek"
          className="flex items-center text-ink"
        >
          <TaidekLogo className="h-[30px] w-auto" />
        </Link>

        <ul className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-[47px] lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-sans text-sm font-normal uppercase text-ink-faint transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5">
          <Link
            href={ROUTES.signIn}
            className="hidden font-sans text-sm font-normal text-ink-subtle transition-colors hover:text-ink sm:block"
          >
            INICIAR SESIÓN
          </Link>
          <LinkButton
            href={ROUTES.tournaments}
            variant="primary"
            icon={<ArrowRight className="size-3.5" />}
            className="h-[43px] px-10 font-sans text-sm font-bold"
          >
            ENTRAR
          </LinkButton>
        </div>
      </nav>
    </header>
  );
}
