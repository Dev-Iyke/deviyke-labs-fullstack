import { LabEntriesSection } from "@/features/lab/components/LabEntriesSection";
import { LabHeroSection } from "@/features/lab/components/LabHeroSection";
import { LabQuestionsSection } from "@/features/lab/components/LabQuestionsSection";
import { LabTracksSection } from "@/features/lab/components/LabTracksSection";

export function LabPageContent() {
  return (
    <main id="main-content" className="flex-1">
      {/* <div className="flex gap-12 sm:gap-0 flex-col"> */}
        <LabHeroSection />
        <LabTracksSection />
        <LabEntriesSection />
        <LabQuestionsSection />
      {/* </div> */}
    </main>
  );
}
