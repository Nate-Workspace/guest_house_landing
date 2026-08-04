import { RoomCard } from "@/components/rooms/RoomCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getRelatedRooms } from "@/data/rooms";

type RelatedRoomsProps = {
  currentSlug: string;
};

export function RelatedRooms({ currentSlug }: RelatedRoomsProps) {
  const related = getRelatedRooms(currentSlug);

  if (related.length === 0) {
    return null;
  }

  return (
    <section className="section-padding bg-bg">
      <div className="container-content">
        <SectionHeading
          eyebrow="Explore more"
          title="You may also like"
          description="Discover other rooms and suites that offer a similar sense of calm and comfort."
          animate={false}
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {related.map((room) => (
            <RoomCard key={room.slug} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
}
