import type { Amenity, AmenityCategory } from "@/lib/types";
import {
  outsideImages,
  roomFolderImages,
  stairImages,
} from "@/data/site-images";

export const amenities = [
  // Accommodation
  {
    id: "accommodation-beds",
    name: "Comfortable beds & fresh linen",
    description:
      "Quality beds dressed in clean, fresh linen — replaced regularly and prepared with care before every arrival.",
    category: "Accommodation",
    icon: "bed",
  },
  {
    id: "accommodation-housekeeping",
    name: "Daily housekeeping",
    description:
      "Rooms and common areas are cleaned daily so your space stays spotless throughout your stay.",
    category: "Accommodation",
    icon: "home",
  },
  {
    id: "accommodation-climate",
    name: "Comfortable room environment",
    description:
      "Well-ventilated rooms with quality furnishings designed for restful sleep and everyday comfort.",
    category: "Accommodation",
    icon: "thermometer",
  },
  {
    id: "accommodation-toiletries",
    name: "Private restrooms & showers",
    description:
      "Ensuite bathrooms with showers, fresh towels, and essential toiletries — maintained with care throughout your stay.",
    category: "Accommodation",
    icon: "sparkles",
  },
  {
    id: "accommodation-safe",
    name: "Secure accommodation",
    description:
      "A safe, well-managed property where guests can relax with peace of mind day and night.",
    category: "Accommodation",
    icon: "lock",
  },

  // Internet
  {
    id: "internet-wifi",
    name: "High-speed Wi-Fi",
    description:
      "Free high-speed internet access throughout the property and in all guest rooms.",
    category: "Internet",
    icon: "wifi",
  },
  {
    id: "internet-workspace",
    name: "Quiet workspaces",
    description:
      "Calm areas suited for remote work, study, or catching up on email without distraction.",
    category: "Internet",
    icon: "laptop",
  },

  // Parking
  {
    id: "parking-on-site",
    name: "Secure on-site parking",
    description:
      "Complimentary secure parking within the property — convenient and free for all guests.",
    category: "Parking",
    icon: "car",
  },

  // Laundry
  {
    id: "laundry-service",
    name: "Paid laundry service",
    description:
      "Laundry available as a paid service for guests on longer stays or busy trips — ask our team for rates.",
    category: "Laundry",
    icon: "shirt",
  },
  {
    id: "laundry-ironing",
    name: "Ironing on request",
    description:
      "Paid ironing assistance available upon request — ask our team at reception for rates.",
    category: "Laundry",
    icon: "iron",
  },

  // Family
  {
    id: "family-friendly",
    name: "Family-friendly stays",
    description:
      "A secure and comfortable environment well suited to families visiting Hawassa together.",
    category: "Family",
    icon: "baby",
  },
  {
    id: "family-quiet",
    name: "Peaceful surroundings",
    description:
      "A quiet pension setting where families and couples can rest without unnecessary noise or bustle.",
    category: "Family",
    icon: "trees",
  },
  {
    id: "family-recommendations",
    name: "Local recommendations",
    description:
      "Personal tips for nearby restaurants, Lake Hawassa, and key city centres from our knowledgeable team.",
    category: "Family",
    icon: "map",
  },

  // Accessibility
  {
    id: "accessibility-assistance",
    name: "Attentive staff assistance",
    description:
      "Our team is ready to help with luggage, directions, and any reasonable accessibility requests.",
    category: "Accessibility",
    icon: "elevator",
  },
  {
    id: "accessibility-common-areas",
    name: "Accessible common areas",
    description:
      "Entry and shared spaces designed to be straightforward and comfortable for all guests.",
    category: "Accessibility",
    icon: "bath",
  },
] satisfies Amenity[];

export const amenityCategories: AmenityCategory[] = [
  "Accommodation",
  "Internet",
  "Parking",
  "Laundry",
  "Family",
  "Accessibility",
];

export function getAmenitiesByCategory(category: AmenityCategory): Amenity[] {
  return amenities.filter((amenity) => amenity.category === category);
}

export type AmenityCategoryMeta = {
  tagline: string;
  description: string;
  image?: string;
  imageAlt?: string;
};

export const amenityCategoryMeta = {
  Accommodation: {
    tagline: "Rest easy",
    description:
      "From fresh linen and quality beds to private ensuite showers — your room is prepared with the same care we would want for our own guests.",
    image: roomFolderImages[1]?.[0],
    imageAlt: "Comfortable guest room at Alem Pension",
  },
  Internet: {
    tagline: "Stay connected",
    description:
      "Reliable Wi-Fi and quiet corners when you need to work, study, or catch up from the road.",
    image: roomFolderImages[6]?.[0] ?? stairImages[0],
    imageAlt: "Quiet workspace at Alem Pension",
  },
  Parking: {
    tagline: "Arrive with ease",
    description:
      "Secure on-site parking so you can come and go without worry — included for every guest.",
    image: outsideImages[1] ?? outsideImages[0],
    imageAlt: "Exterior of Alem Pension with parking",
  },
  Laundry: {
    tagline: "Fresh & ready",
    description:
      "Paid laundry and ironing available on request — our team will share rates when you inquire.",
    image: roomFolderImages[5]?.[0],
    imageAlt: "Guest room details at Alem Pension",
  },
  Family: {
    tagline: "Welcome for everyone",
    description:
      "A peaceful setting for families and couples, with local tips from hosts who know Hawassa well.",
    image: outsideImages[3] ?? outsideImages[0],
    imageAlt: "Peaceful surroundings at Alem Pension",
  },
  Accessibility: {
    tagline: "Here to help",
    description:
      "Attentive staff and accessible common areas — let us know if you have any specific needs when you inquire.",
    image: stairImages[2] ?? stairImages[0],
    imageAlt: "Accessible common areas at Alem Pension",
  },
} satisfies Record<AmenityCategory, AmenityCategoryMeta>;

export const amenityQuickStats = [
  { label: "Thoughtful touches", value: `${amenities.length}` },
  { label: "Housekeeping", value: "Daily" },
  { label: "Wi-Fi", value: "Free" },
  { label: "Secure parking", value: "Free" },
] as const;
