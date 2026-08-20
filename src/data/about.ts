import type { AboutContent } from "@/lib/types";
import { outsideImages, placeholderImages, roomFolderImages, siteImages } from "./site-images";

export const about = {
  hero: {
    eyebrow: "Our story",
    title: "About Alem Pension",
    description:
      "Founded with a passion for genuine hospitality, Alem Pension offers travellers a peaceful, secure, and comfortable sanctuary in the heart of Hawassa.",
    image: siteImages.hero.exterior,
    imageAlt: "Alem Pension welcoming exterior in Hawassa",
  },
  story: {
    eyebrow: "How it began",
    title: "A home away from home",
    paragraphs: [
      "Alem Pension was founded in 2008 E.C. with a simple vision: to create a true home away from home for every traveller who walks through our doors. What began as a dream to offer peaceful, secure, and comfortable accommodation has grown into a trusted address for both local and international visitors.",
      "From the start, we built Alem around the essentials that matter most — spotless rooms, comfortable beds with fresh linen, private ensuite showers, and a team that greets every guest like family. Our location in Menahria puts you steps from the city's key centres while keeping your stay quiet and restful.",
      "Today, we continue to welcome guests into our extended family with the same commitment to cleanliness, warmth, and exceptional service. Whether you are visiting Hawassa for business, family, or leisure, our goal is simple: a relaxing and memorable stay every time.",
    ],
  },
  mission: {
    eyebrow: "Our mission",
    title: "Hospitality you can trust",
    description:
      "To provide clean, secure, and comfortable accommodation where every guest feels completely at home, delivering an unforgettable hospitality experience. We are committed to ensuring ultimate guest satisfaction through personalized, reliable, and high-quality service.",
  },
  values: {
    eyebrow: "What we stand for",
    title: "Qualities that define your stay",
    description:
      "These principles guide how we maintain our rooms, support our guests, and welcome you through the door.",
    items: [
      {
        id: "value-comfort",
        title: "Refined comfort",
        description:
          "Comfortable beds, private ensuite showers, carefully maintained restrooms, and fine furnishings. Every detail is considered so you can rest well after a long day.",
      },
      {
        id: "value-hospitality",
        title: "Warm hospitality",
        description:
          "Personal recommendations, flexible check-in when possible, and hosts who treat your stay as a welcome — not a transaction.",
      },
      {
        id: "value-cleanliness",
        title: "Cleanliness & care",
        description:
          "Daily housekeeping, fresh linen, and spotless common areas. Our team takes pride in maintaining a pension that feels consistently clean and cared for.",
      },
      {
        id: "value-security",
        title: "Peace & security",
        description:
          "A quiet environment, secure on-site parking, and attentive staff who help families and solo travellers feel safe and at ease throughout their stay.",
      },
    ],
  },
  highlights: [
    {
      id: "highlight-rooms",
      title: "Comfortable, well-appointed rooms",
      description:
        "Each room is fitted with quality beds, fresh linen, and thoughtful amenities — including private ensuite showers and daily housekeeping. Whether you are here for a night or a longer stay, you will find a clean and comfortable space to unwind.",
      image: roomFolderImages[6][0],
      imageAlt: "Bright, comfortable guest room at Alem Pension",
    },
    {
      id: "highlight-parking",
      title: "Secure on-site parking",
      description:
        "Complimentary secure parking within the property — convenient for guests arriving by car and included with every stay at no extra charge.",
      image: outsideImages[1] ?? outsideImages[0],
      imageAlt: "Exterior of Alem Pension with secure parking",
    },
    {
      id: "highlight-location",
      title: "Heart of Hawassa",
      description:
        "Steps from Menahria and minutes from Sumuda, Piassa, Atote, and Hawassa Lake — Alem Pension is ideally placed for both city convenience and lakeside leisure. Handle your daily activities with ease, then return to a calm and secure retreat.",
      image: placeholderImages.hawassaScenery,
      imageAlt: "Scenic view near Hawassa and Lake Hawassa",
    },
  ],
} satisfies AboutContent;
