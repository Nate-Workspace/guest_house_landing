"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type PropertyHighlightImageProps = {
  src: string;
  alt: string;
};

export function PropertyHighlightImage({
  src,
  alt,
}: PropertyHighlightImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.92", "start 0.48"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0 0 100% 0)", "inset(0 0 0 0)"],
  );

  return (
    <div
      ref={ref}
      className="relative aspect-4/3 overflow-hidden rounded-lg shadow-luxury ring-1 ring-text/5"
    >
      {prefersReducedMotion ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      ) : (
        <motion.div className="relative h-full w-full" style={{ clipPath }}>
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
      )}
    </div>
  );
}
