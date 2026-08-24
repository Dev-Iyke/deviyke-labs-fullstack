import { Mail, ShieldCheck, TimerReset } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/features/contact/components/ContactForm";

const contactNotes = [
  {
    icon: Mail,
    title: "Open with the context",
    description:
      "Share the role, product, collaboration idea, or problem area. A short brief with real constraints is more useful than a long vague pitch.",
  },
  {
    icon: TimerReset,
    title: "Mention the timeline",
    description:
      "If there is a launch window, hiring process, or sprint deadline, add it so I can understand urgency and respond with the right level of detail.",
  },
  {
    icon: ShieldCheck,
    title: "Keep sensitive details out",
    description:
      "Use high-level product and engineering context only. Do not send credentials, customer data, private repos, or confidential business logic here.",
  },
] as const;

export function ContactPageContent() {
  return (
    <main id="main-content" className="flex-1">
      <Section className="relative overflow-hidden pt-20 sm:pt-24 lg:pt-28">
        <div
          className="pointer-events-none absolute -right-16 top-20 size-80 rounded-full bg-signal/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-24 top-64 size-72 rounded-full bg-chart-3/10 blur-3xl"
          aria-hidden="true"
        />

        <PageContainer>
          <div className="mx-auto max-w-5xl">
            <Reveal distance={16}>
              <div>
                <p className="mb-4 font-mono text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                  Contact
                </p>
                <h1 className="max-w-4xl font-heading text-4xl leading-tight font-semibold tracking-[0.01em] text-balance sm:text-5xl lg:text-6xl">
                  Start with the problem, and I&apos;ll meet you with product and systems thinking.
                </h1>
                <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                  Reach out for software engineering roles, frontend work, junior backend opportunities, collaboration, or technical conversations around product systems and API-connected applications.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.06} distance={16}>
              <div className="mt-8 grid gap-3 md:grid-cols-3">
                {contactNotes.map((note) => {
                  const Icon = note.icon;

                  return (
                    <article
                      key={note.title}
                      className="rounded-2xl border border-border/70 bg-card/70 p-4 shadow-sm transition-colors hover:border-signal/35"
                    >
                      <span className="mb-4 grid size-11 place-items-center rounded-2xl border border-border bg-surface text-signal">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <h2 className="font-heading text-xl font-medium">
                        {note.title}
                      </h2>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {note.description}
                      </p>
                    </article>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={0.1} distance={18}>
              <div className="mt-10 max-w-4xl">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </PageContainer>
      </Section>
    </main>
  );
}
