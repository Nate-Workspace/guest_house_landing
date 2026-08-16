import { FadeIn } from "@/components/motion";
import { AmenitiesGrid, CTABanner, PageHero } from "@/components/sections";
import { buildPageMetadata } from "@/lib/seo";

const heroImage =
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=900&fit=crop";

export const metadata = buildPageMetadata({
  title: "Amenities",
  description:
    "High-speed Wi-Fi, 24/7 water, secure parking, daily housekeeping, laundry service, quiet workspaces, and complimentary breakfast at Alem Guesthouse.",
  path: "/amenities",
  image: heroImage,
});

export default function AmenitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Comfort & convenience"
        title="Amenities"
        description="From complimentary breakfast and high-speed Wi-Fi to secure parking, laundry service, and quiet workspaces — comfort is built into every stay."
        image={heroImage}
        imageAlt="Complimentary breakfast at Alem Guesthouse, Hawassa"
      />

      <FadeIn>
        <AmenitiesGrid />
      </FadeIn>

      <CTABanner />
    </>
  );
}
