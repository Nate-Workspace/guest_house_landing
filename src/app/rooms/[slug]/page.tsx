import { notFound } from "next/navigation";
import { FadeIn } from "@/components/motion";
import { RoomDetailContent, RoomGallery, RelatedRooms } from "@/components/rooms";
import { PageHero } from "@/components/sections/PageHero";
import { getRoomBySlug, rooms } from "@/data/rooms";

type RoomDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export default async function RoomDetailPage({ params }: RoomDetailPageProps) {
  const { slug } = await params;
  const room = getRoomBySlug(slug);

  if (!room) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow="Room"
        title={room.name}
        description={room.shortDescription}
        image={room.images[0]}
        imageAlt={room.name}
      />
      {room.images.length > 1 ? (
        <FadeIn>
          <RoomGallery images={room.images.slice(1)} roomName={room.name} />
        </FadeIn>
      ) : null}
      <FadeIn>
        <RoomDetailContent room={room} />
      </FadeIn>
      <FadeIn delay={0.1}>
        <RelatedRooms currentSlug={slug} />
      </FadeIn>
    </>
  );
}
