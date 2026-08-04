import { RoomCard } from "@/components/rooms";
import { CTABanner, PageHero } from "@/components/sections";
import { rooms } from "@/data/rooms";

const heroImage =
  "https://images.unsplash.com/photo-1618773928121-c1d5f9b1a564?w=1920&h=900&fit=crop";

export default function RoomsPage() {
  return (
    <>
      <PageHero
        eyebrow="Accommodations"
        title="Rooms & Suites"
        description="Six individually designed rooms and suites — from intimate garden retreats to panoramic top-floor suites with views over the Luberon valley."
        image={heroImage}
        imageAlt="Elegant guest room interior at Serenité Guesthouse"
      />

      <section className="section-padding bg-bg">
        <div className="container-content">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room) => (
              <RoomCard key={room.slug} room={room} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
