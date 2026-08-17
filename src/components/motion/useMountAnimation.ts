"use client";

import { useEffect, useState } from "react";

/** True after the component has mounted — defers entrance animations to avoid hydration issues. */
export function useMountAnimation() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
