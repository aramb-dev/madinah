import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import Header from "@/components/layout/Header";
import LessonContent from "@/components/custom/LessonContent";
import { getBookById, getLessonById } from "@/data/books";
import { booksData } from "@/data/books";

interface PageProps {
  params: Promise<{ bookId: string; lessonId: string }>;
}

// Map lesson IDs to their corresponding image filenames (legacy book1 share images)
function getLessonImageFilename(lessonId: string): string {
  const imageMap: Record<string, string> = {
    lesson1: "L1.png",
    lesson2: "L2.png",
    lesson3: "L3.png",
    lesson4: "L4.png",
    lesson5: "L5.png",
    lesson6: "L6.png",
    lesson7: "L7.png",
    lesson8: "L8.png",
    lesson9: "L9.png",
    lesson10: "L10.png",
    lesson11: "L11.png",
    lesson12: "L12.png",
    lesson13: "L13.png",
    lesson14: "L14.png",
    lesson15: "L15.png",
    lesson16_17: "L16-17.png",
    lesson18: "L18.png",
    lesson19_20: "L19-20.png",
    lesson21: "L21.png",
    lesson22_23: "L22-23.png",
  };

  return imageMap[lessonId] || "home.png";
}

export async function generateStaticParams() {
  return booksData.flatMap((book) =>
    book.lessons.map((lesson) => ({
      bookId: book.id,
      lessonId: lesson.id,
    }))
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { bookId, lessonId } = await params;
  const book = getBookById(bookId);
  const lesson = getLessonById(bookId, lessonId);

  if (!(book && lesson)) {
    return {
      title: "المصادر المعينة على فهم كتب المدينة",
      description: "Madinah Book Resources - Explanation of Madinah Books",
    };
  }

  const imageFilename = getLessonImageFilename(lessonId);
  const socialShareImage = `/images/social-share/${imageFilename}`;
  const title = `${lesson.title.ar} - ${lesson.title.en} | ${book.title.ar}`;
  const description = lesson.introduction.english;

  return {
    title,
    description,
    alternates: {
      canonical: `/books/${bookId}/lessons/${lessonId}`,
    },
    openGraph: {
      title,
      description,
      url: `/books/${bookId}/lessons/${lessonId}`,
      type: "article",
      images: [socialShareImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialShareImage],
    },
  };
}

export default async function LessonPage({ params }: PageProps) {
  const { bookId, lessonId } = await params;
  const book = getBookById(bookId);
  const lesson = getLessonById(bookId, lessonId);

  if (!(book && lesson)) {
    notFound();
  }

  return (
    <Layout currentBookId={bookId}>
      <Header book={book} homeUrl={`/books/${bookId}`} />
      <LessonContent lesson={lesson} />
    </Layout>
  );
}
