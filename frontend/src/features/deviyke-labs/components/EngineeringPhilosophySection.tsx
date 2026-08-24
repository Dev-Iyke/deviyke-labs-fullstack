import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { LabProcessVisual } from "@/features/deviyke-labs/components/LabProcessVisual";
import { LabStepRow } from "@/features/deviyke-labs/components/LabStepRow";
import { labSteps } from "@/features/deviyke-labs/data/philosophy";

export function EngineeringPhilosophySection() {
  return (
    <Section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-border to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-16 top-24 h-80 w-80 rounded-full bg-signal/10 blur-3xl"
        aria-hidden="true"
      />
      <PageContainer>
        <Reveal distance={16}>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 font-mono text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
              DevIyke Labs
            </p>
            <h2 className="font-heading text-3xl leading-tight font-semibold tracking-[0.01em] text-balance sm:text-4xl lg:text-5xl">
              A product-engineering lens for turning ideas into dependable
              interfaces.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
              DevIyke Labs is the working identity behind this portfolio: a
              space for building with context, shaping usable flows, respecting data and product constraints, and documenting the reasoning behind the work.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal delay={0.08} distance={18} className="lg:sticky lg:top-28">
            <LabProcessVisual steps={labSteps} />
          </Reveal>

          <div className="grid gap-4">
            {labSteps.map((step, index) => (
              <Reveal
                key={step.title}
                delay={0.08 * (index + 1)}
                distance={20}
                className="min-h-full"
              >
                <LabStepRow step={step} />
              </Reveal>
            ))}
          </div>
        </div>
      </PageContainer>
    </Section>
  );
}

