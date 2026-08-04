import { FadeIn } from "@/components/motion";
import {
  AboutMission,
  AboutStory,
  AboutValues,
  PageHero,
  PropertyHighlights,
} from "@/components/sections";
import { about } from "@/data/about";

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

      <FadeIn>
        <PropertyHighlights highlights={about.highlights} />
      </FadeIn>
    </>
  );
}
