"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectCardSkeleton } from "@/components/skeletons/projects/ProjectsPageSkeleton";
import { ContentState } from "@/components/states/ContentState";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/features/projects/components/ProjectCard";
import { useGetAllProjects } from "@/features/projects/services/projects.api";

const featuredProjectPlaceholders = Array.from({ length: 2 });

export function SelectedWorkSection() {
  const {
    data: featuredProjects,
    isError,
    isFetching,
    isPending,
    refetch,
  } = useGetAllProjects({isFeatured: true});

  return (
    <Section id="selected-work" className="relative overflow-hidden pt-10">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-border to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-16 right-0 h-72 w-72 rounded-full bg-signal/10 blur-3xl"
        aria-hidden="true"
      />
      <PageContainer>
        <Reveal distance={16}>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 font-mono text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
              Selected work
            </p>
            <h2 className="font-heading text-3xl leading-tight font-semibold tracking-[0.01em] text-balance sm:text-4xl lg:text-5xl">
              Product stories shaped as engineering evidence.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
              A focused look at product interfaces, dashboard systems, API
              integration, and frontend architecture across real application
              work.
            </p>
            <div className="mt-7">
              <Button asChild variant="outline">
                <Link href="/work">
                  Open the work lab
                  <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>

        {isPending ? (
          <div
            className="mt-12 grid gap-5 lg:grid-cols-2"
            aria-busy="true"
            aria-label="Loading selected projects"
          >
            <p className="sr-only">Loading selected project case studies.</p>
            {featuredProjectPlaceholders.map((_, index) => (
              <ProjectCardSkeleton key={index} />
            ))}
          </div>
        ) : isError ? (
          <div className="mt-12">
            <ContentState
              variant="error"
              eyebrow="Connection interrupted"
              title="Selected work could not be loaded."
              description="The project service did not respond. Try loading these case studies again."
              action={{
                label: "Try again",
                loading: isFetching,
                onClick: () => void refetch(),
              }}
            />
          </div>
        ) : !featuredProjects?.length ? (
          <div className="mt-12">
            <ContentState
              eyebrow="Selected work"
              title="No featured case studies are available yet."
              description="Published project stories will appear here as the archive grows."
              action={{ href: "/contact", label: "Start a conversation" }}
            />
          </div>
        ) : (
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <Reveal
                key={project.slug}
                delay={0.08 * index}
                distance={20}
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
