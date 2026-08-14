import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";
import { featuredAttractions } from "@/data/attractions";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AttractionCard } from "./AttractionCard";

export function AttractionsPreview() {
  return (
    <section className="section-padding section-divider bg-surface">
      <div className="container-content">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Explore Provence"
            title="Nearby attractions"
            description="From hilltop villages to lavender fields and ochre trails — the Luberon's finest sights are at your doorstep."
          />
          <FadeIn delay={0.22} className="shrink-0 self-start md:self-auto">
            <Button href="/attractions" variant="outline">
              All attractions
            </Button>
          </FadeIn>
        </div>

        <StaggerChildren className="mt-14 grid gap-8 md:grid-cols-3">
          {featuredAttractions.map((attraction, index) => (
            <StaggerItem key={attraction.id} index={index}>
              <AttractionCard attraction={attraction} href="/attractions" />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
