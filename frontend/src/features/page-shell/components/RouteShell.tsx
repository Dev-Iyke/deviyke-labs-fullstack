import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";

interface RouteShellProps {
  eyebrow: string;
  title: string;
  description: string;
  notes: readonly string[];
  primaryHref?: string;
  primaryLabel?: string;
}

export function RouteShell({
  description,
  eyebrow,
  notes,
  primaryHref = "/",
  primaryLabel = "Back home",
  title,
}: RouteShellProps) {
  return (
    <main id="main-content" className="flex-1">
      <Section className="relative overflow-hidden pt-20 sm:pt-24 lg:pt-28">
        <div
          className="pointer-events-none absolute -right-16 top-20 size-80 rounded-full bg-signal/10 blur-3xl"
          aria-hidden="true"
        />
        <PageContainer>
          <Reveal distance={16}>
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-4 font-mono text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                {eyebrow}
              </p>
              <h1 className="font-heading text-4xl leading-tight font-semibold tracking-[0.01em] text-balance sm:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                {description}
              </p>
              <div className="mt-8">
                <Button asChild variant="outline">
                  <Link href={primaryHref}>
                    {primaryLabel}
                    <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-3">
            {notes.map((note, index) => (
              <Reveal
                key={note}
                delay={0.08 * index}
                distance={18}
                className="min-h-full"
              >
                <div className="h-full rounded-3xl border border-border/70 bg-card/70 p-5 shadow-sm">
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
    </main>
  );
}
