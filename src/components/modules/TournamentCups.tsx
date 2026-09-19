import { CUPS } from "@/constants/tournamentConstants";

const CUP_STATUS_STYLES = {
  open: {
    label: "OPEN",
    frame: "border border-success-deep",
    pill: "border border-success/50 bg-success-chip",
    dot: "bg-success",
    chipText: "text-success",
    prize: "text-success",
  },
  live: {
    label: "EN CURSO",
    frame: "border-4 border-primary",
    pill: "border border-primary bg-primary/20",
    dot: "bg-primary",
    chipText: "text-primary",
    prize: "text-primary-soft",
  },
  finished: {
    label: "FINALIZADA",
    frame: "border border-ink-border-strong",
    pill: "border border-ink-border-soft bg-ink-border-soft",
    dot: "bg-ink-border",
    chipText: "text-ink-muted",
    prize: "text-ink-muted",
  },
} as const;

export default function TournamentCups() {
  return (
    <div className="mt-[73px] grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {CUPS.map((cup) => {
        const status = CUP_STATUS_STYLES[cup.status];
        return (
          <article
            key={cup.id}
            className={`flex h-[294px] flex-col gap-2 bg-surface-2 p-4 ${status.frame}`}
          >
            <div className="flex items-center justify-between gap-2">
              <span
                className={`flex h-[23px] items-center gap-1 border px-2.5 py-1 ${status.pill}`}
              >
                <span className={`size-[5px] rounded-full ${status.dot}`} />
                <span
                  className={`whitespace-nowrap text-[10px] font-extrabold uppercase tracking-[1px] ${status.chipText}`}
                >
                  {status.label}
                </span>
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[2px] text-ink">
                {cup.game}
              </span>
            </div>

            <h3 className="font-display text-[24px] tracking-[2px] text-ink">
              {cup.title}
            </h3>

            <p className="text-[12px] font-normal uppercase tracking-[1px] text-ink">
              {cup.subtitle}
            </p>

            <div className="mt-auto flex items-center justify-between gap-2 border border-surface-5 bg-surface-3 p-2">
              <span className="text-[12px] font-normal uppercase tracking-[1px] text-ink">
                BOLSA DE PREMIOS
              </span>
              <span
                className={`font-display text-[20px] tracking-[1px] ${status.prize}`}
              >
                {cup.prizeValue}
              </span>
            </div>
          </article>
        );
      })}
    </div>
  );
}
