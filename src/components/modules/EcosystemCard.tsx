import Link from "next/link";
import type { EcosystemCardProps } from "@/types/ecosystem";

export const EcosystemCard = ({
  number,
  role,
  title,
  description,
  features,
  buttonText,
  buttonHref = "#",
}: EcosystemCardProps) => {
  return (
    <article className="flex h-full flex-col justify-between bg-surface-2 p-4.5">
      <div>
        <span className="font-display text-base tracking-wider text-primary-soft">
          {number} / {role}
        </span>

        <hr className="my-3 border-surface-5" />

        <h3 className="font-display text-[32px] leading-tight text-ink-soft">
          {title}
        </h3>

        <p className="mt-3 font-sans text-base leading-relaxed text-ink-soft sm:text-lg">
          {description}
        </p>

        <ul className="mt-6 space-y-3">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-3 font-sans text-base text-ink-soft"
            >
              <svg
                className="h-5 w-5 shrink-0"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM10 18.1818C5.48848 18.1818 1.81818 14.5115 1.81818 10C1.81818 5.48855 5.48848 1.81818 10 1.81818C14.5115 1.81818 18.1818 5.48855 18.1818 10C18.1818 14.5115 14.5115 18.1818 10 18.1818Z"
                  fill="#FFB4A8"
                />
                <path
                  d="M13.7498 6.46449L8.60715 11.6071L6.25018 9.25006C5.89521 8.89509 5.31958 8.89503 4.96455 9.25C4.60952 9.60503 4.60952 10.1806 4.96455 10.5356L7.9643 13.5355C8.13479 13.706 8.366 13.8018 8.60709 13.8018C8.84818 13.8018 9.07945 13.706 9.24994 13.5356L15.0355 7.75018C15.3905 7.39515 15.3905 6.81958 15.0355 6.46455C14.6804 6.10952 14.1048 6.10946 13.7498 6.46449Z"
                  fill="#FFB4A8"
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 pt-2">
        <Link
          href={buttonHref}
          className="flex w-full items-center justify-center gap-2.5 border-2 border-surface-5 bg-surface-3 py-3 px-4 font-display text-xl tracking-wide text-ink transition-colors hover:border-primary-soft hover:text-primary-soft"
        >
          <span>{buttonText}</span>
          <svg
            className="h-3 w-5 shrink-0"
            viewBox="0 0 20 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M0.909092 6.36363H16.8962L13.9026 9.35721C13.5476 9.71218 13.5476 10.2878 13.9026 10.6428C14.0801 10.8203 14.3128 10.9091 14.5455 10.9091C14.7781 10.9091 15.0108 10.8203 15.1883 10.6428L19.7337 6.09733C20.0888 5.74236 20.0888 5.16672 19.7337 4.81169L15.1883 0.266228C14.8333 -0.0887426 14.2577 -0.0887426 13.9026 0.266228C13.5476 0.621198 13.5476 1.19684 13.9026 1.55187L16.8962 4.54545H0.909092C0.407031 4.54545 0 4.95248 0 5.45454C0 5.9566 0.407031 6.36363 0.909092 6.36363Z"
              fill="currentColor"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
};
