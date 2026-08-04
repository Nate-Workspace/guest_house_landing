/** Shared scroll-reveal timing — keep subtle and unhurried */
export const motionEase = [0.25, 0.1, 0.25, 1] as const;

export const revealDuration = 0.85;
export const revealY = 12;
/** Starting opacity — never fully invisible; keeps reveals feeling soft, not rushed */
export const revealOpacity = 0.6;
export const revealViewportMargin = "-60px";
/** Base pause before any scroll reveal begins */
export const revealBaseDelay = 0.12;

export const staggerDelay = 0.12;
export const maxStaggerItems = 8;

export const heroStaggerDelay = 0.14;
export const heroDelayChildren = 0.28;

export const revealHidden = {
  opacity: revealOpacity,
  y: revealY,
} as const;

export const revealVisible = {
  opacity: 1,
  y: 0,
} as const;
