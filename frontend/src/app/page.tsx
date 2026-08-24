import { CapabilityNarrativeSection } from "@/features/capabilities/components/CapabilityNarrativeSection";
import { HomeContactCtaSection } from "@/features/contact/components/HomeContactCtaSection";
import { EngineeringPhilosophySection } from "@/features/deviyke-labs/components/EngineeringPhilosophySection";
import { FoundationHero } from "@/features/home/components/FoundationHero";
import { SelectedWorkSection } from "@/features/projects/components/SelectedWorkSection";
import { TechnicalToolboxSection } from "@/features/toolbox/components/TechnicalToolboxSection";

export default function Home() {
  return (
    <main id="main-content" className="flex-1">
      <FoundationHero />
      <SelectedWorkSection />
      <CapabilityNarrativeSection />
      <EngineeringPhilosophySection />
      <TechnicalToolboxSection />
      <HomeContactCtaSection />
    </main>
  );
}
