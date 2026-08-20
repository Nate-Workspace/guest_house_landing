import { FadeIn } from "@/components/motion";
import { AmenitiesShowcase, CTABanner, PageHero } from "@/components/sections";
import { siteImages } from "@/data/site-images";
import { buildPageMetadata } from "@/lib/seo";

const heroImage = siteImages.hero.amenities;

export const metadata = buildPageMetadata({
  title: "Amenities",
  description:
    "High-speed Wi-Fi, secure parking, daily housekeeping, paid laundry service, and quiet workspaces at Alem Pension.",
  path: "/amenities",
  image: heroImage,
});

export default function AmenitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Comfort & convenience"
        title="Amenities"
        description="From high-speed Wi-Fi and secure parking to daily housekeeping, paid laundry service, and quiet workspaces — comfort is built into every stay."
        image={heroImage}
        imageAlt="Amenities at Alem Pension, Hawassa"
      />

      <FadeIn>
        <AmenitiesShowcase />
      </FadeIn>

      <CTABanner />
    </>
  );
}
