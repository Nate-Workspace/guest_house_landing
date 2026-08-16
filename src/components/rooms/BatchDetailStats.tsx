import { siteConfig } from "@/config/site";
import type { RoomBatch } from "@/lib/types";

type BatchDetailStatsProps = {
  batch: RoomBatch;
};

export function BatchDetailStats({ batch }: BatchDetailStatsProps) {
  const showPrice = siteConfig.features.showPrices && batch.price;
  const roomCount = batch.units.length;

  const stats = [
    {
      label: "Rooms of this type",
      value: String(roomCount),
    },
    {
      label: "Sleeps",
      value: batch.capacity === 1 ? "1 guest" : `Up to ${batch.capacity}`,
    },
    {
      label: "Bed",
      value: batch.bedType,
    },
    {
      label: "Bathroom",
      value: batch.bathroom.replace(/^Private /, ""),
    },
    ...(showPrice
      ? [
          {
            label: "Nightly rate",
            value: `ETB ${batch.price!.toLocaleString()}`,
          },
        ]
      : []),
  ];

  const gridCols =
    stats.length === 5
      ? "sm:grid-cols-3 lg:grid-cols-5 lg:divide-y-0"
      : "sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0";

  return (
    <div className="relative z-20 -mt-10 md:-mt-14">
      <div className="container-content">
        <div className="overflow-hidden rounded-xl bg-surface shadow-luxury ring-1 ring-text/5">
          <dl
            className={`grid grid-cols-2 divide-x divide-y divide-text/5 ${gridCols}`}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex min-h-[5.5rem] flex-col justify-center px-4 py-4 sm:min-h-[6rem] sm:px-5 md:px-6"
              >
                <dt className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-muted sm:text-xs">
                  {stat.label}
                </dt>
                <dd className="mt-1.5 font-display text-lg leading-snug text-text sm:text-xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
