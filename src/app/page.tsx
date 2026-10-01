import { EcosystemSection } from "@/components/modules/EcosystemSection";
import { Footer } from "@/components/modules/Footer";
import { HowWorksSection } from "@/components/modules/HowWorksSection";
import { LandingHero } from "@/components/modules/LandingHero";
import { OrganizerCtaSection } from "@/components/modules/OrganizerCtaSection";
import { StorySection } from "@/components/modules/StorySection";
import { TournamentsSection } from "@/components/modules/TournamentsSection";
import { TrustBar } from "@/components/modules/TrustBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <LandingHero />
      <TrustBar />
      <TournamentsSection />
      <HowWorksSection />
      <EcosystemSection />
      <StorySection />
      <OrganizerCtaSection />
      <Footer />
    </main>
  );
}
