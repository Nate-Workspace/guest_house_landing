import type { Testimonial } from "@/lib/types";

export const testimonials = [
  {
    id: "testimonial-1",
    quote:
      "A very quiet, peaceful, and spotlessly clean place. The staff's warm hospitality made me feel right at home. I will definitely stay here again!",
    author: "Yonas K.",
    location: "Hawassa, Ethiopia",
    rating: 5,
  },
  {
    id: "testimonial-2",
    quote:
      "Extremely comfortable and secure for a family stay. The environment is pleasant, and its proximity to key city centers made handling our daily activities effortless.",
    author: "Helen M.",
    location: "Addis Ababa, Ethiopia",
    rating: 5,
  },
  {
    id: "testimonial-3",
    quote:
      "Exceptional value for money. The Wi-Fi was fast, hot water was consistently available, and the room cleanliness was impressive. Highly recommended!",
    author: "Dawit A.",
    location: "Hawassa, Ethiopia",
    rating: 5,
  },
] satisfies Testimonial[];
