import { PageContainer } from "@/components/layout/PageContainer"
import { Section } from "@/components/layout/Section"
import { Reveal } from "@/components/motion/Reveal"
import { cn } from "@/lib/utils"
import { aboutTimeline } from "@/features/about/data/about"

export function AboutTimelineSection() {
  const timelineEntries = [...aboutTimeline].reverse()

  return (
    <Section className="pt-2 pb-10 sm:pb-12 lg:pb-14">
      <PageContainer>
        <Reveal distance={16}>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 font-mono text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
              Timeline
            </p>
            <h2 className="font-heading text-3xl leading-tight font-semibold tracking-[0.01em] text-balance sm:text-4xl lg:text-5xl">
              The path behind the work, shaped as a connected build story.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
              A lighter timeline of the roles, product shifts, and major stops
              that shaped how I now think about frontend craft, workflow
              complexity, and backend-aware delivery.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-12">
          <div
            className="pointer-events-none absolute left-4 top-0 bottom-0 w-px bg-linear-to-b from-signal/10 via-signal/60 to-chart-4/20 lg:left-1/2 lg:-translate-x-1/2"
            aria-hidden="true"
          />

          <div className="grid gap-6 lg:gap-7">
            {timelineEntries.map((entry, index) => {
              const isLeft = index % 2 === 0

              return (
                <Reveal
                  key={`${entry.organisation}-${entry.period}`}
                  delay={0.05 * index}
                  distance={18}
                >
                  <div className="relative grid gap-4 lg:grid-cols-2 lg:gap-10">
                    <div
                      className={cn(
                        "pl-14 lg:pl-0",
                        isLeft ? "lg:pr-12" : "lg:col-start-2 lg:pl-12",
                      )}
                    >
                      <div className="relative overflow-hidden rounded-[1.7rem] border border-border/70 bg-card/80 p-5 shadow-sm backdrop-blur-sm sm:p-6">
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div>
                            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-signal">
                              {entry.period}
                            </p>
                            <h3 className="mt-3 font-heading text-xl font-semibold sm:text-2xl">
                              {entry.title}
                            </h3>
                            <p className="mt-2 text-sm font-medium text-foreground/80">
                              {entry.organisation}
                            </p>
                          </div>
                          <span className="rounded-full border border-border/70 bg-surface/70 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted-foreground">
                            Stop {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>

                        <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                          {entry.summary}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2.5">
                          {entry.notes.slice(0, 2).map((note, noteIndex) => (
                            <span
                              key={note}
                              className={cn(
                                "rounded-md lg:rounded-lg px-3 py-1.5 text-sm",
                                noteIndex % 2 === 0
                                  ? "bg-signal/12 text-signal"
                                  : "bg-chart-3/12 text-chart-3",
                              )}
                            >
                              {note}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div
                      className={cn(
                        "hidden lg:block",
                        isLeft ? "lg:col-start-2" : "lg:col-start-1 lg:row-start-1",
                      )}
                    />

                    <div
                      className="absolute left-4 top-9 flex -translate-x-1/2 items-center lg:left-1/2"
                      aria-hidden="true"
                    >
                      <span className="absolute h-10 w-10 rounded-full bg-signal/15 blur-xl" />
                      <span className="relative block h-4 w-4 rounded-full border-4 border-background bg-signal shadow-[0_0_0_6px_rgba(255,255,255,0.04)]" />
                    </div>

                    <div
                      className={cn(
                        "pointer-events-none absolute left-4 top-9 h-px w-8 -translate-y-1/2 bg-linear-to-r from-signal/70 to-transparent lg:w-14",
                        isLeft
                          ? "lg:left-[calc(50%-3.5rem)] lg:bg-linear-to-l"
                          : "lg:left-1/2 lg:bg-linear-to-r",
                      )}
                      aria-hidden="true"
                    />
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </PageContainer>
    </Section>
  )
}
