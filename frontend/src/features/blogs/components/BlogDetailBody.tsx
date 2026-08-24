import Link from "next/link";
import { Download } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { blogToneStyles } from "@/features/blogs/config/blogToneStyles";
import { BlogFlashcardsSection } from "@/features/blogs/components/BlogFlashcardsSection";
import type { Blog } from "@/features/blogs/types/blog";

export function BlogDetailBody({ blog }: { blog: Blog }) {
  const tone = blogToneStyles[blog.tone];

  return (
    <Section className="pt-0">
      <PageContainer>
        <div className="mx-auto max-w-3xl">
          <Reveal distance={16}>
            <div className="border-b border-border/70 pb-8">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground font-semibold mb-3">
                Intro
              </p>
              <p className="text-lg leading-8 text-foreground/88 sm:text-xl sm:leading-9">
                {blog.summary}
              </p>

              <div className="mt-8 border-l-2 border-border/80 pl-5 sm:pl-6">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                  In this session
                </p>
                <ul className="mt-4 space-y-3">
                  {blog.takeaways.map((takeaway) => (
                    <li key={takeaway} className="flex items-start gap-3">
                      <span
                        className={`mt-2 size-2 shrink-0 rounded-full ${tone.dot}`}
                      />
                      <span className="text-sm leading-7 text-foreground/84 sm:text-base">
                        {takeaway}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} distance={18}>
            <article className="mt-12 space-y-14 sm:space-y-16">
              {blog.sections.map((section) => (
                <section key={section.title} className="scroll-mt-24">
                  <h2 className="font-heading text-2xl font-semibold tracking-[0.01em] sm:text-3xl">
                    {section.title}
                  </h2>

                  <div className="mt-5 space-y-5">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-base leading-8 text-foreground/84 sm:text-[1.05rem] sm:leading-9"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {section.bullets?.length ? (
                    <ul className="mt-6 space-y-3">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <span
                            className={`mt-2 size-2 shrink-0 rounded-full ${tone.dot}`}
                          />
                          <span className="text-base leading-8 text-foreground/84 sm:text-[1.02rem] sm:leading-8">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}

              {blog.practicalPrompts?.length ? (
                <section>
                  <h2 className="font-heading text-2xl font-semibold tracking-[0.01em] sm:text-3xl">
                    Practical habits to carry forward
                  </h2>
                  <ul className="mt-5 space-y-3">
                    {blog.practicalPrompts.map((prompt) => (
                      <li key={prompt} className="flex items-start gap-3">
                        <span
                          className={`mt-2 size-2 shrink-0 rounded-full ${tone.dot}`}
                        />
                        <span className="text-base leading-8 text-foreground/84 sm:text-[1.02rem] sm:leading-8">
                          {prompt}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {blog.questionsToContinue?.length ? (
                <section>
                  <h2 className="font-heading text-2xl font-semibold tracking-[0.01em] sm:text-3xl">
                    Questions to continue with
                  </h2>
                  <div className="mt-5 space-y-5">
                    {blog.questionsToContinue.map((question) => (
                      <p
                        key={question}
                        className="text-base leading-8 text-foreground/84 sm:text-[1.02rem] sm:leading-8"
                      >
                        {question}
                      </p>
                    ))}
                  </div>
                </section>
              ) : null}
            </article>
          </Reveal>

          {blog.flashcards?.length ? (
            <Reveal delay={0.16} distance={18} className="mt-16">
              <BlogFlashcardsSection
                flashcards={blog.flashcards}
                tone={blog.tone}
              />
            </Reveal>
          ) : null}

          {blog.scriptDownload ? (
            <Reveal delay={0.22} distance={18} className="mt-8">
              <div className="flex justify-start sm:justify-center">
                <Button asChild variant="outline" size="lg">
                  <Link
                    href={blog.scriptDownload.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Download data-icon="inline-start" aria-hidden="true" />
                    {blog.scriptDownload.label}
                  </Link>
                </Button>
              </div>
            </Reveal>
          ) : null}
        </div>
      </PageContainer>
    </Section>
  );
}
