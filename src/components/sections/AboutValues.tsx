import { StaggerChildren, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { AboutContent } from "@/lib/types";

type AboutValuesProps = {
  values: AboutContent["values"];
};

export function AboutValues({ values }: AboutValuesProps) {
  return (
    <section className="section-padding section-divider bg-bg-warm bg-grain">
      <div className="container-content">
        <SectionHeading
          eyebrow={values.eyebrow}
          title={values.title}
          description={values.description}
          align="center"
          className="mx-auto"
        />

        <StaggerChildren className="mt-14 grid gap-8 sm:grid-cols-2">
          {values.items.map((value, index) => (
            <StaggerItem key={value.id} index={index}>
              <div className="rounded-lg bg-surface p-8 shadow-sm ring-1 ring-text/5">
                <h3 className="font-display text-2xl text-text">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  {value.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
