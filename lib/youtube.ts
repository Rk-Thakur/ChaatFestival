export type YTPlayer = {
  playVideo(): void;
  pauseVideo(): void;
  stopVideo(): void;
  seekTo(seconds: number, allowSeekAhead: boolean): void;
  getCurrentTime(): number;
  getDuration(): number;
  getPlayerState(): number;
  loadVideoById(videoId: string): void;
  cueVideoById(videoId: string): void;
  destroy(): void;
};

export const YT_PLAYER_STATE = {
  UNSTARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5,
} as const;

type YTPlayerEvent = { target: YTPlayer };
type YTPlayerStateEvent = { data: number; target: YTPlayer };
type YTPlayerErrorEvent = { data: number; target: YTPlayer };

export type YTNamespace = {
  Player: new (
    elementId: string | HTMLElement,
    options: {
      videoId?: string;
      playerVars?: Record<string, number | string>;
      events?: {
        onReady?: (event: YTPlayerEvent) => void;
        onStateChange?: (event: YTPlayerStateEvent) => void;
        onError?: (event: YTPlayerErrorEvent) => void;
      };
    },
  ) => YTPlayer;
};

declare global {
  interface Window {
    YT?: YTNamespace;
    onYouTubeIframeAPIReady?: () => void;
  }
}

let apiPromise: Promise<YTNamespace> | null = null;

/** Injects the YouTube IFrame API script once and resolves for every caller when it's ready. */
export function loadYouTubeIframeAPI(): Promise<YTNamespace> {
  if (apiPromise) return apiPromise;

  apiPromise = new Promise((resolve) => {
    if (window.YT?.Player) {
      resolve(window.YT);
      return;
    }

    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previous?.();
      resolve(window.YT as YTNamespace);
    };

    if (!document.getElementById("youtube-iframe-api")) {
      const tag = document.createElement("script");
      tag.id = "youtube-iframe-api";
      tag.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(tag);
    }
  });

  return apiPromise;
}
