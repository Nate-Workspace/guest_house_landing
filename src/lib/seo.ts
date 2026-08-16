import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import type { ContactAddress, Room } from "@/lib/types";

export interface PageMetadataOptions {
  /** Page title without site name — root layout template adds `| {site.name}`. */
  title: string;
  /** Set true for the home page to bypass the title template. */
  absoluteTitle?: boolean;
  description?: string;
  /** Pathname including leading slash, e.g. `/rooms`. Omit for home (`/`). */
  path?: string;
  image?: string;
  noIndex?: boolean;
}

const DEFAULT_SITE_URL = "https://example.com";

/** Public site origin used for canonical URLs, Open Graph, and JSON-LD. */
export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL;
}

function resolvePath(path?: string): string {
  if (!path || path === "/") return "/";
  return path.startsWith("/") ? path : `/${path}`;
}

function buildAbsoluteUrl(path?: string): string {
  const normalizedPath = resolvePath(path);
  if (normalizedPath === "/") return getSiteUrl();
  return `${getSiteUrl()}${normalizedPath}`;
}

function formatPostalAddress(address: ContactAddress) {
  return {
    "@type": "PostalAddress" as const,
    streetAddress: address.street,
    addressLocality: address.city,
    addressRegion: address.region,
    postalCode: address.postalCode,
    addressCountry: address.country,
  };
}

/** Builds per-route Next.js metadata with Open Graph and Twitter cards. */
export function buildPageMetadata({
  title,
  absoluteTitle = false,
  description = siteConfig.seo.description,
  path,
  image = siteConfig.seo.ogImage,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const url = buildAbsoluteUrl(path);
  const openGraphTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: openGraphTitle,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US",
      images: [{ url: image, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: openGraphTitle,
      description,
      images: [image],
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

/** JSON-LD for the home page — schema.org LodgingBusiness. */
export function buildLodgingBusinessJsonLd() {
  const { contact, seo, name, tagline } = siteConfig;

  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name,
    description: seo.description,
    slogan: tagline,
    url: getSiteUrl(),
    image: seo.ogImage,
    telephone: contact.phone,
    email: contact.email,
    address: formatPostalAddress(contact.address),
    ...(contact.address && {
      areaServed: contact.address.region,
    }),
  };
}

/** JSON-LD for room detail pages — schema.org HotelRoom. */
export function buildHotelRoomJsonLd(room: Room) {
  const roomUrl = buildAbsoluteUrl(`/rooms/${room.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    name: room.name,
    description: room.description,
    url: roomUrl,
    image: room.images,
    occupancy: {
      "@type": "QuantitativeValue",
      maxValue: room.capacity,
    },
    bed: {
      "@type": "BedDetails",
      typeOfBed: room.bedType,
    },
    amenityFeature: room.amenities.map((amenity) => ({
      "@type": "LocationFeatureSpecification",
      name: amenity,
      value: true,
    })),
    containedInPlace: {
      "@type": "LodgingBusiness",
      name: siteConfig.name,
      url: getSiteUrl(),
    },
    ...(room.price !== undefined && {
      offers: {
        "@type": "Offer",
        price: room.price,
        priceCurrency: "ETB",
        availability: "https://schema.org/InStock",
        url: `${getSiteUrl()}/contact?room=${room.slug}`,
      },
    }),
  };
}

/** Safe JSON string for `<script type="application/ld+json">` tags. */
export function serializeJsonLd(data: object | object[]): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
