import type { Attraction } from "@/lib/types";
import { publicImagePath } from "@/data/site-images";

const attractionImages = {
  lakeHawassa: publicImagePath("Attractions", "lakeHawassa.png"),
  fish: publicImagePath("Attractions", "Fish.png"),
  amora: publicImagePath("Attractions", "Amora.png"),
  tabor: publicImagePath("Attractions", "Tabor.png"),
  hippo: publicImagePath("Attractions", "Hippo.png"),
  sidama: publicImagePath("Attractions", "Sidama.png"),
} as const;

export const attractions = [
  {
    id: "attraction-lake-hawassa",
    name: "Lake Hawassa",
    description:
      "The city's main natural attraction, known for its calm waters, lakeside views, birdlife, and boat trips. It is a great place to relax, enjoy the sunset, or see hippos near the shore.",
    distance: "10 min drive",
    image: attractionImages.lakeHawassa,
  },
  {
    id: "attraction-fish-market",
    name: "Hawassa Fish Market",
    description:
      "A lively local market beside Lake Hawassa where visitors can see fishermen bringing in their daily catch and experience one of the city's most popular local food spots.",
    distance: "10 min drive",
    image: attractionImages.fish,
  },
  {
    id: "attraction-amora-gedel",
    name: "Amora Gedel Park",
    description:
      "A green lakeside park with large trees, monkeys, birds, and views of Lake Hawassa. It is also a popular place to enjoy the sunset and take a relaxing walk.",
    distance: "12 min drive",
    image: attractionImages.amora,
  },
  {
    id: "attraction-tabor-mountain",
    name: "Tabor Mountain",
    description:
      "A well-known viewpoint in Hawassa with elevated views across the city and surrounding landscape. It is a good spot for visitors who want to see Hawassa from above.",
    distance: "10 min drive",
    image: attractionImages.tabor,
  },
  {
    id: "attraction-hippo-watching",
    name: "Lake Hawassa Hippo Watching",
    description:
      "Take a boat trip on Lake Hawassa for a closer look at hippos and the birdlife around the lake. It is one of the most memorable wildlife experiences available in the city.",
    distance: "10 min drive",
    image: attractionImages.hippo,
  },
  {
    id: "attraction-sidama-cultural-hall",
    name: "Sidama Cultural Hall",
    description:
      "A place to learn more about Sidama culture and local traditions. It can be a good stop for visitors interested in the history and culture of the region.",
    distance: "10 min drive",
    image: attractionImages.sidama,
  },
] satisfies Attraction[];

export const featuredAttractions = attractions.slice(0, 3);
