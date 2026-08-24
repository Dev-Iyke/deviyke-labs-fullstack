import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { CapabilityCard } from "@/features/capabilities/components/CapabilityCard";
import { capabilities } from "@/features/capabilities/data/capabilities";

export function CapabilityNarrativeSection() {
  return (
    <Section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute left-0 top-24 h-72 w-72 rounded-full bg-signal/8 blur-3xl"
        aria-hidden="true"
      />
      <PageContainer>
        <Reveal distance={16}>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 font-mono text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
              What I bring
            </p>
            <h2 className="font-heading text-3xl leading-tight font-semibold tracking-[0.01em] text-balance sm:text-4xl lg:text-5xl">
              Interfaces that solve product problems and hold up in real
              systems.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
              I lead with the interface, but I build it with the surrounding
              system in mind: data contracts, server state, validation,
              collaboration with backend teams, and the operational details
              that make a product feel reliable.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {capabilities.map((capability, index) => (
            <Reveal
              key={capability.title}
              delay={0.08 * index}
              distance={20}
              className="min-h-full"
            >
              <CapabilityCard capability={capability} />
            </Reveal>
          ))}
        </div>
      </PageContainer>
    </Section>
  );
}
