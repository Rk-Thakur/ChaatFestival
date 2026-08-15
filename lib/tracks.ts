export type Phase = "Sandhya Arghya" | "Usha Arghya" | "Village Folk";

export type Track = {
  id: string;
  title: string;
  artist: string;
  phase: Phase;
  year: number;
  /** Fallback duration (seconds) shown before the YouTube player reports the real one. */
  duration: number;
  videoId: string;
};

export type Playlist = {
  id: string;
  name: string;
  tracks: Track[];
  /** Reserved slot for an artist we haven't loaded tracks for yet — tab renders disabled. */
  comingSoon?: boolean;
};

export const PLAYLISTS: Playlist[] = [
  {
    id: "sharda-sinha",
    name: "Sharda Sinha",
    tracks: [
      {
        id: "ss-1",
        title: "Kelwa Ke Paat Par",
        artist: "Sharda Sinha",
        phase: "Sandhya Arghya",
        year: 2024,
        duration: 300,
        videoId: "y7hrM7PouQM",
      },
      {
        id: "ss-2",
        // Title unconfirmed — flagged to the user, do not treat as final.
        title: "Chhath Geet ",
        artist: "Sharda Sinha",
        phase: "Usha Arghya",
        year: 2023,
        duration: 280,
        videoId: "KWvgJvM2zT0",
      },
      {
        id: "ss-3",
        title: "Dukhwa Mitayin Chhathi Maiya",
        artist: "Sharda Sinha",
        phase: "Village Folk",
        year: 2024,
        duration: 260,
        videoId: "NkDiSj9c1EA",
      },
    ],
  },
  {
    id: "more-artists",
    name: "More Artists",
    tracks: [],
    comingSoon: true,
  },
];
