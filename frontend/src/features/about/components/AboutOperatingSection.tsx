import { PageContainer } from "@/components/layout/PageContainer"
import { Section } from "@/components/layout/Section"
import { Reveal } from "@/components/motion/Reveal"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { aboutOperatingPrinciples } from "@/features/about/data/about"

export function AboutOperatingSection() {
  return (
    <Section className="pt-6">
      <PageContainer>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <Reveal distance={16}>
            <div className="max-w-xl">
              <p className="mb-4 font-mono text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                How I work
              </p>
              <h2 className="font-heading text-3xl leading-tight font-semibold tracking-[0.01em] text-balance sm:text-4xl">
                My default operating rhythm is clarity first, then polish,
                then resilience.
              </h2>
              <p className="mt-5 text-base leading-7 text-muted-foreground">
                I usually work best when the product flow is understood, the
                engineering boundaries are clean enough to trust, and the final
                interaction quality feels deliberate instead of rushed.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {aboutOperatingPrinciples.map((principle, index) => (
              <Reveal
                key={principle.step}
                delay={0.06 * index}
                distance={18}
              >
                <Card className="rounded-[1.5rem] border border-border/70 bg-card/75 shadow-sm">
                  <CardHeader className="flex flex-row items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-signal">
                        {principle.step}
                      </p>
                      <CardTitle className="mt-3 text-xl">
                        {principle.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                      {principle.description}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </PageContainer>
    </Section>
  )
}
