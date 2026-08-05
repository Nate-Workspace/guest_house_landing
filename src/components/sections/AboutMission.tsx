import { SectionBackground } from "@/components/ui/SectionBackground";
import { gallery } from "@/data/gallery";
import type { AboutContent } from "@/lib/types";

const backgroundImage = gallery.find((item) => item.id === "gallery-detail")!;

type AboutMissionProps = {
  mission: AboutContent["mission"];
};

export function AboutMission({ mission }: AboutMissionProps) {
  return (
    <SectionBackground
      image={backgroundImage.src}
      imageAlt={backgroundImage.alt}
    >
      <div className="mx-auto max-w-3xl rounded-lg bg-surface/95 px-8 py-12 text-center shadow-sm ring-1 ring-surface/20 backdrop-blur-sm md:px-14 md:py-16">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          {mission.eyebrow}
        </p>
        <h2 className="mt-4 font-display text-3xl text-text md:text-4xl">
          {mission.title}
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
          {mission.description}
        </p>
      </div>
    </SectionBackground>
  );
}
