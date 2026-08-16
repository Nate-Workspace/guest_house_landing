import {
  BatchCard,
  BatchDetailContent,
  RelatedBatches,
  RoomGallery,
  RoomUnitPicker,
} from "@/components/rooms";
import { FadeIn } from "@/components/motion";
import { CTABanner, PageHero } from "@/components/sections";
import { JsonLd } from "@/components/seo";
import {
  getBatchBySlug,
  getTotalRoomCount,
  roomBatches,
} from "@/data/rooms";
import { buildPageMetadata, buildRoomBatchJsonLd } from "@/lib/seo";

const heroImage =
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&h=900&fit=crop";

const totalRooms = getTotalRoomCount();

export const metadata = buildPageMetadata({
  title: "Rooms",
  description:
    `${totalRooms} comfortable rooms across 7 room types at Alem Guesthouse — singles and doubles with balconies, Wi-Fi, breakfast, and secure parking in Hawassa.`,
  path: "/rooms",
  image: heroImage,
});

export default function RoomsPage() {
  return (
    <>
      <PageHero
        eyebrow="Accommodations"
        title="Our rooms"
        description={`${totalRooms} rooms across 7 designs — from compact singles to doubles with balcony views. Browse by room type, then inquire and we'll confirm availability.`}
        image={heroImage}
        imageAlt="Guest room interior at Alem Guesthouse, Hawassa"
      />

      <FadeIn>
        <section className="section-padding bg-bg">
          <div className="container-content">
            <p className="mb-8 max-w-2xl text-sm leading-relaxed text-muted md:mb-10 md:text-base">
              Each card is a room <span className="font-medium text-text">type</span>{" "}
              — several room numbers share the same layout and photos. Tap a type to
              see details and pick a room number for your inquiry.
            </p>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {roomBatches.map((batch) => (
                <BatchCard key={batch.slug} batch={batch} />
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      <CTABanner />
    </>
  );
}
