import Link from "next/link";
import { FOOTER_DATA } from "@/constants/footerConstants";
import TaidekLogo from "@/icons/TaidekLogo";

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="w-full border-t border-line bg-surface-1 px-6 pt-16 pb-12 sm:px-10 lg:px-16 xl:px-20 2xl:px-28"
    >
      {/* Top Grid */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-6 lg:gap-8">
        {/* Brand Column (2 cols on lg) */}
        <div className="lg:col-span-2">
          {/* Logo & Name */}
          <div className="flex items-center gap-3">
            {/* Taidek Logo with Figma dimensions (w=75px h=24px, viewBox="0 0 265 30") */}
            <TaidekLogo
              width={75}
              height={24}
              className="h-6 w-auto shrink-0 text-ink"
            />
            <span
              id="footer-brand"
              className="font-display text-2xl tracking-wider text-ink"
            >
              TAIDEK
            </span>
          </div>

          {/* Tagline */}
          <p className="mt-4 max-w-sm font-sans text-xs leading-relaxed text-ink-muted">
            {FOOTER_DATA.tagline}
          </p>

          {/* Verified Badge */}
          <div className="mt-6 flex w-fit items-center gap-3 border border-line bg-surface-2 p-2.5">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-success-deep" />
            <span className="whitespace-pre-line font-sans text-[11px] font-semibold leading-tight tracking-wider text-ink-soft">
              {FOOTER_DATA.badge.text}
            </span>
          </div>
        </div>

        {/* Dynamic Nav Columns (3 cols) */}
        {FOOTER_DATA.columns.map((col) => (
          <div key={col.title}>
            <h4 className="font-condensed text-lg font-semibold tracking-wider text-ink">
              {col.title}
            </h4>
            <ul className="mt-4 space-y-3 font-sans text-xs text-ink-link">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter Column (1 col) */}
        <div>
          <h4 className="font-condensed text-lg font-semibold tracking-wider text-ink">
            {FOOTER_DATA.newsletter.title}
          </h4>
          <p className="mt-4 font-sans text-xs leading-relaxed text-ink-link">
            {FOOTER_DATA.newsletter.description}
          </p>

          <form action="#" className="mt-4 flex flex-col gap-2">
            <div className="flex border border-line bg-surface-input">
              <input
                type="email"
                placeholder={FOOTER_DATA.newsletter.placeholder}
                className="w-full bg-transparent px-3 py-1.5 font-sans text-xs text-ink placeholder:text-ink-faint focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Suscribirse al radar"
                className="bg-primary-bright px-3 text-ink transition-colors hover:bg-primary cursor-pointer"
              >
                →
              </button>
            </div>
            <span className="font-sans text-[10px] uppercase tracking-wider text-ink-faint">
              {FOOTER_DATA.newsletter.disclaimer}
            </span>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 text-[11px] text-ink-muted sm:flex-row">
        <p className="font-sans">{FOOTER_DATA.bottom.copyright}</p>
        <div className="flex items-center gap-6 font-sans">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-success-deep" />
            <span>{FOOTER_DATA.bottom.latency}</span>
          </div>
          <span>{FOOTER_DATA.bottom.version}</span>
        </div>
      </div>
    </footer>
  );
};
