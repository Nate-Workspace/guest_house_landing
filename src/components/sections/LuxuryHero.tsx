import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

const heroImage =
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&h=1080&fit=crop";

export function LuxuryHero() {
  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden">
      <Image
        src={heroImage}
        alt={`${siteConfig.name} exterior at golden hour`}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-linear-to-b from-text/50 via-text/35 to-text/60" />

      <div className="relative z-10 container-content py-32 text-center text-surface md:py-40">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-surface/80">
          Boutique Luxury Guesthouse · Provence
        </p>
        <h1 className="font-display text-5xl leading-tight md:text-6xl lg:text-7xl">
          {siteConfig.name}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-surface/90 md:text-xl">
          {siteConfig.tagline}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/contact" size="lg">
            Inquire About Stay
          </Button>
          <Button
            href="/rooms"
            variant="outline"
            size="lg"
            className="border-surface/80 text-surface hover:bg-surface/10 hover:text-surface"
          >
            View Rooms
          </Button>
        </div>
      </div>
    </section>
  );
}
