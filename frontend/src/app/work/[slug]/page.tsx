import type { Metadata } from "next";
import ProjectDetailsPageComponent from "@/features/projects/components/ProjectDetailsPageComponent";

interface WorkDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: WorkDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!slug) {
    return {
      title: "Work not found | DevIyke Labs",
    };
  }

  return {
    title: `${slug} | Work | DevIyke Labs`,
    description: `${slug} as project`,
  };
}

export default async function WorkDetailPage({
  params,
}: WorkDetailPageProps) {
  const { slug } = await params;

  return <ProjectDetailsPageComponent slug={slug} />;
}
