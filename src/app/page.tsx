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
import { JsonLd } from "@/components/seo";
import { siteConfig } from "@/config/site";
import { buildLodgingBusinessJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: siteConfig.seo.defaultTitle,
  absoluteTitle: true,
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd data={buildLodgingBusinessJsonLd()} />
      <LuxuryHero />
      <FadeIn>
        <FeaturedRooms />
      </FadeIn>
      <FadeIn>
        <WhyStayHere />
      </FadeIn>
      <FadeIn delay={0.08}>
        <AmenitiesPreview />
      </FadeIn>
      <FadeIn delay={0.08}>
        <GalleryPreview />
      </FadeIn>
      <FadeIn>
        <Testimonials />
      </FadeIn>
      <FadeIn delay={0.06}>
        <AttractionsPreview />
      </FadeIn>
      <FadeIn delay={0.1}>
        <FAQ />
      </FadeIn>
      <CTABanner />
    </>
  );
}
