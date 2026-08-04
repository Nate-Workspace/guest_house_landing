"use client";

import { motion } from "framer-motion";
import type { SectionHeadingContentProps } from "./SectionHeadingContent";
import { SectionHeadingContent } from "./SectionHeadingContent";

type AnimatedSectionHeadingProps = SectionHeadingContentProps;

export function AnimatedSectionHeading(props: AnimatedSectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <SectionHeadingContent {...props} />
    </motion.div>
  );
}
