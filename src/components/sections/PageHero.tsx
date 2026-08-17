"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { useRef } from "react";
import { pageHeroOverlay } from "@/lib/image-overlays";
import { useMountAnimation } from "@/components/motion";
import {
  heroDelayChildren,
  heroStaggerDelay,
  motionEase,
  revealDuration,
  revealHidden,
  revealVisible,
} from "@/components/motion/tokens";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  priority?: boolean;
};

const contentVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: heroStaggerDelay, delayChildren: heroDelayChildren },
  },
};

const itemVariants = {
  hidden: revealHidden,
  visible: {
    ...revealVisible,
    transition: { duration: revealDuration, ease: motionEase },
  },
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  priority = true,
}: PageHeroProps) {
  const mounted = useMountAnimation();
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);
  const imageY = prefersReducedMotion ? "0%" : parallaxY;

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[42vh] items-end overflow-hidden md:min-h-[48vh]"
    >
      <motion.div
        className="absolute inset-0 -top-[6%] h-[106%]"
        style={{ y: imageY }}
      >
        <OptimizedImage
          src={image}
          alt={imageAlt}
          fill
          priority={priority}
          className="object-cover"
          qualityPreset={priority ? "hero" : "content"}
          sizePreset="pageHero"
        />
      </motion.div>
      <div className={pageHeroOverlay} />

      <motion.div
        className="relative z-10 container-content w-full pb-12 pt-28 md:pb-16 md:pt-32"
        initial="hidden"
        animate={mounted ? "visible" : "hidden"}
        variants={contentVariants}
      >
        {eyebrow ? (
          <motion.p
            variants={itemVariants}
            className="text-xs font-medium uppercase tracking-[0.2em] text-surface/80"
          >
            {eyebrow}
          </motion.p>
        ) : null}
        <motion.h1
          variants={itemVariants}
          className="mt-3 font-display text-4xl text-surface md:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        {description ? (
          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-2xl text-base leading-relaxed text-surface/90 md:text-lg"
          >
            {description}
          </motion.p>
        ) : null}
      </motion.div>
    </section>
  );
}
