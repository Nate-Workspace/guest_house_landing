"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuPath, setMenuPath] = useState<string | null>(null);

  const mobileOpen = menuPath === pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isSolid = scrolled || !isHome || mobileOpen;
  const navLinks = siteConfig.nav.filter((item) => item.href !== "/");

  const openMenu = () => setMenuPath(pathname);
  const closeMenu = () => setMenuPath(null);
  const toggleMenu = () => (mobileOpen ? closeMenu() : openMenu());

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          isSolid
            ? "border-b border-text/5 bg-surface/95 text-text shadow-sm backdrop-blur-md"
            : "bg-transparent text-surface",
        )}
      >
        <div className="container-content flex h-18 items-center justify-between gap-6">
          <Link
            href="/"
            className="relative z-10 flex shrink-0 items-center gap-3"
            aria-label={`${siteConfig.name} home`}
          >
            <Image
              src="/logo.svg"
              alt=""
              width={120}
              height={32}
              className={cn(
                "h-7 w-auto transition-[filter] duration-300",
                isSolid ? "brightness-100" : "brightness-0 invert",
              )}
              priority
            />
          </Link>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Main navigation"
          >
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm tracking-wide transition-colors duration-200",
                  pathname === item.href
                    ? "text-accent"
                    : isSolid
                      ? "text-text/80 hover:text-accent"
                      : "text-surface/90 hover:text-surface",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="relative z-50 flex items-center gap-3">
            <Button
              href="/contact"
              size="sm"
              variant={isSolid ? "primary" : "outline"}
              className={cn(
                !isSolid &&
                  "border-surface/80 text-surface hover:bg-surface/10 hover:text-surface",
              )}
            >
              Inquire
            </Button>

            <button
              type="button"
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden",
                isSolid
                  ? "text-text hover:bg-text/5"
                  : "text-surface hover:bg-surface/10",
              )}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={toggleMenu}
            >
              {mobileOpen ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} pathname={pathname} onClose={closeMenu} />
    </>
  );
}
