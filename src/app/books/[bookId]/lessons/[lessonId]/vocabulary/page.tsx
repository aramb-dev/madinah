import { getVocabByBookId, getAllBookIds } from '@/data/vocab';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import { getBookById } from '@/data/books';
import VocabularyList from '@/components/custom/VocabularyList';

interface LessonVocabularyPageProps {
  params: {
    bookId: string;
    lessonId: string;
  };
}

export async function generateStaticParams() {
  const bookIds = getAllBookIds();
  const params = bookIds.flatMap((bookId) => {
    const book = getVocabByBookId(bookId);
    if (!book?.vocabularyLists) {
      return [];
    }
    return book.vocabularyLists
      .filter((lesson) => lesson.lessonId)
      .map((lesson) => ({
        bookId,
        lessonId: lesson.lessonId!.toString(),
      }));
  });

  return params;
}

export default async function LessonVocabularyPage({
  params,
}: LessonVocabularyPageProps) {
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