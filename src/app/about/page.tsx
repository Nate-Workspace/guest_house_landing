import { FadeIn } from "@/components/motion";
import {
  AboutMission,
  AboutStory,
  AboutValues,
  CTABanner,
  PageHero,
  PropertyHighlights,
} from "@/components/sections";
import { about } from "@/data/about";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "About",
  description: about.hero.description,
  path: "/about",
  image: about.hero.image,
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={about.hero.eyebrow}
        title={about.hero.title}
        description={about.hero.description}
        image={about.hero.image}
        imageAlt={about.hero.imageAlt}
      />

      <AboutStory story={about.story} />

      <FadeIn>
        <AboutMission mission={about.mission} />
      </FadeIn>

      <AboutValues values={about.values} />

      <PropertyHighlights highlights={about.highlights} />

      <CTABanner />
    </>
  );
}
