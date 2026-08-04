import { RoomCard } from "@/components/rooms";
import { StaggerChildren, StaggerItem } from "@/components/motion";
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
            description="Six individually designed rooms and suites, each offering a distinct perspective on Provençal living — from garden-level serenity to panoramic valley views."
          />
          <Button href="/rooms" variant="outline" className="shrink-0 self-start md:self-auto">
            View all rooms
          </Button>
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
