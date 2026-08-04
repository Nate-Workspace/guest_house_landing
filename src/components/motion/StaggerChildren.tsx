"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  maxStaggerItems,
  revealBaseDelay,
  revealHidden,
  revealViewportMargin,
  revealVisible,
  staggerDelay,
} from "./tokens";

type StaggerChildrenProps = {
  children: ReactNode;
  className?: string;
};

export function StaggerChildren({ children, className }: StaggerChildrenProps) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: revealViewportMargin }}
      variants={{
        hidden: {},
        visible: {},
      }}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  index?: number;
};

export function StaggerItem({
  children,
  className,
  index = 0,
}: StaggerItemProps) {
  const delay =
    revealBaseDelay + Math.min(index, maxStaggerItems - 1) * staggerDelay;

  return (
    <motion.div
      className={cn(className)}
      variants={{
        hidden: revealHidden,
        visible: {
          ...revealVisible,
          transition: { delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
