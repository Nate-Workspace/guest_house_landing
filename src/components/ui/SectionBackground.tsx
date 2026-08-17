import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { sectionBackgroundOverlay } from "@/lib/image-overlays";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionBackgroundProps = {
  image: string;
  imageAlt: string;
  children: ReactNode;
  className?: string;
  overlayClassName?: string;
};

export function SectionBackground({
  image,
  imageAlt,
  children,
  className,
  overlayClassName,
}: SectionBackgroundProps) {
  return (
    <section
      className={cn(
        "section-padding section-divider relative overflow-hidden",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <OptimizedImage
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          qualityPreset="content"
          sizePreset="hero"
          loading="lazy"
        />
        <div className={cn(sectionBackgroundOverlay, overlayClassName)} />
      </div>

      <div className="container-content relative z-10">{children}</div>
    </section>
  );
}
