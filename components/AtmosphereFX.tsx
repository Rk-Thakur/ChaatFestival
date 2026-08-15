"use client";

import { useEffect, useState } from "react";

type Spec = { id: number; style: React.CSSProperties };

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function buildFireflies(count: number): Spec[] {
  return Array.from({ length: count }, (_, id) => ({
    id,
    style: {
      left: `${rand(4, 96)}%`,
      top: `${rand(30, 85)}%`,
      "--fx-dx": `${rand(-40, 40)}px`,
      "--fx-dy": `${rand(-100, -30)}px`,
      "--fx-duration": `${rand(10, 19)}s`,
      "--fx-delay": `${rand(0, 14)}s`,
    } as React.CSSProperties,
  }));
}

function buildDiyas(count: number): Spec[] {
  return Array.from({ length: count }, (_, id) => ({
    id,
    style: {
      left: `${rand(2, 20)}%`,
      top: `${rand(58, 80)}%`,
      "--fx-dx": `${rand(70, 160)}px`,
      "--fx-dy": `${rand(-6, 8)}px`,
      "--fx-duration": `${rand(20, 34)}s`,
      "--fx-delay": `${rand(0, 20)}s`,
    } as React.CSSProperties,
  }));
}

function buildSmoke(count: number): Spec[] {
  return Array.from({ length: count }, (_, id) => ({
    id,
    style: {
      left: `${rand(68, 86)}%`,
      top: `${rand(42, 54)}%`,
      "--fx-dx": `${rand(-10, 10)}px`,
      "--fx-duration": `${rand(6, 10)}s`,
      "--fx-delay": `${rand(0, 8)}s`,
    } as React.CSSProperties,
  }));
}

function buildPetals(count: number): Spec[] {
  return Array.from({ length: count }, (_, id) => ({
    id,
    style: {
      left: `${rand(4, 96)}%`,
      "--fx-dx": `${rand(-60, 60)}px`,
      "--fx-duration": `${rand(16, 26)}s`,
      "--fx-delay": `${rand(0, 20)}s`,
    } as React.CSSProperties,
  }));
}

function BirdSvg() {
  return (
    <svg width="22" height="14" viewBox="0 0 24 16" fill="none" aria-hidden="true">
      <path
        d="M2 8 Q6 2 12 8 Q18 2 22 8"
        stroke="rgba(20,16,20,0.55)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export default function AtmosphereFX() {
  const [ready, setReady] = useState(false);
  const [fireflies, setFireflies] = useState<Spec[]>([]);
  const [diyas, setDiyas] = useState<Spec[]>([]);
  const [smoke, setSmoke] = useState<Spec[]>([]);
  const [petals, setPetals] = useState<Spec[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setFireflies(buildFireflies(9));
    setDiyas(buildDiyas(6));
    setSmoke(buildSmoke(3));
    setPetals(buildPetals(6));
    setReady(true);
  }, []);

  if (!ready) return null;

  return (
    <div aria-hidden="true" className="atmosphere-fx pointer-events-none fixed inset-0 z-[-5] overflow-hidden">
      <div className="fx-lantern fx-lantern-pos" />
      {fireflies.map((f) => (
        <span key={`ff-${f.id}`} className="fx-firefly" style={f.style} />
      ))}
      {diyas.map((d) => (
        <span key={`dy-${d.id}`} className="fx-diya" style={d.style} />
      ))}
      {smoke.map((s) => (
        <span key={`sm-${s.id}`} className="fx-smoke" style={s.style} />
      ))}
      {petals.map((p) => (
        <span key={`pt-${p.id}`} className="fx-petal" style={p.style} />
      ))}
      <div className="fx-bird fx-bird-a">
        <BirdSvg />
      </div>
      <div className="fx-bird fx-bird-b">
        <BirdSvg />
      </div>
    </div>
  );
}
