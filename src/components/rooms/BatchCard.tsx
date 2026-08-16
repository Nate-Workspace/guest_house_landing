import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { RoomBatch } from "@/lib/types";
import { cn } from "@/lib/utils";

export type BatchCardProps = {
  batch: RoomBatch;
  className?: string;
};

export function BatchCard({ batch, className }: BatchCardProps) {
  const showPrice = siteConfig.features.showPrices && batch.price;
  const batchHref = `/rooms/${batch.slug}`;
  const roomCount = batch.units.length;
  const roomCountLabel = `${roomCount} room${roomCount === 1 ? "" : "s"}`;

  return (
    <article className={cn("flex flex-col", className)}>
      <Link
        href={batchHref}
        className="group relative block aspect-4/3 overflow-hidden rounded-lg"
      >
        <Image
          src={batch.images[0]}
          alt={batch.name}
          fill
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-text/65 via-text/15 to-transparent" />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2 sm:left-4 sm:top-4">
          <Badge variant="accent" className="bg-surface/95 text-accent backdrop-blur-sm">
            {roomCountLabel}
          </Badge>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-surface/80">
            {batch.name}
          </p>
          <p className="mt-1 font-display text-xl text-surface sm:text-2xl">
            {batch.subtitle}
          </p>
        </div>
      </Link>

      <div className="mt-4 flex flex-1 flex-col sm:mt-5">
        <div className="flex items-start justify-between gap-3">
          <p className="flex-1 text-sm leading-relaxed text-muted">
            {batch.shortDescription}
          </p>
          {showPrice ? (
            <p className="shrink-0 text-right text-sm">
              <span className="block font-medium text-text">
                ETB {batch.price!.toLocaleString()}
              </span>
              <span className="text-xs text-muted">from / night</span>
            </p>
          ) : null}
        </div>

        <p className="mt-3 text-xs uppercase tracking-wide text-accent">
          {batch.bedType}
        </p>

        <Button href={batchHref} variant="outline" size="sm" className="mt-4 w-full sm:w-auto sm:self-start">
          View this type
        </Button>
      </div>
    </article>
  );
}
