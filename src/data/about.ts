import type { AboutContent } from "@/lib/types";

export const about = {
  hero: {
    eyebrow: "Our story",
    title: "About Serenité",
    description:
      "A family-run guesthouse in Gordes, where Provençal heritage meets understated luxury and every guest is welcomed as a friend.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&h=900&fit=crop",
    imageAlt: "Serenité Guesthouse stone facade nestled in the Luberon hills",
  },
  story: {
    eyebrow: "How it began",
    title: "A house restored with intention",
    paragraphs: [
      "Serenité began as a crumbling 18th-century mas — a traditional Provençal farmhouse overlooking the Luberon valley. When Claire and Antoine Laurent discovered it in 2016, they saw not ruin, but possibility: a place where travellers could slow down, breathe deeply, and feel the rhythm of the countryside.",
      "Over three years, local artisans restored the stone walls, reclaimed oak beams, and terracotta floors while preserving the soul of the building. Six rooms were carefully conceived — each with its own character, none repeating the last. The infinity pool was sited to frame the sunset; the garden planted with lavender, rosemary, and ancient olive trees.",
      "Today, Serenité is a four-star boutique guesthouse that welcomes a handful of guests at a time. We are not a hotel chain nor a rental property — we are hosts who believe the finest luxury is found in authenticity, warmth, and the unhurried pace of Provence.",
    ],
  },
  mission: {
    eyebrow: "Our mission",
    title: "Hospitality rooted in place",
    description:
      "We exist to offer a genuine Provençal experience — one that honours the land, supports local producers, and leaves every guest feeling restored rather than merely accommodated. Sustainability, craftsmanship, and personal connection guide every decision we make.",
  },
  values: {
    eyebrow: "What we stand for",
    title: "Values that shape your stay",
    description:
      "These principles inform how we design our rooms, source our breakfast, and welcome you through the door.",
    items: [
      {
        id: "value-authenticity",
        title: "Authenticity",
        description:
          "No manufactured charm. Our interiors feature local ceramics, regional wines, and recommendations drawn from years of living in Gordes — not a guidebook.",
      },
      {
        id: "value-tranquility",
        title: "Tranquility",
        description:
          "With only six rooms, silence is a guarantee. We cap occupancy deliberately so that the pool, terrace, and garden remain peaceful throughout the day.",
      },
      {
        id: "value-care",
        title: "Personal care",
        description:
          "Claire and Antoine greet every guest personally. Dietary preferences, celebration plans, and quiet requests are remembered — not logged in a system.",
      },
      {
        id: "value-place",
        title: "Sense of place",
        description:
          "We partner with village bakers, Luberon winemakers, and independent guides. Your stay supports the community that makes this region extraordinary.",
      },
    ],
  },
  highlights: [
    {
      id: "highlight-architecture",
      title: "Restored Provençal architecture",
      description:
        "Original stone walls, vaulted ceilings, and terracotta floors meet contemporary comfort — rainfall showers, climate control, and Italian linens. Every room tells a story of the mas's 250-year history while offering the ease of modern boutique hospitality.",
      image:
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&h=900&fit=crop",
      imageAlt: "Restored interior with stone walls and artisan ceramics",
    },
    {
      id: "highlight-gardens",
      title: "Gardens & outdoor living",
      description:
        "Three hectares of terraced gardens descend toward the valley — lavender borders, a stone fountain, century-old olive trees, and an infinity pool that seems to spill into the Luberon horizon. Breakfast is served on the terrace whenever weather permits.",
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b2b?w=1200&h=900&fit=crop",
      imageAlt: "Manicured garden with stone fountain and olive trees",
    },
    {
      id: "highlight-dining",
      title: "Provence on the plate",
      description:
        "Our continental breakfast features bread from the Gordes boulangerie, honey from a neighbouring apiary, and seasonal fruit from the Luberon markets. Evenings bring local wines to the terrace for aperitif hour — a ritual we hope becomes yours.",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=900&fit=crop",
      imageAlt: "Continental breakfast spread on the garden terrace",
    },
  ],
} satisfies AboutContent;
