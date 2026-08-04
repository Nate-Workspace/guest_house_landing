import type { Room } from "@/lib/types";

export const rooms = [
  {
    slug: "lavande-suite",
    name: "Lavande Suite",
    description:
      "Our signature suite opens onto a private terrace with sweeping views over the Luberon valley. Handcrafted Provençal furnishings, a king-size bed dressed in Italian linens, and a marble ensuite with a rainfall shower and soaking tub create an atmosphere of unhurried elegance. Morning light filters through sheer curtains as lavender scents drift in from the garden below.",
    shortDescription:
      "Signature suite with private terrace, valley views, and marble ensuite with soaking tub.",
    capacity: 2,
    bedType: "King bed",
    bathroom: "Ensuite with rainfall shower and soaking tub",
    price: 320,
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1611892440504-42a792e2848d?w=1200&h=800&fit=crop",
    ],
    amenities: [
      "Private terrace",
      "Valley views",
      "Air conditioning",
      "Minibar",
      "Nespresso machine",
      "Premium toiletries",
      "Bathrobes & slippers",
      "Safe",
    ],
    featured: true,
  },
  {
    slug: "terrasse-room",
    name: "Terrasse Room",
    description:
      "A sun-drenched retreat on the upper floor, the Terrasse Room pairs warm ochre walls with restored antique armoires and contemporary comfort. Step through French doors onto your own shaded terrace — ideal for evening aperitifs as the light softens over the stone village rooftops. The spacious ensuite features a walk-in shower and heated towel rails.",
    shortDescription:
      "Upper-floor room with private shaded terrace and walk-in ensuite shower.",
    capacity: 2,
    bedType: "Queen bed",
    bathroom: "Ensuite with walk-in shower",
    price: 245,
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d2f08a4?w=1200&h=800&fit=crop",
    ],
    amenities: [
      "Private terrace",
      "Air conditioning",
      "Minibar",
      "Nespresso machine",
      "Premium toiletries",
      "Bathrobes & slippers",
      "Safe",
      "Village views",
    ],
    featured: true,
  },
  {
    slug: "jardin-room",
    name: "Jardin Room",
    description:
      "Ground-floor serenity awaits in the Jardin Room, where your windows open directly onto our manicured lavender garden and stone fountain. The room blends rustic Provençal charm with modern amenities — a plush queen bed, writing desk, and a beautifully tiled ensuite. Guests love the gentle sound of the fountain and the scent of herbs in the morning air.",
    shortDescription:
      "Ground-floor garden room with direct access to the lavender courtyard.",
    capacity: 2,
    bedType: "Queen bed",
    bathroom: "Ensuite with shower",
    price: 210,
    images: [
      "https://images.unsplash.com/photo-1618773928121-c1d5f9b1a564?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b2b?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&h=800&fit=crop",
    ],
    amenities: [
      "Garden access",
      "Air conditioning",
      "Minibar",
      "Nespresso machine",
      "Premium toiletries",
      "Bathrobes & slippers",
      "Safe",
      "Writing desk",
    ],
    featured: true,
  },
  {
    slug: "provence-room",
    name: "Provence Room",
    description:
      "Comfortable and thoughtfully appointed, the Provence Room offers a restful base for exploring the region. Soft neutral tones, a quality queen bed, and a compact ensuite make this an excellent choice for solo travellers or couples seeking understated luxury without excess. A partial view of the olive grove completes the pastoral setting.",
    shortDescription:
      "Classic double room with olive grove views and modern ensuite.",
    capacity: 2,
    bedType: "Queen bed",
    bathroom: "Ensuite with shower",
    price: 185,
    images: [
      "https://images.unsplash.com/photo-1590071245000-5ec6707c6880?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1560185127-6ed189bf0f51?w=1200&h=800&fit=crop",
    ],
    amenities: [
      "Olive grove views",
      "Air conditioning",
      "Minibar",
      "Premium toiletries",
      "Bathrobes & slippers",
      "Safe",
    ],
    featured: false,
  },
  {
    slug: "suite-ciel",
    name: "Suite Ciel",
    description:
      "Occupying the entire top floor, Suite Ciel is our most expansive accommodation — a separate living area with sofa and dining table, a master bedroom with king bed, and a luxurious bathroom with dual vanities and a freestanding tub positioned beneath a skylight. Panoramic views stretch from the Luberon mountains to the distant vineyards, making every hour feel like golden hour.",
    shortDescription:
      "Top-floor suite with living area, skylit bathroom, and panoramic Luberon views.",
    capacity: 3,
    bedType: "King bed + sofa bed",
    bathroom: "Ensuite with freestanding tub, dual vanities, and shower",
    price: 420,
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
    ],
    amenities: [
      "Separate living area",
      "Panoramic views",
      "Air conditioning",
      "Minibar",
      "Nespresso machine",
      "Premium toiletries",
      "Bathrobes & slippers",
      "Safe",
      "Sofa bed",
    ],
    featured: false,
  },
  {
    slug: "petit-studio",
    name: "Petit Studio",
    description:
      "Cosy and characterful, the Petit Studio is perfect for a solo traveller or short stay. Tucked into a quiet corner of the property, it features a comfortable double bed, a small kitchenette with fridge and kettle, and a compact ensuite. Despite its size, thoughtful design and quality finishes ensure a comfortable, restful experience.",
    shortDescription:
      "Intimate studio with kitchenette — ideal for solo travellers.",
    capacity: 1,
    bedType: "Double bed",
    bathroom: "Compact ensuite with shower",
    price: 145,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop",
    ],
    amenities: [
      "Kitchenette",
      "Air conditioning",
      "Kettle & fridge",
      "Premium toiletries",
      "Safe",
    ],
    featured: false,
  },
] satisfies Room[];

export const featuredRooms = rooms.filter((room) => room.featured);

export function getRoomBySlug(slug: string): Room | undefined {
  return rooms.find((room) => room.slug === slug);
}

export function getRelatedRooms(slug: string, limit = 2): Room[] {
  const current = getRoomBySlug(slug);
  if (!current) {
    return [];
  }

  const others = rooms.filter((room) => room.slug !== slug);
  const sameCapacity = others.filter((room) => room.capacity === current.capacity);
  const differentCapacity = others.filter((room) => room.capacity !== current.capacity);

  return [...sameCapacity, ...differentCapacity].slice(0, limit);
}
