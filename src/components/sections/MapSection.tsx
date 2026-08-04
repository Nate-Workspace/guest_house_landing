import { siteConfig } from "@/config/site";

type MapSectionProps = {
  title?: string;
  description?: string;
};

export function MapSection({
  title = "Find us",
  description = "Serenité Guesthouse sits on the edge of Gordes, with easy access to village life and the open Luberon countryside.",
}: MapSectionProps) {
  const { address, mapEmbedUrl } = siteConfig.contact;
  const formattedAddress = [
    address.street,
    `${address.postalCode} ${address.city}`,
    address.region,
    address.country,
  ].join("\n");

  return (
    <section className="section-padding bg-surface">
      <div className="container-content">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Location
            </p>
            <h2 className="mt-3 font-display text-3xl text-text md:text-4xl">
              {title}
            </h2>
            {description ? (
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                {description}
              </p>
            ) : null}

            <address className="mt-8 not-italic">
              <p className="font-medium text-text">{siteConfig.name}</p>
              <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-muted">
                {formattedAddress}
              </p>
            </address>
          </div>

          <div className="overflow-hidden rounded-lg shadow-luxury ring-1 ring-text/5">
            <iframe
              title={`Map showing location of ${siteConfig.name}`}
              src={mapEmbedUrl}
              className="aspect-4/3 w-full border-0 md:aspect-video"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
