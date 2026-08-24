"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  isActiveRoute,
  navigationItems,
} from "@/features/navigation/config/navigation";
import { cn } from "@/lib/utils";

export function MobileNavigation() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open navigation"
        >
          <Menu aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[min(88vw,22rem)] border-border/80 bg-background/95 backdrop-blur-xl">
        <SheetHeader className="border-b border-border px-5 py-5">
          <SheetTitle>Navigate</SheetTitle>
          <SheetDescription>
            Explore the work, approach, and experiments.
          </SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-3" aria-label="Mobile navigation">
          {navigationItems.map((item) => {
            const isActive = isActiveRoute(pathname, item.href);

            return (
              <SheetClose asChild key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    isActive && "bg-muted text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              </SheetClose>
            );
          })}
          <SheetClose asChild>
            <Link
              href="/contact"
              className="mt-4 rounded-lg bg-signal px-3 py-3 text-center text-sm font-semibold text-signal-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Start a conversation
            </Link>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
