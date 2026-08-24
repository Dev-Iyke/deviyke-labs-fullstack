import type { Metadata } from "next";
import { ContactPageContent } from "@/features/contact/components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact | DevIyke Labs",
  description:
    "Start a conversation with Obasi Ikechukwu about software engineering roles, frontend work, junior backend opportunities, or collaboration.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
