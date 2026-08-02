import Link from "next/link";
import { Button } from "@/components/ui/Button";

type PageStubProps = {
  title: string;
  description?: string;
};

export function PageStub({ title, description }: PageStubProps) {
  return (
    <section className="section-padding pt-28 md:pt-32">
      <div className="container-content mx-auto max-w-xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          Coming soon
        </p>
        <h1 className="mt-4 font-display text-4xl text-text md:text-5xl">{title}</h1>
        <p className="mt-4 leading-relaxed text-muted">
          {description ??
            "This page is being crafted as part of our next release. In the meantime, explore the homepage or send us an inquiry."}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/">Back to home</Button>
          <Button href="/contact" variant="outline">
            Send inquiry
          </Button>
        </div>
        <p className="mt-10 text-sm text-muted">
          Already know what you need?{" "}
          <Link href="/contact" className="text-accent transition-colors hover:text-accent-dark">
            Contact us directly
          </Link>
        </p>
      </div>
    </section>
  );
}
