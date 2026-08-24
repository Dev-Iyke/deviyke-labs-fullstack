import type { Metadata } from "next";
import { AboutPageContent } from "@/features/about/components/AboutPageContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Obasi Ikechukwu, a software engineer who builds modern products with strong systems thinking, frontend depth, and growing backend foundations.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
