'use client';

import Link from 'next/link';
import { booksData } from '@/data/books'; // Import booksData
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Added imports
import { Button } from '@/components/ui/button'; // Added import
import FontSelector from '@/components/custom/FontSelector'; // Import FontSelector
import FontScaler from '@/components/custom/FontScaler'; // Import FontScaler

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FFFAF0] flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-700 mb-4 font-arabic">
            المصادر المعينة على فهم كتب المدينة
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-emerald-600 mb-6">
            Madinah Book Resources
          </h2>
          <p className="text-lg text-neutral-700 mb-4 font-arabic leading-relaxed">
            مرحباً بك في المصادر المعينة على فهم كتب المدينة. اختر الكتاب الذي تريد دراسته من سلسلة
            كتب المدينة لتعليم اللغة العربية.
          </p>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Welcome to Madinah Book Resources. Choose the book you want to study from the Madinah
            Arabic learning series.
          </p>
        </div>

        {/* Display Options Section */}
        <div className="mb-8 p-4 bg-white shadow-md rounded-lg flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <FontSelector />
          <FontScaler />
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
                  {book.title.ar}
                </CardTitle>
                <p className="text-lg font-semibold text-emerald-600 text-center">
                  {book.title.en}
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
                      <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                        <span className="font-arabic ml-2">ابدأ الدراسة</span>
                        <span>Start Learning</span>
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      disabled
                      className="w-full bg-gray-300 text-gray-500 font-medium py-2 px-4 rounded-lg cursor-not-allowed items-baseline"
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
          {/* Vocabulary Card */}
          <Card className="border-teal-200 bg-teal-50 hover:shadow-lg transition-shadow duration-300 md:col-span-1 lg:col-span-3">
            <CardContent className="pt-6 text-center">
              <h3 className="text-lg font-semibold text-teal-800 mb-3 font-arabic">
                مفردات كتب المدينة
              </h3>
              <h4 className="text-md font-medium text-teal-700 mb-2">Vocabulary</h4>
              <p className="text-sm text-teal-700 mb-4 font-arabic">
                استكشف المفردات من جميع كتب المدينة
              </p>
              <p className="text-sm text-teal-600 mb-4">
                Explore vocabulary from all the Madinah Books
              </p>
              <Link href="/vocabulary">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200">
                  <span className="font-arabic ml-2">عرض المفردات</span>
                  <span>View Vocabulary</span>
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Additional Information */}
        <div className="mt-12 text-center">
          <Card className="border-amber-200 bg-amber-50">
            <CardContent className="pt-6">
              <p className="text-sm text-amber-800 font-arabic mb-2">
                هذا التطبيق يقدم شرحاً تفاعلياً لقواعد اللغة العربية المستخرجة من سلسلة كتب المدينة
                لتعليم اللغة العربية لغير الناطقين بها.
              </p>
              <p className="text-sm text-amber-700">
                This application provides an interactive explanation of Arabic grammar rules
                extracted from the Madinah Arabic learning series for non-native speakers.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Changelog and API Documentation Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Changelog Card */}
          <Card className="border-blue-200 bg-blue-50 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3 font-arabic">
                سجل التغييرات
              </h3>
              <h4 className="text-md font-medium text-blue-700 mb-2">Changelog</h4>
              <p className="text-sm text-blue-700 mb-4 font-arabic">
                تابع أحدث التحديثات والتحسينات على التطبيق
              </p>
              <p className="text-sm text-blue-600 mb-4">
                Stay updated with the latest changes, bug fixes, and new features
              </p>
              <Link href="/changelog">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200">
                  <span className="font-arabic ml-2">عرض السجل</span>
                  <span>View Changelog</span>
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* API Documentation Card */}
          <Card className="border-purple-200 bg-purple-50 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold text-purple-800 mb-3 font-arabic">
                وثائق واجهة البرمجة
              </h3>
              <h4 className="text-md font-medium text-purple-700 mb-2">API Documentation</h4>
              <p className="text-sm text-purple-700 mb-4 font-arabic">
                للمطورين: استكشف واجهة البرمجة الخاصة بنا
              </p>
              <p className="text-sm text-purple-600 mb-4">
                Developer? Check out our comprehensive API documentation and integration guides
              </p>
              <Link href="/docs">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200">
                  <span className="font-arabic ml-2">عرض الوثائق</span>
                  <span>View API Docs</span>
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
