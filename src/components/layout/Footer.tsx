import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const exploreLinks = siteConfig.nav.filter((item) => item.href !== "/contact");
const { address, phone, email } = siteConfig.contact;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-text/10 bg-surface">
      <div className="container-content section-padding grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        <div className="space-y-4 lg:col-span-1">
          <Link href="/" aria-label={`${siteConfig.name} home`}>
            <Image
              src="/logo.svg"
              alt={siteConfig.name}
              width={140}
              height={36}
              className="h-8 w-auto"
            />
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            {siteConfig.tagline}
          </p>
          <div className="flex items-center gap-4">
            {siteConfig.social.instagram ? (
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-accent"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            ) : null}
            {siteConfig.social.facebook ? (
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-accent"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
            ) : null}
          </div>
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

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M14 8.5h2.5V5h-3c-2.8 0-4.5 1.7-4.5 4.5V12H7v3.5h2V22h3.5v-6.5H16l.5-3.5h-3v-2c0-.8.7-1.5 1.5-1.5z" />
    </svg>
  );
}
