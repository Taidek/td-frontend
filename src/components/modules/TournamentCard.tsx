import { ChevronDown } from "lucide-react";

import Button from "@/components/common/Button";
import LinkButton from "@/components/common/LinkButton";
import { ROUTES } from "@/constants/navigation";
import type {
  TournamentCardProps,
  TournamentStatus,
} from "@/types/tournaments";

const STATUS_STYLES = {
  open: {
    card: "border-surface-5",
    chip: "gap-1 border border-success-border/40 bg-success-dark/70",
    chipDot: "size-1.5 rounded-full bg-success",
    chipText: "OPEN",
    accent: "text-success",
    footerAccent: "text-ink-muted",
    progressFill: "bg-success-deep",
  },
  live: {
    card: "border-primary shadow-primary-glow",
    chip: "gap-1.5 border border-primary bg-primary/20",
    chipDot: "size-2 rounded-sm bg-primary",
    chipText: "EN VIVO",
    accent: "text-primary-soft",
    footerAccent: "text-primary",
    progressFill: "bg-primary",
  },
  full: {
    card: "border-surface-5",
    chip: "gap-1 border border-warning-border/40 bg-warning-dark/70",
    chipDot: "size-1.5 rounded-full bg-warning",
    chipText: "COMPLETO",
    accent: "text-warning",
    footerAccent: "text-ink-muted",
    progressFill: "bg-warning-deep",
  },
  finished: {
    card: "border-surface-5 opacity-60",
    chip: "gap-1 border border-ink-border-soft bg-ink-border-soft",
    chipDot: "",
    chipText: "FINALIZADO",
    accent: "text-ink-muted",
    footerAccent: "text-ink-muted",
    progressFill: "",
  },
} as const;

const BUTTON_ACTION_CLASSES: Record<TournamentStatus, string> = {
  open: "h-[30px] bg-primary px-6 text-primary-dark",
  live: "",
  full: "h-[30px] bg-surface-3 px-6 text-ink-muted opacity-50",
  finished: "",
};

const LINK_ACTION_CLASSES: Record<TournamentStatus, string> = {
  open: "",
  live: "h-[30px] border border-ink-border-soft bg-surface-5 px-6 text-ink-soft",
  full: "",
  finished: "h-[30px] border border-surface-5 bg-surface-3 px-6 text-ink-muted",
};

const CONDENSED_ACTION_TEXT =
  "whitespace-nowrap font-semibold text-sm tracking-[0.9px]";
const FINISHED_ACTION_TEXT =
  "font-sans font-medium text-[11px] tracking-[0.22px]";

export default function TournamentCard({
  status,
  game,
  title,
  subtitle,
  prizeLabel,
  prizeValue,
  metaLine1Left,
  metaLine1Right,
  progress,
  footerLeft,
  footerAction,
  stripClassName,
}: TournamentCardProps) {
  const styles = STATUS_STYLES[status];
  const isFinished = status === "finished";
  const { icon: FooterIcon, text: footerText } = footerLeft;

  return (
    <article
      className={`relative flex flex-col justify-between overflow-hidden rounded-[2px] border bg-surface-2 p-4 ${styles.card}`}
    >
      <div className={`absolute inset-x-0 top-0 ${stripClassName}`} />

      <div>
        <div className="flex items-center justify-between gap-2">
          <span
            className={`flex items-center border px-2 py-[2px] text-[10px] font-bold uppercase tracking-[0.5px] ${styles.chip} ${styles.accent}`}
          >
            {!isFinished && <span className={styles.chipDot} />}
            {styles.chipText}
          </span>
          <span className="text-[11px] font-semibold tracking-[0.22px] text-ink-muted">
            {game}
          </span>
        </div>

        <h3 className="mt-4 font-condensed text-[24px] font-semibold uppercase tracking-[0.48px] text-ink-soft">
          {title}
        </h3>
        <p className="mt-1 text-xs font-normal text-ink-muted">{subtitle}</p>

        <div className="mt-4 flex flex-col gap-1 border border-surface-5 bg-surface-3 p-2">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.8px] text-ink-muted">
              {prizeLabel}
            </span>
            <span
              className={`font-condensed text-[18px] font-semibold tracking-[0.72px] ${styles.accent}`}
            >
              {prizeValue}
            </span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <span
              className={`text-[11px] font-medium tracking-[0.22px] ${isFinished ? "text-success" : "text-ink-muted"}`}
            >
              {metaLine1Left}
            </span>
            <span
              className={
                isFinished
                  ? "text-[10px] text-ink-muted"
                  : `text-[11px] font-medium tracking-[0.22px] ${styles.accent}`
              }
            >
              {metaLine1Right}
            </span>
          </div>
        </div>

        {!isFinished && (
          <div className="mt-3 h-[6px] w-full bg-ink-border-soft">
            <div
              className={`h-full ${styles.progressFill}`}
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between gap-2 border-t border-surface-5 pt-1">
        <div className={`flex items-center gap-1.5 ${styles.footerAccent}`}>
          {FooterIcon && <FooterIcon className="size-3" />}
          <span className="text-[11px] font-medium tracking-[0.22px]">
            {footerText}
          </span>
        </div>
        {renderFooterAction(footerAction, status)}
      </div>
    </article>
  );
}

function renderFooterAction(
  action: TournamentCardProps["footerAction"],
  status: TournamentStatus,
) {
  const isFinished = status === "finished";
  const label = (
    <span className={isFinished ? FINISHED_ACTION_TEXT : CONDENSED_ACTION_TEXT}>
      {action.label}
    </span>
  );

  if (isFinished) {
    return (
      <Button
        type="button"
        disabled
        aria-disabled
        className={`${FINISHED_ACTION_TEXT} cursor-not-allowed border border-ink-border-soft bg-surface-3 px-2 text-ink-muted`}
        icon={<ChevronDown className="size-3" />}
      >
        {label}
      </Button>
    );
  }

  if (action.type === "link") {
    return (
      <LinkButton
        href={action.href ?? ROUTES.tournaments}
        className={LINK_ACTION_CLASSES[status]}
        icon={isFinished ? <ChevronDown className="size-3" /> : undefined}
      >
        {label}
      </LinkButton>
    );
  }

  return <Button className={BUTTON_ACTION_CLASSES[status]}>{label}</Button>;
}
