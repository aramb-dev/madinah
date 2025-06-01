'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Header from '@/components/layout/Header';

interface Book {
  id: string;
  title: string;
  englishTitle: string;
  description: {
    arabic: string;
    english: string;
  };
  available: boolean;
  comingSoon?: boolean;
}

const booksData: Book[] = [
  {
    id: 'book1',
    title: 'كتاب المدينة الأول',
    englishTitle: 'Madinah Book 1',
    description: {
      arabic: 'الكتاب الأول من سلسلة تعليم اللغة العربية لغير الناطقين بها - المستوى المبتدئ',
      english: 'The first book in the Arabic language learning series for non-native speakers - Beginner level'
    },
    available: true
  },
  {
    id: 'book2',
    title: 'كتاب المدينة الثاني',
    englishTitle: 'Madinah Book 2',
    description: {
      arabic: 'الكتاب الثاني من سلسلة تعليم اللغة العربية لغير الناطقين بها - المستوى المتوسط',
      english: 'The second book in the Arabic language learning series for non-native speakers - Intermediate level'
    },
    available: false,
    comingSoon: true
  },
  {
    id: 'book3',
    title: 'كتاب المدينة الثالث',
    englishTitle: 'Madinah Book 3',
    description: {
      arabic: 'الكتاب الثالث من سلسلة تعليم اللغة العربية لغير الناطقين بها - المستوى المتقدم',
      english: 'The third book in the Arabic language learning series for non-native speakers - Advanced level'
    },
    available: false,
    comingSoon: true
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFAF0]">
      <Header />
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
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-12 text-center">
          <Card className="border-amber-200 bg-amber-50">
            <CardContent className="pt-6">
              <p className="text-sm text-amber-800 font-arabic mb-2">
                هذا التطبيق يقدم شرحاً تفاعلياً لقواعد اللغة العربية المستخرجة من سلسلة كتب المدينة لتعليم اللغة العربية لغير الناطقين بها.
              </p>
              <p className="text-sm text-amber-700">
                This application provides an interactive explanation of Arabic grammar rules extracted from the Madinah Arabic learning series for non-native speakers.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
