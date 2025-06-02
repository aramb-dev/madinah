import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { booksData } from '@/data/books';

export default function BooksPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Select a Madinah Book</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {booksData.map((book) => (
          <Link key={book.id} href={`/books/${book.id}/lessons/${book.lessons[0].id}`}>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>{book.title}</CardTitle>
                <CardDescription>
                  <p className="text-right font-arabic">{book.description.arabic}</p>
                  <p className="text-sm text-gray-500">{book.description.english}</p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Lessons: {book.lessons.length}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}