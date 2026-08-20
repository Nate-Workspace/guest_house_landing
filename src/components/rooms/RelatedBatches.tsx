import { BatchCard } from "@/components/rooms/BatchCard";
import { StaggerChildren, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getRelatedBatches } from "@/data/rooms";

type RelatedBatchesProps = {
  currentSlug: string;
};

export function RelatedBatches({ currentSlug }: RelatedBatchesProps) {
  const related = getRelatedBatches(currentSlug);

  if (related.length === 0) {
    return null;
  }

  return (
    <section className="section-padding bg-bg">
      <div className="container-content">
        <SectionHeading
          eyebrow="More room types"
          title="You may also like"
          description="Explore other room designs at Alem Pension — each batch shares the same layout across multiple room numbers."
        />

        <StaggerChildren className="mt-10 grid gap-8 sm:grid-cols-2">
          {related.map((batch, index) => (
            <StaggerItem key={batch.slug} index={index}>
              <BatchCard batch={batch} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
