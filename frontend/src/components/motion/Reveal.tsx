"use client";

import type { ComponentProps } from "react";
import { m } from "motion/react";
import { motionDuration, motionEase } from "@/lib/motion/motion-config";

interface RevealProps extends ComponentProps<typeof m.div> {
  delay?: number;
  distance?: number;
}

export function Reveal({
  children,
  delay = 0,
  distance = 18,
  ...props
}: RevealProps) {
  return (
    <m.div
      initial={{ opacity: 0, y: distance }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: motionDuration.slow, delay, ease: motionEase }}
      {...props}
    >
      {children}
    </m.div>
  );
}
