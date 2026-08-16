import { OptimizedImage } from "@/components/ui/OptimizedImage";
import Link from "next/link";
import type { Attraction } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

type AttractionCardProps = {
  attraction: Attraction;
  href?: string;
  className?: string;
};

export function AttractionCard({
  attraction,
  href,
  className,
}: AttractionCardProps) {
  const image = (
    <div className="relative aspect-4/3 overflow-hidden rounded-lg">
      <OptimizedImage
        src={attraction.image}
        alt={attraction.name}
        fill
        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
        sizePreset="cardGrid"
        qualityPreset="card"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-linear-to-t from-text/50 to-transparent" />
      <div className="absolute bottom-4 left-4">
        <Badge
          variant="accent"
          className="bg-surface/90 text-accent backdrop-blur-sm"
        >
          {attraction.distance}
        </Badge>
      </div>
    </div>
  );

  return (
    <article className={cn("group flex flex-col", className)}>
      {href ? <Link href={href}>{image}</Link> : image}

      <div className="mt-5">
        {href ? (
          <h3 className="font-display text-xl text-text">
            <Link
              href={href}
              className="transition-colors hover:text-accent"
            >
              {attraction.name}
            </Link>
          </h3>
        ) : (
          <h3 className="font-display text-xl text-text">{attraction.name}</h3>
        )}
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {attraction.description}
        </p>
      </div>
    </article>
  );
}
