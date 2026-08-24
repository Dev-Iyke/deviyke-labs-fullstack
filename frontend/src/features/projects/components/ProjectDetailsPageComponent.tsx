"use client";

import { isAxiosError } from "axios";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import {
  ProjectDetailsBodySkeleton,
  ProjectDetailsHeroSkeleton,
} from "@/components/skeletons/projects/ProjectDetailsPageSkeleton";
import { ContentState } from "@/components/states/ContentState";
import { ProjectDetailBody } from "@/features/projects/components/ProjectDetailBody";
import { ProjectDetailHero } from "@/features/projects/components/ProjectDetailHero";
import { useGetProjectBySlug } from "@/features/projects/services/projects.api";

interface ProjectDetailsPageComponentProps {
  slug: string;
}

export default function ProjectDetailsPageComponent({
  slug,
}: ProjectDetailsPageComponentProps) {
  const {
    data: project,
    error,
    isError,
    isFetching,
    isPending,
    refetch,
  } = useGetProjectBySlug({ slug });

  if (isPending) {
    return (
      <main id="main-content" className="flex-1" aria-busy="true">
        <p className="sr-only">Loading project case study.</p>
        <ProjectDetailsHeroSkeleton />
        <ProjectDetailsBodySkeleton />
      </main>
    );
  }

  if (isError || !project) {
    const isUnavailable =
      !isError || (isAxiosError(error) && error.response?.status === 404);

    return (
      <main id="main-content" className="flex-1">
        <Section className="pt-20 sm:pt-24 lg:pt-28">
          <PageContainer>
            <ContentState
              variant={isUnavailable ? "unavailable" : "error"}
              eyebrow={
                isUnavailable ? "Case study unavailable" : "Request failed"
              }
              title={
                isUnavailable
                  ? "This project is not in the archive."
                  : "This case study could not be loaded."
              }
              description={
                isUnavailable
                  ? "It may have moved, remained private, or still be in preparation."
                  : "The project service did not respond. Try loading the case study again."
              }
              action={
                isUnavailable
                  ? { href: "/work", label: "Back to work" }
                  : {
                      label: "Try again",
                      loading: isFetching,
                      onClick: () => void refetch(),
                    }
              }
            />
          </PageContainer>
        </Section>
      </main>
    );
  }

  return (
    <main id="main-content" className="flex-1">
      <ProjectDetailHero project={project} />
      <ProjectDetailBody project={project} />
    </main>
  );
}
