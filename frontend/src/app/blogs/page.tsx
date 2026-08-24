import type { Metadata } from "next";
import { BlogIndexGrid } from "@/features/blogs/components/BlogIndexGrid";
import { BlogIndexHero } from "@/features/blogs/components/BlogIndexHero";

export const metadata: Metadata = {
  title: "Blogs | DevIyke Labs",
  description:
    "Knowledge-sharing sessions, internal presentations, and practical notes from Obasi Ikechukwu.",
};

export default function BlogsPage() {
  return (
    <main id="main-content" className="flex-1">
      <BlogIndexHero />
      <BlogIndexGrid />
    </main>
  );
}
