"use client";

import type { ReactNode } from "react";
import { domAnimation, LazyMotion, MotionConfig } from "motion/react";
import { motionDuration, motionEase } from "@/lib/motion/motion-config";

export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig
        reducedMotion="user"
        transition={{ duration: motionDuration.normal, ease: motionEase }}
      >
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}
