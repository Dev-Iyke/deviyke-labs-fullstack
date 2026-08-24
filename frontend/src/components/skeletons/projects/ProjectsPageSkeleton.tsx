import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Skeleton } from "@/components/ui/skeleton";

const projectPlaceholders = Array.from({ length: 4 });

export function ProjectsHeroSkeleton() {
  return (
    <Section className="pt-20 pb-10 sm:pt-24 lg:pt-28">
      <PageContainer>
        <div
          className="grid gap-8 rounded-3xl border border-border/70 bg-card/55 p-6 shadow-sm sm:p-8 lg:grid-cols-[1.25fr_0.75fr] lg:p-10"
          aria-hidden="true"
        >
          <div>
            <Skeleton className="h-3 w-24" />
            <Skeleton className="mt-5 h-12 w-full max-w-3xl sm:h-16" />
            <div className="mt-6 max-w-2xl space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
            </div>
          </div>
          <div className="grid gap-3">
            <Skeleton className="h-13 rounded-2xl" />
            <Skeleton className="h-13 rounded-2xl" />
            <Skeleton className="h-13 rounded-2xl" />
          </div>
        </div>
      </PageContainer>
    </Section>
  );
}

export function ProjectCardSkeleton() {
  return (
    <div
      className="flex min-h-[34rem] flex-col rounded-2xl border border-border/70 bg-card/70 shadow-sm"
      aria-hidden="true"
    >
      <div className="flex items-start justify-between gap-5 p-6">
        <div className="flex-1 space-y-4">
          <Skeleton className="h-3 w-28" />
          <Skeleton className="h-8 w-3/4 max-w-72" />
        </div>
        <Skeleton className="h-7 w-20 rounded-full" />
      </div>

      <div className="flex flex-1 flex-col gap-7 px-6 pb-6">
        <div className="space-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-11/12" />
          <Skeleton className="h-4 w-3/5" />
        </div>
        <div className="grid gap-4 rounded-2xl border border-border/70 bg-surface/60 p-4 sm:grid-cols-2">
          <Skeleton className="h-9 w-full" />
          <Skeleton className="h-9 w-full" />
        </div>
        <div className="space-y-4">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-2/3" />
        </div>
        <div className="mt-auto flex flex-wrap gap-2">
          <Skeleton className="h-7 w-20 rounded-full" />
          <Skeleton className="h-7 w-24 rounded-full" />
          <Skeleton className="h-7 w-16 rounded-full" />
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-border/70 bg-surface/50 p-6">
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-4 w-20" />
      </div>
    </div>
  );
}

export function ProjectsBodySkeleton() {
  return (
    <Section className="pt-0" aria-busy="true" aria-label="Loading projects">
      <PageContainer>
        <p className="sr-only">Loading project case studies.</p>
        <div className="grid gap-5 lg:grid-cols-2">
          {projectPlaceholders.map((_, index) => (
            <ProjectCardSkeleton key={index} />
          ))}
        </div>
      </PageContainer>
    </Section>
  );
}
