import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";

export function AboutHeroSection() {
  return (
    <Section className="relative overflow-hidden pt-20 pb-10 sm:pt-24 sm:pb-12 lg:pt-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-border to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-16 right-0 h-80 w-80 rounded-full bg-signal/10 blur-3xl"
        aria-hidden="true"
      />
      <PageContainer>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(22rem,0.85fr)] lg:gap-10">
          <Reveal distance={16}>
            <div className="max-w-3xl">
              <p className="mb-4 font-mono text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                About
              </p>
              <h1 className="font-heading text-4xl leading-tight font-semibold tracking-[0.01em] text-balance sm:text-5xl lg:text-6xl">
                I build software where interface quality, business logic, and system thinking meet.
              </h1>
              <div className="mt-6 space-y-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                <p>
                  I am a software engineer who enjoys working where interface quality, business logic, and system thinking meet.
                </p>
                <p>
                  Most of my professional experience has been frontend-focused, but my approach has always extended beyond the interface—thinking about backend contracts, data flow, operational edge cases, and how systems can evolve long after the first release.
                </p>
                <p>
                  The goal is not just to make screens look good. It is to make ambitious products easier to use, easier to extend, and easier for teams to trust.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild>
                  <Link href="/work">
                    Explore selected work
                    <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">
                    Start a conversation
                    <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} distance={20}>
            <div className="relative min-h-[24rem] overflow-hidden rounded-[2rem] border border-border/70 bg-card/75 shadow-sm sm:min-h-[32rem] lg:min-h-[44rem]">
              <Image
                src="/images/iyke.jpeg"
                alt="Portrait of Obasi Ikechukwu"
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 32rem, 100vw"
                priority
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black/60 via-black/18 to-transparent" />
              <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
                Software engineer
              </div>
              <div className="absolute right-5 bottom-5 max-w-xs rounded-2xl border border-white/12 bg-black/30 px-4 py-3 text-sm leading-6 text-white/88 backdrop-blur-sm">
                Building software with thoughtful interfaces, dependable backend foundations, and room for scale.
              </div>
            </div>
          </Reveal>
        </div>
      </PageContainer>
    </Section>
  );
}
