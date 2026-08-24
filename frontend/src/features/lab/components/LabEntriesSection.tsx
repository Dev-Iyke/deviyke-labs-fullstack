import { PageContainer } from "@/components/layout/PageContainer"
import { Section } from "@/components/layout/Section"
import { Reveal } from "@/components/motion/Reveal"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { labEntries } from "@/features/lab/data/lab"

export function LabEntriesSection() {
  return (
    <Section className="pt-0 pb-6 sm:pb-8">
      <PageContainer>
        <Reveal distance={16}>
          <div className="max-w-3xl">
            <p className="mb-4 font-mono text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
              Working notes
            </p>
            <h2 className="font-heading text-3xl leading-tight font-semibold tracking-[0.01em] text-balance sm:text-4xl">
              Not finished essays — more like signals of what I am refining.
            </h2>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {labEntries.map((entry, index) => (
            <Reveal
              key={entry.title}
              delay={0.06 * index}
              distance={18}
              className="min-h-full"
            >
              <Card className="h-full rounded-[1.7rem] border border-border/70 bg-card/75 shadow-sm">
                <CardHeader>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-signal">
                    {entry.category}
                  </p>
                  <CardTitle className="mt-3 text-2xl">{entry.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                    {entry.description}
                  </p>
                  <div className="rounded-2xl border border-border/70 bg-surface/70 p-4">
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                      Why it matters
                    </p>
                    <p className="mt-3 text-sm leading-6 text-foreground/85">
                      {entry.outcome}
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
