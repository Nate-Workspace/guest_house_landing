import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const variants = {
  default: "bg-surface text-text ring-1 ring-text/10",
  accent: "bg-accent/10 text-accent-dark",
  muted: "bg-text/5 text-muted",
} as const;

type BadgeVariant = keyof typeof variants;

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

export function Badge({
  variant = "default",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill px-3 py-1 text-xs font-medium tracking-wide",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
