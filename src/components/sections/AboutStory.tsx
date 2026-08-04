import { SectionHeading } from "@/components/ui/SectionHeading";
import type { AboutContent } from "@/lib/types";

type AboutStoryProps = {
  story: AboutContent["story"];
};

export function AboutStory({ story }: AboutStoryProps) {
  return (
    <section className="section-padding bg-bg-warm bg-grain">
      <div className="container-content">
        <SectionHeading
          eyebrow={story.eyebrow}
          title={story.title}
          animate={false}
        />

        <div className="mt-10 max-w-3xl space-y-6">
          {story.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="text-base leading-relaxed text-muted md:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
