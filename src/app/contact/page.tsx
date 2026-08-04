import { ContactDetails, ContactForm } from "@/components/conversion";
import { MapSection, PageHero } from "@/components/sections";

const heroImage =
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&h=900&fit=crop";

type ContactPageProps = {
  searchParams: Promise<{ room?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { room } = await searchParams;

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact & Inquiries"
        description="Share your preferred dates and room — we'll respond within 24 hours with availability and a personalised offer."
        image={heroImage}
        imageAlt="Serenité Guesthouse exterior at golden hour"
      />

      <section className="section-padding bg-bg">
        <div className="container-content">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                Inquiry form
              </p>
              <h2 className="mt-3 font-display text-3xl text-text md:text-4xl">
                Plan your stay
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                All fields marked with * are required. We&apos;ll confirm
                availability and send details directly to your inbox.
              </p>

              <div className="mt-10 rounded-lg bg-surface p-6 shadow-sm ring-1 ring-text/5 md:p-8">
                <ContactForm defaultRoom={room} />
              </div>
            </div>

            <div className="lg:col-span-2">
              <ContactDetails />
            </div>
          </div>
        </div>
      </section>

      <MapSection layout="fullWidth" showAddress={false} />
    </>
  );
}
