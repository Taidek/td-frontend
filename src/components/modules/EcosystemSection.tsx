import { ecosystemCards } from "@/constants/ecosystemConstants";
import { EcosystemCard } from "./EcosystemCard";

export const EcosystemSection = () => {
  return (
    <section
      id="ecosystem"
      aria-labelledby="ecosystem-title"
      className="w-full px-6 py-16 sm:px-10 lg:px-16 xl:px-20 2xl:px-28"
    >
      <hr className="mb-14 border-surface-5" />

      <div>
        <p className="flex items-center gap-[10px] font-sans text-[13px] font-normal text-ink">
          <span className="h-2 w-2 shrink-0 bg-primary-bright" />
          PARTICIPANTES ACTIVOS
        </p>

        <h2
          id="ecosystem-title"
          className="mt-4 font-display text-[48px] tracking-[1px] text-ink"
        >
          DISEÑADO PARA EL ECOSISTEMA REAL DE GAMING
        </h2>

        <p className="mt-3 font-sans text-xl font-normal text-ink">
          Sin falsas promesas pro. Herramientas de grado profesional para
          quienes juegan en serio cada noche.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {ecosystemCards.map((card) => (
          <EcosystemCard key={card.number} {...card} />
        ))}
      </div>
    </section>
  );
};
