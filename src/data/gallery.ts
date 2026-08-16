import type { GalleryImage } from "@/lib/types";
import {
  balconyImages,
  outsideImages,
  roomFolderImages,
  stairImages,
} from "./site-images";

export const gallery = [
  {
    id: "gallery-hero-exterior",
    src: outsideImages[0],
    alt: "Alem Guesthouse exterior in Hawassa",
    category: "Property",
  },
  {
    id: "gallery-terrace",
    src: outsideImages[1],
    alt: "Front view of Alem Guesthouse building",
    category: "Property",
  },
  {
    id: "gallery-lavender",
    src: outsideImages[3],
    alt: "Alem Guesthouse from the street",
    category: "Property",
  },
  {
    id: "gallery-bedroom",
    src: roomFolderImages[7][0],
    alt: "Bright guest room with wide window at Alem Guesthouse",
    category: "Rooms",
  },
  {
    id: "gallery-bathroom",
    src: roomFolderImages[1][2],
    alt: "Clean single room with twin mini windows",
    category: "Rooms",
  },
  {
    id: "gallery-breakfast",
    src: stairImages[0],
    alt: "Guesthouse corridor and stairwell",
    category: "Property",
  },
  {
    id: "gallery-garden",
    src: balconyImages[0],
    alt: "Private balcony at Alem Guesthouse",
    category: "Outdoor",
  },
  {
    id: "gallery-living",
    src: roomFolderImages[2][0],
    alt: "Double room with quality furnishings",
    category: "Rooms",
  },
  {
    id: "gallery-wine",
    src: stairImages[2],
    alt: "Stairwell and room corridor",
    category: "Property",
  },
  {
    id: "gallery-detail",
    src: roomFolderImages[6][1],
    alt: "Standard-window single room interior",
    category: "Rooms",
  },
  {
    id: "gallery-village",
    src: outsideImages[4],
    alt: "Another view of the guesthouse building",
    category: "Property",
  },
  {
    id: "gallery-terrace-room",
    src: roomFolderImages[4][0],
    alt: "Single room with balcony and in-room TV",
    category: "Rooms",
  },
  {
    id: "gallery-balcony-view",
    src: balconyImages[1],
    alt: "Balcony seating area with open outlook",
    category: "Outdoor",
  },
  {
    id: "gallery-mid-window",
    src: roomFolderImages[5][0],
    alt: "Single room with mid-size window",
    category: "Rooms",
  },
  {
    id: "gallery-corridor",
    src: stairImages[4],
    alt: "Room doors along the guesthouse corridor",
    category: "Property",
  },
] satisfies GalleryImage[];

export const galleryPreview = gallery.slice(0, 6);
