import { PageStub } from "@/components/layout";

type RoomDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function RoomDetailPage({ params }: RoomDetailPageProps) {
  const { slug } = await params;
  const roomName = slug.replace(/-/g, " ");

  return (
    <PageStub
      title={roomName}
      description="Individual room galleries, amenities, and inquiry options are coming soon. Contact us to ask about this room."
    />
  );
}
