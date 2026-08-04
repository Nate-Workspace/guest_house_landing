"use client";

import dynamic from "next/dynamic";
import { useCallback, useState } from "react";
import type { GalleryImage } from "@/lib/types";
import { MasonryGallery } from "./MasonryGallery";

const Lightbox = dynamic(
  () => import("./Lightbox").then((mod) => mod.Lightbox),
  { ssr: false },
);

type GalleryViewProps = {
  images: GalleryImage[];
};

export function GalleryView({ images }: GalleryViewProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number>(-1);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(-1);
  }, []);

  return (
    <>
      <MasonryGallery images={images} onImageClick={openLightbox} />
      {lightboxIndex >= 0 ? (
        <Lightbox
          open
          index={lightboxIndex}
          images={images}
          onClose={closeLightbox}
        />
      ) : null}
    </>
  );
}
