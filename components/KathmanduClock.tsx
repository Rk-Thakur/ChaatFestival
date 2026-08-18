"use client";

import { useEffect, useState } from "react";

type NptTime = { hour: string; minute: string; dayPeriod: string };

function formatNPT(date: Date): NptTime {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kathmandu",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).formatToParts(date);

  return {
    hour: parts.find((p) => p.type === "hour")?.value ?? "--",
    minute: parts.find((p) => p.type === "minute")?.value ?? "--",
    dayPeriod: parts.find((p) => p.type === "dayPeriod")?.value ?? "",
  };
}

export default function KathmanduClock() {
  const [time, setTime] = useState<NptTime | null>(null);

  useEffect(() => {
    setTime(formatNPT(new Date()));
    const id = setInterval(() => setTime(formatNPT(new Date())), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col leading-tight">
      <div className="flex items-baseline gap-0.5 text-sm font-semibold tabular-nums text-sunset-gold sm:text-base">
        <span>{time?.hour ?? "--"}</span>
        <span className="animate-blink-colon">:</span>
        <span>{time?.minute ?? "--"}</span>
        <span className="ml-1 text-[10px] font-medium text-white/60 sm:text-xs">
          {time?.dayPeriod ?? ""}
        </span>
      </div>
      <span className="text-[10px] tracking-wider text-white/50 uppercase sm:text-[11px]">
        NPT · Ghat Time
      </span>
    </div>
  );
}
