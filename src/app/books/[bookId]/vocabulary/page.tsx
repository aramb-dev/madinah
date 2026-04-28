import { getVocabByBookId, getAllBookIds } from '@/data/vocab';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import Header from '@/components/layout/Header';
import { getBookById } from '@/data/books';

export async function generateStaticParams() {
  const bookIds = getAllBookIds();
  return bookIds.map((bookId) => ({
    bookId,
  }));
}

export default async function BookVocabularyPage({
  params,
}: {
  params: Promise<{ bookId: string }>;
}) {
  const { bookId } = await params;
  const vocabData = getVocabByBookId(bookId);
  const bookDetails = getBookById(bookId);

  if (!(vocabData && bookDetails)) {
    return <div className="container mx-auto p-4 text-center text-red-500">Book not found</div>;
  }

  return (
    <>
      <Header book={bookDetails} />
      <main className="container mx-auto p-4">
        <h1 className="mb-2 text-center font-bold text-3xl">{vocabData.title.en} Vocabulary</h1>
        <p className="mb-6 text-center text-gray-600">
          Explore vocabulary lists for each lesson in {vocabData.title.en}.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {vocabData.vocabularyLists?.map((lesson) => (
            <Link
              key={lesson.lessonId}
              href={`/books/${bookId}/lessons/${lesson.lessonId}/vocabulary`}
            >
              <Card className="h-full transition-shadow duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="font-semibold text-xl">Lesson {lesson.lessonId}</CardTitle>
                  <CardDescription>{lesson.title.en}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">Click to view vocabulary for this lesson.</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}