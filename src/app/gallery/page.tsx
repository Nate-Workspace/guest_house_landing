import { GalleryView } from "@/components/gallery";
import { CTABanner, PageHero } from "@/components/sections";
import { gallery } from "@/data/gallery";
import { buildPageMetadata } from "@/lib/seo";

const heroImage = gallery[0].src;

export const metadata = buildPageMetadata({
  title: "Gallery",
  description:
    "Explore Serenité through sunlit terraces, refined interiors, and the Provençal landscapes that surround us.",
  path: "/gallery",
  image: heroImage,
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Visual tour"
        title="Gallery"
        description="Explore Alem Guesthouse through our best rooms, refined interiors, and Hawassa's landscapes that surround us."
        image={heroImage}
        imageAlt={gallery[0].alt}
      />

      <section className="section-padding bg-bg">
        <div className="container-content">
          <GalleryView images={gallery} />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
