'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Layout from '@/components/layout/Layout';
import Header from '@/components/layout/Header';
import { getBookById } from '@/data/books';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function BookPage() {
  const params = useParams();
  const router = useRouter();
  const bookId = params.bookId as string;

  const [book, setBook] = useState<{
    id: string;
    title: { ar: string; en: string };
    description?: {
      arabic: string;
      english: string;
    };
    lessons: Array<{
      id: string;
      title: { ar: string; en: string };
      introduction: {
        arabic: string;
        english: string;
      };
    }>;
  } | null>(null);

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
      <Header />
      {book && (
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2 font-arabic">{book.title.ar}</h1>
            <h2 className="text-xl text-gray-600">{book.title.en}</h2>
            {book.description && (
              <div className="mt-4 max-w-2xl mx-auto">
                <p className="text-right font-arabic mb-2">{book.description.arabic}</p>
                <p>{book.description.english}</p>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => handleLessonClick(lesson.id)}
                >
                  <CardHeader>
                    <CardTitle className="font-arabic text-right">{lesson.title.ar}</CardTitle>
                    <CardDescription>{lesson.title.en}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-right font-arabic mb-2 line-clamp-2">
                      {lesson.introduction.arabic.substring(0, 100)}...
                    </p>
                    <p className="line-clamp-2">
                      {lesson.introduction.english.substring(0, 100)}...
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
