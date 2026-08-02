import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-svh items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&h=1080&fit=crop"
          alt="Serenité Guesthouse exterior at golden hour"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-b from-text/50 via-text/35 to-text/60" />

        <div className="relative z-10 container-content py-32 text-center text-surface md:py-40">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-surface/80">
            Boutique Luxury Guesthouse
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

      <section className="section-padding">
        <div className="container-content text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-accent">
            Opening Soon
          </p>
          <h2 className="mt-4 font-display text-3xl text-text md:text-4xl">
            The full experience is on its way
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Our homepage sections, room gallery, and inquiry features are being
            crafted. Explore the site using the navigation above.
          </p>
        </div>
      </section>
    </>
  );
}
