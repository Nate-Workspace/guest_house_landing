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
    "Lake Hawassa, local markets, and the city's best sights — all within easy reach of Alem Guesthouse.",
  path: "/attractions",
  image: heroImage,
});

export default function AttractionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Explore Hawassa"
        title="Nearby Attractions"
        description="Lake Hawassa, local markets, and the city's best sights — all within easy reach of Alem Guesthouse."
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
        title="Start from Alem Guesthouse"
        description="We're positioned above Menahria with quick access to the Sumuda, Piassa, Atote, and Hawassa Lake. Your ideal base for exploring Hawassa."
      />

      <CTABanner />
    </>
  );
}
