import type { SiteConfig } from "@/lib/types";

export const siteConfig = {
  name: "Alem Guesthouse",
  tagline: "Where Luxury meets Comfort",
  contact: {
    phone: "+251 921 04 44 57",
    email: "hello@serenite-guesthouse.com",
    whatsapp: "251921044457",
    address: {
      street: "Menahria",
      city: "Hawassa",
      region: "Sidama",
      postalCode: "",
      country: "Ethiopia",
    },
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1158.0!2d5.1996!3d43.9122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDU0JzQ0LjAiTiA1wrAxMSc1OC42IkU!5e0!3m2!1sen!2sfr!4v1700000000000",
    hours:
      "Check-in from 3:00 PM · Check-out by 11:00 AM · Reception daily 8:00 AM – 8:00 PM",
  },
  social: {
    instagram: "https://instagram.com/sereniteguesthouse",
    facebook: "https://facebook.com/sereniteguesthouse",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Rooms", href: "/rooms" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
    { label: "Amenities", href: "/amenities" },
    { label: "Attractions", href: "/attractions" },
    { label: "Contact", href: "/contact" },
  ],
  seo: {
    defaultTitle: "Amen Guesthouse",
    description:
      "A luxury and comfortable guesthouse in the heart of Hawassa. Elegant rooms, refined comfort, and warm hospitality. Contact us for availability.",
    ogImage:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=630&fit=crop",
  },
  features: {
    showPrices: true,
    stickyBookBar: true,
  },
} satisfies SiteConfig;
