"use client";

import { StaggerChildren, StaggerItem } from "@/components/motion";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import type { GalleryImage } from "@/lib/types";
import { cn } from "@/lib/utils";

type MasonryGalleryProps = {
  images: GalleryImage[];
  onImageClick: (index: number) => void;
  className?: string;
};

export function MasonryGallery({
  images,
  onImageClick,
  className,
}: MasonryGalleryProps) {
  return (
    <StaggerChildren
      className={cn(
        "columns-1 gap-4 sm:columns-2 lg:columns-3 [&>div]:mb-4",
        className,
      )}
    >
      {images.map((image, index) => (
        <StaggerItem key={image.id} index={index}>
          <button
            type="button"
            onClick={() => onImageClick(index)}
            className="group relative block w-full break-inside-avoid overflow-hidden rounded-lg bg-surface text-left shadow-sm ring-1 ring-text/5 transition-shadow duration-300 hover:shadow-luxury focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label={`View ${image.alt}`}
          >
            <div className="relative aspect-4/3 w-full">
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-[1.02]"
                sizePreset="masonry"
                qualityPreset="card"
                loading="lazy"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-text/0 transition-colors duration-300 group-hover:bg-text/15" />
            {image.category ? (
              <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-surface/90 px-3 py-1 text-xs font-medium uppercase tracking-wider text-text backdrop-blur-sm">
                {image.category}
              </span>
            ) : null}
          </button>
        </StaggerItem>
      ))}
    </StaggerChildren>
  );
}
