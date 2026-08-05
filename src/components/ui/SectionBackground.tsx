import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Hero-style dark wash — image stays visible, text reads on top */
export const sectionDarkOverlay =
  "bg-linear-to-t from-text/65 via-text/40 to-text/20";

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
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div
          className={cn(
            "absolute inset-0",
            sectionDarkOverlay,
            overlayClassName,
          )}
        />
      </div>

      <div className="container-content relative z-10">{children}</div>
    </section>
  );
}
