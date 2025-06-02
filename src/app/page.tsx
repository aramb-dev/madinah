'use client';

import Link from 'next/link';
import { booksData as allBooksData } from '@/data/books';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


export default function HomePage() {
  return (
    <div dir="rtl" className="container mx-auto px-4 py-8 font-arabic">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-green-700 mb-4">قواعد اللغة العربية التفاعلية</h1>
        <h2 className="text-2xl text-green-600 mb-2">Interactive Arabic Grammar Rules</h2>
        <p className="text-lg text-gray-600 mb-4">مرحباً بك في تطبيق قواعد اللغة العربية التفاعلية. اختر الكتاب الذي تريد دراسته من سلسلة كتب المدينة لتعليم اللغة العربية</p>
        <p className="text-md text-gray-500">Welcome to the Interactive Arabic Grammar Rules application. Choose the book you want to study from the Madinah Arabic learning series</p>
      </header>

      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {allBooksData.map((book) => {
            const isAvailable = book.lessons.length > 0;
            return (
              <Card key={book.id} className={`flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 ${isAvailable ? 'bg-white border-green-200' : 'bg-gray-50 border-gray-200'}`}>
                <CardHeader className="text-center">
                  <CardTitle className="text-green-700 text-2xl mb-2">{book.title.ar}</CardTitle>
                  <CardDescription className="text-gray-600 text-lg">{book.title.en}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow text-center px-6">
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">{book.description.arabic}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{book.description.english}</p>
                </CardContent>
                <CardFooter className="pt-4">
                  {isAvailable ? (
                    <Link href={`/books/${book.id}`} className="w-full">
                      <Button variant="default" className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg">
                        ابدأ التعلم / Start Learning
                      </Button>
                    </Link>
                  ) : (
                    <Button disabled className="w-full bg-gray-300 text-gray-500 py-3 text-lg cursor-not-allowed">
                      قريباً / Coming Soon
                    </Button>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="text-center bg-green-50 p-8 rounded-lg">
        <p className="text-gray-700 text-lg mb-2">هذا التطبيق يقدم شرحاً تفاعلياً لقواعد اللغة العربية المستخرجة من سلسلة كتب المدينة لتعليم اللغة العربية لغير الناطقين بها</p>
        <p className="text-gray-600">This application provides an interactive explanation of Arabic grammar rules extracted from the Madinah Arabic learning series for non-native speakers</p>
      </section>

    </div>
  );
}
