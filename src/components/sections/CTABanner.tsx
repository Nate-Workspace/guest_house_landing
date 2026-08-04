import { FadeIn } from "@/components/motion";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

export function CTABanner() {
  return (
    <FadeIn>
      <section className="relative overflow-hidden bg-accent py-20 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 50%, white 0%, transparent 50%)",
          }}
        />

        <div className="container-content relative text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-surface/70">
            Plan your escape
          </p>
          <h2 className="mt-4 font-display text-3xl text-surface md:text-4xl lg:text-5xl">
            Ready to experience Provence?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-surface/85 md:text-lg">
            Send us an inquiry with your preferred dates and room — we&apos;ll respond
            within 24 hours with availability and a personalised offer.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href="/contact"
              size="lg"
              className="bg-surface text-accent hover:bg-surface/90 hover:text-accent-dark"
            >
              Send an inquiry
            </Button>
            <Button
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              variant="outline"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
              className="border-surface/60 text-surface hover:bg-surface/10 hover:text-surface"
            >
              WhatsApp us
            </Button>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
