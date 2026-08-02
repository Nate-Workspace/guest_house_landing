export interface NavItem {
  label: string;
  href: string;
}

export interface ContactAddress {
  street: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  whatsapp: string;
  address: ContactAddress;
  mapEmbedUrl: string;
  hours: string;
}

export interface SocialLinks {
  instagram?: string;
  facebook?: string;
}

export interface SeoConfig {
  defaultTitle: string;
  description: string;
  ogImage: string;
}

export interface SiteFeatures {
  showPrices: boolean;
  stickyBookBar: boolean;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  contact: ContactInfo;
  social: SocialLinks;
  nav: NavItem[];
  seo: SeoConfig;
  features: SiteFeatures;
}

export interface Room {
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  capacity: number;
  bedType: string;
  bathroom: string;
  price?: number;
  images: string[];
  amenities: string[];
  featured: boolean;
}

export type AmenityCategory =
  | "Accommodation"
  | "Dining"
  | "Internet"
  | "Parking"
  | "Laundry"
  | "Family"
  | "Accessibility";

export interface Amenity {
  id: string;
  name: string;
  description: string;
  category: AmenityCategory;
  icon?: string;
}

export interface Attraction {
  id: string;
  name: string;
  description: string;
  distance: string;
  image: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location?: string;
  rating?: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category?: string;
}
