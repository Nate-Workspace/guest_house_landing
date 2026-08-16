import type { MetadataRoute } from "next";
import { roomBatches } from "@/data/room-batches";
import { getSiteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();

  const staticRoutes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { path: "", changeFrequency: "weekly", priority: 1 },
    { path: "/rooms", changeFrequency: "weekly", priority: 0.9 },
    { path: "/gallery", changeFrequency: "monthly", priority: 0.8 },
    { path: "/about", changeFrequency: "monthly", priority: 0.8 },
    { path: "/amenities", changeFrequency: "monthly", priority: 0.7 },
    { path: "/attractions", changeFrequency: "monthly", priority: 0.7 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  ];

  const staticEntries = staticRoutes.map(({ path, changeFrequency, priority }) => ({
    url: path ? `${baseUrl}${path}` : baseUrl,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  const roomEntries = roomBatches.map((batch) => ({
    url: `${baseUrl}/rooms/${batch.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...roomEntries];
}
