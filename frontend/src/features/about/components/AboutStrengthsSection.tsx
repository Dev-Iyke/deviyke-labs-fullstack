import { PageContainer } from "@/components/layout/PageContainer"
import { Section } from "@/components/layout/Section"
import { Reveal } from "@/components/motion/Reveal"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { aboutStrengths } from "@/features/about/data/about"

export function AboutStrengthsSection() {
  return (
    <Section className="pt-6">
      <PageContainer>
        <Reveal distance={16}>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 font-mono text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
              What I bring
            </p>
            <h2 className="font-heading text-3xl leading-tight font-semibold tracking-[0.01em] text-balance sm:text-4xl lg:text-5xl">
              Product-minded frontend work with stronger systems thinking behind
              it.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
              The most useful version of me on a team is usually somewhere
              between interface craft, workflow design, and the technical
              discipline needed to make the product hold together well.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {aboutStrengths.map((strength, index) => (
            <Reveal
              key={strength.title}
              delay={0.08 * index}
              distance={18}
              className="min-h-full"
            >
              <Card className="h-full rounded-[1.6rem] border border-border/70 bg-card/75 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl">
                    {strength.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                    {strength.description}
                  </p>
                  <div className="rounded-2xl border border-border/70 bg-surface/70 p-4">
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-signal">
                      In practice
                    </p>
                    <p className="mt-3 text-sm leading-6 text-foreground/85">
                      {strength.evidence}
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
