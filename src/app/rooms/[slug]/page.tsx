type RoomDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function RoomDetailPage({ params }: RoomDetailPageProps) {
  const { slug } = await params;

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-6 pb-20 pt-28">
      <h1 className="text-2xl font-medium capitalize">{slug.replace(/-/g, " ")}</h1>
    </div>
  );
}
