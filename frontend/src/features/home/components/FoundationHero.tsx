import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HeroAtmosphere } from "@/features/home/components/HeroAtmosphere";
import { heroSequence } from "@/lib/motion/motion-config";

export function FoundationHero() {
  return (
    <Section className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden">
      <HeroAtmosphere />
      <PageContainer>
        <div className="flex max-w-5xl flex-col items-center md:items-start">
          <Reveal delay={heroSequence.availability} distance={12}>
            <Badge
              variant="outline"
              className="mb-6 gap-2 border-signal/35 bg-signal/8 px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-foreground"
            >
              <span className="size-1.5 rounded-full bg-signal shadow-[0_0_0.75rem_var(--signal)]" />
              Available for meaningful work
            </Badge>
          </Reveal>
          <Reveal delay={heroSequence.eyebrow} distance={14}>
            <p className="mb-4 text-center font-mono text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase sm:text-sm md:text-start">
              Software Engineer
            </p>
          </Reveal>
          <Reveal delay={heroSequence.headline} distance={22}>
            <h1 className="max-w-5xl text-center font-heading text-4xl leading-[1.1] font-semibold tracking-[0.015em] text-balance sm:text-5xl md:text-start md:text-6xl lg:text-7xl xl:text-8xl">
              I build software that&apos;s intuitive on the surface and dependable underneath.
            </h1>
          </Reveal>
          <Reveal delay={heroSequence.description}>
            <p className="mt-7 max-w-2xl text-center text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8 md:text-start">
              I&apos;m Obasi Ikechukwu. I turn product ideas into reliable software through thoughtful frontend engineering, dependable backend foundations, and modern web technologies.
            </p>
          </Reveal>
          <Reveal
            delay={heroSequence.actions}
            className="flex w-full justify-center md:w-auto md:justify-start"
          >
            <div className="mt-9 flex flex-row flex-wrap justify-center gap-3 md:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-signal text-signal-foreground hover:bg-signal/85"
              >
                <Link href="#selected-work">
                  Explore selected work
                  <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/brief">View recruiter brief</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </PageContainer>
    </Section>
  );
}
