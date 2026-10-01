import type { HowWorksCardProps } from "@/types/howWorks";

export const HowWorksCard = ({
  number,
  text,
  content,
  footer,
  featured = false,
}: HowWorksCardProps) => {
  return (
    <article
      className={[
        "flex min-h-[370px] flex-col rounded-[2px] bg-surface-2",
        "border p-7 md:p-8",
        featured ? "border-primary" : "border-[#262626]",
      ].join(" ")}
    >
      {/* Number */}
      <span
        className={[
          "mb-7 block font-display text-5xl leading-none",
          featured ? "text-primary" : "text-primary-soft",
        ].join(" ")}
      >
        {number}
      </span>

      {/* Title */}
      <h3 className="mb-5 font-display text-2xl font-normal leading-none tracking-wide text-ink">
        {text}
      </h3>

      {/* Content */}
      <p className="text-base leading-7 text-ink-muted">{content}</p>

      {/* Footer */}
      <div
        className={[
          "mt-auto border-t pt-6",
          featured ? "border-primary" : "border-[#3B3B3F]",
        ].join(" ")}
      >
        <span
          className={[
            "text-sm font-semibold tracking-wide",
            featured ? "text-primary" : "text-ink-faint",
          ].join(" ")}
        >
          {footer}
        </span>
      </div>
    </article>
  );
};
