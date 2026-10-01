import Image from "next/image";
import Link from "next/link";
import { STORY_DATA } from "@/constants/storyConstants";

export const StorySection = () => {
  return (
    <section
      id="story"
      aria-labelledby="story-title"
      className="w-full px-6 py-16 sm:px-10 lg:px-16 xl:px-20 2xl:px-28"
    >
      <div className="grid grid-cols-1 overflow-hidden lg:grid-cols-2">
        {/* Left Column: Image with Telemetry Overlay */}
        <div className="relative aspect-[884/549] min-h-[360px] w-full bg-surface-2 sm:min-h-[460px] lg:min-h-full">
          <Image
            src={STORY_DATA.image.src}
            alt={STORY_DATA.image.alt}
            fill
            priority
            quality={95}
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          {/* On-chain Telemetry Badge Overlay (Figma 119:200) */}
          <div className="absolute inset-x-4 bottom-4 flex items-center justify-between border border-line bg-surface-input/90 px-4 py-2 sm:inset-x-6 sm:bottom-6 sm:px-5">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 shrink-0 rounded-full bg-success-deep" />
              <span className="font-sans text-[11px] font-medium tracking-[0.22px] text-ink-soft sm:text-xs">
                {STORY_DATA.telemetry.txId}
              </span>
            </div>
            <span className="font-sans text-[11px] font-semibold tracking-[0.22px] text-primary-soft sm:text-xs">
              {STORY_DATA.telemetry.settlementTime}
            </span>
          </div>
        </div>

        {/* Right Column: Story & Stats */}
        <div className="flex flex-col justify-between border-t-4 border-primary bg-surface-2 p-6 sm:p-10 lg:p-12 xl:p-14">
          <div>
            {/* Tag */}
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 shrink-0 bg-primary-bright" />
              <span className="font-sans text-[13px] font-normal tracking-wide text-ink">
                {STORY_DATA.tag}
              </span>
            </div>

            {/* Heading */}
            <h2
              id="story-title"
              className="mt-5 font-display text-4xl leading-[1.05] tracking-[1px] text-ink sm:text-5xl lg:text-5xl xl:text-[56px]"
            >
              {STORY_DATA.title}
            </h2>

            {/* Testimonial Quote */}
            <blockquote className="mt-6 border-l-2 border-primary py-2 pl-4 sm:pl-5">
              <p className="font-sans text-sm leading-relaxed text-ink sm:text-base lg:text-lg">
                {STORY_DATA.quote}
              </p>
              <footer className="mt-3 font-sans text-xs font-normal uppercase tracking-wide text-primary-soft sm:text-sm">
                {STORY_DATA.author}
              </footer>
            </blockquote>
          </div>

          <div className="mt-8 space-y-4">
            {/* Stats Row: PREMIO GANADO & RANGO COMPETITIVO */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {STORY_DATA.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border border-line bg-surface-3 p-3.5 sm:p-4"
                >
                  <span className="block font-sans text-[10px] font-bold uppercase tracking-[0.8px] text-ink-muted">
                    {stat.label}
                  </span>
                  <span
                    className={`mt-1 block font-display text-2xl tracking-[0.48px] ${
                      stat.color === "success" ? "text-success" : "text-ink"
                    }`}
                  >
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom CTA Row (Aligned in 2 columns matching stats grid) */}
            <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2">
              <span className="font-sans text-sm font-medium tracking-[0.22px] text-ink-muted sm:text-base">
                {STORY_DATA.ctaQuestion}
              </span>
              <div className="flex sm:justify-end">
                <Link
                  href={STORY_DATA.ctaButtonHref ?? "#"}
                  className="w-full bg-primary-bright px-6 py-2 text-center font-display text-lg tracking-[0.9px] text-ink transition-colors hover:bg-primary sm:w-full sm:text-xl"
                >
                  {STORY_DATA.ctaButtonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
