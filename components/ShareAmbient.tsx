"use client";

import { useCallback, useRef, useState } from "react";
import { startAmbience, stopAmbience } from "@/lib/ambientAudio";

function WaveIcon({ active }: { active: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M2 12c2 0 2-3 4-3s2 3 4 3 2-3 4-3 2 3 4 3 2-3 4-3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={active ? 1 : 0.6}
      />
      <path
        d="M2 17c2 0 2-3 4-3s2 3 4 3 2-3 4-3 2 3 4 3 2-3 4-3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={active ? 0.6 : 0.3}
      />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="18" cy="5" r="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M8.6 10.5l6.8-4M8.6 13.5l6.8 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function ShareAmbient() {
  const [ambienceOn, setAmbienceOn] = useState(false);
  const [justCopied, setJustCopied] = useState(false);
  const [bellRipples, setBellRipples] = useState<number[]>([]);
  const bellRippleId = useRef(0);

  const handleShare = useCallback(async () => {
    const shareData = {
      title: "Chhath Ghat — Nostalgia Music & Atmosphere",
      text: "Sitting by the ghat with Chhath geet and diya light. Join in:",
      url: typeof window !== "undefined" ? window.location.href : "",
    };
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        return;
      }
    }
    try {
      await navigator.clipboard.writeText(shareData.url);
      setJustCopied(true);
      setTimeout(() => setJustCopied(false), 2000);
    } catch {
      // clipboard unavailable; nothing more we can do here
    }
  }, []);

  const toggleAmbience = useCallback(() => {
    setAmbienceOn((prev) => {
      const next = !prev;
      if (next) {
        startAmbience(() => {
          const id = ++bellRippleId.current;
          setBellRipples((r) => [...r, id]);
          setTimeout(() => setBellRipples((r) => r.filter((x) => x !== id)), 1200);
        });
      } else {
        stopAmbience();
      }
      return next;
    });
  }, []);

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={toggleAmbience}
        aria-pressed={ambienceOn}
        aria-label="Toggle ambient river sound and temple bell"
        className={`relative flex h-8 w-8 items-center justify-center rounded-full border transition-colors sm:h-9 sm:w-9 ${
          ambienceOn
            ? "border-sunset-gold/50 bg-saffron/25 text-sunset-gold"
            : "border-white/15 bg-black/30 text-white/70"
        }`}
      >
        {bellRipples.map((id) => (
          <span key={id} className="bell-ripple" />
        ))}
        <WaveIcon active={ambienceOn} />
      </button>
      <button
        type="button"
        onClick={handleShare}
        aria-label="Share this ghat"
        className="relative flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white/70 transition-colors hover:text-sunset-gold sm:h-9 sm:w-9"
      >
        <ShareIcon />
        {justCopied && (
          <span className="absolute top-full mt-1.5 whitespace-nowrap rounded bg-black/80 px-2 py-0.5 text-[10px] text-white/90">
            Link copied
          </span>
        )}
      </button>
    </div>
  );
}
