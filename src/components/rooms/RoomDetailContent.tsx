import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import type { Room } from "@/lib/types";
import type { ReactNode } from "react";

type RoomDetailContentProps = {
  room: Room;
};

export function RoomDetailContent({ room }: RoomDetailContentProps) {
  const showPrice = siteConfig.features.showPrices && room.price;

  return (
    <section className="section-padding bg-surface">
      <div className="container-content">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-2">
            <h2 className="font-display text-3xl text-text md:text-4xl">
              About this room
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
              {room.description}
            </p>
            <Button
              href={`/contact?room=${room.slug}`}
              size="lg"
              className="mt-8 lg:hidden"
            >
              Send Inquiry
            </Button>
          </div>

          <aside className="flex flex-col gap-8 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-lg bg-bg p-6 ring-1 ring-text/5">
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                Room details
              </h3>
              <dl className="mt-5 space-y-4">
                <SpecItem label="Capacity">
                  Up to {room.capacity} {room.capacity === 1 ? "guest" : "guests"}
                </SpecItem>
                <SpecItem label="Bed">{room.bedType}</SpecItem>
                <SpecItem label="Bathroom">{room.bathroom}</SpecItem>
                {showPrice ? (
                  <SpecItem label="From">
                    <span className="font-medium text-text">ETB {room.price!.toLocaleString()}</span>
                    <span className="text-muted"> / night</span>
                  </SpecItem>
                ) : null}
              </dl>
            </div>

            <div className="rounded-lg bg-bg p-6 ring-1 ring-text/5">
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                In-room amenities
              </h3>
              <ul className="mt-5 space-y-3">
                {room.amenities.map((amenity) => (
                  <li key={amenity} className="flex items-start gap-3 text-sm text-muted">
                    <CheckIcon />
                    <span>{amenity}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button href={`/contact?room=${room.slug}`} size="lg" className="hidden w-full lg:inline-flex">
              Send Inquiry
            </Button>
          </aside>
        </div>
      </div>
    </section>
  );
}

function SpecItem({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <dt className="text-xs font-medium uppercase tracking-wide text-muted">
        {label}
      </dt>
      <dd className="mt-1 text-sm text-text">{children}</dd>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
      aria-hidden="true"
    >
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
