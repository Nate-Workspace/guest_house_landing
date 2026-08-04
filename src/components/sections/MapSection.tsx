import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type MapSectionProps = {
  title?: string;
  description?: string;
  layout?: "split" | "fullWidth";
  showAddress?: boolean;
};

export function MapSection({
  title = "Find us",
  description = "Serenité Guesthouse sits on the edge of Gordes, with easy access to village life and the open Luberon countryside.",
  layout = "split",
  showAddress = true,
}: MapSectionProps) {
  const { address, mapEmbedUrl } = siteConfig.contact;
  const formattedAddress = [
    address.street,
    `${address.postalCode} ${address.city}`,
    address.region,
    address.country,
  ].join("\n");

  const intro = (
    <>
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
        Location
      </p>
      <h2 className="mt-3 font-display text-3xl text-text md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed text-muted",
            layout === "split" ? "max-w-md" : "max-w-2xl",
          )}
        >
          {description}
        </p>
      ) : null}

      {showAddress ? (
        <address className="mt-8 not-italic">
          <p className="font-medium text-text">{siteConfig.name}</p>
          <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-muted">
            {formattedAddress}
          </p>
        </address>
      ) : null}
    </>
  );

  const map = (
    <div className="overflow-hidden rounded-lg shadow-luxury ring-1 ring-text/5">
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
    <section className="section-padding section-divider bg-bg-warm">
      <div className="container-content">
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
      </div>
    </section>
  );
}
