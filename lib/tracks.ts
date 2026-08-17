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
      {
        id: "ss-4",
        title: "Pahile Pahil Chhathi Maiya",
        artist: "Sharda Sinha",
        phase: "Village Folk",
        year: 2016,
        duration: 240,
        videoId: "DG8F-csoRAQ",
      },
      {
        id: "ss-5",
        title: "Suruj Bhaile Bihaan (Jukebox)",
        artist: "Sharda Sinha",
        phase: "Sandhya Arghya",
        year: 2019,
        duration: 1800,
        videoId: "u2rkSu5LYbk",
      },
      {
        id: "ss-6",
        title: "Bhojpuri Chhath Pooja Songs (Jukebox)",
        artist: "Sharda Sinha",
        phase: "Usha Arghya",
        year: 2018,
        duration: 1800,
        videoId: "6DePUrUWtmE",
      },
      {
        id: "ss-7",
        title: "Best of Sharda Sinha — Chhath Jukebox 2015",
        artist: "Sharda Sinha",
        phase: "Sandhya Arghya",
        year: 2015,
        duration: 1800,
        videoId: "gh6cssL0dr8",
      },
      {
        id: "ss-8",
        title: "Traditional Chhath Puja Geet Sangrah (Jukebox)",
        artist: "Sharda Sinha",
        phase: "Village Folk",
        year: 2020,
        duration: 1800,
        videoId: "ipA98YjzA7I",
      },
      {
        id: "ss-9",
        title: "Sharda Sinha's Last Chhath Song",
        artist: "Sharda Sinha",
        phase: "Sandhya Arghya",
        year: 2024,
        duration: 280,
        videoId: "b9Er-PivADE",
      },
    ],
  },
  {
    id: "anuradha-paudwal",
    name: "Anuradha Paudwal",
    tracks: [
      {
        id: "ap-2",
        title: "Kaanch Hi Baans Ke Bahangiya",
        artist: "Anuradha Paudwal",
        phase: "Village Folk",
        year: 2019,
        duration: 300,
        videoId: "Eyq7vfxu4iA",
      },
      {
        id: "ap-3",
        title: "Uga Hai Suraj Dev",
        artist: "Anuradha Paudwal",
        phase: "Usha Arghya",
        year: 2017,
        duration: 270,
        videoId: "6e6Hp6R5SVU",
      },
      {
        id: "ap-4",
        title: "Chhath Pooja Ke Geet",
        artist: "Anuradha Paudwal, Sharda Sinha, Kavita Paudwal",
        phase: "Sandhya Arghya",
        year: 2019,
        duration: 290,
        videoId: "CGQ-3EFVZfA",
      },
      {
        id: "ap-5",
        title: "Chhath Pooja Ke Geet (Jukebox)",
        artist: "Anuradha Paudwal, Kavita Paudwal",
        phase: "Usha Arghya",
        year: 2018,
        duration: 1800,
        videoId: "3xE8-cSXO8E",
      },
      {
        id: "ap-6",
        title: "Best of Anuradha Paudwal — Bhojpuri Chhath Geet (Jukebox)",
        artist: "Anuradha Paudwal",
        phase: "Village Folk",
        year: 2017,
        duration: 1800,
        videoId: "poJwkanrYAU",
      },
      {
        id: "ap-7",
        title: "Chhath Pooja Ke Geet Sangrah",
        artist: "Anuradha Paudwal, Kalpana",
        phase: "Sandhya Arghya",
        year: 2020,
        duration: 300,
        videoId: "MNPg56UEB2Q",
      },
      {
        id: "ap-8",
        title: "Chhath Pooja Special",
        artist: "Anuradha Paudwal, Sharda Sinha",
        phase: "Usha Arghya",
        year: 2021,
        duration: 300,
        videoId: "dIunnrgd3ks",
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
