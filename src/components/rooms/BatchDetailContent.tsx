import { siteConfig } from "@/config/site";
import { buildInquiryHref } from "@/data/rooms";
import { Button } from "@/components/ui/Button";
import type { RoomBatch } from "@/lib/types";

type BatchDetailContentProps = {
  batch: RoomBatch;
};

export function BatchDetailContent({ batch }: BatchDetailContentProps) {
  const showPrice = siteConfig.features.showPrices && batch.price;
  const roomCount = batch.units.length;

  return (
    <section className="section-padding bg-surface section-glow">
      <div className="container-content">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
          <article className="lg:col-span-7">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              {batch.name}
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-text md:text-4xl lg:text-[2.75rem]">
              {batch.subtitle}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text md:text-xl">
              {batch.shortDescription}
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
              {batch.description}
            </p>
            <p className="mt-6 border-l-2 border-accent/30 pl-4 text-sm leading-relaxed text-muted md:text-base">
              {roomCount} rooms share this exact layout across the building. Photos
              show the design — your room number is confirmed when you inquire.
            </p>

            <div className="mt-10 md:mt-12">
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                Included with your stay
              </h3>
              <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {batch.amenities.map((amenity) => (
                  <li
                    key={amenity}
                    className="flex items-start gap-3 text-sm leading-relaxed text-muted md:text-base"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{amenity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-xl bg-bg-warm ring-1 ring-text/5">
                <div className="border-b border-text/5 px-6 py-6 md:px-7 md:py-7">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                    Plan your stay
                  </p>
                  {showPrice ? (
                    <p className="mt-3 font-display text-3xl text-text md:text-4xl">
                      ETB {batch.price!.toLocaleString()}
                      <span className="ml-2 font-body text-sm font-normal text-muted">
                        / night
                      </span>
                    </p>
                  ) : (
                    <p className="mt-3 font-display text-2xl text-text">
                      Inquiry-only booking
                    </p>
                  )}
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    Send an inquiry and we&apos;ll confirm availability by phone or
                    email — no online payment required.
                  </p>
                </div>

                <dl className="divide-y divide-text/5 px-6 md:px-7">
                  <SpecRow label="Room type" value={batch.name} />
                  <SpecRow
                    label="Available rooms"
                    value={`${roomCount} of this design`}
                  />
                  <SpecRow
                    label="Capacity"
                    value={
                      batch.capacity === 1
                        ? "1 guest"
                        : `Up to ${batch.capacity} guests`
                    }
                  />
                  <SpecRow label="Bed configuration" value={batch.bedType} />
                  <SpecRow label="Bathroom" value={batch.bathroom} />
                </dl>

                <div className="px-6 py-6 md:px-7 md:py-7">
                  <Button
                    href={buildInquiryHref(batch.slug)}
                    size="lg"
                    className="w-full"
                  >
                    Inquire for availability
                  </Button>
                  <p className="mt-4 text-center text-xs leading-relaxed text-muted">
                    Prefer a specific room number? Choose one in the section below.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-6 py-4">
      <dt className="text-sm text-muted">{label}</dt>
      <dd className="text-right text-sm font-medium text-text">{value}</dd>
    </div>
  );
}
