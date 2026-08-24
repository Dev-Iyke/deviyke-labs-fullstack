import { PageContainer } from "@/components/layout/PageContainer"
import { Section } from "@/components/layout/Section"
import { Reveal } from "@/components/motion/Reveal"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { labTracks } from "@/features/lab/data/lab"

export function LabTracksSection() {
  return (
    <Section className="">
      <PageContainer>
        <Reveal distance={16}>
          <div className="max-w-3xl">
            <p className="mb-4 font-mono text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
              Active tracks
            </p>
            <h2 className="font-heading text-3xl leading-tight font-semibold tracking-[0.01em] text-balance sm:text-4xl">
              The themes I keep returning to as products get more demanding.
            </h2>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {labTracks.map((track, index) => (
            <Reveal
              key={track.title}
              delay={0.06 * index}
              distance={18}
              className="min-h-full"
            >
              <Card className="h-full rounded-[1.7rem] border border-border/70 bg-card/75 shadow-sm">
                <CardHeader>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-signal">
                    {track.status}
                  </p>
                  <CardTitle className="mt-3 text-2xl">{track.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                    {track.summary}
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {track.direction.map((item, itemIndex) => (
                      <span
                        key={item}
                        className={`rounded-full px-3 py-1.5 text-sm ${
                          itemIndex % 3 === 0
                            ? "bg-signal/12 text-signal"
                            : itemIndex % 3 === 1
                              ? "bg-chart-3/12 text-chart-3"
                              : "bg-chart-4/12 text-chart-4"
                        }`}
                      >
                        {item}
                      </span>
                    ))}
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
