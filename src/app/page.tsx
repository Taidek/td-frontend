import LandingHero from "@/components/modules/LandingHero";
import TournamentsSection from "@/components/modules/TournamentsSection";
import TrustBar from "@/components/modules/TrustBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <LandingHero />
      <TrustBar />
      <TournamentsSection />
    </main>
  );
}
