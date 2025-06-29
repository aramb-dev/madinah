import { getVocabByBookId } from '@/data/vocab';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function BookVocabularyPage({
  params,
}: {
  params: { bookId: string };
}) {
  const { bookId } = params;
  const book = getVocabByBookId(bookId);

  if (!book) {
    return <div className="container mx-auto p-4 text-center text-red-500">Book not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center mb-2">{book.title.en} Vocabulary</CardTitle>
          <CardDescription className="text-center text-gray-600">
            Explore vocabulary lists for each lesson in {book.title.en}.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {book.vocabularyLists?.map((lesson) => (
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
    </div>
  );
}