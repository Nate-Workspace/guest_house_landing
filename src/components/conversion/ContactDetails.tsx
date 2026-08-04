import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { CallButton } from "./CallButton";

export function ContactDetails() {
  const { phone, email, address, hours, whatsapp } = siteConfig.contact;
  const phoneHref = `tel:${phone.replace(/\s/g, "")}`;
  const whatsappUrl = `https://wa.me/${whatsapp}`;

  return (
    <aside className="rounded-lg bg-surface p-6 shadow-sm ring-1 ring-text/5 md:p-8">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
        Direct contact
      </p>
      <h2 className="mt-3 font-display text-2xl text-text md:text-3xl">
        We&apos;re here to help
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        Prefer to reach us directly? Call, email, or message us on WhatsApp —
        we typically respond within a few hours.
      </p>

      <dl className="mt-8 space-y-6">
        <div>
          <dt className="text-xs font-medium uppercase tracking-wider text-muted">
            Phone
          </dt>
          <dd className="mt-1">
            <a
              href={phoneHref}
              className="text-base text-text transition-colors hover:text-accent"
            >
              {phone}
            </a>
          </dd>
        </div>

        <div>
          <dt className="text-xs font-medium uppercase tracking-wider text-muted">
            Email
          </dt>
          <dd className="mt-1">
            <a
              href={`mailto:${email}`}
              className="text-base text-text transition-colors hover:text-accent"
            >
              {email}
            </a>
          </dd>
        </div>

        <div>
          <dt className="text-xs font-medium uppercase tracking-wider text-muted">
            Address
          </dt>
          <dd className="mt-1 text-sm leading-relaxed text-text">
            {address.street}
            <br />
            {address.postalCode} {address.city}
            <br />
            {address.region}
            <br />
            {address.country}
          </dd>
        </div>

        <div>
          <dt className="text-xs font-medium uppercase tracking-wider text-muted">
            Hours
          </dt>
          <dd className="mt-1 text-sm leading-relaxed text-text">{hours}</dd>
        </div>
      </dl>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          size="lg"
          className="bg-[#25D366] text-surface hover:bg-[#20BD5A] hover:text-surface"
        >
          WhatsApp us
        </Button>
        <CallButton className="sm:flex-1" />
      </div>
    </aside>
  );
}
