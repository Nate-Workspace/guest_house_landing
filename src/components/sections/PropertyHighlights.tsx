import Image from "next/image";
import type { PropertyHighlight } from "@/lib/types";
import { cn } from "@/lib/utils";

type PropertyHighlightsProps = {
  highlights: PropertyHighlight[];
};

export function PropertyHighlights({ highlights }: PropertyHighlightsProps) {
  return (
    <section className="section-padding section-divider bg-surface">
      <div className="container-content">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          The property
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl text-text md:text-4xl lg:text-5xl">
          Spaces crafted for slow living
        </h2>

        <div className="mt-14 space-y-20 md:space-y-28">
          {highlights.map((highlight, index) => (
            <div
              key={highlight.id}
              className={cn(
                "grid items-center gap-8 lg:grid-cols-2 lg:gap-16",
                index % 2 === 1 && "lg:[&>div:first-child]:order-2",
              )}
            >
              <div className="relative aspect-4/3 overflow-hidden rounded-lg shadow-luxury ring-1 ring-text/5">
                <Image
                  src={highlight.image}
                  alt={highlight.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div>
                <h3 className="font-display text-2xl text-text md:text-3xl">
                  {highlight.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
