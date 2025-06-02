'use client';

import Link from 'next/link';
import { booksData } from '@/data/books'; // Import booksData
import type { Book } from '@/data/lessons'; // Import Book type

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FFFAF0] flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-700 mb-4 font-arabic">
            قواعد اللغة العربية التفاعلية
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-emerald-600 mb-6">
            Interactive Arabic Grammar Rules
          </h2>
          <p className="text-lg text-neutral-700 mb-4 font-arabic leading-relaxed">
            مرحباً بك في تطبيق قواعد اللغة العربية التفاعلية. اختر الكتاب الذي تريد دراسته من سلسلة كتب المدينة لتعليم اللغة العربية.
          </p>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Welcome to the Interactive Arabic Grammar Rules application. Choose the book you want to study from the Madinah Arabic learning series.
          </p>
        </div>

        {/* Books Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {booksData.map((book) => (
            <Card
              key={book.id}
              className={`border-2 transition-all duration-300 hover:shadow-lg ${
                book.available
                  ? 'border-emerald-200 hover:border-emerald-300 bg-white'
                  : 'border-gray-200 bg-gray-50 opacity-75'
              }`}
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-emerald-700 font-arabic text-center">
                  {book.title}
                </CardTitle>
                <p className="text-lg font-semibold text-emerald-600 text-center">
                  {book.englishTitle}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <p className="text-sm text-neutral-700 font-arabic leading-relaxed">
                    {book.description.arabic}
                  </p>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {book.description.english}
                  </p>
                </div>

                <div className="pt-4">
                  {book.available ? (
                    <Link href={`/books/${book.id}`} className="block">
                      <Button
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                      >
                        <span className="font-arabic ml-2">ابدأ الدراسة</span>
                        <span>Start Learning</span>
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      disabled
                      className="w-full bg-gray-300 text-gray-500 font-medium py-2 px-4 rounded-lg cursor-not-allowed"
                    >
                      {book.comingSoon ? (
                        <>
                          <span className="font-arabic ml-2">قريباً</span>
                          <span>Coming Soon</span>
                        </>
                      ) : (
                        <>
                          <span className="font-arabic ml-2">غير متاح</span>
                          <span>Not Available</span>
                        </>
                      )}
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
