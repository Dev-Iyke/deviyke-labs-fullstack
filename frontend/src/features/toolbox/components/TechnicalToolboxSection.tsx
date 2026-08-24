import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { ToolboxGroupPanel } from "@/features/toolbox/components/ToolboxGroupPanel";
import { ToolboxSignalBoard } from "@/features/toolbox/components/ToolboxSignalBoard";
import { toolboxGroups } from "@/features/toolbox/data/toolbox";

export function TechnicalToolboxSection() {
  return (
    <Section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute left-0 top-24 h-72 w-72 rounded-full bg-chart-2/8 blur-3xl"
        aria-hidden="true"
      />
      <PageContainer>
        <Reveal distance={16}>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 font-mono text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
              Technical toolbox
            </p>
            <h2 className="font-heading text-3xl leading-tight font-semibold tracking-[0.01em] text-balance sm:text-4xl lg:text-5xl">
              A stack organized around product outcomes, not decoration.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
              These are the tools and patterns I reach for to build interfaces
              that are fast, API-aware, maintainable, and ready to grow with the
              product.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08} distance={18}>
          <div className="mt-10">
            <ToolboxSignalBoard />
          </div>
        </Reveal>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {toolboxGroups.map((group, index) => (
            <Reveal
              key={group.title}
              delay={0.08 * (index + 1)}
              distance={20}
              className="min-h-full"
            >
              <ToolboxGroupPanel group={group} />
            </Reveal>
          ))}
        </div>
      </PageContainer>
    </Section>
  );
}
