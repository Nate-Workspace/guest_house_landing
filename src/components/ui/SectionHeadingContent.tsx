import { cn } from "@/lib/utils";

export type SectionHeadingContentProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeadingContent({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingContentProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl leading-tight text-text md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
