import { AnimatedSectionHeading } from "./AnimatedSectionHeading";
import { SectionHeadingContent } from "./SectionHeadingContent";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  animate?: boolean;
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
