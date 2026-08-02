import { FadeIn } from "@/components/motion";
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
      <FadeIn>
        <FeaturedRooms />
      </FadeIn>
      <WhyStayHere />
      <AmenitiesPreview />
      <FadeIn>
        <GalleryPreview />
      </FadeIn>
      <FadeIn delay={0.1}>
        <Testimonials />
      </FadeIn>
      <AttractionsPreview />
      <FAQ />
      <CTABanner />
    </>
  );
}
