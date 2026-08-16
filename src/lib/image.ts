/** Shared Next.js image optimization settings. */

export const IMAGE_QUALITY = {
  hero: 78,
  content: 72,
  card: 68,
  thumb: 52,
  lightbox: 80,
} as const;

export type ImageQualityPreset = keyof typeof IMAGE_QUALITY;

export const IMAGE_SIZES = {
  hero: "100vw",
  pageHero: "100vw",
  galleryMain: "(max-width: 1280px) 100vw, 1280px",
  cardGrid: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  cardHalf: "(max-width: 1024px) 100vw, 50vw",
  thumb: "112px",
  masonry: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  galleryPreviewLarge: "(max-width: 768px) 100vw, 50vw",
  galleryPreviewSmall: "(max-width: 768px) 50vw, 25vw",
} as const;

export type ImageSizePreset = keyof typeof IMAGE_SIZES;

const LIGHTBOX_WIDTH = 1920;
const PRELOAD_WIDTH = 1280;

/** Next.js image optimizer URL — for preload and lightbox. */
export function buildOptimizedImageUrl(
  src: string,
  width: number,
  quality: number = IMAGE_QUALITY.content,
): string {
  if (src.startsWith("/_next/image")) {
    return src;
  }

  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;
}

export function buildLightboxImageUrl(src: string): string {
  return buildOptimizedImageUrl(src, LIGHTBOX_WIDTH, IMAGE_QUALITY.lightbox);
}

/** Warm the browser cache for an optimized variant. */
export function preloadOptimizedImage(
  src: string,
  width: number = PRELOAD_WIDTH,
  quality: number = IMAGE_QUALITY.content,
): void {
  if (typeof window === "undefined" || !src) {
    return;
  }

  const img = new window.Image();
  img.decoding = "async";
  img.src = buildOptimizedImageUrl(src, width, quality);
}

export function preloadAdjacentImages(
  images: string[],
  index: number,
  width: number = PRELOAD_WIDTH,
  quality: number = IMAGE_QUALITY.content,
): void {
  if (images.length <= 1) {
    return;
  }

  const total = images.length;
  const prev = (index - 1 + total) % total;
  const next = (index + 1) % total;

  preloadOptimizedImage(images[prev], width, quality);
  preloadOptimizedImage(images[next], width, quality);
}
