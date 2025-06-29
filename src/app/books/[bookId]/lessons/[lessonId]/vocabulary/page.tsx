import { getVocabByBookId } from '@/data/vocab';
import { notFound } from 'next/navigation';

export default function LessonVocabularyPage({
  params,
}: {
  params: { bookId: string; lessonId: string };
}) {
  const { bookId, lessonId } = params;
  const book = getVocabByBookId(bookId);

  const lesson = book?.vocabularyLists?.find(
    (l) => l.lessonId?.toString() === lessonId
  );

  if (!lesson) {
    notFound();
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        {lesson.title.en}
      </h1>
      <div id="vocab" className="space-y-4">
        {lesson.items.map((item) => (
          <div key={item.id} className="p-4 border rounded-lg">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">{item.word}</h2>
              <span className="text-sm text-gray-500">{item.transliteration}</span>
            </div>
            <p className="mt-2">{item.translation.en}</p>
            <p className="mt-2 text-sm text-gray-600">{item.definition}</p>
          </div>
        ))}
      </div>
    </div>
  );
}