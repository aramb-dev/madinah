import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { booksData } from "@/data/books";

export default function BooksPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-6 font-bold text-3xl">Select a Madinah Book</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {booksData.map((book) => (
          <Link key={book.id} href={`/books/${book.id}`}>
            <Card className="transition-shadow duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle>{book.title.ar}</CardTitle>
                <CardDescription>
                  <p className="text-right font-arabic">
                    {book.description.arabic}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {book.description.english}
                  </p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 text-sm">
                  Lessons: {book.lessons.length}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
