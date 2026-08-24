import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { navigationItems } from "@/features/navigation/config/navigation";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-surface/60">
      <PageContainer className="flex flex-col gap-8 py-10 sm:py-12">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-md">
            <p className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              Let&apos;s build something worth remembering.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground underline decoration-signal/70 decoration-2 underline-offset-4 transition-colors hover:text-signal focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Start a conversation
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <nav
            className="flex flex-wrap gap-x-5 gap-y-3"
            aria-label="Footer navigation"
          >
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-3 border-t border-border/70 pt-5 font-mono text-[0.7rem] tracking-wide text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Obasi Ikechukwu</p>
          <a
            href="https://github.com/Dev-Iyke"
            target="_blank"
            rel="noreferrer"
            className="w-fit transition-colors hover:text-foreground focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            GitHub / Dev-Iyke
          </a>
        </div>
      </PageContainer>
    </footer>
  );
}
