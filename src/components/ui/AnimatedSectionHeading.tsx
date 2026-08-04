"use client";

import { motion } from "framer-motion";
import {
  revealBaseDelay,
  revealHidden,
  revealViewportMargin,
  revealVisible,
} from "@/components/motion/tokens";
import type { SectionHeadingContentProps } from "./SectionHeadingContent";
import { SectionHeadingContent } from "./SectionHeadingContent";

type AnimatedSectionHeadingProps = SectionHeadingContentProps;

export function AnimatedSectionHeading(props: AnimatedSectionHeadingProps) {
  return (
    <motion.div
      initial={revealHidden}
      whileInView={revealVisible}
      viewport={{ once: true, margin: revealViewportMargin }}
      transition={{ delay: revealBaseDelay }}
    >
      <SectionHeadingContent {...props} />
    </motion.div>
  );
}
