import type { SiteConfig } from "@/lib/types";

export const siteConfig = {
  name: "Alem Guesthouse",
  tagline: "Your peaceful home away from home in Hawassa",
  contact: {
    phone: "+251 921 04 44 57",
    email: "hello@alem-guesthouse.com",
    whatsapp: "251921044457",
    address: {
      street: "Menahria",
      city: "Hawassa",
      region: "Sidama",
      postalCode: "",
      country: "Ethiopia",
    },
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d38.4764!3d7.0621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17b103b6b6800001%3A0x8c8c8c8c8c8c8c8c!2sHawassa!5e0!3m2!1sen!2set!4v1700000000000",
    hours:
      "Check-in from 2:00 PM · Check-out by 9:00 AM · Reception available daily",
  },
  social: {
    instagram: "https://instagram.com/alemguesthouse",
    facebook: "https://facebook.com/alemguesthouse",
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
    defaultTitle: "Alem Guesthouse",
    description:
      "A clean, secure, and comfortable guesthouse in the heart of Hawassa. Warm hospitality, complimentary breakfast, free Wi-Fi, and secure parking — inquire for availability.",
    ogImage:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=630&fit=crop",
  },
  features: {
    showPrices: true,
    stickyBookBar: true,
  },
} satisfies SiteConfig;
