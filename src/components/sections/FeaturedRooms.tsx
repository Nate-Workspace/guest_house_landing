import { BatchCard } from "@/components/rooms";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredRooms, getTotalRoomCount } from "@/data/rooms";

const totalRooms = getTotalRoomCount();

export function FeaturedRooms() {
  return (
    <section className="section-padding section-divider bg-surface bg-grain">
      <div className="container-content">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Accommodations"
            title="Room types for every stay"
            description={`${totalRooms} rooms across 7 designs — browse by type, pick a room number, and inquire for availability.`}
          />
          <FadeIn delay={0.22} className="shrink-0 self-start md:self-auto">
            <Button href="/rooms" variant="outline">
              View all room types
            </Button>
          </FadeIn>
        </div>

        <StaggerChildren className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 md:mt-14">
          {featuredRooms.map((batch, index) => (
            <StaggerItem key={batch.slug} index={index}>
              <BatchCard batch={batch} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
