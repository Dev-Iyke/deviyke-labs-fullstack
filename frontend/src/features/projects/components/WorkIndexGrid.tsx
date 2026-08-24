"use client";

import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectsBodySkeleton } from "@/components/skeletons/projects/ProjectsPageSkeleton";
import { ContentState } from "@/components/states/ContentState";
import { ProjectCard } from "@/features/projects/components/ProjectCard";
import { useGetAllProjects } from "@/features/projects/services/projects.api";

export function WorkIndexGrid() {
  const {
    data: projects,
    isError,
    isFetching,
    isPending,
    refetch,
  } = useGetAllProjects({});

  if (isPending) {
    return <ProjectsBodySkeleton />;
  }

  return (
    <Section className="pt-0">
      <PageContainer>
        {isError ? (
          <ContentState
            variant="error"
            eyebrow="Connection interrupted"
            title="The project archive could not be reached."
            description="The project service did not respond. Try loading the archive again."
            action={{
              label: "Try again",
              loading: isFetching,
              onClick: () => void refetch(),
            }}
          />
        ) : !projects?.length ? (
          <ContentState
            eyebrow="Project archive"
            title="No case studies are available yet."
            description="Published projects will appear here with their product context, engineering decisions, and outcomes."
            action={{ href: "/contact", label: "Start a conversation" }}
          />
        ) : (
          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal
                key={project.slug}
                delay={0.06 * index}
                distance={18}
                className="min-h-full"
              >
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        )}
      </PageContainer>
    </Section>
  );
}
