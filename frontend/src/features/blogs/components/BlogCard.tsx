import Link from "next/link";
import { ArrowUpRight, Layers3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { blogToneStyles } from "@/features/blogs/config/blogToneStyles";
import type { Blog } from "@/features/blogs/types/blog";

export function BlogCard({ blog }: { blog: Blog }) {
  const tone = blogToneStyles[blog.tone];

  return (
    <Card
      className={`group relative overflow-hidden border-border/70 bg-card/72 transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_1.5rem_4rem_rgb(0_0_0/0.14)] ${tone.border}`}
    >
      <div
        className={`pointer-events-none absolute -right-12 -top-12 size-36 rounded-full blur-3xl ${tone.glow}`}
        aria-hidden="true"
      />
      <CardHeader className="relative">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className={`inline-flex rounded-full border px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.16em] ${tone.badge}`}
          >
            {blog.format}
          </span>
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
            {blog.readTime}
          </span>
        </div>

        <p className="mt-5 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-muted-foreground">
          {blog.kicker}
        </p>
        <CardTitle className="mt-3 font-heading text-2xl leading-tight font-semibold sm:text-3xl">
          {blog.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="relative">
        <p className="text-sm leading-7 text-muted-foreground sm:text-base">
          {blog.summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {blog.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border/75 bg-surface/80 px-3 py-1 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          {blog.takeaways.slice(0, 2).map((takeaway) => (
            <div
              key={takeaway}
              className={`rounded-2xl border bg-surface/75 p-4 ${tone.border}`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`size-2 shrink-0 rounded-full ${tone.dot}`}
                />
                <p className="text-sm leading-6 text-foreground/84">
                  {takeaway}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-7 flex items-center justify-between gap-4 border-t border-border/70 pt-5">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Layers3 className="size-4" aria-hidden="true" />
            <span>{blog.flashcards?.length ?? 0} recall cards</span>
          </div>
          <Link
            href={`/blogs/${blog.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-signal"
          >
            Read session
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
