import { cn } from "@/lib/utils";

type BrandMarkProps = {
  size?: "sm" | "md";
  className?: string;
};

const sizeStyles = {
  sm: {
    main: "text-[1.35rem] md:text-[1.5rem]",
    sub: "text-[0.58rem] tracking-[0.24em] md:text-[0.62rem]",
  },
  md: {
    main: "text-[1.65rem] md:text-[1.875rem]",
    sub: "text-[0.62rem] tracking-[0.26em] md:text-[0.68rem]",
  },
} as const;

export function BrandMark({ size = "sm", className }: BrandMarkProps) {
  const styles = sizeStyles[size];

  return (
    <span
      className={cn(
        "inline-flex items-baseline gap-1.5 leading-none",
        className,
      )}
      aria-hidden="true"
    >
      <span
        className={cn(
          "font-display font-medium tracking-tight",
          styles.main,
        )}
      >
        Alem
      </span>
      <span
        className={cn(
          "font-body font-medium uppercase text-current/70",
          styles.sub,
        )}
      >
        GH
      </span>
    </span>
  );
}
