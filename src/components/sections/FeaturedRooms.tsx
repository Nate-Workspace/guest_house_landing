import { RoomCard } from "@/components/rooms";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredRooms } from "@/data/rooms";

export function FeaturedRooms() {
  return (
    <section className="section-padding section-divider bg-surface bg-grain">
      <div className="container-content">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Accommodations"
            title="Rooms crafted for rest"
            description="Six individually designed rooms, each offering a distinct perspective on the experience at Alem Guesthouse"
          />
          <FadeIn delay={0.22} className="shrink-0 self-start md:self-auto">
            <Button href="/rooms" variant="outline">
              View all rooms
            </Button>
          </FadeIn>
        </div>

        <StaggerChildren className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredRooms.map((room, index) => (
            <StaggerItem key={room.slug} index={index}>
              <RoomCard room={room} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
