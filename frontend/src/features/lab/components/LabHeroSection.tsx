import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { PageContainer } from "@/components/layout/PageContainer"
import { Section } from "@/components/layout/Section"
import { Reveal } from "@/components/motion/Reveal"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { labModes } from "@/features/lab/data/lab"

const toneMap = {
  "chart-3": "bg-chart-3/12 text-chart-3",
  "chart-4": "bg-chart-4/12 text-chart-4",
  signal: "bg-signal/12 text-signal",
} as const

export function LabHeroSection() {
  return (
    <Section className="relative overflow-hidden pt-20 pb-2 sm:pt-24 sm:pb-4 lg:pt-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-border to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-16 right-0 h-80 w-80 rounded-full bg-signal/10 blur-3xl"
        aria-hidden="true"
      />
      <PageContainer>
        <Reveal distance={16}>
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 font-mono text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
              Lab
            </p>
            <h1 className="font-heading text-4xl leading-tight font-semibold tracking-[0.01em] text-balance sm:text-5xl lg:text-6xl">
              A quieter space for experiments, system notes, and product
              thinking in motion.
            </h1>
            <div className="mx-auto mt-6 max-w-3xl space-y-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              <p>
                DevIyke Labs is where I keep the exploratory side of the work:
                smaller experiments, engineering observations, and the questions
                that sit behind the more polished case studies.
              </p>
              <p>
                It is not a blog archive yet, and it is not meant to compete
                with the flagship projects. It is the part of the portfolio
                where process, curiosity, and evolving systems thinking can be
                seen more directly.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button asChild>
                <Link href="/work">
                  Revisit the work
                  <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/about">
                  See how I work
                  <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-6xl gap-5 lg:grid-cols-3">
          {labModes.map((mode, index) => (
            <Reveal
              key={mode.title}
              delay={0.06 * index}
              distance={18}
              className="min-h-full"
            >
              <Card className="h-full rounded-[1.7rem] border border-border/70 bg-card/75 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl">What this space holds</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="rounded-2xl border border-border/70 bg-surface/70 p-4">
                    <div className="flex items-center gap-3">
                      <span
                        className={`rounded-full px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.14em] ${toneMap[mode.accent]}`}
                      >
                        {mode.title}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-foreground/85">
                      {mode.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </PageContainer>
    </Section>
  )
}
