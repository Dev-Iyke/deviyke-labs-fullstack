import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Skeleton } from "@/components/ui/skeleton";

const contextPlaceholders = Array.from({ length: 3 });
const detailPlaceholders = Array.from({ length: 4 });

export function ProjectDetailsHeroSkeleton() {
  return (
    <Section className="pt-20 pb-0 sm:pt-24 sm:pb-0 lg:pt-28 lg:pb-0">
      <PageContainer>
        <div className="max-w-6xl" aria-hidden="true">
          <Skeleton className="mb-8 h-8 w-32" />
          <div className="flex gap-3">
            <Skeleton className="h-7 w-20 rounded-full" />
            <Skeleton className="h-7 w-24 rounded-full" />
            <Skeleton className="h-7 w-28 rounded-full" />
          </div>
          <Skeleton className="mt-7 h-3 w-36" />
          <Skeleton className="mt-5 h-12 w-4/5 max-w-3xl sm:h-16" />
          <div className="mt-7 max-w-3xl space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-11/12" />
            <Skeleton className="h-4 w-2/3" />
          </div>

          <div className="mt-8 overflow-hidden rounded-[2rem] border border-border/75 bg-card/75 shadow-sm">
            <div className="flex items-center gap-2 border-b border-border/70 bg-surface/70 px-5 py-4">
              <span className="size-2.5 rounded-full bg-chart-5/50" />
              <span className="size-2.5 rounded-full bg-signal/50" />
              <span className="size-2.5 rounded-full bg-chart-4/50" />
              <Skeleton className="ml-3 h-3 w-40" />
            </div>
            <div className="aspect-[16/7] min-h-34 bg-surface/60 p-3 sm:p-4 lg:p-5">
              <Skeleton className="h-full w-full rounded-[1.4rem] border border-border/60" />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <Skeleton className="h-7 w-20 rounded-full" />
            <Skeleton className="h-7 w-24 rounded-full" />
            <Skeleton className="h-7 w-16 rounded-full" />
            <Skeleton className="h-7 w-28 rounded-full" />
          </div>
        </div>
      </PageContainer>
    </Section>
  );
}

export function ProjectDetailsBodySkeleton() {
  return (
    <Section className="mt-12 pt-0 lg:mt-0" aria-hidden="true">
      <PageContainer>
        <div className="grid gap-10">
          <div className="rounded-2xl border border-border/70 bg-card/70 p-6">
            <Skeleton className="mb-6 h-7 w-44" />
            <div className="grid gap-4 md:grid-cols-3">
              {contextPlaceholders.map((_, index) => (
                <div
                  key={index}
                  className="space-y-4 rounded-2xl border border-border/75 bg-surface/65 p-5"
                >
                  <Skeleton className="h-3 w-16" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-11/12" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border/70 bg-card/70 p-6">
            <Skeleton className="mb-6 h-7 w-52" />
            <div className="grid gap-4 md:grid-cols-2">
              {detailPlaceholders.map((_, index) => (
                <div
                  key={index}
                  className="space-y-4 rounded-2xl border border-border bg-surface/65 p-5"
                >
                  <Skeleton className="h-6 w-1/2" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageContainer>
    </Section>
  );
}
