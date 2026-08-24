import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { ProjectStatusBadge } from "@/features/projects/components/ProjectStatusBadge";
import { TechnologyList } from "@/features/projects/components/TechnologyList";
import type { Project } from "@/features/projects/types/project";

export function ProjectDetailHero({ project }: { project: Project }) {
  const externalLink = project.links.find((link) => link.kind !== "case-study");
  const primaryScreenshot = project.caseStudy.screenshots?.find(
    (screenshot) => !!screenshot.src,
  );
  const bannerLabel =
    primaryScreenshot?.label ?? `${project.title} interface preview`;
  const bannerImage = project.heroImage
    ? project.heroImage
    : primaryScreenshot?.src
      ? {
          alt: primaryScreenshot.alt ?? primaryScreenshot.label,
          src: primaryScreenshot.src,
        }
      : undefined;
  const heroImageAlt = bannerImage?.alt ?? `${project.title} banner preview`;

  return (
    <Section className="relative overflow-hidden pt-20 pb-0 sm:pt-24 sm:pb-0 lg:pt-28 lg:pb-0">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-border to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-20 right-0 h-80 w-80 rounded-full bg-signal/12 blur-3xl"
        aria-hidden="true"
      />
      <PageContainer>
        <Reveal className="max-w-6xl">
          <Button asChild variant="ghost" className="-ml-3 mb-8">
            <Link href="/work">
              <ArrowLeft data-icon="inline-start" aria-hidden="true" />
              Back to work
            </Link>
          </Button>

          <div className="flex flex-wrap items-center gap-3">
            <ProjectStatusBadge status={project.evidenceStatus} />
            <span className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-muted-foreground">
              {project.timeframe}
            </span>
            {project.projectType ? (
              <span className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted-foreground">
                {project.projectType}
              </span>
            ) : null}
          </div>

          <p className="mt-7 font-mono text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
            {project.kicker}
          </p>
          <h1 className="mt-4 max-w-4xl font-heading text-4xl leading-tight font-semibold tracking-[0.01em] text-balance sm:text-5xl lg:text-7xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {project.summary}
          </p>

          <div className="mt-8 overflow-hidden rounded-[2rem] border border-border/75 bg-card/75 shadow-sm dark:border-white/[0.12]">
            <div className="flex items-center gap-2 border-b border-border/70 bg-surface/70 px-5 py-4">
              <span className="size-2.5 rounded-full bg-chart-5/80" />
              <span className="size-2.5 rounded-full bg-signal/80" />
              <span className="size-2.5 rounded-full bg-chart-4/80" />
              <span className="ml-3 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                {bannerLabel}
              </span>
            </div>
            {bannerImage ? (
              <div className="relative aspect-[16/7] min-h-34 overflow-hidden bg-surface/60 p-3 sm:p-4 lg:p-5">
                <div className="relative h-full w-full overflow-hidden rounded-[1.4rem] border border-border/65 bg-background/65 shadow-[0_1rem_2.5rem_rgb(0_0_0/0.08)] dark:border-white/[0.08] dark:bg-background/55">
                  <Image
                    src={bannerImage.src}
                    alt={heroImageAlt}
                    fill
                    className="object-contain object-top"
                    sizes="(min-width: 1280px) 1100px, (min-width: 768px) 90vw, 100vw"
                    priority
                  />
                </div>
              </div>
            ) : (
              <div className="relative flex aspect-[16/9] min-h-64 items-center justify-center overflow-hidden bg-surface/60 p-6 sm:p-10">
                <div
                  className="absolute left-10 top-10 h-32 w-32 rounded-full bg-signal/15 blur-3xl"
                  aria-hidden="true"
                />
                <div
                  className="absolute bottom-6 right-6 h-40 w-40 rounded-full bg-chart-3/15 blur-3xl"
                  aria-hidden="true"
                />
                <div className="relative grid w-full max-w-4xl gap-4 rounded-3xl border border-border/70 bg-background/80 p-5 shadow-2xl shadow-black/10 dark:border-white/[0.1] dark:bg-background/70">
                  <div className="grid gap-3 sm:grid-cols-[1fr_0.75fr]">
                    <div className="rounded-2xl border border-border/70 bg-card/80 p-4">
                      <div className="h-3 w-32 rounded-full bg-signal/35" />
                      <div className="mt-4 grid gap-2">
                        <div className="h-3 rounded-full bg-foreground/14" />
                        <div className="h-3 w-4/5 rounded-full bg-foreground/10" />
                        <div className="h-3 w-3/5 rounded-full bg-foreground/10" />
                      </div>
                    </div>
                    <div className="rounded-2xl border border-border/70 bg-card/80 p-4">
                      <div className="h-20 rounded-2xl bg-chart-2/18" />
                      <div className="mt-3 h-3 w-2/3 rounded-full bg-foreground/12" />
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    <div className="h-24 rounded-2xl border border-border/70 bg-signal/12" />
                    <div className="h-24 rounded-2xl border border-border/70 bg-chart-3/12" />
                    <div className="h-24 rounded-2xl border border-border/70 bg-chart-4/12" />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="flex-1">
              <p className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                Tools used
              </p>
              <TechnologyList technologies={project.stack} />
            </div>
            {externalLink ? (
              <Button asChild variant="outline" className="sm:ml-auto">
                <Link
                  href={externalLink.href}
                  target={
                    externalLink.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    externalLink.href.startsWith("http")
                      ? "noreferrer noopener"
                      : undefined
                  }
                >
                  {externalLink.label}
                  <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
                </Link>
              </Button>
            ) : null}
          </div>
        </Reveal>
      </PageContainer>
    </Section>
  );
}
