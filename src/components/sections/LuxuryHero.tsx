"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { useCallback, useEffect, useRef, useState } from "react";
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
import { siteImages } from "@/data/site-images";
import { heroHomeOverlay } from "@/lib/image-overlays";
import { IMAGE_QUALITY, preloadOptimizedImage } from "@/lib/image";
import { Button } from "@/components/ui/Button";

const heroImages = siteImages.hero.exteriorSlideshow;
const SLIDE_INTERVAL_MS = 4500;
const CROSSFADE_DURATION = 1.4;

const contentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: heroStaggerDelay,
      delayChildren: heroDelayChildren,
    },
  },
};

const itemVariants = {
  hidden: revealHidden,
  visible: {
    ...revealVisible,
    transition: { duration: revealDuration, ease: motionEase },
  },
};

function HeroExteriorSlideshow() {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const total = heroImages.length;

  const advance = useCallback(() => {
    setIndex((current) => (current + 1) % total);
  }, [total]);

  useEffect(() => {
    if (total <= 1 || prefersReducedMotion) {
      return;
    }

    const nextIndex = (index + 1) % total;
    preloadOptimizedImage(heroImages[nextIndex], 1920, IMAGE_QUALITY.hero);
  }, [index, total, prefersReducedMotion]);

  useEffect(() => {
    if (total <= 1 || prefersReducedMotion) {
      return;
    }

    const timer = window.setInterval(advance, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [advance, total, prefersReducedMotion]);

  useEffect(() => {
    if (total <= 1) {
      return;
    }

    heroImages.slice(1).forEach((src) => {
      preloadOptimizedImage(src, 1920, IMAGE_QUALITY.hero);
    });
  }, [total]);

  return (
    <>
      {heroImages.map((src, imageIndex) => {
        const isActive = imageIndex === index;

        return (
          <motion.div
            key={src}
            className="pointer-events-none absolute inset-0"
            initial={false}
            animate={{ opacity: isActive ? 1 : 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : CROSSFADE_DURATION,
              ease: motionEase,
            }}
            aria-hidden={!isActive}
          >
            <OptimizedImage
              src={src}
              alt={`${siteConfig.name} exterior — view ${imageIndex + 1}`}
              fill
              priority={imageIndex === 0}
              loading={imageIndex === 0 ? undefined : "lazy"}
              className="object-cover object-[65%_top] md:object-top"
              qualityPreset="hero"
              sizePreset="hero"
            />
          </motion.div>
        );
      })}
    </>
  );
}

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
      <motion.div
        className="absolute inset-x-0 top-0 h-[120%]"
        style={{ y: imageY }}
      >
        <HeroExteriorSlideshow />
      </motion.div>
      <div className={heroHomeOverlay} />

      <motion.div
        className="relative z-10 container-content py-32 text-center text-surface md:py-40"
        initial="hidden"
        animate={mounted ? "visible" : "hidden"}
        variants={contentVariants}
      >
        <motion.p
          variants={itemVariants}
          className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-surface/80 lg:text-sm lg:font-semibold"
        >
          Luxurious Comfortable Pension · Hawassa
        </motion.p>
        <motion.h1
          variants={itemVariants}
          className="font-display text-5xl font-normal leading-tight md:text-6xl lg:text-8xl lg:font-semibold"
        >
          {siteConfig.name}
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mx-auto mt-6 max-w-xl text-lg font-normal leading-relaxed text-surface/90 md:text-xl lg:max-w-2xl lg:text-2xl lg:font-medium"
        >
          {siteConfig.tagline}
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href="/contact" size="lg">
            Inquire About Your Stay
          </Button>
          <Button
            href="/rooms"
            variant="outline"
            size="lg"
            className="border-surface/80 text-surface hover:bg-surface/10 hover:text-surface"
          >
            View Rooms
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
