import type { Room } from "@/lib/types";

export const rooms = [
  {
    slug: "deluxe-double",
    name: "Deluxe Double Room",
    description:
      "Our most popular room for couples and business travellers. A spacious double room with a comfortable queen bed, fresh linen, quality shower, and a quiet atmosphere ideal for rest after a day in Hawassa. Fast Wi-Fi and daily housekeeping come standard.",
    shortDescription:
      "Spacious double room with queen bed, quality shower, and daily housekeeping.",
    capacity: 2,
    bedType: "Queen bed",
    bathroom: "Private ensuite with hot shower",
    price: 3200,
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1200&h=800&fit=crop",
    ],
    amenities: [
      "Queen bed with fresh linen",
      "Hot shower",
      "High-speed Wi-Fi",
      "Daily housekeeping",
      "Complimentary breakfast",
      "Quiet workspace",
      "Secure parking",
    ],
    featured: true,
  },
  {
    slug: "premium-double",
    name: "Premium Double Room",
    description:
      "A step above our standard rooms, the Premium Double offers extra space, refined furnishings, and a restful setting for guests who appreciate added comfort. Ideal for longer stays or visitors who want a little more room to unwind.",
    shortDescription:
      "Extra-spacious double room with refined furnishings and ensuite shower.",
    capacity: 2,
    bedType: "Queen bed",
    bathroom: "Private ensuite with hot shower",
    price: 2800,
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=800&fit=crop",
    ],
    amenities: [
      "Queen bed with fresh linen",
      "Hot shower",
      "High-speed Wi-Fi",
      "Daily housekeeping",
      "Complimentary breakfast",
      "Work desk",
      "Secure parking",
    ],
    featured: true,
  },
  {
    slug: "standard-double",
    name: "Standard Double Room",
    description:
      "A clean, comfortable, and excellent-value room for couples or solo travellers. Everything you need for a restful stay — a quality bed, reliable hot water, fast Wi-Fi, and the warm hospitality Alem is known for.",
    shortDescription:
      "Clean, comfortable double room — excellent value for couples and solo guests.",
    capacity: 2,
    bedType: "Double bed",
    bathroom: "Private ensuite with shower",
    price: 2200,
    images: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&h=800&fit=crop",
    ],
    amenities: [
      "Double bed with fresh linen",
      "Hot shower",
      "High-speed Wi-Fi",
      "Daily housekeeping",
      "Complimentary breakfast",
      "Secure parking",
    ],
    featured: true,
  },
  {
    slug: "twin-room",
    name: "Twin Room",
    description:
      "Perfect for friends, colleagues, or family members travelling together. Two comfortable single beds, a private bathroom, and all the essentials for a practical and pleasant stay in Hawassa.",
    shortDescription:
      "Two single beds with private bathroom — ideal for friends or colleagues.",
    capacity: 2,
    bedType: "Twin beds",
    bathroom: "Private ensuite with shower",
    price: 2400,
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&h=800&fit=crop",
    ],
    amenities: [
      "Twin beds with fresh linen",
      "Hot shower",
      "High-speed Wi-Fi",
      "Daily housekeeping",
      "Complimentary breakfast",
      "Secure parking",
    ],
    featured: false,
  },
  {
    slug: "family-suite",
    name: "Family Suite",
    description:
      "Our most spacious accommodation — designed for families who need room to spread out. A separate sleeping area, additional seating, and a well-appointed bathroom make this the ideal choice for a secure and comfortable family stay in Hawassa.",
    shortDescription:
      "Spacious suite for families with separate sleeping and seating areas.",
    capacity: 4,
    bedType: "Queen bed + sofa bed",
    bathroom: "Private ensuite with hot shower",
    price: 4500,
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
    ],
    amenities: [
      "Queen bed & sofa bed",
      "Hot shower",
      "High-speed Wi-Fi",
      "Daily housekeeping",
      "Complimentary breakfast",
      "Extra seating area",
      "Secure parking",
    ],
    featured: false,
  },
  {
    slug: "single-room",
    name: "Single Room",
    description:
      "Compact, clean, and thoughtfully equipped for solo travellers. A comfortable single bed, private bathroom, and all the essentials — including fast Wi-Fi and complimentary breakfast — at an excellent nightly rate.",
    shortDescription:
      "Compact single room — ideal for solo travellers on a budget.",
    capacity: 1,
    bedType: "Single bed",
    bathroom: "Private ensuite with shower",
    price: 1500,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop",
    ],
    amenities: [
      "Single bed with fresh linen",
      "Hot shower",
      "High-speed Wi-Fi",
      "Daily housekeeping",
      "Complimentary breakfast",
      "Quiet workspace",
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
