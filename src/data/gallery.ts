import type { GalleryImage } from "@/lib/types";

export const gallery = [
  {
    id: "gallery-hero-exterior",
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=900&fit=crop",
    alt: "Serenité Guesthouse stone facade at golden hour",
    category: "Property",
  },
  {
    id: "gallery-terrace",
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=1000&fit=crop",
    alt: "Infinity pool overlooking the Luberon valley at sunset",
    category: "Outdoor",
  },
  {
    id: "gallery-lavender",
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop",
    alt: "Lavender fields in full bloom near the guesthouse",
    category: "Surroundings",
  },
  {
    id: "gallery-bedroom",
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
    alt: "Elegant bedroom with Provençal furnishings and soft natural light",
    category: "Rooms",
  },
  {
    id: "gallery-bathroom",
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=1000&fit=crop",
    alt: "Marble ensuite bathroom with rainfall shower",
    category: "Rooms",
  },
  {
    id: "gallery-breakfast",
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
    alt: "Continental breakfast spread on the garden terrace",
    category: "Dining",
  },
  {
    id: "gallery-garden",
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    alt: "Manicured garden with stone fountain and olive trees",
    category: "Outdoor",
  },
  {
    id: "gallery-living",
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=1000&fit=crop",
    alt: "Suite Ciel living area with panoramic valley views",
    category: "Rooms",
  },
  {
    id: "gallery-wine",
    src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=600&fit=crop",
    alt: "Local Luberon wines served on the terrace at aperitif hour",
    category: "Dining",
  },
  {
    id: "gallery-detail",
    src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop",
    alt: "Thoughtful interior detail — fresh flowers and artisan ceramics",
    category: "Property",
  },
  {
    id: "gallery-village",
    src: "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=800&h=1000&fit=crop",
    alt: "View of Gordes village from the guesthouse terrace",
    category: "Surroundings",
  },
  {
    id: "gallery-terrace-room",
    src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop",
    alt: "Terrasse Room with French doors opening to a private balcony",
    category: "Rooms",
  },
] satisfies GalleryImage[];

export const galleryPreview = gallery.slice(0, 6);
