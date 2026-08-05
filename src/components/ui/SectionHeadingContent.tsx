import { cn } from "@/lib/utils";

export type SectionHeadingTone = "default" | "onDark";

export type SectionHeadingContentProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  tone?: SectionHeadingTone;
};

export function SectionHeadingContent({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  tone = "default",
}: SectionHeadingContentProps) {
  const onDark = tone === "onDark";

  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-xs font-medium uppercase tracking-[0.2em]",
            onDark ? "text-surface/75" : "text-accent",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-3xl leading-tight md:text-4xl lg:text-5xl",
          onDark ? "text-surface" : "text-text",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed md:text-lg",
            onDark ? "text-surface/85" : "text-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
