import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";

const notes = [
  "Fragments from internal talks, team learning sessions, and knowledge-sharing work.",
  "Each entry is arranged for reading, not dumped in raw presentation-script form.",
  "Where useful, the detail page also includes flashcards for quick review and reuse.",
] as const;

export function BlogIndexHero() {
  return (
    <Section className="relative overflow-hidden pt-20 sm:pt-24 lg:pt-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-border to-transparent"
        aria-hidden="true"
      />
      <PageContainer>
        <Reveal distance={16}>
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Notes, sessions, and knowledge systems
            </p>
            <h1 className="font-heading text-4xl leading-tight font-semibold tracking-[0.01em] text-balance sm:text-5xl lg:text-6xl">
              Talks that turn experience into something reusable
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              This space holds knowledge-sharing sessions, practical reflections,
              and presentation fragments that can still be useful after the room
              is quiet.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
          {notes.map((note, index) => (
            <Reveal key={note} delay={0.08 * index} distance={16}>
              <div className="h-full rounded-3xl border border-border/70 bg-card/72 p-5">
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-signal">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </PageContainer>
    </Section>
  );
}
