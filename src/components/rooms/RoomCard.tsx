import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { Room } from "@/lib/types";
import { cn } from "@/lib/utils";

export type RoomCardProps = {
  room: Room;
  className?: string;
};

export function RoomCard({ room, className }: RoomCardProps) {
  const showPrice = siteConfig.features.showPrices && room.price;
  const roomHref = `/rooms/${room.slug}`;

  return (
    <article className={cn("group flex flex-col", className)}>
      <Link
        href={roomHref}
        className="relative block aspect-4/3 overflow-hidden rounded-lg"
      >
        <Image
          src={room.images[0]}
          alt={room.name}
          fill
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-text/60 via-text/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="text-sm font-medium text-surface">View details →</span>
        </div>
        <div className="absolute left-4 top-4">
          <Badge variant="accent" className="bg-surface/90 text-accent-dark backdrop-blur-sm">
            Up to {room.capacity} {room.capacity === 1 ? "guest" : "guests"}
          </Badge>
        </div>
      </Link>

      <div className="mt-5 flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl text-text">
            <Link
              href={roomHref}
              className="transition-colors hover:text-accent"
            >
              {room.name}
            </Link>
          </h3>
          {showPrice ? (
            <p className="shrink-0 text-sm text-muted">
              <span className="font-medium text-text">ETB {room.price!.toLocaleString()}</span>
              <span className="text-muted"> / night</span>
            </p>
          ) : null}
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {room.shortDescription}
        </p>
        <p className="mt-3 text-xs uppercase tracking-wide text-accent">
          {room.bedType}
        </p>
        <Button href={roomHref} variant="outline" size="sm" className="mt-5 self-start">
          View details
        </Button>
      </div>
    </article>
  );
}
