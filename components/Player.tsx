"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { track } from "@vercel/analytics";
import { PLAYLISTS, type Track } from "@/lib/tracks";
import { YT_PLAYER_STATE, loadYouTubeIframeAPI, type YTPlayer } from "@/lib/youtube";

const GLASS =
  "border border-amber-500/20 bg-gradient-to-b from-amber-950/30 via-slate-950/60 to-black/80 backdrop-blur-3xl backdrop-saturate-[1.8] shadow-[0_16px_48px_-12px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,200,100,0.25)]";

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const total = Math.floor(seconds);
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

/* ---------------------------------------------------------------------- */
/* All sub-components below live at MODULE scope (not nested inside       */
/* Player) so React never re-mounts them on state changes — that would    */
/* kill the running CSS spin animation and destroy the YT iframe.         */
/* ---------------------------------------------------------------------- */

function VinylArt({
  videoContainerRef,
  isPlaying,
}: {
  videoContainerRef: React.RefObject<HTMLDivElement | null>;
  isPlaying: boolean;
}) {
  return (
    <div
      className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-black ring-1 ring-amber-200/20 sm:h-20 sm:w-20 ${
        isPlaying ? "" : "vinyl-idle"
      }`}
      style={{
        animation: "spin-vinyl 10s linear infinite",
        animationPlayState: isPlaying ? "running" : "paused",
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="aspect-video h-full w-auto">
          <div ref={videoContainerRef} className="h-full w-full" />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 m-auto h-3 w-3 rounded-full bg-amber-500/80 ring-2 ring-orange-200/50" />
    </div>
  );
}

function TrackInfo({ track }: { track: Track }) {
  return (
    <div className="min-w-0">
      <p className="truncate text-[15px] font-semibold text-amber-100">{track.title}</p>
      <p className="truncate text-[12.5px] text-white/70">
        {track.artist} · {track.phase}
      </p>
    </div>
  );
}

function SeekBar({
  currentTime,
  duration,
  onSeek,
  isPlaying,
}: {
  currentTime: number;
  duration: number;
  onSeek: (time: number) => void;
  isPlaying: boolean;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragTime, setDragTime] = useState<number | null>(null);

  const timeFromEvent = useCallback(
    (e: ReactPointerEvent<HTMLDivElement>) => {
      const el = trackRef.current;
      if (!el || duration <= 0) return 0;
      const rect = el.getBoundingClientRect();
      const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
      return ratio * duration;
    },
    [duration],
  );

  const handlePointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragTime(timeFromEvent(e));
  };
  const handlePointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (dragTime === null) return;
    setDragTime(timeFromEvent(e));
  };
  const handlePointerUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (dragTime === null) return;
    onSeek(timeFromEvent(e));
    setDragTime(null);
  };

  const displayTime = dragTime ?? currentTime;
  const pct = duration > 0 ? Math.min(100, (displayTime / duration) * 100) : 0;

  return (
    <div
      ref={trackRef}
      className="seek-track group relative flex h-6 w-full touch-none items-center"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      role="slider"
      tabIndex={0}
      aria-label="Seek"
      aria-valuemin={0}
      aria-valuemax={Math.round(duration)}
      aria-valuenow={Math.round(displayTime)}
    >
      <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/15">
        <div
          className={`h-full rounded-full bg-gradient-to-r from-saffron via-sunset-gold to-saffron shadow-[0_0_10px_rgba(255,184,0,0.65)] ${
            isPlaying ? "seek-fill-playing" : ""
          }`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <div
        className="seek-thumb pointer-events-none absolute h-3 w-3 -translate-x-1/2 rounded-full bg-sunset-gold shadow-[0_0_8px_rgba(255,184,0,0.9)]"
        style={{ left: `${pct}%` }}
      />
    </div>
  );
}

function TimeDisplay({ elapsed, duration }: { elapsed: number; duration: number }) {
  return (
    <span className="shrink-0 text-[10.5px] tabular-nums text-white/60">
      <span className="text-sunset-gold">{formatTime(elapsed)}</span>
      <span className="mx-0.5">/</span>
      {formatTime(duration)}
    </span>
  );
}

function PrevIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6 5a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1Zm13.2.2a1 1 0 0 1 .8.98v11.64a1 1 0 0 1-1.54.84L9.3 12.84a1 1 0 0 1 0-1.68l9.16-5.82a1 1 0 0 1 .74-.14Z" />
    </svg>
  );
}
function NextIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 5a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1ZM4.8 5.2a1 1 0 0 1 .74.14l9.16 5.82a1 1 0 0 1 0 1.68l-9.16 5.82a1 1 0 0 1-1.54-.84V6.18a1 1 0 0 1 .8-.98Z" />
    </svg>
  );
}
function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5.14v13.72a1 1 0 0 0 1.53.85l10.86-6.86a1 1 0 0 0 0-1.7L9.53 4.29A1 1 0 0 0 8 5.14Z" />
    </svg>
  );
}
function PauseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7 5a1.5 1.5 0 0 0-1.5 1.5v11a1.5 1.5 0 0 0 3 0v-11A1.5 1.5 0 0 0 7 5Zm10 0a1.5 1.5 0 0 0-1.5 1.5v11a1.5 1.5 0 0 0 3 0v-11A1.5 1.5 0 0 0 17 5Z" />
    </svg>
  );
}

function TransportControls({
  isPlaying,
  onPrev,
  onPlayPause,
  onNext,
}: {
  isPlaying: boolean;
  onPrev: () => void;
  onPlayPause: () => void;
  onNext: () => void;
}) {
  const [ripples, setRipples] = useState<number[]>([]);
  const rippleId = useRef(0);

  const handlePlayPause = () => {
    const id = ++rippleId.current;
    setRipples((prev) => [...prev, id]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r !== id)), 700);
    onPlayPause();
  };

  return (
    <div className="flex items-center justify-center gap-2 sm:justify-end sm:gap-1.5">
      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous track"
        className="flex h-11 w-11 items-center justify-center rounded-full text-white/70 transition-colors hover:text-sunset-gold sm:h-8 sm:w-8"
      >
        <PrevIcon />
      </button>
      <button
        type="button"
        onClick={handlePlayPause}
        aria-label={isPlaying ? "Pause" : "Play"}
        className="relative flex h-[52px] w-[52px] items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-amber-500 to-rose-600 text-white shadow-[0_0_25px_rgba(255,119,0,0.5)] ring-1 ring-amber-200/40 transition-transform active:scale-95 sm:h-11 sm:w-11"
      >
        {ripples.map((id) => (
          <span key={id} className="play-ripple" />
        ))}
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>
      <button
        type="button"
        onClick={onNext}
        aria-label="Next track"
        className="flex h-11 w-11 items-center justify-center rounded-full text-white/70 transition-colors hover:text-sunset-gold sm:h-8 sm:w-8"
      >
        <NextIcon />
      </button>
    </div>
  );
}

function PlaylistTabs({
  activeIndex,
  onSelect,
}: {
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="no-scrollbar max-w-full overflow-x-auto">
      <div className="flex w-max gap-1 rounded-full border border-amber-500/20 bg-black/40 p-1 backdrop-blur-xl">
        {PLAYLISTS.map((playlist, i) => {
          const disabled = playlist.tracks.length === 0;
          return (
            <button
              key={playlist.id}
              type="button"
              onClick={() => !disabled && onSelect(i)}
              disabled={disabled}
              aria-pressed={i === activeIndex}
              aria-disabled={disabled}
              className={`rounded-full px-2.5 py-1 text-center text-[10px] font-medium tracking-wide whitespace-nowrap transition-colors sm:text-[11px] ${
                disabled
                  ? "cursor-not-allowed text-white/30"
                  : i === activeIndex
                    ? "bg-gradient-to-r from-saffron to-vermillion text-white shadow-[0_0_12px_rgba(255,119,0,0.5)]"
                    : "text-white/60 hover:text-white/85"
              }`}
            >
              {playlist.name}
              {playlist.comingSoon && (
                <span className="ml-1 text-[8px] tracking-wider text-white/25 uppercase sm:text-[9px]">
                  Soon
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------- */

export default function Player() {
  const [playlistIndex, setPlaylistIndex] = useState(0);
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(PLAYLISTS[0].tracks[0].duration);

  const videoContainerRef = useRef<HTMLDivElement>(null);
  const ytPlayerRef = useRef<YTPlayer | null>(null);
  const playlistIndexRef = useRef(playlistIndex);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    playlistIndexRef.current = playlistIndex;
  }, [playlistIndex]);

  const currentTrack = PLAYLISTS[playlistIndex].tracks[trackIndex];

  const handleNext = useCallback(() => {
    setTrackIndex((prev) => {
      const len = PLAYLISTS[playlistIndexRef.current].tracks.length;
      return (prev + 1) % len;
    });
  }, []);

  const handlePrev = useCallback(() => {
    const p = ytPlayerRef.current;
    if (p && p.getCurrentTime() > 3) {
      p.seekTo(0, true);
      setCurrentTime(0);
      return;
    }
    setTrackIndex((prev) => {
      const len = PLAYLISTS[playlistIndexRef.current].tracks.length;
      return (prev - 1 + len) % len;
    });
  }, []);

  const handleReady = useCallback((event: { target: YTPlayer }) => {
    ytPlayerRef.current = event.target;
    setPlayerReady(true);
    const d = event.target.getDuration();
    if (Number.isFinite(d) && d > 0) setDuration(d);
  }, []);

  const handleStateChange = useCallback(
    (event: { data: number }) => {
      if (event.data === YT_PLAYER_STATE.PLAYING) {
        setIsPlaying(true);
        const d = ytPlayerRef.current?.getDuration();
        if (d && Number.isFinite(d) && d > 0) setDuration(d);
      } else if (event.data === YT_PLAYER_STATE.PAUSED) {
        setIsPlaying(false);
      } else if (event.data === YT_PLAYER_STATE.ENDED) {
        handleNext();
      }
    },
    [handleNext],
  );

  const handleErrorEvent = useCallback(
    (event: { data: number }) => {
      track("chhath_player_video_error", { code: event.data });
      handleNext();
    },
    [handleNext],
  );

  // Create the YT.Player exactly once. Track/playlist switches below use
  // loadVideoById on this same instance instead of recreating it.
  useEffect(() => {
    let cancelled = false;
    loadYouTubeIframeAPI().then((YT) => {
      if (cancelled || !videoContainerRef.current) return;
      ytPlayerRef.current = new YT.Player(videoContainerRef.current, {
        videoId: PLAYLISTS[0].tracks[0].videoId,
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          fs: 0,
          iv_load_policy: 3,
        },
        events: {
          onReady: handleReady,
          onStateChange: handleStateChange,
          onError: handleErrorEvent,
        },
      });
    });
    return () => {
      cancelled = true;
      ytPlayerRef.current?.destroy();
      ytPlayerRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!playerReady || !ytPlayerRef.current) return;
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    ytPlayerRef.current.loadVideoById(currentTrack.videoId);
    setCurrentTime(0);
    setDuration(currentTrack.duration);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTrack.id, playerReady]);

  useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(() => {
      const p = ytPlayerRef.current;
      if (p) setCurrentTime(p.getCurrentTime());
    }, 250);
    return () => clearInterval(id);
  }, [isPlaying]);

  const handlePlayPause = () => {
    const p = ytPlayerRef.current;
    if (!p) return;
    if (isPlaying) p.pauseVideo();
    else p.playVideo();
  };

  const handleSeek = (time: number) => {
    ytPlayerRef.current?.seekTo(time, true);
    setCurrentTime(time);
  };

  const handlePlaylistSelect = (index: number) => {
    if (PLAYLISTS[index].tracks.length === 0) return;
    setPlaylistIndex(index);
    setTrackIndex(0);
  };

  return (
    <div className="safe-pb relative z-20 flex w-full max-w-xl flex-col items-center gap-3 px-4">
      <PlaylistTabs activeIndex={playlistIndex} onSelect={handlePlaylistSelect} />

      <div
        className={`player-grid w-full rounded-[26px] p-4 sm:rounded-full sm:p-3 sm:pr-5 ${GLASS}`}
      >
        <div className="area-art">
          <VinylArt videoContainerRef={videoContainerRef} isPlaying={isPlaying} />
        </div>

        <div key={currentTrack.id} className="area-title track-fade flex flex-col justify-center">
          <TrackInfo track={currentTrack} />
        </div>

        <div className="area-seek flex items-center">
          <SeekBar
            currentTime={currentTime}
            duration={duration}
            onSeek={handleSeek}
            isPlaying={isPlaying}
          />
        </div>

        <div className="area-meta flex items-center justify-start sm:justify-start">
          <TimeDisplay elapsed={currentTime} duration={duration} />
        </div>

        <div className="area-controls flex items-center">
          <TransportControls
            isPlaying={isPlaying}
            onPrev={handlePrev}
            onPlayPause={handlePlayPause}
            onNext={handleNext}
          />
        </div>
      </div>
    </div>
  );
}
