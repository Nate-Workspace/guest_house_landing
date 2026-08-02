import type { Amenity, AmenityCategory } from "@/lib/types";

export const amenities = [
  // Accommodation
  {
    id: "accommodation-ac",
    name: "Climate control",
    description: "Individual air conditioning and heating in every room for year-round comfort.",
    category: "Accommodation",
    icon: "thermometer",
  },
  {
    id: "accommodation-linens",
    name: "Premium linens",
    description: "Italian cotton sheets, down pillows, and plush duvets on every bed.",
    category: "Accommodation",
    icon: "bed",
  },
  {
    id: "accommodation-minibar",
    name: "Curated minibar",
    description: "Locally sourced wines, artisan snacks, and still or sparkling water.",
    category: "Accommodation",
    icon: "wine",
  },
  {
    id: "accommodation-toiletries",
    name: "Luxury toiletries",
    description: "Natural Provençal bath products, soft towels, and daily replenishment.",
    category: "Accommodation",
    icon: "sparkles",
  },
  {
    id: "accommodation-safe",
    name: "In-room safe",
    description: "Secure storage for valuables, passports, and electronics.",
    category: "Accommodation",
    icon: "lock",
  },
  {
    id: "accommodation-housekeeping",
    name: "Daily housekeeping",
    description: "Thoughtful turndown service and fresh linens upon request.",
    category: "Accommodation",
    icon: "home",
  },

  // Dining
  {
    id: "dining-breakfast",
    name: "Continental breakfast",
    description: "Fresh pastries, local cheeses, seasonal fruit, and barista coffee each morning.",
    category: "Dining",
    icon: "coffee",
  },
  {
    id: "dining-terrace",
    name: "Garden terrace dining",
    description: "Al fresco breakfast and light lunches surrounded by lavender and olive trees.",
    category: "Dining",
    icon: "sun",
  },
  {
    id: "dining-wine",
    name: "Wine cellar selection",
    description: "Curated list of Luberon and Rhône Valley wines available by the glass or bottle.",
    category: "Dining",
    icon: "grape",
  },
  {
    id: "dining-room-service",
    name: "Evening room service",
    description: "Light bites and cheese boards delivered to your room until 9:00 PM.",
    category: "Dining",
    icon: "utensils",
  },

  // Internet
  {
    id: "internet-wifi",
    name: "High-speed Wi-Fi",
    description: "Complimentary fibre internet throughout the property and in all guest rooms.",
    category: "Internet",
    icon: "wifi",
  },
  {
    id: "internet-workspace",
    name: "Quiet workspaces",
    description: "Desk areas in select rooms and a shaded garden nook for remote work.",
    category: "Internet",
    icon: "laptop",
  },

  // Parking
  {
    id: "parking-on-site",
    name: "On-site parking",
    description: "Private gated parking at no extra charge — one space per room.",
    category: "Parking",
    icon: "car",
  },
  {
    id: "parking-ev",
    name: "EV charging",
    description: "Two Level 2 electric vehicle charging points available by reservation.",
    category: "Parking",
    icon: "zap",
  },

  // Laundry
  {
    id: "laundry-service",
    name: "Laundry service",
    description: "Same-day wash and fold available on weekdays; express service on request.",
    category: "Laundry",
    icon: "shirt",
  },
  {
    id: "laundry-ironing",
    name: "Iron & board",
    description: "Ironing facilities available upon request from reception.",
    category: "Laundry",
    icon: "iron",
  },

  // Family
  {
    id: "family-cot",
    name: "Baby cot",
    description: "Complimentary cot and high chair available — please request when inquiring.",
    category: "Family",
    icon: "baby",
  },
  {
    id: "family-garden",
    name: "Family-friendly garden",
    description: "Enclosed courtyard safe for children, with shaded seating for parents.",
    category: "Family",
    icon: "trees",
  },
  {
    id: "family-recommendations",
    name: "Local activity guides",
    description: "Personal recommendations for family-friendly markets, hikes, and villages.",
    category: "Family",
    icon: "map",
  },

  // Accessibility
  {
    id: "accessibility-ground-floor",
    name: "Ground-floor access",
    description: "The Jardin Room and common areas are accessible without stairs.",
    category: "Accessibility",
    icon: "accessibility",
  },
  {
    id: "accessibility-elevator",
    name: "Lift to upper floors",
    description: "Small elevator serves all upper-floor rooms and the terrace level.",
    category: "Accessibility",
    icon: "elevator",
  },
  {
    id: "accessibility-bathroom",
    name: "Accessible bathroom",
    description: "Ground-floor ensuite with grab rails available upon request.",
    category: "Accessibility",
    icon: "bath",
  },
] satisfies Amenity[];

export const amenityCategories: AmenityCategory[] = [
  "Accommodation",
  "Dining",
  "Internet",
  "Parking",
  "Laundry",
  "Family",
  "Accessibility",
];

export function getAmenitiesByCategory(category: AmenityCategory): Amenity[] {
  return amenities.filter((amenity) => amenity.category === category);
}
