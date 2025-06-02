'use client';

import Link from 'next/link';
import { booksData as allBooksData } from '@/data/books'; // Corrected import
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


export default function HomePage() {
  // For now, let's assume we are always working with the first book for the home page structure
  // Or, if the design implies a selection or overview of multiple books, that would be different.
  // Based on the OCR, it seems to focus on "Madinah Book 1".
  const book = allBooksData.find(b => b.id === 'book1'); // Or dynamically select/list books

  if (!book) {
    return <div className="container mx-auto px-4 py-8 text-center">Book not found.</div>;
  }

  return (
    <div dir="rtl" className="container mx-auto px-4 py-8 font-arabic">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-green-700 mb-2">قواعد اللغة العربية التفاعلية</h1>
        <p className="text-xl text-gray-600">شرح كتاب دروس اللغة العربية لغير الناطقين بها - الجزء الأول</p>
      </header>

      <section className="mb-12 bg-green-50 p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-semibold text-green-800">{book.title.ar}</h2>
          <span className="text-lg text-gray-700">{book.title.en}</span>
        </div>
        <p className="text-md text-gray-700 leading-relaxed">{book.description.arabic}</p>
        <p className="text-md text-gray-600 leading-relaxed mt-2">{book.description.english}</p>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-center mb-8 text-green-700">فهرس الدروس</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {book.lessons.map((lesson) => (
            <Card key={lesson.id} className="flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardHeader>
                <CardTitle className="text-green-700 text-xl">{lesson.title.ar}</CardTitle>
                <CardDescription className="text-gray-500 text-sm">{lesson.title.en}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-700 text-sm leading-relaxed">{lesson.introduction.arabic}</p>
                <p className="text-gray-600 text-xs mt-1 leading-relaxed">{lesson.introduction.english}</p>
              </CardContent>
              <CardFooter>
                <Link href={`/books/${book.id}/lesson/${lesson.id}`} passHref className="w-full">
                  <Button variant="default" className="w-full bg-green-600 hover:bg-green-700 text-white">
                    عرض الدرس
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Placeholder for Font Selector and Zoom, if needed based on full design */}
      {/* <div className="fixed bottom-4 right-4 p-4 bg-white shadow-lg rounded-lg"> */}
      {/*   Font controls here */}
      {/* </div> */}

    </div>
  );
}
