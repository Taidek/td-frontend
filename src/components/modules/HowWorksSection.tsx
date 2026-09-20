import { howWorksCards } from "@/constants/howWorksConstants";
import { HowWorksCard } from "./HowWorksCards";

export const HowWorksSection = () => {
  return (
    <section
      id="tournaments"
      aria-labelledby="tournaments-title"
      className="w-full px-6 py-16 sm:px-10 lg:px-16 lg:pt-5 lg:pb-5 xl:px-20 2xl:px-28"
    >
      <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="flex items-center gap-[10px] font-sans text-[13px] font-normal text-ink">
            <span className="h-2 w-2 shrink-0 bg-primary-bright" />
            ARQUITECTURA NON-CUSTODIAL
          </p>

          <h2
            id="tournaments-title"
            className="mt-4 font-display text-[48px] tracking-[1px] text-ink"
          >
            CÓMO FUNCIONA - DE LA PARTIDA A TU WALLET
          </h2>

          <p className="mt-3 font-sans text-xl font-normal text-ink">
            Transparencia matemática. Sin formularios burocráticos ni esperas de
            60 días.
          </p>
        </div>

        <div className="flex items-center gap-2.5 border border-line p-2.5">
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-success-deep" />
          <span className="font-display text-base tracking-[2px] text-ink">
            PROGRAM ID: TK_ESCROW_V2.SO
          </span>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2 xl:grid-cols-4">
        {howWorksCards.map((card) => (
          <HowWorksCard key={card.number} {...card} />
        ))}
      </div>
    </section>
  );
};
