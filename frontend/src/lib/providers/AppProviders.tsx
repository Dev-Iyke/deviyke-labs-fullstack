"use client";

import type { ReactNode } from "react";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ReactQueryProvider from "@/lib/providers/ReactQueryProvider";
import { ThemeProvider } from "@/lib/providers/ThemeProvider";

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <MotionProvider>
        <ReactQueryProvider>
          <TooltipProvider>{children}</TooltipProvider>
          <Toaster richColors />
        </ReactQueryProvider>
      </MotionProvider>
    </ThemeProvider>
  );
}
