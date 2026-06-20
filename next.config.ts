import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => [
    {
      source: "/lessons",
      destination: "/books/book1/lessons/lesson1",
      permanent: true,
    },
    {
      source: "/lessons/:lessonId",
      destination: "/books/book1/lessons/:lessonId",
      permanent: true,
    },
  ],
};

export default nextConfig;
