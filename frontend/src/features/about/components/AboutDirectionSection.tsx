import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { aboutCurrentDirection } from "@/features/about/data/about";

export function AboutDirectionSection() {
  return (
    <Section className="pt-6">
      <PageContainer>
        <Reveal distance={16}>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 font-mono text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
              Current direction
            </p>
            <h2 className="font-heading text-3xl leading-tight font-semibold tracking-[0.01em] text-balance sm:text-4xl lg:text-5xl">
              I am growing toward broader software ownership while keeping product quality high.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
              The short version is that I want to keep building strong product interfaces while getting closer to the APIs, data models, services, and architecture decisions that make software more dependable.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Reveal distance={18}>
            <Card className="h-full rounded-[1.6rem] border border-border/70 bg-card/75 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl">What I am leaning into</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-3">
                  {aboutCurrentDirection.focusAreas.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-border/70 bg-surface/70 px-4 py-3 text-sm leading-6 text-foreground/85"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.08} distance={18}>
            <Card className="h-full rounded-[1.6rem] border border-border/70 bg-card/75 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Teams I can help most</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-3">
                  {aboutCurrentDirection.bestFit.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-border/70 bg-surface/70 px-4 py-3 text-sm leading-6 text-foreground/85"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Reveal>
        </div>

        <Reveal delay={0.12} distance={18}>
          <div className="mt-6 rounded-[1.8rem] border border-border/70 bg-card/75 px-6 py-7 shadow-sm sm:px-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-signal">
                  Next step
                </p>
                <h3 className="mt-3 font-heading text-2xl font-semibold tracking-[0.01em] sm:text-3xl">
                  If the work looks aligned, the best next move is a real conversation.
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                  I am especially interested in software engineering work where product quality, systems thinking, and strong execution all matter.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild>
                  <Link href="/contact">
                    Contact me
                    <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/work">
                    Revisit the work
                    <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </PageContainer>
    </Section>
  );
}
