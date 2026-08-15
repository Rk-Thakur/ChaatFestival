"use client";

import { useEffect, useState } from "react";

// Chhath Puja (Kartik 29, 2083 B.S.) = Sunday, 15 Nov 2026, midnight IST.
const TARGET_MS = new Date("2026-11-15T00:00:00+05:30").getTime();

type Remaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  reached: boolean;
};

function getRemaining(): Remaining {
  const diff = TARGET_MS - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, reached: true };
  }
  const totalSeconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
    reached: false,
  };
}

export default function ChhathCountdown() {
  const [remaining, setRemaining] = useState<Remaining | null>(null);

  useEffect(() => {
    setRemaining(getRemaining());
    const id = setInterval(() => setRemaining(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 backdrop-blur-md">
      <span className="diya-glow-dot animate-pulse-diya h-2 w-2 rounded-full bg-saffron" />
      {remaining?.reached ? (
        <span className="countdown-celebrate text-[11px] font-medium whitespace-nowrap text-sunset-gold sm:text-xs">
          Chhathi Maiya ki Jai 🙏
        </span>
      ) : (
        <span className="text-[11px] font-medium whitespace-nowrap text-white/85 sm:text-xs">
          <span className="tabular-nums text-sunset-gold sm:hidden">
            {remaining ? `${remaining.days}d ${remaining.hours}h` : "--d --h"}
          </span>
          <span className="hidden tabular-nums text-sunset-gold sm:inline">
            {remaining
              ? `${remaining.days}d ${remaining.hours}h ${remaining.minutes}m ${remaining.seconds}s`
              : "--d --h --m --s"}
          </span>{" "}
          <span className="hidden sm:inline">to Chhath · Kartik 29, 2083</span>
          <span className="sm:hidden">to Chhath</span>
        </span>
      )}
    </div>
  );
}
