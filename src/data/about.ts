import type { AboutContent } from "@/lib/types";
import { placeholderImages, roomFolderImages, siteImages } from "./site-images";

export const about = {
  hero: {
    eyebrow: "Our story",
    title: "About Alem Guesthouse",
    description:
      "Founded with a passion for genuine hospitality, Alem Guesthouse offers travellers a peaceful, secure, and comfortable sanctuary in the heart of Hawassa.",
    image: siteImages.hero.exterior,
    imageAlt: "Alem Guesthouse welcoming exterior in Hawassa",
  },
  story: {
    eyebrow: "How it began",
    title: "A home away from home",
    paragraphs: [
      "Alem Guesthouse was founded in 2018 E.C. with a simple vision: to create a true home away from home for every traveller who walks through our doors. What began as a dream to offer peaceful, secure, and comfortable accommodation has grown into a trusted address for both local and international visitors.",
      "From the start, we built Alem around the essentials that matter most — spotless rooms, reliable hot water, comfortable beds with fresh linen, and a team that greets every guest like family. Our location in Menahria puts you steps from the city's key centres while keeping your stay quiet and restful.",
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
      "These principles guide how we maintain our rooms, serve breakfast, and welcome you through the door.",
    items: [
      {
        id: "value-comfort",
        title: "Refined comfort",
        description:
          "Comfortable beds, quality showers, carefully crafted restrooms, and fine furnishings. Every detail is considered so you can rest well after a long day.",
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
          "Daily housekeeping, fresh linen, and spotless common areas. Our team takes pride in maintaining a guesthouse that feels consistently clean and cared for.",
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
        "Each room is fitted with quality beds, fresh linen, and thoughtful amenities — including reliable hot water and daily housekeeping. Whether you are here for a night or a longer stay, you will find a clean and comfortable space to unwind.",
      image: roomFolderImages[6][0],
      imageAlt: "Bright, comfortable guest room at Alem Guesthouse",
    },
    {
      id: "highlight-breakfast",
      title: "Complimentary breakfast included",
      description:
        "Start every morning with a delicious complimentary breakfast — part of your room rate. It is our way of making sure you leave the table satisfied and ready for the day ahead in Hawassa.",
      image: placeholderImages.breakfast,
      imageAlt: "Complimentary breakfast served at Alem Guesthouse",
    },
    {
      id: "highlight-location",
      title: "Heart of Hawassa",
      description:
        "Steps from Menahria and minutes from Sumuda, Piassa, Atote, and Hawassa Lake — Alem Guesthouse is ideally placed for both city convenience and lakeside leisure. Handle your daily activities with ease, then return to a calm and secure retreat.",
      image: placeholderImages.hawassaScenery,
      imageAlt: "Scenic view near Hawassa and Lake Hawassa",
    },
  ],
} satisfies AboutContent;
