import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { BrandMark } from "./BrandMark";

const exploreLinks = siteConfig.nav.filter((item) => item.href !== "/contact");
const { address, phone, email } = siteConfig.contact;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "section-divider border-t border-text/10 bg-bg-muted bg-grain bg-grain-light",
        siteConfig.features.stickyBookBar &&
          "pb-[calc(6rem+env(safe-area-inset-bottom,0px))] md:pb-0",
      )}
    >
      <div className="container-content section-padding grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        <div className="space-y-4 lg:col-span-1">
          <Link
            href="/"
            aria-label={`${siteConfig.name} home`}
            className="inline-block text-accent transition-opacity hover:opacity-80"
          >
            <BrandMark size="md" />
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            {siteConfig.tagline}
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Explore
          </h3>
          <ul className="space-y-3">
            {exploreLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-text"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Contact
          </h3>
          <ul className="space-y-3 text-sm text-muted">
            <li>
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="transition-colors hover:text-text"
              >
                {phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${email}`}
                className="transition-colors hover:text-text"
              >
                {email}
              </a>
            </li>
            <li className="leading-relaxed">
              {address.street}
              <br />
              {address.postalCode} {address.city}
              <br />
              {address.country}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Hours
          </h3>
          <p className="text-sm leading-relaxed text-muted">
            {siteConfig.contact.hours}
          </p>
        </div>
      </div>

      <div className="border-t border-text/10">
        <div className="container-content flex flex-col gap-3 py-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <Link
            href="/contact"
            className="transition-colors hover:text-accent"
          >
            Send an inquiry
          </Link>
        </div>
      </div>
    </footer>
  );
}
