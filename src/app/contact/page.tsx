import { ContactDetails, ContactForm } from "@/components/conversion";
import { FadeIn } from "@/components/motion";
import { MapSection, PageHero } from "@/components/sections";
import { getBatchBySlug } from "@/data/rooms";
import { buildPageMetadata } from "@/lib/seo";

const heroImage =
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&h=900&fit=crop";

export const metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Share your preferred dates and room type. We'll confirm availability by phone or email within 24 hours.",
  path: "/contact",
  image: heroImage,
});

type ContactPageProps = {
  searchParams: Promise<{ batch?: string; unit?: string; room?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { batch, unit, room } = await searchParams;
  const defaultBatch =
    batch && getBatchBySlug(batch) ? batch : room && getBatchBySlug(room) ? room : undefined;

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact & Inquiries"
        description="Tell us your dates and preferred room type — we'll confirm availability by phone or email."
        image={heroImage}
        imageAlt="Alem Guesthouse exterior in Hawassa"
      />

      <FadeIn>
        <section className="section-padding section-divider bg-surface bg-grain">
          <div className="container-content">
            <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
              <FadeIn className="lg:col-span-3">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                  Inquiry form
                </p>
                <h2 className="mt-3 font-display text-3xl text-text md:text-4xl">
                  Plan your stay
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  All fields marked with * are required. Select a room type or
                  specific room number — we&apos;ll confirm what&apos;s available
                  for your dates.
                </p>

                <div className="mt-8 rounded-lg bg-surface p-5 shadow-sm ring-1 ring-text/5 sm:mt-10 sm:p-6 md:p-8">
                  <ContactForm defaultBatch={defaultBatch} defaultUnit={unit} />
                </div>
              </FadeIn>

              <FadeIn delay={0.18} className="lg:col-span-2">
                <ContactDetails />
              </FadeIn>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.08}>
        <MapSection layout="fullWidth" showAddress={false} />
      </FadeIn>
    </>
  );
}
