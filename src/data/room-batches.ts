import type { RoomBatch, RoomUnit } from "@/lib/types";
import { getBatchImages } from "./site-images";

const sharedAmenities = [
  "Fresh linen & daily housekeeping",
  "High-speed Wi-Fi",
  "Secure on-site parking",
] as const;

export const roomBatches = [
  {
    slug: "batch-1",
    name: "Batch 1",
    subtitle: "Single bed · twin mini windows",
    description:
      "A compact and peaceful single room with two mini windows that bring in soft natural light. Ideal for solo travellers who want a clean, quiet space after a day in Hawassa. Every room in this batch shares the same layout and finishes — only the floor and room number differ.",
    shortDescription:
      "Compact single room with twin mini windows — quiet and well-lit.",
    capacity: 1,
    bedType: "Single bed",
    bathroom: "Private ensuite with shower",
    price: 1500,
    images: getBatchImages(1),
    amenities: [...sharedAmenities, "Quiet workspace"],
    units: [
      { number: 14, floor: 1 },
      { number: 21, floor: 2 },
      { number: 28, floor: 3 },
      { number: 35, floor: 4 },
    ],
    featured: false,
  },
  {
    slug: "batch-2",
    name: "Batch 2",
    subtitle: "Double bed · balcony view",
    description:
      "Our most spacious standard option for couples — a comfortable double bed and a private balcony with an open outlook. Well suited for guests who want a little extra room to unwind. All four rooms in this batch follow the same design across floors 2, 3, and 4.",
    shortDescription:
      "Double room with a private balcony — ideal for couples.",
    capacity: 2,
    bedType: "Double bed",
    bathroom: "Private ensuite with shower",
    price: 2800,
    images: getBatchImages(2),
    amenities: [...sharedAmenities, "Private balcony", "Work desk"],
    units: [
      { number: 15, floor: 2 },
      { number: 22, floor: 3 },
      { number: 29, floor: 4 },
    ],
    featured: true,
  },
  {
    slug: "batch-3",
    name: "Batch 3",
    subtitle: "Single bed · balcony",
    description:
      "A single room with the added comfort of a private balcony — perfect for a morning coffee or a quiet moment before heading out. Clean, secure, and thoughtfully arranged for solo guests or business travellers on a short stay.",
    shortDescription:
      "Single room with a private balcony and ensuite shower.",
    capacity: 1,
    bedType: "Single bed",
    bathroom: "Private ensuite with shower",
    price: 1800,
    images: getBatchImages(3),
    amenities: [...sharedAmenities, "Private balcony"],
    units: [
      { number: 16, floor: 2 },
      { number: 23, floor: 3 },
      { number: 30, floor: 4 },
    ],
    featured: false,
  },
  {
    slug: "batch-4",
    name: "Batch 4",
    subtitle: "Single bed · balcony",
    description:
      "Everything you need for a comfortable stay — a single bed and a private balcony with an open outlook. Popular with guests who stay a little longer and appreciate the extra space without stepping up to a double room.",
    shortDescription:
      "Single room with balcony and private ensuite.",
    capacity: 1,
    bedType: "Single bed",
    bathroom: "Private ensuite with shower",
    price: 2000,
    images: getBatchImages(4),
    amenities: [...sharedAmenities, "Private balcony"],
    units: [
      { number: 17, floor: 2 },
      { number: 24, floor: 3 },
      { number: 31, floor: 4 },
      { number: 38, floor: 5 },
    ],
    featured: true,
  },
  {
    slug: "batch-5",
    name: "Batch 5",
    subtitle: "Single bed · mid-size window",
    description:
      "A well-proportioned single room centred around a mid-size window that keeps the space bright without sacrificing privacy. A reliable choice for guests who want simplicity, cleanliness, and a good night's sleep.",
    shortDescription:
      "Bright single room with a mid-size window and ensuite.",
    capacity: 1,
    bedType: "Single bed",
    bathroom: "Private ensuite with shower",
    price: 1600,
    images: getBatchImages(5),
    amenities: [...sharedAmenities, "Quiet workspace"],
    units: [
      { number: 11, floor: 1 },
      { number: 18, floor: 2 },
      { number: 25, floor: 3 },
      { number: 32, floor: 4 },
    ],
    featured: false,
  },
  {
    slug: "batch-6",
    name: "Batch 6",
    subtitle: "Single bed · standard window",
    description:
      "Our most available room type — a straightforward single layout with a standard mid-size window, quality bedding, and a clean ensuite. Six rooms share this design across floors 1 through 5, making it a flexible option when you inquire.",
    shortDescription:
      "Practical single room with standard window — great value.",
    capacity: 1,
    bedType: "Single bed",
    bathroom: "Private ensuite with shower",
    price: 1500,
    images: getBatchImages(6),
    amenities: [...sharedAmenities],
    units: [
      { number: 12, floor: 1 },
      { number: 19, floor: 2 },
      { number: 26, floor: 3 },
      { number: 33, floor: 4 },
      { number: 36, floor: 5 },
      { number: 37, floor: 5 },
    ],
    featured: false,
  },
  {
    slug: "batch-7",
    name: "Batch 7",
    subtitle: "Single bed · wide window",
    description:
      "A single room with a generous wide window that fills the space with daylight — noticeably airier than our standard-window layouts. A guest favourite for longer stays and anyone who prefers a brighter room.",
    shortDescription:
      "Airy single room with a wide window and ensuite shower.",
    capacity: 1,
    bedType: "Single bed",
    bathroom: "Private ensuite with shower",
    price: 1700,
    images: getBatchImages(7),
    amenities: [...sharedAmenities, "Wide window", "Work desk"],
    units: [
      { number: 13, floor: 1 },
      { number: 20, floor: 2 },
      { number: 27, floor: 3 },
      { number: 34, floor: 4 },
    ],
    featured: true,
  },
] satisfies RoomBatch[];

/** @deprecated Use roomBatches */
export const rooms = roomBatches;

export function getBatchBySlug(slug: string): RoomBatch | undefined {
  return roomBatches.find((batch) => batch.slug === slug);
}

/** @deprecated Use getBatchBySlug */
export const getRoomBySlug = getBatchBySlug;

export function getFeaturedBatches(): RoomBatch[] {
  return roomBatches.filter((batch) => batch.featured);
}

/** @deprecated Use getFeaturedBatches */
export const featuredRooms = getFeaturedBatches();

export function getRelatedBatches(slug: string, limit = 2): RoomBatch[] {
  const current = getBatchBySlug(slug);
  if (!current) {
    return [];
  }

  const others = roomBatches.filter((batch) => batch.slug !== slug);
  const sameCapacity = others.filter((batch) => batch.capacity === current.capacity);
  const differentCapacity = others.filter((batch) => batch.capacity !== current.capacity);

  return [...sameCapacity, ...differentCapacity].slice(0, limit);
}

/** @deprecated Use getRelatedBatches */
export const getRelatedRooms = getRelatedBatches;

export function getUnitInBatch(
  batchSlug: string,
  unitNumber: number,
): RoomUnit | undefined {
  const batch = getBatchBySlug(batchSlug);
  return batch?.units.find((unit) => unit.number === unitNumber);
}

export function formatBatchLabel(batch: RoomBatch): string {
  return `${batch.name} — ${batch.subtitle}`;
}

export function formatInquiryPreference(
  batchSlug: string,
  unitNumber?: number,
): string {
  const batch = getBatchBySlug(batchSlug);
  if (!batch) {
    return "";
  }

  if (unitNumber !== undefined) {
    const unit = getUnitInBatch(batchSlug, unitNumber);
    if (unit) {
      return `${batch.name}, Room ${unit.number} (Floor ${unit.floor})`;
    }
  }

  return formatBatchLabel(batch);
}

export type InquiryPreferenceValue = `${string}:${number}` | string;

export function parseInquiryPreference(value: string): {
  batchSlug: string;
  unitNumber?: number;
} | null {
  if (!value) {
    return null;
  }

  const [batchSlug, unitPart] = value.split(":");
  if (!batchSlug || !getBatchBySlug(batchSlug)) {
    return null;
  }

  if (unitPart) {
    const unitNumber = Number(unitPart);
    if (!getUnitInBatch(batchSlug, unitNumber)) {
      return null;
    }
    return { batchSlug, unitNumber };
  }

  return { batchSlug };
}

export function buildInquiryHref(batchSlug: string, unitNumber?: number): string {
  const params = new URLSearchParams({ batch: batchSlug });
  if (unitNumber !== undefined) {
    params.set("unit", String(unitNumber));
  }
  return `/contact?${params.toString()}`;
}

export function groupUnitsByFloor(units: RoomUnit[]): Map<number, RoomUnit[]> {
  const grouped = new Map<number, RoomUnit[]>();

  for (const unit of units) {
    const floorUnits = grouped.get(unit.floor) ?? [];
    floorUnits.push(unit);
    grouped.set(unit.floor, floorUnits);
  }

  for (const floorUnits of grouped.values()) {
    floorUnits.sort((a, b) => a.number - b.number);
  }

  return new Map([...grouped.entries()].sort(([a], [b]) => a - b));
}

export function getTotalRoomCount(): number {
  return roomBatches.reduce((total, batch) => total + batch.units.length, 0);
}
