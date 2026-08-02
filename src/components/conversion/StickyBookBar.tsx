import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function StickyBookBar() {
  if (!siteConfig.features.stickyBookBar) {
    return null;
  }

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-text/10 bg-surface/95 backdrop-blur-md md:hidden",
        "pb-[env(safe-area-inset-bottom)]",
      )}
    >
      <div className="container-content py-3">
        <Link
          href="/contact"
          className="flex h-12 w-full items-center justify-center rounded-pill bg-accent text-sm font-medium tracking-wide text-surface shadow-sm transition-all duration-300 hover:bg-accent-dark hover:shadow-luxury active:scale-[0.98]"
        >
          Inquire Now
        </Link>
      </div>
    </div>
  );
}
