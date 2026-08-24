import type { Metadata } from "next";
import { LabPageContent } from "@/features/lab/components/LabPageContent";

export const metadata: Metadata = {
  title: "Lab",
  description:
    "Experiments, system notes, interface explorations, and product-engineering thinking from DevIyke Labs.",
};

export default function LabPage() {
  return <LabPageContent />;
}
