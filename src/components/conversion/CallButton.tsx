import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { ButtonProps } from "@/components/ui/Button";

type CallButtonProps = Omit<Extract<ButtonProps, { href: string }>, "href"> & {
  label?: string;
};

export function CallButton({
  label = "Call us",
  variant = "outline",
  size = "lg",
  className,
  ...props
}: CallButtonProps) {
  const phoneHref = `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`;

  return (
    <Button
      href={phoneHref}
      variant={variant}
      size={size}
      className={cn(className)}
      {...props}
    >
      {label}
    </Button>
  );
}
