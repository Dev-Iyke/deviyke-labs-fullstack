import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";

export function WorkIndexHero() {
  return (
    <Section className="relative overflow-hidden pb-10 md:pb-0 lg:pb-0 pt-20 sm:pt-24 lg:pt-28">
      <div
        className="pointer-events-none absolute right-8 top-16 h-64 w-64 rounded-full bg-signal/10 blur-3xl"
        aria-hidden="true"
      />
      <PageContainer>
        <div className="grid gap-8 rounded-3xl border border-border/70 bg-card/55 p-6 shadow-sm sm:p-8 lg:grid-cols-[1.25fr_0.75fr] lg:p-10">
          <Reveal className="max-w-4xl">
            <p className="mb-4 font-mono text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
              Work lab
            </p>
            <h1 className="font-heading text-4xl leading-tight font-semibold tracking-[0.01em] text-balance sm:text-5xl lg:text-6xl">
              Projects, product decisions, and engineering evidence.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              A curated archive of product work, interface systems, dashboard
              architecture, API-connected flows, and the engineering decisions
              behind them.
            </p>
          </Reveal>
          <Reveal delay={0.12} distance={18}>
            <div className="grid gap-3 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-muted-foreground">
              <div className="rounded-2xl border border-border bg-surface/70 p-4">
                Frontend architecture
              </div>
              <div className="rounded-2xl border border-border bg-surface/70 p-4">
                API-connected workflows
              </div>
              <div className="rounded-2xl border border-border bg-surface/70 p-4">
                Privacy-safe case studies
              </div>
            </div>
          </Reveal>
        </div>
      </PageContainer>
    </Section>
  );
}
