"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useMountAnimation } from "@/components/motion";
import {
  heroDelayChildren,
  heroStaggerDelay,
  motionEase,
  revealDuration,
  revealHidden,
  revealVisible,
} from "@/components/motion/tokens";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

const heroImage =
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&h=1080&fit=crop";

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

export function LuxuryHero() {
  const mounted = useMountAnimation();
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const imageY = prefersReducedMotion ? "0%" : parallaxY;

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-svh items-center justify-center overflow-hidden"
    >
      <motion.div className="absolute inset-0 -top-[28%] h-[128%]" style={{ y: imageY }}>
        <Image
          src={heroImage}
          alt={`${siteConfig.name} exterior at golden hour`}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-linear-to-b from-text/50 via-text/35 to-text/60" />

      <motion.div
        className="relative z-10 container-content py-32 text-center text-surface md:py-40"
        initial={false}
        animate={mounted ? "visible" : false}
        variants={contentVariants}
      >
        <motion.p
          variants={itemVariants}
          className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-surface/80"
        >
          Luxurious Comfortable Guesthouse · Hawassa
        </motion.p>
        <motion.h1
          variants={itemVariants}
          className="font-display text-5xl leading-tight md:text-6xl lg:text-7xl"
        >
          {siteConfig.name}
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-surface/90 md:text-xl"
        >
          {siteConfig.tagline}
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href="/contact" size="lg">
            Ask about Stay
          </Button>
          <Button
            href="/rooms"
            variant="outline"
            size="lg"
            className="border-surface/80 text-surface hover:bg-surface/10 hover:text-surface"
          >
            View our Rooms
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
