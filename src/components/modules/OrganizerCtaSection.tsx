import Link from "next/link";
import { ORGANIZER_CTA_DATA } from "@/constants/organizerConstants";

export const OrganizerCtaSection = () => {
  return (
    <section
      id="organizer-cta"
      aria-labelledby="organizer-cta-title"
      className="w-full px-6 py-16 sm:px-10 lg:px-16 xl:px-20 2xl:px-28"
    >
      <div className="flex flex-col justify-between gap-10 border border-line bg-surface-2 p-8 sm:p-10 lg:flex-row lg:items-center lg:gap-14 lg:p-12 xl:p-14">
        {/* Left Column: Info */}
        <div className="max-w-2xl">
          {/* Status Tag */}
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 shrink-0 rounded-full bg-success-deep" />
            <span className="font-sans text-sm font-medium tracking-wide text-ink-muted">
              {ORGANIZER_CTA_DATA.tag}
            </span>
          </div>

          {/* Heading */}
          <h2
            id="organizer-cta-title"
            className="mt-4 font-display text-4xl leading-[1.05] tracking-[1px] text-ink sm:text-5xl lg:text-5xl xl:text-[54px]"
          >
            {ORGANIZER_CTA_DATA.title}
          </h2>

          {/* Description */}
          <p className="mt-4 font-sans text-base leading-relaxed text-ink-muted sm:text-lg lg:text-xl">
            {ORGANIZER_CTA_DATA.description}
          </p>
        </div>

        {/* Right Column: Action Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center lg:flex-row lg:shrink-0">
          <Link
            href={ORGANIZER_CTA_DATA.primaryButton.href}
            className="flex items-center justify-center bg-primary-bright px-8 py-4 font-display text-xl tracking-[0.9px] text-ink transition-colors hover:bg-primary sm:text-2xl"
          >
            {ORGANIZER_CTA_DATA.primaryButton.text}
          </Link>

          <button
            type="button"
            disabled
            className="flex cursor-not-allowed items-center justify-center gap-2.5 border border-line bg-surface-3 px-6 py-4 font-display text-xl tracking-[0.9px] text-ink opacity-80 sm:text-2xl"
          >
            <svg
              className="h-4 w-3 shrink-0 text-ink-muted"
              viewBox="0 0 12 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M1.5 15.75C1.0875 15.75 0.734375 15.6031 0.440625 15.3094C0.146875 15.0156 0 14.6625 0 14.25V6.75C0 6.3375 0.146875 5.98438 0.440625 5.69063C0.734375 5.39688 1.0875 5.25 1.5 5.25H2.25V3.75C2.25 2.7125 2.61562 1.82812 3.34687 1.09687C4.07812 0.365625 4.9625 0 6 0C7.0375 0 7.92188 0.365625 8.65312 1.09687C9.38437 1.82812 9.75 2.7125 9.75 3.75V5.25H10.5C10.9125 5.25 11.2656 5.39688 11.5594 5.69063C11.8531 5.98438 12 6.3375 12 6.75V14.25C12 14.6625 11.8531 15.0156 11.5594 15.3094C11.2656 15.6031 10.9125 15.75 10.5 15.75H1.5ZM1.5 14.25H10.5V6.75H1.5V14.25ZM6 12C6.4125 12 6.76562 11.8531 7.05937 11.5594C7.35312 11.2656 7.5 10.9125 7.5 10.5C7.5 10.0875 7.35312 9.73438 7.05937 9.44063C6.76562 9.14688 6.4125 9 6 9C5.5875 9 5.23438 9.14688 4.94063 9.44063C4.64688 9.73438 4.5 10.0875 4.5 10.5C4.5 10.9125 4.64688 11.2656 4.94063 11.5594C5.23438 11.8531 5.5875 12 6 12ZM3.75 5.25H8.25V3.75C8.25 3.125 8.03125 2.59375 7.59375 2.15625C7.15625 1.71875 6.625 1.5 6 1.5C5.375 1.5 4.84375 1.71875 4.40625 2.15625C3.96875 2.59375 3.75 3.125 3.75 3.75V5.25ZM1.5 14.25V6.75V14.25Z"
                fill="currentColor"
              />
            </svg>
            <span>{ORGANIZER_CTA_DATA.secondaryButton.text}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
