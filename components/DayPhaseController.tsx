"use client";

import { useEffect } from "react";

type Phase = "dawn" | "day" | "dusk" | "night";

function computePhase(): Phase {
  const hour = Number(
    new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Kathmandu",
      hour: "2-digit",
      hour12: false,
    }).format(new Date()),
  );
  if (hour >= 4 && hour < 7) return "dawn";
  if (hour >= 7 && hour < 16) return "day";
  if (hour >= 16 && hour < 19) return "dusk";
  return "night";
}

/** Retints the hero overlay gradient to match the real Ghat time of day. */
export default function DayPhaseController() {
  useEffect(() => {
    const apply = () => {
      document.documentElement.dataset.phase = computePhase();
    };
    apply();
    const id = setInterval(apply, 60_000);
    return () => clearInterval(id);
  }, []);

  return null;
}
