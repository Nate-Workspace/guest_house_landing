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
import { siteConfig } from "@/config/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: siteConfig.seo.defaultTitle,
  absoluteTitle: true,
  path: "/",
});

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
