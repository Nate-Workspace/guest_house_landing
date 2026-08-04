"use client";

import YarlLightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import type { GalleryImage } from "@/lib/types";

type LightboxProps = {
  open: boolean;
  index: number;
  images: GalleryImage[];
  onClose: () => void;
};

export function Lightbox({ open, index, images, onClose }: LightboxProps) {
  const slides = images.map((image) => ({
    src: image.src,
    alt: image.alt,
    title: image.alt,
    description: image.category,
  }));

  return (
    <YarlLightbox
      open={open}
      close={onClose}
      index={index}
      slides={slides}
      animation={{ fade: 400, swipe: 400 }}
      controller={{ closeOnBackdropClick: true }}
      carousel={{ finite: false }}
    />
  );
}
