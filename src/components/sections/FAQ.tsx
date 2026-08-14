import { faq } from "@/data/faq";
import { FadeIn } from "@/components/motion";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FAQ() {
  return (
    <section className="section-padding section-divider bg-bg-warm bg-grain">
      <div className="container-content">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions before you arrive"
            description="Everything you need to know about booking, amenities, and making the most of your stay in Hawassa."
          />

          <FadeIn delay={0.18}>
            <Accordion items={faq} stagger />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
