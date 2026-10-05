export interface Memory {
  images: string[]; // ab array hai, 1 ya zyada images
  caption: string;
}

export const memories: Memory[] = [
  {
    images: [
      "/images/memories/convocation.jpg",
      "/images/memories/convocation-1.jpg",
      "/images/memories/convocation-2.jpg",
    ],
    caption: "Graduation day — four years of late nights and deadlines finally paid off.",
  },
  {
    images: [
        "/images/memories/certificate.jpg",
        // "/images/memories/session-2.jpg",
        // "/images/memories/session-3.jpg",
        // "/images/memories/session-4.jpg",
    ],
    caption: "A project session with my batchmates — this is where I first fell in love with building things.",
  },
];