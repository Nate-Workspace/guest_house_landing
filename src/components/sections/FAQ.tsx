import { faq } from "@/data/faq";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FAQ() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-content">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions before you arrive"
            description="Everything you need to know about booking, amenities, and making the most of your stay in Gordes."
            animate={false}
          />

          <Accordion items={faq} />
        </div>
      </div>
    </section>
  );
}
