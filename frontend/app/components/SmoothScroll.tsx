"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      lerp: 0.075,
      wheelMultiplier: 0.85,
      touchMultiplier: 1,
      overscroll: false,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
