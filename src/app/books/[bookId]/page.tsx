import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import Header from "@/components/layout/Header";
import { getBookById, booksData } from "@/data/books";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface PageProps {
  params: Promise<{ bookId: string }>;
}

export async function generateStaticParams() {
  return booksData.map((book) => ({
    bookId: book.id,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { bookId } = await params;
  const book = getBookById(bookId);

  if (!book) {
    return {
      title: "المصادر المعينة على فهم كتب المدينة",
      description: "Madinah Book Resources - Explanation of Madinah Books",
    };
  }

  const title = `${book.title.ar} - ${book.title.en} | المصادر المعينة على فهم كتب المدينة`;
  const description = book.description.english;

  return {
    title,
    description,
    alternates: {
      canonical: `/books/${bookId}`,
    },
    openGraph: {
      title,
      description,
      url: `/books/${bookId}`,
      type: "website",
      images: ["/images/social-share/home.png"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/social-share/home.png"],
    },
  };
}

export default async function BookPage({ params }: PageProps) {
  const { bookId } = await params;
  const book = getBookById(bookId);

  if (!book) {
    notFound();
  }

  return (
    <Layout currentBookId={bookId}>
      <Header book={book} homeUrl="/" />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="mb-2 font-arabic font-bold text-3xl">
            {book.title.ar}
          </h1>
          <h2 className="text-gray-600 text-xl">{book.title.en}</h2>
          {book.description && (
            <div className="mx-auto mt-4 max-w-2xl">
              <p className="mb-2 text-right font-arabic">
                {book.description.arabic}
              </p>
              <p>{book.description.english}</p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {book.lessons.map((lesson) => (
            <Link
              key={lesson.id}
              href={`/books/${bookId}/lessons/${lesson.id}`}
              className="block"
            >
              <Card className="h-full cursor-pointer transition-shadow hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-right font-arabic">
                    {lesson.title.ar}
                  </CardTitle>
                  <CardDescription>{lesson.title.en}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <p className="line-clamp-3 text-right font-arabic text-lg leading-relaxed">
                    {lesson.introduction.arabic.length > 180
                      ? `${lesson.introduction.arabic.slice(0, 250)}...`
                      : lesson.introduction.arabic}
                  </p>
                  <p className="line-clamp-3 text-gray-600 text-sm">
                    {lesson.introduction.english.length > 200
                      ? `${lesson.introduction.english.slice(0, 400)}...`
                      : lesson.introduction.english}
                  </p>
                  <div className="mt-auto w-full rounded-md bg-emerald-600 px-4 py-2 text-center font-medium text-white">
                    View Lesson
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
