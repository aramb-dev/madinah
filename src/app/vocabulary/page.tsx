import { allBooksVocab } from '@/data/vocab';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import Header from '@/components/layout/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function VocabularyPage() {
  const books = Object.values(allBooksVocab);

  return (
    <Layout>
      <Header homeUrl="/" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => {
            const isPublished = book.isPublished ?? true;
            const card = (
              <Card
                className={`h-full ${
                  isPublished
                    ? 'hover:shadow-lg transition-shadow cursor-pointer'
                    : 'opacity-50 cursor-not-allowed'
                }`}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="font-arabic text-right">{book.title.ar}</CardTitle>
                      <CardDescription>{book.title.en}</CardDescription>
                    </div>
                    {!isPublished && <Badge variant="secondary">Coming Soon</Badge>}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-right font-arabic mb-2 line-clamp-3 text-lg leading-relaxed">
                    {book.description?.ar}
                  </p>
                  <p className="line-clamp-3 text-sm text-gray-600">{book.description?.en}</p>
                </CardContent>
              </Card>
            );

            if (!isPublished) {
              return (
                <div key={book.bookId} aria-disabled="true">
                  {card}
                </div>
              );
            }

            return (
              <Link key={book.bookId} href={`/books/${book.bookId}/vocabulary`} passHref>
                {card}
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}