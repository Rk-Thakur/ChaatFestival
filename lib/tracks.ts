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
};

export const PLAYLISTS: Playlist[] = [
  {
    id: "sandhya-arghya-classics",
    name: "Sandhya Arghya Classics",
    tracks: [
      {
        id: "sa-1",
        title: "Suruj Bhaile Bihaan",
        artist: "Sharda Sinha",
        phase: "Sandhya Arghya",
        year: 2019,
        duration: 300,
        videoId: "u2rkSu5LYbk",
      },
      {
        id: "sa-2",
        title: "Chhath Pooja Geet Special",
        artist: "Sharda Sinha",
        phase: "Sandhya Arghya",
        year: 2020,
        duration: 280,
        videoId: "B4WSHkT6moc",
      },
      {
        id: "sa-3",
        title: "Chhath Geet",
        artist: "Sharda Sinha",
        phase: "Sandhya Arghya",
        year: 2018,
        duration: 260,
        videoId: "cC4ORxmpUDQ",
      },
    ],
  },
  {
    id: "morning-usha-arghya",
    name: "Morning Usha Arghya",
    tracks: [
      {
        id: "ua-1",
        title: "Uga Hai Suraj Dev",
        artist: "Anuradha Paudwal",
        phase: "Usha Arghya",
        year: 2017,
        duration: 270,
        videoId: "6e6Hp6R5SVU",
      },
      {
        id: "ua-2",
        title: "Chhath Pooja Ke Geet",
        artist: "Anuradha Paudwal, Sharda Sinha",
        phase: "Usha Arghya",
        year: 2019,
        duration: 290,
        videoId: "CGQ-3EFVZfA",
      },
      {
        id: "ua-3",
        title: "Non Stop Chhath Pooja Geet",
        artist: "Sharda Sinha, Anuradha Paudwal",
        phase: "Usha Arghya",
        year: 2021,
        duration: 310,
        videoId: "GMQGZjFn6-4",
      },
    ],
  },
  {
    id: "nostalgic-folk-memories",
    name: "Nostalgic Folk Memories",
    tracks: [
      {
        id: "vf-1",
        title: "Pahile Pahil Chhathi Maiya",
        artist: "Sharda Sinha",
        phase: "Village Folk",
        year: 2016,
        duration: 240,
        videoId: "DG8F-csoRAQ",
      },
      {
        id: "vf-2",
        title: "Top Chhath Pooja Geet",
        artist: "Sharda Sinha, Anuradha Paudwal",
        phase: "Village Folk",
        year: 2020,
        duration: 300,
        videoId: "XE3Xw21GFPI",
      },
      {
        id: "vf-3",
        title: "Chhathi Maiya Chhath Pooja Geet",
        artist: "Sharda Sinha",
        phase: "Village Folk",
        year: 2018,
        duration: 260,
        videoId: "BsAFCc901MM",
      },
    ],
  },
];
