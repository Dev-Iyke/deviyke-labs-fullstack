"use client";

import { m } from "motion/react";
import { heroSequence, motionDuration, motionEase } from "@/lib/motion/motion-config";

export function HeroAtmosphere() {
  return (
    <m.div
      className="pointer-events-none absolute inset-0 -z-10 opacity-60 dark:opacity-45"
      initial={{ opacity: 0, scale: 1.04 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: motionDuration.slow,
        delay: heroSequence.atmosphere,
        ease: motionEase,
      }}
      aria-hidden="true"
    >
      <div className="absolute top-[-15rem] left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-signal/12 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
    </m.div>
  );
}
