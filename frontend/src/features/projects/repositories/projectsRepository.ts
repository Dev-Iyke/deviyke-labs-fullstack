import { projects } from "@/features/projects/data/projects";

const featuredProjectSlugs = [
  "greysoft-school-management-platform",
  "jooav-erp",
  "wesonline-marketplace",
  "noonprep",
] as const;

export function getProjects() {
  return projects;
}

export function getFeaturedProjects() {
  return featuredProjectSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project) => project !== undefined);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
