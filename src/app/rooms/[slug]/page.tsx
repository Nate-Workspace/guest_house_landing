import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/motion";
import { RoomDetailContent, RoomGallery, RelatedRooms } from "@/components/rooms";
import { CTABanner, PageHero } from "@/components/sections";
import { getRoomBySlug, rooms } from "@/data/rooms";
import { buildPageMetadata } from "@/lib/seo";

type RoomDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({
  params,
}: RoomDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const room = getRoomBySlug(slug);

  if (!room) {
    return {};
  }

  return buildPageMetadata({
    title: room.name,
    description: room.shortDescription,
    path: `/rooms/${room.slug}`,
    image: room.images[0],
  });
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

      <CTABanner />
    </>
  );
}
