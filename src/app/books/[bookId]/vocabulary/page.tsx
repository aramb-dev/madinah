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

  if (!vocabData || !bookDetails) {
    return <div className="container mx-auto p-4 text-center text-red-500">Book not found</div>;
  }

  return (
    <>
      <Header book={bookDetails} />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-2">{vocabData.title.en} Vocabulary</h1>
        <p className="text-center text-gray-600 mb-6">
          Explore vocabulary lists for each lesson in {vocabData.title.en}.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {vocabData.vocabularyLists?.map((lesson) => (
            <Link
              key={lesson.lessonId}
              href={`/books/${bookId}/lessons/${lesson.lessonId}/vocabulary`}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">Lesson {lesson.lessonId}</CardTitle>
                  <CardDescription>{lesson.title.en}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Click to view vocabulary for this lesson.</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}