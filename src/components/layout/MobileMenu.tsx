"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  open: boolean;
  pathname: string;
  onClose: () => void;
};

const ease = [0.25, 0.1, 0.25, 1] as const;

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const panelVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: {
      duration: 0.3,
      ease,
      staggerChildren: 0.06,
      delayChildren: 0.12,
    },
  },
  exit: { x: "100%", transition: { duration: 0.25, ease } },
};

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease },
  },
};

export function MobileMenu({ open, pathname, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            key="mobile-menu-backdrop"
            className="fixed inset-0 z-40 bg-text/40 backdrop-blur-sm lg:hidden"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3, ease }}
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.nav
            key="mobile-menu-panel"
            id="mobile-navigation"
            className="fixed inset-y-0 right-0 z-40 flex h-dvh w-full max-w-sm flex-col bg-surface px-8 shadow-luxury lg:hidden"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            aria-label="Mobile navigation"
          >
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain pt-24 pb-4">
              <motion.ul className="flex flex-col gap-1" variants={listVariants}>
                {siteConfig.nav.map((item) => (
                  <motion.li key={item.href} variants={itemVariants}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block rounded-lg px-3 py-3 font-display text-2xl transition-colors",
                        pathname === item.href
                          ? "bg-accent/10 text-accent"
                          : "text-text hover:bg-text/5 hover:text-accent",
                      )}
                      onClick={onClose}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <div className="shrink-0 border-t border-text/10 pt-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
              <Button href="/contact" className="w-full" onClick={onClose}>
                Inquire Now
              </Button>
            </div>
          </motion.nav>
        </>
      ) : null}
    </AnimatePresence>
  );
}
