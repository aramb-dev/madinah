import { getAvailableBooks } from '@/data/books';
import Link from 'next/link';

export default function VocabularyPage() {
  const books = getAvailableBooks();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Vocabulary by Book</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map((book) => (
          <Link
            key={book.id}
            href={`/books/${book.id}/vocabulary`}
            className="p-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <h2 className="text-xl font-semibold">{book.title.en}</h2>
            <p>{book.description.english}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}