import { StaggerChildren, StaggerItem } from "@/components/motion";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  amenityCategories,
  amenityCategoryMeta,
  amenityQuickStats,
  getAmenitiesByCategory,
} from "@/data/amenities";
import type { Amenity, AmenityCategory } from "@/lib/types";
import { cn } from "@/lib/utils";
import { AmenityIcon } from "./AmenityIcon";
import { PropertyHighlightImage } from "./PropertyHighlightImage";

function categoryAnchorId(category: AmenityCategory) {
  return category.toLowerCase().replace(/\s+/g, "-");
}

export function AmenitiesShowcase() {
  return (
    <>
      <AmenitiesIntro />
      <AmenitiesCategories />
    </>
  );
}

function AmenitiesIntro() {
  return (
    <section className="section-padding section-divider bg-bg section-glow">
      <div className="container-content">
        <SectionHeading
          eyebrow="At your service"
          title="Every comfort, considered"
          description="From the moment you arrive — fresh linen, reliable Wi-Fi, secure parking, and a team ready to help — Alem Guesthouse is designed so you can focus on your stay, not the details."
          align="center"
          className="mx-auto max-w-3xl"
        />

        <StaggerChildren className="mt-12 grid grid-cols-2 gap-4 md:mt-16 md:grid-cols-4 md:gap-6">
          {amenityQuickStats.map((stat, index) => (
            <StaggerItem key={stat.label} index={index}>
              <div className="rounded-lg bg-surface/80 px-5 py-6 text-center shadow-sm ring-1 ring-text/5 backdrop-blur-sm">
                <p className="font-display text-3xl text-accent md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-muted">
                  {stat.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <nav
          aria-label="Amenity categories"
          className="mt-12 -mx-6 flex gap-2 overflow-x-auto px-6 pb-1 md:mx-0 md:flex-wrap md:justify-center md:overflow-visible md:px-0"
        >
          {amenityCategories.map((category) => {
            const meta = amenityCategoryMeta[category];
            const firstAmenity = getAmenitiesByCategory(category)[0];

            return (
              <a
                key={category}
                href={`#${categoryAnchorId(category)}`}
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-text/10 bg-surface px-4 py-2.5 text-sm text-muted transition-colors hover:border-accent/30 hover:bg-accent/5 hover:text-text"
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <AmenityIcon
                    name={firstAmenity?.icon}
                    className="h-3.5 w-3.5"
                  />
                </span>
                <span className="whitespace-nowrap">{meta.tagline}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </section>
  );
}

function AmenitiesCategories() {
  return (
    <>
      {amenityCategories.map((category, index) => (
        <AmenityCategorySection
          key={category}
          category={category}
          index={index}
        />
      ))}
    </>
  );
}

function AmenityCategorySection({
  category,
  index,
}: {
  category: AmenityCategory;
  index: number;
}) {
  const meta = amenityCategoryMeta[category];
  const items = getAmenitiesByCategory(category);
  const sectionNumber = String(index + 1).padStart(2, "0");
  const anchorId = categoryAnchorId(category);
  const isWideLayout = category === "Accommodation" || category === "Parking";
  const hasImage = Boolean(meta.image);

  return (
    <div
      id={anchorId}
      className={cn(
        "scroll-mt-24 section-padding section-divider",
        index % 2 === 0 ? "bg-surface" : "bg-bg-subtle",
      )}
    >
      <div className="container-content">
        <div
          className={cn(
            isWideLayout &&
              hasImage &&
              "grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16",
          )}
        >
          <div>
            <CategoryHeader
              number={sectionNumber}
              category={category}
              tagline={meta.tagline}
              description={meta.description}
            />

            {isWideLayout && hasImage ? (
              <StaggerChildren className="mt-10 space-y-1 lg:hidden">
                {items.map((amenity, itemIndex) => (
                  <StaggerItem key={amenity.id} index={itemIndex}>
                    <AmenityListItem amenity={amenity} />
                  </StaggerItem>
                ))}
              </StaggerChildren>
            ) : (
              <StaggerChildren
                className={cn(
                  "mt-10",
                  category === "Internet" || category === "Family"
                    ? "grid gap-1 sm:grid-cols-2 sm:gap-x-8"
                    : "mx-auto max-w-2xl space-y-1",
                )}
              >
                {items.map((amenity, itemIndex) => (
                  <StaggerItem key={amenity.id} index={itemIndex}>
                    <AmenityListItem amenity={amenity} />
                  </StaggerItem>
                ))}
              </StaggerChildren>
            )}
          </div>

          {isWideLayout && hasImage ? (
            <div className="hidden lg:block">
              <div className="sticky top-28 space-y-8">
                <PropertyHighlightImage
                  src={meta.image!}
                  alt={meta.imageAlt ?? category}
                />
                <StaggerChildren className="space-y-1">
                  {items.map((amenity, itemIndex) => (
                    <StaggerItem key={amenity.id} index={itemIndex}>
                      <AmenityListItem amenity={amenity} compact />
                    </StaggerItem>
                  ))}
                </StaggerChildren>
              </div>
            </div>
          ) : null}

          {!isWideLayout && hasImage ? (
            <div className="relative mt-10 aspect-21/9 overflow-hidden rounded-lg shadow-luxury ring-1 ring-text/5">
              <OptimizedImage
                src={meta.image!}
                alt={meta.imageAlt ?? category}
                fill
                className="object-cover"
                sizePreset="cardHalf"
                qualityPreset="card"
                loading="lazy"
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function CategoryHeader({
  number,
  category,
  tagline,
  description,
}: {
  number: string;
  category: AmenityCategory;
  tagline: string;
  description: string;
}) {
  return (
    <header className="max-w-2xl">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
        {number} · {tagline}
      </p>
      <h3 className="mt-3 font-display text-3xl text-text md:text-4xl">
        {category}
      </h3>
      <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
        {description}
      </p>
    </header>
  );
}

function AmenityListItem({
  amenity,
  compact = false,
}: {
  amenity: Amenity;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "group flex gap-4 rounded-lg border-b border-text/10 transition-colors last:border-0 hover:bg-bg/50",
        compact ? "py-4" : "py-5 md:py-6",
      )}
    >
      <div
        className={cn(
          "inline-flex shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent ring-1 ring-accent/10 transition-colors group-hover:bg-accent group-hover:text-surface",
          compact ? "h-10 w-10" : "h-11 w-11",
        )}
      >
        <AmenityIcon name={amenity.icon} className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <h4
          className={cn("font-medium text-text", compact ? "text-sm" : "text-base")}
        >
          {amenity.name}
        </h4>
        <p
          className={cn(
            "mt-1.5 leading-relaxed text-muted",
            compact ? "text-xs" : "text-sm",
          )}
        >
          {amenity.description}
        </p>
      </div>
    </div>
  );
}
