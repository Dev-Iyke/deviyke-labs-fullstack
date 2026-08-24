import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  FileText,
  MessageSquare,
} from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";

const ctaLinks = [
  {
    title: "Explore the work",
    description:
      "See selected projects and the case-study structure taking shape.",
    href: "/work",
    icon: BriefcaseBusiness,
  },
  {
    title: "Read the brief",
    description: "A recruiter-facing summary across frontend and backend tracks.",
    href: "/brief",
    icon: FileText,
  },
  {
    title: "Start a conversation",
    description: "Reach out for software engineering roles or collaboration.",
    href: "/contact",
    icon: MessageSquare,
  },
] as const;

export function HomeContactCtaSection() {
  return (
    <Section className="relative overflow-hidden pb-20 lg:pb-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-border to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-20 size-80 -translate-x-1/2 rounded-full bg-signal/12 blur-3xl"
        aria-hidden="true"
      />
      <PageContainer>
        <Reveal distance={18}>
          <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card/75 p-5 shadow-sm sm:p-8 lg:p-10">
            <div
              className="absolute -right-24 -top-24 size-72 rounded-full bg-chart-3/15 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--border)_1px,transparent_0)] opacity-20 [background-size:22px_22px]"
              aria-hidden="true"
            />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-end">
              <div>
                <p className="mb-4 font-mono text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                  Next move
                </p>
                <h2 className="max-w-2xl font-heading text-3xl leading-tight font-semibold tracking-[0.01em] text-balance sm:text-4xl lg:text-5xl">
                  Ready to build software that connects with a real system?
                </h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
                  I&apos;m available for software engineering roles, product interface work, and collaborations where thoughtful UX has to connect with business logic, APIs, and dependable workflows.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="bg-signal text-signal-foreground hover:bg-signal/85"
                  >
                    <Link href="/contact">
                      Start a conversation
                      <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/work">View work</Link>
                  </Button>
                </div>
              </div>

              <div className="grid gap-3">
                {ctaLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group grid gap-4 rounded-2xl border border-border/70 bg-background/45 p-4 transition-colors hover:border-signal/40 hover:bg-surface/70 sm:grid-cols-[3rem_1fr_auto] sm:items-center"
                    >
                      <span className="grid size-12 place-items-center rounded-2xl border border-border bg-surface text-foreground transition-colors group-hover:border-signal/35 group-hover:text-signal">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block font-heading text-xl font-medium text-foreground">
                          {item.title}
                        </span>
                        <span className="mt-1 block text-sm leading-6 text-muted-foreground">
                          {item.description}
                        </span>
                      </span>
                      <ArrowUpRight
                        className="hidden size-5 text-muted-foreground transition-colors group-hover:text-signal sm:block"
                        aria-hidden="true"
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </PageContainer>
    </Section>
  );
}
