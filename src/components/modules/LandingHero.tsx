import { ArrowRight } from "lucide-react";

import LinkButton from "@/components/common/LinkButton";
import EscrowTelemetryCard from "@/components/modules/EscrowTelemetryCard";
import MicroGuarantees from "@/components/modules/MicroGuarantees";
import { HERO_CTAS } from "@/constants/navigation";

export default function LandingHero() {
  return (
    <section className="relative bg-hero-gradient">
      <div className="flex w-full flex-col gap-12 px-6 pb-20 pt-[104px] sm:px-10 lg:flex-row lg:items-center lg:justify-center lg:gap-16 lg:pb-28 lg:pt-36 xl:gap-20 2xl:px-28">
        <div>
          <p className="flex items-center gap-2 font-sans text-base font-normal tracking-wide text-ink-bright">
            <span className="h-2 w-2 rounded-[2px] bg-primary-bright" />
            COMPETENCIA ABIERTA. PREMIOS VERIFICABLES.
          </p>

          <h1 className="mt-6 font-display text-[clamp(3rem,9.5vw,9.5rem)] uppercase leading-[0.95] tracking-tight text-ink">
            DEL BARRIO
            <br />A LA <span className="text-primary-bright">ARENA</span>
          </h1>

          <p className="mt-8 max-w-[680px] font-sans text-xl font-normal leading-relaxed text-ink">
            Digitalizamos los torneos de siempre. El premio vive en un contrato
            inteligente, no en la cuenta de una empresa. Tú juegas. La red
            responde.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            {HERO_CTAS.map((cta) => (
              <LinkButton
                key={cta.href}
                href={cta.href}
                variant={cta.variant}
                icon={
                  cta.withIcon ? (
                    <ArrowRight className="h-[11px] w-[13px]" />
                  ) : undefined
                }
                className={cta.className}
              >
                {cta.label}
              </LinkButton>
            ))}
          </div>
        </div>

        <div>
          <EscrowTelemetryCard />
          <MicroGuarantees />
        </div>
      </div>
    </section>
  );
}
