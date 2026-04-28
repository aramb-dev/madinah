'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Layout from '@/components/layout/Layout';
import Header from '@/components/layout/Header';
import { getBookById } from '@/data/books';
import type { Book } from '@/data/lessons';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function BookPage() {
  const params = useParams();
  const router = useRouter();
  const bookId = params.bookId as string;

  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    const foundBook = getBookById(bookId);
    if (foundBook) {
      setBook(foundBook);
    } else {
      // Book not found, redirect to home
      router.push('/');
    }
  }, [bookId, router]);

  const handleLessonClick = (lessonId: string) => {
    router.push(`/books/${bookId}/lessons/${lessonId}`);
  };

  return (
    <Layout currentBookId={bookId}>
      <Header book={book || undefined} homeUrl="/" />
      {book && (
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8 text-center">
            <h1 className="mb-2 font-arabic font-bold text-3xl">{book.title.ar}</h1>
            <h2 className="text-gray-600 text-xl">{book.title.en}</h2>
            {book.description && (
              <div className="mx-auto mt-4 max-w-2xl">
                <p className="mb-2 text-right font-arabic">{book.description.arabic}</p>
                <p>{book.description.english}</p>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {book.lessons.map(
              (lesson: {
                id: string;
                title: { ar: string; en: string };
                introduction: {
                  arabic: string;
                  english: string;
                };
              }) => (
                <Card
                  key={lesson.id}
                  className="cursor-pointer transition-shadow hover:shadow-lg"
                  onClick={() => handleLessonClick(lesson.id)}
                >
                  <CardHeader>
                    <CardTitle className="text-right font-arabic">{lesson.title.ar}</CardTitle>
                    <CardDescription>{lesson.title.en}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2 line-clamp-3 text-right font-arabic text-lg leading-relaxed">
                      {lesson.introduction.arabic.length > 180
                        ? `${lesson.introduction.arabic.slice(0, 250)}...`
                        : lesson.introduction.arabic}
                    </p>
                    <p className="line-clamp-3 text-gray-600 text-sm">
                      {lesson.introduction.english.length > 200
                        ? `${lesson.introduction.english.slice(0, 400)}...`
                        : lesson.introduction.english}
                    </p>
                    <Button
                      className="mt-4 w-full bg-emerald-600 hover:bg-emerald-700"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLessonClick(lesson.id);
                      }}
                    >
                      View Lesson
                    </Button>
                  </CardContent>
                </Card>
              )
            )}
          </div>
        </div>
      )}
    </Layout>
  );
}
