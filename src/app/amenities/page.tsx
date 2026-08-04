import { AmenitiesGrid, CTABanner, PageHero } from "@/components/sections";

const heroImage =
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=900&fit=crop";

export default function AmenitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Comfort & convenience"
        title="Amenities"
        description="From continental breakfast on the garden terrace to high-speed Wi-Fi, secure parking, and thoughtful accessibility — everything is included in your stay."
        image={heroImage}
        imageAlt="Continental breakfast spread on the garden terrace at Serenité Guesthouse"
      />

      <AmenitiesGrid />

      <CTABanner />
    </>
  );
}
