import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProjectFeatureInventory } from "@/features/projects/components/ProjectFeatureInventory";
import type { Project, ProjectDecision } from "@/features/projects/types/project";

export function ProjectDetailBody({ project }: { project: Project }) {
  return (
    <Section className="pt-0 mt-12 lg:mt-0">
      <PageContainer>
        <div className="grid gap-16 md:gap-12 lg:gap-10">
          <Reveal distance={16}>
            <ProjectContext project={project} />
          </Reveal>

          <Reveal delay={0.08} distance={18}>
            <ProjectFeatureInventory features={project.features} />
          </Reveal>

          <Reveal delay={0.14} distance={18}>
            <DecisionList
              title="Core engineering decisions"
              decisions={project.caseStudy.decisions}
            />
          </Reveal>

          {project.caseStudy.challenges?.length ? (
            <Reveal delay={0.18} distance={18}>
              <DecisionList
                title="Challenges and tradeoffs"
                decisions={project.caseStudy.challenges}
              />
            </Reveal>
          ) : null}
        </div>
      </PageContainer>
    </Section>
  );
}

function ProjectContext({ project }: { project: Project }) {
  return (
    <Card className="border-border/70 bg-card/70">
      <CardHeader>
        <CardTitle className="text-2xl">Project context</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-3">
          <ContextBlock title="Problem" content={project.caseStudy.problem} />
          <ContextBlock title="Solution" content={project.caseStudy.approach} />
          {project.caseStudy.outcome ? (
            <ContextBlock title="Outcome" content={project.caseStudy.outcome} />
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}

function ContextBlock({ title, content }: { title: string; content: string }) {
  return (
    <div className="rounded-2xl border border-border/75 bg-surface/65 p-5">
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
        {title}
      </p>
      <p className="mt-3 text-sm leading-7 text-foreground/85 sm:text-base">
        {content}
      </p>
    </div>
  );
}

function DecisionList({
  decisions,
  title,
}: {
  decisions: readonly ProjectDecision[];
  title: string;
}) {
  return (
    <Card className="border-border/70 bg-card/70">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          {decisions.map((decision) => (
            <div
              key={decision.title}
              className="rounded-2xl border border-border bg-surface/70 p-5"
            >
              <h2 className="font-heading text-xl font-medium">
                {decision.title}
              </h2>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                {decision.description}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
