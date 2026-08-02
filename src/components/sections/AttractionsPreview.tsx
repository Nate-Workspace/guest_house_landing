import Image from "next/image";
import Link from "next/link";
import { featuredAttractions } from "@/data/attractions";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AttractionsPreview() {
  return (
    <section className="section-padding">
      <div className="container-content">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Explore Provence"
            title="Nearby attractions"
            description="From hilltop villages to lavender fields and ochre trails — the Luberon's finest sights are at your doorstep."
          />
          <Button href="/attractions" variant="outline" className="shrink-0 self-start md:self-auto">
            All attractions
          </Button>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {featuredAttractions.map((attraction) => (
            <article key={attraction.id} className="group flex flex-col">
              <Link
                href="/attractions"
                className="relative block aspect-4/3 overflow-hidden rounded-lg"
              >
                <Image
                  src={attraction.image}
                  alt={attraction.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-text/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <Badge variant="accent" className="bg-surface/90 text-accent-dark backdrop-blur-sm">
                    {attraction.distance}
                  </Badge>
                </div>
              </Link>

              <div className="mt-5">
                <h3 className="font-display text-xl text-text">
                  <Link
                    href="/attractions"
                    className="transition-colors hover:text-accent"
                  >
                    {attraction.name}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-3">
                  {attraction.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
