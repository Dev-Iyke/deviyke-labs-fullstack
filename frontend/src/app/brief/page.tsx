import type { Metadata } from "next";
import { RecruiterBriefPageContent } from "@/features/brief/components/RecruiterBriefPageContent";

export const metadata: Metadata = {
  title: "Recruiter Brief",
  description:
    "A recruiter-facing summary of Obasi Ikechukwu's software engineering profile across frontend and backend tracks.",
};

export default function BriefPage() {
  return <RecruiterBriefPageContent />;
}
