import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/motion";
import {
  BatchDetailContent,
  BatchDetailStats,
  RelatedBatches,
  RoomGallery,
  RoomUnitPicker,
} from "@/components/rooms";
import { CTABanner, PageHero } from "@/components/sections";
import { JsonLd } from "@/components/seo";
import { getBatchBySlug, roomBatches } from "@/data/rooms";
import { buildPageMetadata, buildRoomBatchJsonLd } from "@/lib/seo";

type BatchDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return roomBatches.map((batch) => ({ slug: batch.slug }));
}

export async function generateMetadata({
  params,
}: BatchDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const batch = getBatchBySlug(slug);

  if (!batch) {
    return {};
  }

  return buildPageMetadata({
    title: `${batch.name} · ${batch.subtitle}`,
    description: batch.shortDescription,
    path: `/rooms/${batch.slug}`,
    image: batch.images[0],
  });
}

export default async function BatchDetailPage({ params }: BatchDetailPageProps) {
  const { slug } = await params;
  const batch = getBatchBySlug(slug);

  if (!batch) {
    notFound();
  }

  const roomCount = batch.units.length;

  return (
    <>
      <JsonLd data={buildRoomBatchJsonLd(batch)} />
      <div className="bg-bg">
        <PageHero
          eyebrow={batch.name}
          title={batch.subtitle}
          description={`${batch.shortDescription} · ${roomCount} room${roomCount === 1 ? "" : "s"} of this type`}
          image={batch.images[0]}
          imageAlt={`${batch.name} — ${batch.subtitle}`}
        />
        <BatchDetailStats batch={batch} />
      </div>

      {batch.images.length > 0 ? (
        <FadeIn>
          <RoomGallery images={batch.images} roomName={batch.name} />
        </FadeIn>
      ) : (
        <div className="h-6 md:h-10" aria-hidden="true" />
      )}

      <FadeIn>
        <BatchDetailContent batch={batch} />
      </FadeIn>

      <RoomUnitPicker batch={batch} />

      <FadeIn>
        <RelatedBatches currentSlug={slug} />
      </FadeIn>

      <CTABanner />
    </>
  );
}
