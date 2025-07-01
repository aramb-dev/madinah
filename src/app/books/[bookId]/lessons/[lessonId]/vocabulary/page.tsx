"use client";

import { getVocabByBookId } from '@/data/vocab';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import { getBookById } from '@/data/books';
import VocabularyList from '@/components/custom/VocabularyList';
import { PageProps } from '@/types/page';

export default function LessonVocabularyPage({
  params,
}: PageProps<{ bookId: string; lessonId: string }>) {
  const { bookId, lessonId } = params;
  const book = getVocabByBookId(bookId);
  const bookDetails = getBookById(bookId);

  const lesson = book?.vocabularyLists?.find(
    (l) => l.lessonId?.toString() === lessonId,
  );

  if (!lesson || !bookDetails) {
    notFound();
  }

  if (!book) {
    return null;
  }

  return (
    <>
      <Header book={bookDetails} />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-4">
          {book.title.en} - Lesson {lesson.lessonId} Vocabulary
        </h1>
        <p className="text-center text-gray-600 mb-6">{lesson.title.en}</p>
        <VocabularyList items={lesson.items} />
      </main>
    </>
  );
}