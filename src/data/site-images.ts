/** Local assets under `public/images/` — folder names match how files were uploaded. */

export function publicImagePath(...segments: string[]): string {
  return `/images/${segments.map((segment) => encodeURIComponent(segment)).join("/")}`;
}

function folderImages(folder: string, files: string[]): string[] {
  return files.map((file) => publicImagePath(folder, file));
}

export const outsideImages = folderImages("Outside pic", [
  "5X9A9538.JPG",
  "5X9A9539.JPG",
  "5X9A9540.JPG",
  "5X9A9541.JPG",
  "5X9A9542.JPG",
  "5X9A9543.JPG",
]);

export const balconyImages = folderImages("Balcony pic", [
  "5X9A9535.JPG",
  "5X9A9536.JPG",
  "5X9A9537.JPG",
]);

export const stairImages = folderImages("Stair pic", [
  "5X9A9517.JPG",
  "5X9A9518.JPG",
  "5X9A9519.JPG",
  "5X9A9520.JPG",
  "5X9A9521.JPG",
  "5X9A9522.JPG",
]);

export const roomFolderImages: Record<number, string[]> = {
  1: folderImages("Room 1", [
    "5X9A9504.JPG",
    "5X9A9505.JPG",
    "5X9A9506.JPG",
    "5X9A9507.JPG",
    "5X9A9508.JPG",
    "5X9A9509.JPG",
    "5X9A9510.JPG",
  ]),
  2: folderImages("Room 2", [
    "5X9A9494.JPG",
    "5X9A9495.JPG",
    "5X9A9496.JPG",
    "5X9A9497.JPG",
    "5X9A9498.JPG",
    "5X9A9500.JPG",
    "5X9A9502.JPG",
    "5X9A9503.JPG",
  ]),
  4: folderImages("Room 4", [
    "5X9A9523.JPG",
    "5X9A9525.JPG",
    "5X9A9526.JPG",
    "5X9A9527.JPG",
    "5X9A9528.JPG",
    "5X9A9529.JPG",
  ]),
  5: folderImages("Room 5", [
    "5X9A9530.JPG",
    "5X9A9531.JPG",
    "5X9A9532.JPG",
    "5X9A9533.JPG",
    "5X9A9534.JPG",
  ]),
  6: folderImages("Room 6", [
    "5X9A9511.JPG",
    "5X9A9512.JPG",
    "5X9A9513.JPG",
    "5X9A9514.JPG",
    "5X9A9515.JPG",
    "5X9A9516.JPG",
  ]),
  7: folderImages("Room 7", [
    "5X9A9544.JPG",
    "5X9A9545.JPG",
    "5X9A9546.JPG",
    "5X9A9547.JPG",
    "5X9A9548.JPG",
    "5X9A9549.JPG",
  ]),
};

/** Batch 3 — no uploaded room photos yet; keep existing Unsplash placeholders. */
export const batch3PlaceholderImages = [
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop",
] as const;

/** Room folder number maps 1:1 to batch number (batch-1 → Room 1, etc.). */
export function getBatchImages(batchNumber: number): string[] {
  if (batchNumber === 3) {
    return [...batch3PlaceholderImages];
  }

  const roomImages = roomFolderImages[batchNumber];
  if (!roomImages) {
    return [...batch3PlaceholderImages];
  }

  if (batchNumber === 2 || batchNumber === 4) {
    return [...roomImages, ...balconyImages];
  }

  return roomImages;
}

export const siteImages = {
  hero: {
    exterior: outsideImages[2] ?? outsideImages[0],
    rooms: roomFolderImages[7]?.[0] ?? outsideImages[0],
    contact: outsideImages[0] ?? outsideImages[2],
    amenities: stairImages[0] ?? outsideImages[0],
  },
  og: outsideImages[2] ?? outsideImages[0],
} as const;

/** Hawassa / breakfast — no client assets yet. */
export const placeholderImages = {
  breakfast:
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=900&fit=crop",
  hawassaScenery:
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1200&h=900&fit=crop",
} as const;
