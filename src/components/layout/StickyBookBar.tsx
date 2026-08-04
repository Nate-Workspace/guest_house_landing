import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

export function StickyBookBar() {
  if (!siteConfig.features.stickyBookBar) {
    return null;
  }

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-text/10 bg-surface/95 p-4 backdrop-blur-md md:hidden"
      style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom, 0px))" }}
    >
      <Button href="/contact" className="w-full" size="lg">
        Inquire Now
      </Button>
    </div>
  );
}
