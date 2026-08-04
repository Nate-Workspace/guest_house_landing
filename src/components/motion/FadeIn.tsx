"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  revealBaseDelay,
  revealOpacity,
  revealViewportMargin,
  revealY,
} from "./tokens";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Vertical offset in px (max 20) */
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
  const offsetY = Math.min(y, 20);
  const startOpacity = Math.max(opacity, 0.4);

  return (
    <motion.div
      initial={{ opacity: startOpacity, y: offsetY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: revealViewportMargin }}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
