import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/button";
import { BrandLink } from "@/features/navigation/components/BrandLink";
import { DesktopNavigation } from "@/features/navigation/components/DesktopNavigation";
import { MobileNavigation } from "@/features/navigation/components/MobileNavigation";
import { ThemeToggle } from "@/features/theme/components/ThemeToggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
      <PageContainer className="flex h-16 items-center justify-between gap-4">
        <BrandLink />
        <div className="flex items-center gap-1">
          <DesktopNavigation />
          <div className="mx-1 hidden h-5 w-px bg-border md:block" />
          <ThemeToggle />
          <Button asChild className="ml-1 hidden md:inline-flex">
            <Link href="/contact">Let&apos;s talk</Link>
          </Button>
          <MobileNavigation />
        </div>
      </PageContainer>
    </header>
  );
}
