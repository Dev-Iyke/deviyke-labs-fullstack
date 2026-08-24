import type { Metadata } from "next";
import { WorkIndexGrid } from "@/features/projects/components/WorkIndexGrid";
import { WorkIndexHero } from "@/features/projects/components/WorkIndexHero";

export const metadata: Metadata = {
  title: "Work | DevIyke Labs",
  description:
    "Selected projects, product decisions, and engineering evidence from Obasi Ikechukwu.",
};

export default function WorkPage() {
  return (
    <main id="main-content" className="flex-1">
      <WorkIndexHero />
      <WorkIndexGrid />
    </main>
  );
}
