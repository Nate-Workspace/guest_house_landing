"use client";

import { motion, useReducedMotion } from "framer-motion";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState } from "react";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { preloadAdjacentImages } from "@/lib/image";
import type { GalleryImage } from "@/lib/types";
import { cn } from "@/lib/utils";

const Lightbox = dynamic(
  () => import("@/components/gallery/Lightbox").then((mod) => mod.Lightbox),
  { ssr: false },
);

type RoomGalleryProps = {
  images: string[];
  roomName: string;
};

export function RoomGallery({ images, roomName }: RoomGalleryProps) {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const prefersReducedMotion = useReducedMotion();
  const touchStartX = useRef<number | null>(null);

  const total = images.length;
  const current = ((index % total) + total) % total;

  const goTo = useCallback(
    (next: number) => {
      setIndex((next + total) % total);
    },
    [total],
  );

  const goPrev = useCallback(() => goTo(current - 1), [current, goTo]);
  const goNext = useCallback(() => goTo(current + 1), [current, goTo]);

  useEffect(() => {
    preloadAdjacentImages(images, current);
  }, [current, images]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goNext, goPrev]);

  useEffect(() => {
    thumbRefs.current[current]?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [current, prefersReducedMotion]);

  if (total === 0) {
    return null;
  }

  const lightboxImages: GalleryImage[] = images.map((src, imageIndex) => ({
    id: `${roomName}-${imageIndex}`,
    src,
    alt: `${roomName} — photo ${imageIndex + 1}`,
    category: roomName,
  }));

  return (
    <>
      <section className="section-padding bg-bg pt-12 md:pt-16 lg:pt-20">
        <div className="container-content">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                Gallery
              </p>
              <h2 className="mt-2 font-display text-2xl text-text md:text-3xl">
                Inside the room
              </h2>
            </div>
            <p className="text-sm tabular-nums text-muted">
              {current + 1} / {total}
            </p>
          </div>

          <div className="relative mt-8 md:mt-10">
            <div
              className="group relative aspect-4/3 overflow-hidden rounded-xl bg-text/5 shadow-luxury md:aspect-16/10"
              onTouchStart={(event) => {
                touchStartX.current = event.touches[0]?.clientX ?? null;
              }}
              onTouchEnd={(event) => {
                if (touchStartX.current === null) return;
                const delta =
                  event.changedTouches[0]?.clientX - touchStartX.current;
                touchStartX.current = null;
                if (Math.abs(delta) < 48) return;
                if (delta > 0) goPrev();
                else goNext();
              }}
            >
              <motion.div
                key={images[current]}
                initial={prefersReducedMotion ? false : { opacity: 0.85 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute inset-0"
              >
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="relative block h-full w-full cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                  aria-label={`View photo ${current + 1} full screen`}
                >
                  <OptimizedImage
                    src={images[current]}
                    alt={`${roomName} — photo ${current + 1}`}
                    fill
                    className="object-cover"
                    sizePreset="galleryMain"
                    qualityPreset="content"
                    priority={current === 0}
                  />
                </button>
              </motion.div>

              {total > 1 ? (
                <>
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-text/35 to-transparent" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-text/45 to-transparent" />

                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Previous photo"
                    className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 text-text shadow-md ring-1 ring-text/10 transition hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 md:left-5 md:h-12 md:w-12"
                  >
                    <ChevronIcon direction="left" />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Next photo"
                    className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 text-text shadow-md ring-1 ring-text/10 transition hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 md:right-5 md:h-12 md:w-12"
                  >
                    <ChevronIcon direction="right" />
                  </button>
                </>
              ) : null}
            </div>

            {total > 1 ? (
              <div className="mt-4 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] md:mt-5 md:gap-3 [&::-webkit-scrollbar]:hidden">
                {images.map((image, imageIndex) => {
                  const isActive = imageIndex === current;

                  return (
                    <button
                      key={image}
                      ref={(node) => {
                        thumbRefs.current[imageIndex] = node;
                      }}
                      type="button"
                      onClick={() => setIndex(imageIndex)}
                      aria-label={`Show photo ${imageIndex + 1}`}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "relative h-16 w-24 shrink-0 overflow-hidden rounded-lg ring-1 transition md:h-20 md:w-28",
                        isActive
                          ? "ring-2 ring-accent shadow-md"
                          : "ring-text/10 opacity-75 hover:opacity-100",
                      )}
                    >
                      <OptimizedImage
                        src={image}
                        alt=""
                        fill
                        className="object-cover"
                        sizePreset="thumb"
                        qualityPreset="thumb"
                        loading={isActive ? "eager" : "lazy"}
                      />
                    </button>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {lightboxOpen ? (
        <Lightbox
          open
          index={current}
          images={lightboxImages}
          onClose={() => setLightboxOpen(false)}
        />
      ) : null}
    </>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-5 w-5"
      aria-hidden="true"
    >
      {direction === "left" ? (
        <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}
