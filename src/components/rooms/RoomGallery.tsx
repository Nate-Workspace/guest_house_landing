import Image from "next/image";

type RoomGalleryProps = {
  images: string[];
  roomName: string;
};

export function RoomGallery({ images, roomName }: RoomGalleryProps) {
  if (images.length === 0) {
    return null;
  }

  if (images.length === 1) {
    return (
      <section className="border-t border-text/5 bg-bg">
        <div className="container-content py-12 md:py-16 lg:py-20">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            More photos
          </p>
          <div className="relative aspect-4/3 overflow-hidden rounded-lg shadow-luxury md:aspect-16/10">
            <Image
              src={images[0]}
              alt={`${roomName} — additional view`}
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="border-t border-text/5 bg-bg">
      <div className="container-content py-12 md:py-16 lg:py-20">
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-accent">
          More photos
        </p>
        <div
          className={
            images.length === 2
              ? "grid gap-4 md:grid-cols-2 md:gap-6"
              : "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          }
        >
          {images.map((image, index) => (
            <div
              key={image}
              className="relative aspect-4/3 overflow-hidden rounded-lg shadow-sm ring-1 ring-text/5"
            >
              <Image
                src={image}
                alt={`${roomName} — photo ${index + 1}`}
                fill
                className="object-cover"
                sizes={
                  images.length === 2
                    ? "(max-width: 768px) 100vw, 50vw"
                    : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
