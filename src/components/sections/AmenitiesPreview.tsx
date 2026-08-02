import Link from "next/link";
import { amenities } from "@/data/amenities";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { AmenityCategory } from "@/lib/types";

const previewCategories: AmenityCategory[] = [
  "Accommodation",
  "Dining",
  "Internet",
  "Parking",
];

export function AmenitiesPreview() {
  const previewItems = previewCategories.flatMap((category) =>
    amenities.filter((a) => a.category === category).slice(0, 2),
  );

  return (
    <section className="section-padding bg-surface">
      <div className="container-content">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Amenities"
            title="Everything you need, thoughtfully provided"
            description="From morning breakfast on the terrace to high-speed Wi-Fi and secure parking — comfort is built into every stay."
          />
          <Button href="/amenities" variant="outline" className="shrink-0 self-start md:self-auto">
            All amenities
          </Button>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {previewItems.map((amenity) => (
            <Link
              key={amenity.id}
              href="/amenities"
              className="group rounded-lg p-5 ring-1 ring-text/5 transition-all duration-300 hover:bg-bg hover:shadow-luxury"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-surface">
                <AmenityIcon name={amenity.icon} />
              </div>
              <h3 className="font-medium text-text">{amenity.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted line-clamp-2">
                {amenity.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function AmenityIcon({ name }: { name?: string }) {
  const className = "h-5 w-5";

  switch (name) {
    case "thermometer":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
          <path d="M14 4a2 2 0 00-2-2h0a2 2 0 00-2 2v10a4 4 0 108 0V4z" />
          <path d="M12 12v2" strokeLinecap="round" />
        </svg>
      );
    case "bed":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
          <path d="M3 12V8a2 2 0 012-2h14a2 2 0 012 2v4M3 12v4h18v-4M3 12h18M7 8V6M17 8V6" strokeLinecap="round" />
        </svg>
      );
    case "wine":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
          <path d="M8 3h8l-1 8a4 4 0 01-8 0L8 3zM12 11v7M9 21h6" strokeLinejoin="round" />
        </svg>
      );
    case "sparkles":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
          <path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3z" />
        </svg>
      );
    case "coffee":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
          <path d="M6 8h12v5a4 4 0 01-4 4H8a4 4 0 01-4-4V8zM18 10h1a2 2 0 012 2v1a2 2 0 01-2 2h-1M6 4v2M10 4v2M14 4v2" strokeLinecap="round" />
        </svg>
      );
    case "wifi":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
          <path d="M5 12.5a11 11 0 0114 0M8.5 15.5a6.5 6.5 0 017 0M12 19h.01" strokeLinecap="round" />
        </svg>
      );
    case "car":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
          <path d="M5 17h14M6 17l-1-4 2-5h10l2 5-1 4M8 17a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zM13 17a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2" strokeLinecap="round" />
        </svg>
      );
  }
}
