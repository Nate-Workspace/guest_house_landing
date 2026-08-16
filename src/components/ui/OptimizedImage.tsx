import Image, { type ImageProps } from "next/image";
import {
  IMAGE_QUALITY,
  IMAGE_SIZES,
  type ImageQualityPreset,
  type ImageSizePreset,
} from "@/lib/image";

type OptimizedImageProps = ImageProps & {
  qualityPreset?: ImageQualityPreset;
  sizePreset?: ImageSizePreset;
};

export function OptimizedImage({
  qualityPreset = "content",
  sizePreset,
  quality,
  sizes,
  ...props
}: OptimizedImageProps) {
  return (
    <Image
      {...props}
      quality={quality ?? IMAGE_QUALITY[qualityPreset]}
      sizes={sizes ?? (sizePreset ? IMAGE_SIZES[sizePreset] : undefined)}
    />
  );
}
