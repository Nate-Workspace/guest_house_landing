import { StaggerChildren, StaggerItem } from "@/components/motion";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { gallery } from "@/data/gallery";

const backgroundImage = gallery.find((item) => item.id === "gallery-garden")!;

const valueProps = [
  {
    title: "Intimate by design",
    description:
      "With just six rooms, every guest receives unhurried attention. No crowds, no queues — only the calm of a true boutique retreat.",
    icon: "home",
  },
  {
    title: "Heart of the Luberon",
    description:
      "Steps from Gordes and minutes from lavender fields, ochre trails, and vineyard villages that define Provence.",
    icon: "map",
  },
  {
    title: "Refined comfort",
    description:
      "Italian linens, rainfall showers, curated minibars, and Provençal furnishings — every detail considered.",
    icon: "sparkles",
  },
  {
    title: "Warm hospitality",
    description:
      "Personal recommendations, flexible check-in, and hosts who treat your stay as a welcome, not a transaction.",
    icon: "heart",
  },
] as const;

export function WhyStayHere() {
  return (
    <SectionBackground
      image={backgroundImage.src}
      imageAlt={backgroundImage.alt}
    >
      <SectionHeading
        eyebrow="Why Serenité"
        title="A stay that feels effortlessly special"
        description="We believe luxury is found in restraint — in space, silence, and the small gestures that make you feel truly at home."
        align="center"
        className="mx-auto"
        tone="onDark"
      />

      <StaggerChildren className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {valueProps.map((prop, index) => (
          <StaggerItem key={prop.title} index={index}>
            <div className="rounded-lg bg-surface/95 p-6 shadow-sm ring-1 ring-text/5 backdrop-blur-sm transition-shadow duration-300 hover:shadow-luxury">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                <ValueIcon name={prop.icon} />
              </div>
              <h3 className="font-display text-xl text-text">{prop.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {prop.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </SectionBackground>
  );
}

function ValueIcon({ name }: { name: (typeof valueProps)[number]["icon"] }) {
  switch (name) {
    case "home":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden="true">
          <path d="M4 10.5L12 4l8 6.5V20a1 1 0 01-1 1h-5v-6H10v6H5a1 1 0 01-1-1v-9.5z" strokeLinejoin="round" />
        </svg>
      );
    case "map":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden="true">
          <path d="M9 4l-6 2v14l6-2 6 2 6-2V4l-6 2-6-2z" strokeLinejoin="round" />
          <path d="M9 4v14M15 6v14" />
        </svg>
      );
    case "sparkles":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden="true">
          <path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3z" strokeLinejoin="round" />
          <path d="M19 15l.75 2.25L22 18l-2.25.75L19 21l-.75-2.25L16 18l2.25-.75L19 15z" strokeLinejoin="round" />
        </svg>
      );
    case "heart":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden="true">
          <path d="M12 20.5s-7-4.35-7-10a4 4 0 017-2.5A4 4 0 0119 10.5c0 5.65-7 10-7 10z" strokeLinejoin="round" />
        </svg>
      );
  }
}
