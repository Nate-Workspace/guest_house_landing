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
          description="From the moment you arrive — fresh linen, reliable Wi-Fi, secure parking, and a team ready to help — Alem Pension is designed so you can focus on your stay, not the details."
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
  const isDark = category === "Accommodation" || category === "Laundry";

  return (
    <div
      id={anchorId}
      className={cn(
        "scroll-mt-24 section-padding relative overflow-hidden",
        isDark
          ? "bg-accent"
          : cn("section-divider", index % 2 === 0 ? "bg-surface" : "bg-bg-subtle"),
      )}
    >
      {isDark ? (
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 50%, white 0%, transparent 50%)",
          }}
        />
      ) : null}

      <div className="container-content relative">
        <div
          className={cn(
            isWideLayout &&
              hasImage &&
              "grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16",
          )}
        >
          <div>
            <CategoryHeader
              number={sectionNumber}
              category={category}
              tagline={meta.tagline}
              description={meta.description}
              tone={isDark ? "onDark" : "default"}
            />

            {isWideLayout && hasImage ? (
              <StaggerChildren className="mt-10 space-y-1">
                {items.map((amenity, itemIndex) => (
                  <StaggerItem key={amenity.id} index={itemIndex}>
                    <AmenityListItem
                      amenity={amenity}
                      tone={isDark ? "onDark" : "default"}
                    />
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
                    <AmenityListItem amenity={amenity} tone={isDark ? "onDark" : "default"} />
                  </StaggerItem>
                ))}
              </StaggerChildren>
            )}
          </div>

          {isWideLayout && hasImage ? (
            <div className="hidden lg:block">
              <div className="sticky top-28">
                <PropertyHighlightImage
                  src={meta.image!}
                  alt={meta.imageAlt ?? category}
                />
              </div>
            </div>
          ) : null}

          {!isWideLayout && hasImage ? (
            <div
              className={cn(
                "relative mt-10 aspect-21/9 overflow-hidden rounded-lg shadow-luxury ring-1",
                isDark ? "ring-surface/20" : "ring-text/5",
              )}
            >
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
  tone = "default",
}: {
  number: string;
  category: AmenityCategory;
  tagline: string;
  description: string;
  tone?: "default" | "onDark";
}) {
  const onDark = tone === "onDark";

  return (
    <header className="max-w-2xl">
      <p
        className={cn(
          "text-xs font-medium uppercase tracking-[0.2em]",
          onDark ? "text-surface/70" : "text-accent",
        )}
      >
        {number} · {tagline}
      </p>
      <h3
        className={cn(
          "mt-3 font-display text-3xl md:text-4xl",
          onDark ? "text-surface" : "text-text",
        )}
      >
        {category}
      </h3>
      <p
        className={cn(
          "mt-4 text-base leading-relaxed md:text-lg",
          onDark ? "text-surface/80" : "text-muted",
        )}
      >
        {description}
      </p>
    </header>
  );
}

function AmenityListItem({
  amenity,
  tone = "default",
}: {
  amenity: Amenity;
  tone?: "default" | "onDark";
}) {
  const onDark = tone === "onDark";

  return (
    <div
      className={cn(
        "group flex gap-4 rounded-lg border-b px-3 transition-colors last:border-0 sm:px-4 md:px-5",
        "py-5 md:py-6",
        onDark
          ? "border-surface/15 hover:bg-surface/5"
          : "border-text/10 hover:bg-bg/50",
      )}
    >
      <div
        className={cn(
          "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full ring-1 transition-colors",
          onDark
            ? "bg-surface/15 text-surface ring-surface/20 group-hover:bg-surface group-hover:text-accent"
            : "bg-accent/10 text-accent ring-accent/10 group-hover:bg-accent group-hover:text-surface",
        )}
      >
        <AmenityIcon name={amenity.icon} className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <h4
          className={cn(
            "text-base font-medium",
            onDark ? "text-surface" : "text-text",
          )}
        >
          {amenity.name}
        </h4>
        <p
          className={cn(
            "mt-1.5 text-sm leading-relaxed",
            onDark ? "text-surface/75" : "text-muted",
          )}
        >
          {amenity.description}
        </p>
      </div>
    </div>
  );
}
