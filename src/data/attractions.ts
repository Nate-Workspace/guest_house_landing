import type { Attraction } from "@/lib/types";

export const attractions = [
  {
    id: "attraction-gordes",
    name: "Village of Gordes",
    description:
      "One of France's most beautiful hilltop villages, with cobblestone lanes, artisan shops, and a commanding view over the Calavon valley. Best explored at dawn before the day-trippers arrive.",
    distance: "5 min walk",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
  },
  {
    id: "attraction-senanque",
    name: "Abbey of Sénanque",
    description:
      "A 12th-century Cistercian abbey surrounded by iconic lavender fields in bloom from late June through July. Guided tours reveal centuries of monastic history.",
    distance: "10 min drive",
    image:
      "https://images.unsplash.com/photo-1499002238440-d264f804d948?w=800&h=600&fit=crop",
  },
  {
    id: "attraction-roussillon",
    name: "Roussillon Ochre Trail",
    description:
      "Walk among dramatic red and orange ochre cliffs in this artists' village. The Sentier des Ocres offers an easy loop through otherworldly landscapes.",
    distance: "15 min drive",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
  },
  {
    id: "attraction-lourmarin",
    name: "Lourmarin",
    description:
      "A lively market town with Renaissance castle, excellent wine bars, and a Saturday morning market beloved by locals. Albert Camus is buried in the cemetery here.",
    distance: "25 min drive",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop",
  },
  {
    id: "attraction-menerbes",
    name: "Ménerbes",
    description:
      "Perched on a ridge with sweeping vineyard views, this quiet village was home to Peter Mayle. Visit the Maison de la Truffe et du Vin for local tastings.",
    distance: "12 min drive",
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop",
  },
  {
    id: "attraction-colorado",
    name: "Colorado Provençal",
    description:
      "Former ochre quarries near Rustrel with vivid yellow, red, and orange rock formations — a photographer's paradise and an easy half-day hike.",
    distance: "35 min drive",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=600&fit=crop",
  },
  {
    id: "attraction-isle-sur-sorgue",
    name: "L'Isle-sur-la-Sorgue",
    description:
      "Known as the Venice of Provence for its canals and waterwheels. Famous for antique markets on Sundays and a thriving art scene year-round.",
    distance: "40 min drive",
    image:
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&h=600&fit=crop",
  },
  {
    id: "attraction-luberon-hike",
    name: "Luberon Ridge Trail",
    description:
      "A scenic hiking route along the crest of the Luberon massif with panoramic views of vineyards, orchards, and medieval villages below.",
    distance: "20 min drive",
    image:
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=800&h=600&fit=crop",
  },
] satisfies Attraction[];

export const featuredAttractions = attractions.slice(0, 3);
