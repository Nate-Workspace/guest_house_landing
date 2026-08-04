"use client";

import { useEffect, useState } from "react";

/** Defer mount animations until after hydration to avoid SSR/client style mismatches */
export function useMountAnimation() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
