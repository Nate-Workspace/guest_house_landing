"use client";

import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/** True only after client hydration — avoids SSR/client animation mismatches */
export function useMountAnimation() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}
