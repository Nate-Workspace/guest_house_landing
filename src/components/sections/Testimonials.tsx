import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-content">
        <SectionHeading
          eyebrow="Guest Reviews"
          title="What our guests say"
          description="Rated 5 stars by travellers who found their perfect Provençal escape."
          align="center"
          className="mx-auto"
          animate={false}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.id}
              className="flex flex-col rounded-lg bg-bg p-6 ring-1 ring-text/5"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <StarRating rating={testimonial.rating ?? 5} />
                <span className="text-xs font-medium uppercase tracking-wide text-muted">
                  Google Review
                </span>
              </div>

              <p className="flex-1 text-sm leading-relaxed text-text md:text-base">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <footer className="mt-5 border-t border-text/10 pt-4">
                <cite className="not-italic">
                  <span className="block text-sm font-medium text-text">
                    {testimonial.author}
                  </span>
                  {testimonial.location ? (
                    <span className="mt-0.5 block text-xs text-muted">
                      {testimonial.location}
                    </span>
                  ) : null}
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${i < rating ? "text-accent" : "text-text/15"}`}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.77l-4.94 2.94.94-5.5-4-3.9 5.53-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}
