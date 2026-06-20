import type { MetadataRoute } from "next";
import { booksData } from "@/data/books";
import { getAllBookIds } from "@/data/vocab";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://madinah.aramb.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/books`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/vocabulary`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/docs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${siteUrl}/changelog`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const bookRoutes = booksData.map((book) => ({
    url: `${siteUrl}/books/${book.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const lessonRoutes = booksData.flatMap((book) =>
    book.lessons.map((lesson) => ({
      url: `${siteUrl}/books/${book.id}/lessons/${lesson.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    }))
  );

  const vocabBookIds = getAllBookIds();
  const vocabularyRoutes = vocabBookIds.map((bookId) => ({
    url: `${siteUrl}/books/${bookId}/vocabulary`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const lessonVocabRoutes = vocabBookIds.flatMap((bookId) => {
    const book = booksData.find((b) => b.id === bookId);
    if (!book) {
      return [];
    }
    return book.lessons.map((lesson) => ({
      url: `${siteUrl}/books/${bookId}/lessons/${lesson.id}/vocabulary`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }));
  });

  return [
    ...staticRoutes,
    ...bookRoutes,
    ...lessonRoutes,
    ...vocabularyRoutes,
    ...lessonVocabRoutes,
  ];
}
