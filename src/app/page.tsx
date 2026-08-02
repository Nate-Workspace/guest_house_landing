import {
  AmenitiesPreview,
  AttractionsPreview,
  CTABanner,
  FAQ,
  FeaturedRooms,
  GalleryPreview,
  LuxuryHero,
  Testimonials,
  WhyStayHere,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <LuxuryHero />
      <FeaturedRooms />
      <WhyStayHere />
      <AmenitiesPreview />
      <GalleryPreview />
      <Testimonials />
      <AttractionsPreview />
      <FAQ />
      <CTABanner />
    </>
  );
}
