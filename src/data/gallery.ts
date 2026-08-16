import type { GalleryImage } from "@/lib/types";

export const gallery = [
  {
    id: "gallery-hero-exterior",
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=900&fit=crop",
    alt: "Alem Guesthouse exterior in Hawassa",
    category: "Property",
  },
  {
    id: "gallery-terrace",
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=1000&fit=crop",
    alt: "Outdoor seating area at Alem Guesthouse",
    category: "Outdoor",
  },
  {
    id: "gallery-lavender",
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop",
    alt: "Peaceful surroundings near Hawassa",
    category: "Surroundings",
  },
  {
    id: "gallery-bedroom",
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
    alt: "Comfortable guest room with fresh linen and natural light",
    category: "Rooms",
  },
  {
    id: "gallery-bathroom",
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=1000&fit=crop",
    alt: "Clean private bathroom with quality shower",
    category: "Rooms",
  },
  {
    id: "gallery-breakfast",
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
    alt: "Complimentary breakfast at Alem Guesthouse",
    category: "Dining",
  },
  {
    id: "gallery-garden",
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    alt: "Quiet outdoor area at the guesthouse",
    category: "Outdoor",
  },
  {
    id: "gallery-living",
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=1000&fit=crop",
    alt: "Family suite seating area at Alem Guesthouse",
    category: "Rooms",
  },
  {
    id: "gallery-wine",
    src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=600&fit=crop",
    alt: "Welcoming common area for guests",
    category: "Property",
  },
  {
    id: "gallery-detail",
    src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop",
    alt: "Thoughtful interior details in a guest room",
    category: "Property",
  },
  {
    id: "gallery-village",
    src: "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=800&h=1000&fit=crop",
    alt: "View towards Hawassa city centre from the neighbourhood",
    category: "Surroundings",
  },
  {
    id: "gallery-terrace-room",
    src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop",
    alt: "Premium double room with quality furnishings",
    category: "Rooms",
  },
] satisfies GalleryImage[];

export const galleryPreview = gallery.slice(0, 6);
