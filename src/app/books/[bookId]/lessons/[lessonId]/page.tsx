'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Layout from '@/components/layout/Layout';
import Header from '@/components/layout/Header';
import LessonContent from '@/components/custom/LessonContent';
import { getBookById, getLessonById } from '@/data/books';
import { Book, Lesson } from '@/data/lessons';

export default function LessonPage() {
  const router = useRouter();
  const params = useParams();
  const bookId = params.bookId as string;
  const lessonId = params.lessonId as string;

  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    const foundBook = getBookById(bookId);
    const lesson = getLessonById(bookId, lessonId);

    if (foundBook) {
      setBook(foundBook);
    }

    if (lesson) {
      setSelectedLesson(lesson);
    } else {
      // Handle lesson not found, redirect to book page
      router.push(`/books/${bookId}`);
    }
  }, [bookId, lessonId, router]);

  return (
    <Layout currentBookId={bookId}>
      <Header book={book || undefined} homeUrl={`/books/${bookId}`} />
      <LessonContent lesson={selectedLesson || undefined} />
    </Layout>
  );
}
