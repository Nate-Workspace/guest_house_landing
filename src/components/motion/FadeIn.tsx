"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  motionEase,
  revealBaseDelay,
  revealDuration,
  revealOpacity,
  revealViewportMargin,
  revealY,
} from "./tokens";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Vertical offset in px (max 28) */
  y?: number;
  /** Starting opacity (0–1, min 0.4) */
  opacity?: number;
};

export function FadeIn({
  children,
  className,
  delay = revealBaseDelay,
  y = revealY,
  opacity = revealOpacity,
}: FadeInProps) {
  const offsetY = Math.min(y, 28);
  const startOpacity = Math.max(opacity, 0.4);

  return (
    <motion.div
      initial={{ opacity: startOpacity, y: offsetY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: revealViewportMargin }}
      transition={{ delay, duration: revealDuration, ease: motionEase }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
