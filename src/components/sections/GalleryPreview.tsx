import Image from "next/image";
import Link from "next/link";
import { StaggerChildren, StaggerItem } from "@/components/motion";
import { galleryPreview } from "@/data/gallery";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function GalleryPreview() {
  const [featured, ...rest] = galleryPreview;

  return (
    <section className="section-padding section-divider bg-accent-soft section-glow">
      <div className="container-content">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Gallery"
            title="Moments of serenity"
            description="Sunlit terraces, lavender-scented gardens, and interiors that honour the spirit of Provence."
          />
          <Button href="/gallery" variant="outline" className="shrink-0 self-start md:self-auto">
            View gallery
          </Button>
        </div>

        <StaggerChildren className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          <StaggerItem
            index={0}
            className="col-span-2 row-span-2 aspect-square md:aspect-auto md:min-h-80"
          >
            <Link
              href="/gallery"
              className="group relative block h-full overflow-hidden rounded-lg"
            >
              <Image
                src={featured.src}
                alt={featured.alt}
                fill
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-text/0 transition-colors duration-300 group-hover:bg-text/20" />
            </Link>
          </StaggerItem>

          {rest.map((image, index) => (
            <StaggerItem key={image.id} index={index + 1}>
              <Link
                href="/gallery"
                className="group relative block aspect-square overflow-hidden rounded-lg"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-text/0 transition-colors duration-300 group-hover:bg-text/20" />
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
