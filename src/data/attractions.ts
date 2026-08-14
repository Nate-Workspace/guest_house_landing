import type { Attraction } from "@/lib/types";

export const attractions = [
  {
    id: "attraction-lake-hawassa",
    name: "Lake Hawassa",
    description:
      "The city's main natural attraction, known for its calm waters, lakeside views, birdlife, and boat trips. It is a great place to relax, enjoy the sunset, or see hippos near the shore.",
    distance: "10 min drive",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800&h=600&fit=crop",
  },
  {
    id: "attraction-fish-market",
    name: "Hawassa Fish Market",
    description:
      "A lively local market beside Lake Hawassa where visitors can see fishermen bringing in their daily catch and experience one of the city's most popular local food spots.",
    distance: "10 min drive",
    image:
      "https://images.unsplash.com/photo-1534766438357-2b270b64b5c5?w=800&h=600&fit=crop",
  },
  {
    id: "attraction-amora-gedel",
    name: "Amora Gedel Park",
    description:
      "A green lakeside park with large trees, monkeys, birds, and views of Lake Hawassa. It is also a popular place to enjoy the sunset and take a relaxing walk.",
    distance: "12 min drive",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
  },
  {
    id: "attraction-tabor-mountain",
    name: "Tabor Mountain",
    description:
      "A well-known viewpoint in Hawassa with elevated views across the city and surrounding landscape. It is a good spot for visitors who want to see Hawassa from above.",
    distance: "10 min drive",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop",
  },
  {
    id: "attraction-hippo-watching",
    name: "Lake Hawassa Hippo Watching",
    description:
      "Take a boat trip on Lake Hawassa for a closer look at hippos and the birdlife around the lake. It is one of the most memorable wildlife experiences available in the city.",
    distance: "10 min drive",
    image:
      "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&h=600&fit=crop",
  },
  {
    id: "attraction-tikur-wuha",
    name: "Tikur Wuha",
    description:
      "A natural area on the edge of Hawassa known for its greenery and peaceful surroundings. It offers visitors a quieter place to enjoy nature away from the busy parts of the city.",
    distance: "15 min drive",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&h=600&fit=crop",
  },
  {
    id: "attraction-sidama-cultural-hall",
    name: "Sidama Cultural Hall",
    description:
      "A place to learn more about Sidama culture and local traditions. It can be a good stop for visitors interested in the history and culture of the region.",
    distance: "10 min drive",
    image:
      "https://images.unsplash.com/photo-1564399579883-451a5d44ec08?w=800&h=600&fit=crop",
  },
  {
    id: "attraction-alamura-mountain",
    name: "Alamura Mountain",
    description:
      "A scenic mountain area outside the center of Hawassa, offering beautiful views and a chance to enjoy the natural landscape around the city.",
    distance: "25 min drive",
    image:
      "https://images.unsplash.com/photo-1464278533981-50106e6176b1?w=800&h=600&fit=crop",
  },
] satisfies Attraction[];

export const featuredAttractions = attractions.slice(0, 3);
