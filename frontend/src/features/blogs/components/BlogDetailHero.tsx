import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { blogToneStyles } from "@/features/blogs/config/blogToneStyles";
import type { Blog } from "@/features/blogs/types/blog";

export function BlogDetailHero({ blog }: { blog: Blog }) {
  const tone = blogToneStyles[blog.tone];
  const bannerLabel = blog.bannerImage?.label ?? `${blog.title} banner`;
  const bannerAlt = blog.bannerImage?.alt ?? `${blog.title} banner preview`;

  return (
    <Section className="relative overflow-hidden pt-20 pb-12 sm:pt-24 lg:pt-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-border to-transparent"
        aria-hidden="true"
      />

      <PageContainer>
        <Reveal className="max-w-6xl">
          <Button asChild variant="ghost" className="-ml-3 mb-8">
            <Link href="/blogs">
              <ArrowLeft data-icon="inline-start" aria-hidden="true" />
              Back to blogs
            </Link>
          </Button>

          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`inline-flex rounded-full border px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.16em] ${tone.badge}`}
            >
              {blog.format}
            </span>
            <span className="rounded-md border border-border bg-surface px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted-foreground">
              {blog.audience}
            </span>
            <span className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-muted-foreground">
              {blog.readTime}
            </span>
          </div>

          <p className="mt-7 font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {blog.kicker}
          </p>
          <h1 className="mt-4 max-w-5xl font-heading text-4xl leading-tight font-semibold tracking-[0.01em] text-balance sm:text-5xl lg:text-7xl">
            {blog.title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {blog.summary}
          </p>

          <div className="mt-8 overflow-hidden rounded-[2rem] border border-border/75 bg-card/75 shadow-sm dark:border-white/[0.12]">
            <div className="flex items-center gap-2 border-b border-border/70 bg-surface/70 px-5 py-4">
              <span className="size-2.5 rounded-full bg-chart-5/80" />
              <span className="size-2.5 rounded-full bg-signal/80" />
              <span className="size-2.5 rounded-full bg-chart-4/80" />
              <span className="ml-3 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                {bannerLabel}
              </span>
            </div>

            {blog.bannerImage?.src ? (
              <div className="relative aspect-[16/7] min-h-34 overflow-hidden bg-surface/60 p-3 sm:p-4 lg:p-5">
                <div className="relative h-full w-full overflow-hidden rounded-[1.4rem] border border-border/65 bg-background/65 shadow-[0_1rem_2.5rem_rgb(0_0_0/0.08)] dark:border-white/[0.08] dark:bg-background/55">
                  <Image
                    src={blog.bannerImage.src}
                    alt={bannerAlt}
                    fill
                    className="object-contain object-center"
                    sizes="(min-width: 1280px) 1100px, (min-width: 768px) 90vw, 100vw"
                    priority
                  />
                </div>
              </div>
            ) : (
              <div className="relative overflow-hidden bg-surface/55 px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
                <div
                  className={`absolute -right-12 -top-12 size-44 rounded-full blur-3xl ${tone.glow}`}
                  aria-hidden="true"
                />
                <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
                  <div
                    className={`rounded-[1.7rem] border bg-card/86 p-6 sm:p-7 ${tone.border}`}
                  >
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                      Banner slot ready
                    </p>
                    <h2 className="mt-4 font-heading text-2xl font-semibold sm:text-3xl">
                      Add the session visual when you are ready
                    </h2>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                      This detail page is already wired to receive a banner
                      image. Once you drop it in, the hero will render it inside
                      the same framed presentation window.
                    </p>
                  </div>

                  <div className="grid gap-4">
                    {blog.takeaways.slice(0, 2).map((takeaway) => (
                      <div
                        key={takeaway}
                        className="rounded-[1.5rem] border border-border/70 bg-background/82 p-5"
                      >
                        <div className="flex items-start gap-3">
                          <span
                            className={`mt-1 size-2.5 shrink-0 rounded-full ${tone.dot}`}
                          />
                          <p className="text-sm leading-7 text-foreground/84">
                            {takeaway}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border/75 bg-surface px-3 py-1 text-xs text-muted-foreground font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </PageContainer>
    </Section>
  );
}
