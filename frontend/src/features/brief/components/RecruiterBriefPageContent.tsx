"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { aboutTimeline } from "@/features/about/data/about";
import {
  recruiterTracks,
  type RecruiterTrackKey,
} from "@/features/brief/data/recruiterBrief";

const trackKeys: RecruiterTrackKey[] = ["frontend", "backend"];

export function RecruiterBriefPageContent() {
  const [activeTrack, setActiveTrack] = useState<RecruiterTrackKey>("frontend");
  const active = recruiterTracks[activeTrack];
  const recentTimeline = aboutTimeline.slice(0, 4);

  return (
    <main id="main-content" className="flex-1">
      <Section className="relative overflow-hidden pt-20 pb-6 sm:pt-24 sm:pb-8 lg:pt-28">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-border to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -top-16 right-0 h-80 w-80 rounded-full bg-signal/10 blur-3xl"
          aria-hidden="true"
        />
        <PageContainer>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(21rem,0.9fr)] lg:gap-10">
            <Reveal distance={16}>
              <div className="max-w-3xl">
                <p className="mb-4 font-mono text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                  Recruiter brief
                </p>

                <div
                  className="inline-flex rounded-full border border-border/70 bg-card/80 p-1"
                  role="tablist"
                  aria-label="Recruiter brief track selector"
                >
                  {trackKeys.map((trackKey) => {
                    const track = recruiterTracks[trackKey];
                    const isActive = activeTrack === trackKey;

                    return (
                      <button
                        key={trackKey}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        aria-controls={`brief-panel-${trackKey}`}
                        id={`brief-tab-${trackKey}`}
                        onClick={() => setActiveTrack(trackKey)}
                        className={`cursor-pointer rounded-full px-4 py-2 text-sm transition-colors ${
                          isActive
                            ? "bg-background text-foreground shadow-md border"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {track.tabLabel}
                      </button>
                    );
                  })}
                </div>

                <p className="mt-6 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-signal">
                  {active.eyebrow}
                </p>
                <h1 className="mt-4 font-heading text-4xl leading-tight font-semibold tracking-[0.01em] text-balance sm:text-5xl lg:text-6xl">
                  {active.title}
                </h1>
                <div
                  id={`brief-panel-${activeTrack}`}
                  role="tabpanel"
                  aria-labelledby={`brief-tab-${activeTrack}`}
                  className="mt-6 space-y-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
                >
                  {active.description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button asChild>
                    <Link href="/contact">
                      Start a conversation
                      <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <a
                      href="https://github.com/Dev-Iyke"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View GitHub
                      <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
                    </a>
                  </Button>
                  {active.cvLinks.map((item) => (
                    <Button key={item.href} asChild variant="outline">
                      <a href={item.href} download={item.download}>
                        {item.label}
                        <Download data-icon="inline-end" aria-hidden="true" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08} distance={20}>
              <Card className="h-full rounded-[1.8rem] border border-border/70 bg-card/75 py-0 shadow-sm">
                <CardHeader className="border-b border-border/70 px-6 py-6">
                  <CardTitle className="text-xl">Snapshot of how I work</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4 px-6 py-6 sm:grid-cols-2 lg:grid-cols-1">
                  {active.snapshot.map((item, index) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-border/70 bg-surface/70 p-4"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                          {item.label}
                        </p>
                        <span className="font-mono text-[0.68rem] text-signal">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-foreground/85">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </PageContainer>
      </Section>

      <Section className="pt-0 pb-4 sm:pb-5 lg:pb-6">
        <PageContainer>
          <div className="grid gap-5 lg:grid-cols-2">
            <Reveal distance={16}>
              <Card className="h-full rounded-[1.6rem] border border-border/70 bg-card/75 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-2xl">What I bring</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-3">
                    {active.strengths.map((item) => (
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

            <Reveal delay={0.08} distance={16}>
              <Card className="h-full rounded-[1.6rem] border border-border/70 bg-card/75 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-2xl">Current focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-3">
                    {active.currentFocus.map((item) => (
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
        </PageContainer>
      </Section>

      <Section className="pt-0 pb-4 sm:pb-5 lg:pb-6">
        <PageContainer>
          <Reveal distance={16}>
            <div className="max-w-3xl">
              <p className="mb-4 font-mono text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                Selected evidence
              </p>
              <h2 className="font-heading text-3xl leading-tight font-semibold tracking-[0.01em] text-balance sm:text-4xl">
                {active.evidenceLead}
              </h2>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {active.evidence.map((item, index) => (
              <Reveal key={item.title} delay={0.06 * index} distance={18}>
                <Card className="h-full rounded-[1.6rem] border border-border/70 bg-card/75 shadow-sm">
                  <CardHeader>
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-signal">
                      {item.kicker}
                    </p>
                    <CardTitle className="mt-3 text-2xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                      {item.summary}
                    </p>
                    <div className="rounded-2xl border border-border/70 bg-surface/70 p-4">
                      <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                        Evidence
                      </p>
                      <p className="mt-3 text-sm leading-6 text-foreground/85">
                        {item.evidence}
                      </p>
                    </div>
                    {"href" in item && item.href ? (
                      <Button asChild variant="outline">
                        <Link href={item.href}>
                          Open case study
                          <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
                        </Link>
                      </Button>
                    ) : null}
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal distance={16} className="mt-12">
            <Card className="rounded-[1.6rem] border border-border/70 bg-card/75 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Core stack</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2.5">
                  {active.coreStack.map((item, index) => (
                    <span
                      key={item}
                      className={`rounded-full px-3 py-1.5 text-sm ${
                        index % 4 === 0
                          ? "bg-signal/12 text-signal"
                          : index % 4 === 1
                            ? "bg-chart-3/12 text-chart-3"
                            : index % 4 === 2
                              ? "bg-chart-4/12 text-chart-4"
                              : "bg-chart-5/12 text-chart-5"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </PageContainer>
      </Section>

      <Section className="pt-0 pb-10 sm:pb-12 lg:pb-14">
        <PageContainer>
          <Reveal delay={0.08} distance={16}>
            <div className="mt-5 max-w-3xl">
              <p className="mb-4 font-mono text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                Recent timeline
              </p>
              <h2 className="font-heading text-3xl leading-tight font-semibold tracking-[0.01em] text-balance sm:text-4xl">
                A quick look at the recent path behind the project evidence.
              </h2>
            </div>
          </Reveal>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {recentTimeline.map((entry, index) => (
              <Reveal
                key={`${entry.organisation}-${entry.period}`}
                delay={0.05 * index}
                distance={18}
              >
                <div className="rounded-[1.6rem] border border-border/70 bg-card/75 p-5 shadow-sm sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-signal">
                        {entry.period}
                      </p>
                      <h3 className="mt-3 font-heading text-xl font-semibold">
                        {entry.title}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-foreground/80">
                        {entry.organisation}
                      </p>
                    </div>
                    <span className="rounded-full border border-border/70 bg-surface/70 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                    {entry.summary}
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

