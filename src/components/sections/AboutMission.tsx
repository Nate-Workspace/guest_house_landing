import type { AboutContent } from "@/lib/types";

type AboutMissionProps = {
  mission: AboutContent["mission"];
};

export function AboutMission({ mission }: AboutMissionProps) {
  return (
    <section className="section-padding bg-surface">
      <div className="container-content">
        <div className="mx-auto max-w-3xl rounded-lg bg-bg px-8 py-12 text-center shadow-sm ring-1 ring-text/5 md:px-14 md:py-16">
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
      </div>
    </section>
  );
}
