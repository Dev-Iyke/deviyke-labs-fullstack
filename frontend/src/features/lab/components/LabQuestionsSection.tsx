import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { PageContainer } from "@/components/layout/PageContainer"
import { Section } from "@/components/layout/Section"
import { Reveal } from "@/components/motion/Reveal"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { labQuestions } from "@/features/lab/data/lab"

export function LabQuestionsSection() {
  return (
    <Section className="pt-6 pb-10 sm:pb-12 lg:pb-14">
      <PageContainer>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <Reveal distance={16}>
            <div className="max-w-xl">
              <p className="mb-4 font-mono text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                Current questions
              </p>
              <h2 className="font-heading text-3xl leading-tight font-semibold tracking-[0.01em] text-balance sm:text-4xl">
                The kind of questions that usually become the next build idea.
              </h2>
              <p className="mt-5 text-base leading-7 text-muted-foreground">
                This page will keep growing as experiments become stronger, more
                specific, and more public-safe to share. For now, it acts as a
                clearer view into the thinking that sits behind the shipped work
                and active builds.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild>
                  <Link href="/brief">
                    Open recruiter brief
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

          <Reveal delay={0.08} distance={18}>
            <Card className="rounded-[1.8rem] border border-border/70 bg-card/75 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Questions in motion</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3">
                {labQuestions.map((question, index) => (
                  <div
                    key={question}
                    className="rounded-2xl border border-border/70 bg-surface/70 px-4 py-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-signal">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm leading-6 text-foreground/85">
                        {question}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </PageContainer>
    </Section>
  )
}
