import { getAvailableBooks } from '@/data/books';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import Header from '@/components/layout/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function VocabularyPage() {
  const books = getAvailableBooks();

  return (
    <Layout>
      <Header title="Vocabulary by Book" homeUrl="/" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <Link key={book.id} href={`/books/${book.id}/vocabulary`} passHref>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <CardTitle className="font-arabic text-right">{book.title.ar}</CardTitle>
                  <CardDescription>{book.title.en}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-right font-arabic mb-2 line-clamp-3 text-lg leading-relaxed">
                    {book.description.arabic}
                  </p>
                  <p className="line-clamp-3 text-sm text-gray-600">{book.description.english}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}