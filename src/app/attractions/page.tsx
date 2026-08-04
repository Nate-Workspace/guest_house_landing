import { StaggerChildren, StaggerItem } from "@/components/motion";
import {
  AttractionCard,
  CTABanner,
  MapSection,
  PageHero,
} from "@/components/sections";
import { attractions } from "@/data/attractions";
import { buildPageMetadata } from "@/lib/seo";

const heroImage = attractions[0].image;

export const metadata = buildPageMetadata({
  title: "Nearby Attractions",
  description:
    "Hilltop villages, lavender fields, ochre trails, and market towns — the Luberon's finest sights are within easy reach of Serenité.",
  path: "/attractions",
  image: heroImage,
});

export default function AttractionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Explore Provence"
        title="Nearby Attractions"
        description="Hilltop villages, lavender fields, ochre trails, and market towns — the Luberon's finest sights are within easy reach of Serenité."
        image={heroImage}
        imageAlt={attractions[0].name}
      />

      <section className="section-padding bg-bg">
        <div className="container-content">
          <StaggerChildren className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {attractions.map((attraction, index) => (
              <StaggerItem key={attraction.id} index={index}>
                <AttractionCard attraction={attraction} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <MapSection
        title="Start from Serenité"
        description="We're perched above Gordes with quick access to the Luberon's villages, trails, and lavender country — your ideal base for exploring Provence."
      />

      <CTABanner />
    </>
  );
}
