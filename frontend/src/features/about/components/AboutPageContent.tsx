import { AboutDirectionSection } from "@/features/about/components/AboutDirectionSection"
import { AboutHeroSection } from "@/features/about/components/AboutHeroSection"
import { AboutOperatingSection } from "@/features/about/components/AboutOperatingSection"
import { AboutStrengthsSection } from "@/features/about/components/AboutStrengthsSection"
import { AboutTimelineSection } from "@/features/about/components/AboutTimelineSection"

export function AboutPageContent() {
  return (
    <main id="main-content" className="flex-1">
      <AboutHeroSection />
      <AboutStrengthsSection />
      <AboutOperatingSection />
      <AboutTimelineSection />
      <AboutDirectionSection />
    </main>
  )
}
