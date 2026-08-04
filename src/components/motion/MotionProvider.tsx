"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";
import { motionEase, revealDuration } from "./tokens";

type MotionProviderProps = {
  children: ReactNode;
};

export function MotionProvider({ children }: MotionProviderProps) {
  return (
    <MotionConfig
      transition={{ duration: revealDuration, ease: motionEase }}
      reducedMotion="user"
    >
      {children}
    </MotionConfig>
  );
}
