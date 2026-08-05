import { RoomCard } from "@/components/rooms";
import { StaggerChildren, StaggerItem } from "@/components/motion";
import { CTABanner, PageHero } from "@/components/sections";
import { rooms } from "@/data/rooms";
import { buildPageMetadata } from "@/lib/seo";

const heroImage =
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&h=900&fit=crop";

export const metadata = buildPageMetadata({
  title: "Rooms & Suites",
  description:
    "Six individually designed rooms and suites — from intimate garden retreats to panoramic top-floor suites with views over the Luberon valley.",
  path: "/rooms",
  image: heroImage,
});

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
          <StaggerChildren className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room, index) => (
              <StaggerItem key={room.slug} index={index}>
                <RoomCard room={room} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
