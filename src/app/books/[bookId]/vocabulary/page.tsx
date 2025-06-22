import { getVocabByBookId } from '@/data/vocab/books';
import Link from 'next/link';

export default function BookVocabularyPage({
  params,
}: {
  params: { bookId: string };
}) {
  const { bookId } = params;
  const book = getVocabByBookId(bookId);

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{book.title.en}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {book.vocabularyLists?.map((lesson) => (
          <Link
            key={lesson.lessonId}
            href={`/books/${bookId}/lessons/${lesson.lessonId}/vocabulary`}
            className="p-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <h2 className="text-xl font-semibold">Lesson {lesson.lessonId}</h2>
            <p>{lesson.title.en}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}