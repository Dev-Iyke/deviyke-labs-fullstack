import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProjectStatusBadge } from "@/features/projects/components/ProjectStatusBadge";
import { TechnologyList } from "@/features/projects/components/TechnologyList";
import type { Project } from "@/features/projects/types/project";

export function ProjectCard({ project }: { project: Project }) {
  const externalLink = project.links.find((link) => link.kind !== "case-study");
  const caseStudyHref = `/work/${project.slug}`;

  return (
    <Card className="relative h-full border-border/70 bg-card/70 shadow-sm transition-all duration-300 hover:-translate-y-[1px] hover:border-signal/45 hover:shadow-[0_1.5rem_4rem_rgb(0_0_0/0.18)]">
      <CardHeader className="gap-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="mb-3 font-mono text-[0.7rem] font-medium tracking-[0.18em] text-muted-foreground uppercase">
              {project.kicker}
            </p>
            <CardTitle className="text-2xl leading-tight sm:text-3xl">
              {project.title}
            </CardTitle>
          </div>
          <ProjectStatusBadge status={project.evidenceStatus} />
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-7">
        <p className="text-sm leading-7 text-muted-foreground sm:text-base">
          {project.summary}
        </p>

        <div className="grid gap-4 rounded-2xl border border-border/70 bg-surface/70 p-4 sm:grid-cols-2">
          <ProjectMeta label="Role" value={project.role} />
          <ProjectMeta label="Timeframe" value={project.timeframe} />
        </div>

        <div>
          <p className="mb-3 font-mono text-[0.68rem] font-medium tracking-[0.16em] text-muted-foreground uppercase">
            Highlights
          </p>
          <ul className="space-y-3 text-sm leading-6 text-foreground/85">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <span
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-signal"
                  aria-hidden="true"
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <TechnologyList technologies={project.stack} />
      </CardContent>
      <CardFooter className="mt-auto justify-between gap-4 border-border/70 bg-surface/55">
        <Link
          href={caseStudyHref}
          className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-signal"
        >
          View case study
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
        {externalLink ? (
          <Link
            href={externalLink.href}
            className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            target={externalLink.href.startsWith("http") ? "_blank" : undefined}
            rel={
              externalLink.href.startsWith("http")
                ? "noreferrer noopener"
                : undefined
            }
          >
            {externalLink.label}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        ) : null}
      </CardFooter>
    </Card>
  );
}

function ProjectMeta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="mb-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </p>
      <p className="text-sm font-medium text-foreground">{value}</p>
    </div>
  );
}
