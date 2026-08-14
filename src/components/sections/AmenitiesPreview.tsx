import Link from "next/link";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";
import { amenities } from "@/data/amenities";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { AmenityCategory } from "@/lib/types";
import { AmenityIcon } from "./AmenityIcon";

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
    <section className="section-padding section-divider bg-surface">
      <div className="container-content">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Amenities"
            title="Everything you need, thoughtfully provided"
            description="From morning breakfast on the terrace to high-speed Wi-Fi and secure parking — comfort is built into every stay."
          />
          <FadeIn delay={0.22} className="shrink-0 self-start md:self-auto">
            <Button href="/amenities" variant="outline">
              All amenities
            </Button>
          </FadeIn>
        </div>

        <StaggerChildren className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {previewItems.map((amenity, index) => (
            <StaggerItem key={amenity.id} index={index}>
              <Link
                href="/amenities"
                className="group block rounded-lg border border-text/15 p-5 transition-all duration-300 hover:border-text/10 hover:bg-bg hover:shadow-luxury"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-surface">
                  <AmenityIcon name={amenity.icon} />
                </div>
                <h3 className="font-medium text-text">{amenity.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted line-clamp-2">
                  {amenity.description}
                </p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
