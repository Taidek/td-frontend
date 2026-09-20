"use client";

import { useState } from "react";

import TournamentCard from "@/components/modules/TournamentCard";
import { FILTERS, TOURNAMENTS } from "@/constants/tournamentConstants";

export const TournamentsSection = () => {
  const [activeFilter, setActiveFilter] = useState(FILTERS[0]);

  return (
    <section
      id="tournaments"
      aria-labelledby="tournaments-title"
      className="w-full px-6 py-16 sm:px-10 lg:px-16 lg:py-20 xl:px-20 2xl:px-28"
    >
      <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="flex items-center gap-[10px] font-sans text-[13px] font-normal text-ink">
            <span className="h-2 w-2 shrink-0 bg-primary-bright" />
            LOBBIES ABIERTOS & CLASIFICATORIOS
          </p>

          <h2
            id="tournaments-title"
            className="mt-4 font-display text-[48px] tracking-[1px] text-ink"
          >
            TORNEOS ABIERTOS AHORA
          </h2>

          <p className="mt-3 font-sans text-xl font-normal text-ink">
            Inscríbete en segundos con tu Wallet o cuenta estandar.
          </p>
        </div>

        <fieldset className="flex flex-wrap gap-[9px]">
          <legend className="sr-only">Filtrar torneos</legend>
          {FILTERS.map((filter) => {
            const isActive = filter === activeFilter;
            return (
              <button
                key={filter}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(filter)}
                className={`p-[10px] font-display text-[16px] tracking-[2px] text-ink cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  isActive
                    ? "bg-primary-bright shadow-primary-glow"
                    : "border border-line bg-transparent hover:bg-surface-alpha-10"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </fieldset>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2 xl:grid-cols-4">
        {TOURNAMENTS.map((tournament) => (
          <TournamentCard key={tournament.title} {...tournament} />
        ))}
      </div>
    </section>
  );
};
