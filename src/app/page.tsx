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
