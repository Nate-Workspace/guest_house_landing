import { GalleryView } from "@/components/gallery";
import { FadeIn } from "@/components/motion";
import { CTABanner, PageHero } from "@/components/sections";
import { gallery } from "@/data/gallery";
import { buildPageMetadata } from "@/lib/seo";

const heroImage = gallery[0].src;

export const metadata = buildPageMetadata({
  title: "Gallery",
  description:
    "Explore Alem Guesthouse through our comfortable rooms, welcoming spaces, and the Hawassa surroundings that make every stay memorable.",
  path: "/gallery",
  image: heroImage,
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Visual tour"
        title="Gallery"
        description="Explore Alem Guesthouse through our comfortable rooms, clean interiors, and the peaceful Hawassa setting we call home."
        image={heroImage}
        imageAlt={gallery[0].alt}
      />

      <FadeIn>
        <section className="section-padding bg-bg">
          <div className="container-content">
            <GalleryView images={gallery} />
          </div>
        </section>
      </FadeIn>

      <CTABanner />
    </>
  );
}
