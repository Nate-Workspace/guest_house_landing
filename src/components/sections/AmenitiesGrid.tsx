import {
  amenityCategories,
  getAmenitiesByCategory,
} from "@/data/amenities";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AmenityIcon } from "./AmenityIcon";

export function AmenitiesGrid() {
  return (
    <section className="section-padding section-divider bg-surface bg-grain">
      <div className="container-content">
        <SectionHeading
          eyebrow="At your service"
          title="Amenities & services"
          description="Every comfort considered — from morning breakfast on the terrace to EV charging and accessible ground-floor rooms."
          animate={false}
        />

        <div className="mt-16 space-y-16 md:space-y-20">
          {amenityCategories.map((category) => {
            const items = getAmenitiesByCategory(category);

            return (
              <div key={category}>
                <h3 className="border-b border-text/10 pb-4 font-display text-2xl text-text md:text-3xl">
                  {category}
                </h3>

                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((amenity) => (
                    <article
                      key={amenity.id}
                      className="rounded-lg bg-surface p-6 shadow-sm ring-1 ring-text/5 transition-shadow duration-300 hover:shadow-luxury"
                    >
                      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                        <AmenityIcon name={amenity.icon} />
                      </div>
                      <h4 className="font-medium text-text">{amenity.name}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {amenity.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
