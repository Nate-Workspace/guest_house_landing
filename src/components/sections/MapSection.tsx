import { SectionBackground } from "@/components/ui/SectionBackground";
import { siteConfig } from "@/config/site";
import { gallery } from "@/data/gallery";
import { cn } from "@/lib/utils";

type MapSectionProps = {
  title?: string;
  description?: string;
  layout?: "split" | "fullWidth";
  showAddress?: boolean;
  backgroundImage?: string;
  backgroundImageAlt?: string;
  /** Full-bleed embed — no background image, heading, or address overlay. */
  mapOnly?: boolean;
};

const splitBackground = gallery.find((item) => item.id === "gallery-village")!;
const fullWidthBackground = gallery.find((item) => item.id === "gallery-lavender")!;

export function MapSection({
  title = "Find us",
  description = "Alem Pension sits in the heart of Hawassa, with easy access to Menahria, Sumuda, Piassa, Atote, and Hawassa Lake.",
  layout = "split",
  showAddress = true,
  backgroundImage,
  backgroundImageAlt,
  mapOnly = false,
}: MapSectionProps) {
  const { address, mapEmbedUrl } = siteConfig.contact;
  const formattedAddress = [
    address.street,
    `${address.postalCode} ${address.city}`,
    address.region,
    address.country,
  ].join("\n");

  if (mapOnly) {
    return (
      <section className="section-divider relative w-full overflow-hidden">
        <iframe
          title={`Map showing location of ${siteConfig.name}`}
          src={mapEmbedUrl}
          className="block h-[min(72vh,820px)] w-full min-h-[420px] border-0 sm:min-h-[480px] md:min-h-[560px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>
    );
  }

  const bg =
    layout === "fullWidth" ? fullWidthBackground : splitBackground;
  const image = backgroundImage ?? bg.src;
  const imageAlt = backgroundImageAlt ?? bg.alt;

  const intro = (
    <>
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-surface/75">
        Location
      </p>
      <h2 className="mt-3 font-display text-3xl text-surface md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed text-surface/85",
            layout === "split" ? "max-w-md" : "max-w-2xl",
          )}
        >
          {description}
        </p>
      ) : null}

      {showAddress ? (
        <address className="mt-8 not-italic">
          <p className="font-medium text-surface">{siteConfig.name}</p>
          <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-surface/80">
            {formattedAddress}
          </p>
        </address>
      ) : null}
    </>
  );

  const map = (
    <div className="overflow-hidden rounded-lg bg-surface/95 shadow-luxury ring-1 ring-text/5 backdrop-blur-sm">
      <iframe
        title={`Map showing location of ${siteConfig.name}`}
        src={mapEmbedUrl}
        className={cn(
          "w-full border-0",
          layout === "fullWidth"
            ? "aspect-4/3 min-h-80 md:aspect-21/9 md:min-h-96"
            : "aspect-4/3 md:aspect-video",
        )}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );

  return (
    <SectionBackground image={image} imageAlt={imageAlt}>
      {layout === "fullWidth" ? (
        <div className="space-y-10">
          {intro}
          {map}
        </div>
      ) : (
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>{intro}</div>
          {map}
        </div>
      )}
    </SectionBackground>
  );
}
