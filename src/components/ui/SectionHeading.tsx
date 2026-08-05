import { AnimatedSectionHeading } from "./AnimatedSectionHeading";
import { SectionHeadingContent } from "./SectionHeadingContent";
import type { SectionHeadingTone } from "./SectionHeadingContent";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  animate?: boolean;
  tone?: SectionHeadingTone;
};

export function SectionHeading({
  animate = true,
  ...props
}: SectionHeadingProps) {
  if (animate) {
    return <AnimatedSectionHeading {...props} />;
  }

  return <SectionHeadingContent {...props} />;
}
