import { RoomCard } from "@/components/rooms";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";
import { CTABanner, PageHero } from "@/components/sections";
import { rooms } from "@/data/rooms";
import { buildPageMetadata } from "@/lib/seo";

const heroImage =
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&h=900&fit=crop";

export const metadata = buildPageMetadata({
  title: "Rooms & Suites",
  description:
    "Six comfortable rooms and suites at Alem Guesthouse — from single rooms to family suites, all with fresh linen, hot water, Wi-Fi, and complimentary breakfast.",
  path: "/rooms",
  image: heroImage,
});

export default function RoomsPage() {
  return (
    <>
      <PageHero
        eyebrow="Accommodations"
        title="Rooms & Suites"
        description="Six comfortable rooms and suites — from budget-friendly singles to spacious family accommodation in the heart of Hawassa."
        image={heroImage}
        imageAlt="Comfortable guest room at Alem Guesthouse, Hawassa"
      />

      <FadeIn>
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
      </FadeIn>

      <CTABanner />
    </>
  );
}
