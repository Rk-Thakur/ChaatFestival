"use client";

import { useEffect } from "react";

/**
 * Nudges the hero background's position a few px in response to pointer
 * movement or device tilt — animates `background-position`, never
 * `transform`, so it can't fight the Ken Burns zoom animation on the same
 * element (that one owns `transform`).
 */
export default function ParallaxController() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = document.querySelector<HTMLElement>(".hero-bg");
    if (!el) return;

    let raf = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const tick = () => {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      el.style.backgroundPosition = `calc(50% + ${currentX.toFixed(2)}px) calc(50% + ${currentY.toFixed(2)}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const handlePointerMove = (e: PointerEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      targetX = nx * -10;
      targetY = ny * -8;
    };

    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma == null || e.beta == null) return;
      const nx = Math.max(-1, Math.min(1, e.gamma / 30));
      const ny = Math.max(-1, Math.min(1, (e.beta - 40) / 30));
      targetX = nx * -10;
      targetY = ny * -8;
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("deviceorientation", handleOrientation);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, []);

  return null;
}
