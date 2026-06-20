"use client";

import Link from "next/link";
import { booksData } from "@/data/books"; // Import booksData
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Added imports
import { Button } from "@/components/ui/button"; // Added import
import FontSelector from "@/components/custom/FontSelector"; // Import FontSelector
import FontScaler from "@/components/custom/FontScaler"; // Import FontScaler

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#FFFAF0]">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-arabic font-bold text-4xl text-emerald-700 md:text-5xl">
            المصادر المعينة على فهم كتب المدينة
          </h1>
          <h2 className="mb-6 font-semibold text-2xl text-emerald-600 md:text-3xl">
            Madinah Book Resources
          </h2>
          <p className="mb-4 font-arabic text-lg text-neutral-700 leading-relaxed">
            مرحباً بك في المصادر المعينة على فهم كتب المدينة. اختر الكتاب الذي
            تريد دراسته من سلسلة كتب المدينة لتعليم اللغة العربية.
          </p>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Welcome to Madinah Book Resources. Choose the book you want to study
            from the Madinah Arabic learning series.
          </p>
        </div>

        {/* Display Options Section */}
        <div className="mb-8 flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-4 shadow-md sm:flex-row sm:gap-6">
          <FontSelector />
          <FontScaler />
        </div>

        {/* Books Selection */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {booksData.map((book) => (
            <Card
              key={book.id}
              className={`border-2 transition-all duration-300 hover:shadow-lg ${
                book.available
                  ? "border-emerald-200 bg-white hover:border-emerald-300"
                  : "border-gray-200 bg-gray-50 opacity-75"
              }`}
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-center font-arabic font-bold text-emerald-700 text-xl">
                  {book.title.ar}
                </CardTitle>
                <p className="text-center font-semibold text-emerald-600 text-lg">
                  {book.title.en}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <p className="font-arabic text-neutral-700 text-sm leading-relaxed">
                    {book.description.arabic}
                  </p>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {book.description.english}
                  </p>
                </div>

                <div className="pt-4">
                  {book.available ? (
                    <Link href={`/books/${book.id}`} className="block">
                      <Button className="w-full rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white transition-colors duration-200 hover:bg-emerald-700">
                        <span className="ml-2 font-arabic">ابدأ الدراسة</span>
                        <span>Start Learning</span>
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      disabled
                      className="w-full cursor-not-allowed items-baseline rounded-lg bg-gray-300 px-4 py-2 font-medium text-gray-500"
                    >
                      {book.comingSoon ? (
                        <>
                          <span className="ml-2 font-arabic">قريباً</span>
                          <span>Coming Soon</span>
                        </>
                      ) : (
                        <>
                          <span className="ml-2 font-arabic">غير متاح</span>
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
          <Card className="border-teal-200 bg-teal-50 transition-shadow duration-300 hover:shadow-lg md:col-span-1 lg:col-span-3">
            <CardContent className="pt-6 text-center">
              <h3 className="mb-3 font-arabic font-semibold text-lg text-teal-800">
                مفردات كتب المدينة
              </h3>
              <h4 className="mb-2 font-medium text-md text-teal-700">
                Vocabulary
              </h4>
              <p className="mb-4 font-arabic text-sm text-teal-700">
                استكشف المفردات من جميع كتب المدينة
              </p>
              <p className="mb-4 text-sm text-teal-600">
                Explore vocabulary from all the Madinah Books
              </p>
              <Link href="/vocabulary">
                <Button className="rounded-lg bg-teal-600 px-6 py-2 font-medium text-white transition-colors duration-200 hover:bg-teal-700">
                  <span className="ml-2 font-arabic">عرض المفردات</span>
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
              <p className="mb-2 font-arabic text-amber-800 text-sm">
                هذا التطبيق يقدم شرحاً تفاعلياً لقواعد اللغة العربية المستخرجة من
                سلسلة كتب المدينة لتعليم اللغة العربية لغير الناطقين بها.
              </p>
              <p className="text-amber-700 text-sm">
                This application provides an interactive explanation of Arabic
                grammar rules extracted from the Madinah Arabic learning series
                for non-native speakers.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Changelog and API Documentation Section */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Changelog Card */}
          <Card className="border-blue-200 bg-blue-50 transition-shadow duration-300 hover:shadow-lg">
            <CardContent className="pt-6">
              <h3 className="mb-3 font-arabic font-semibold text-blue-800 text-lg">
                سجل التغييرات
              </h3>
              <h4 className="mb-2 font-medium text-blue-700 text-md">
                Changelog
              </h4>
              <p className="mb-4 font-arabic text-blue-700 text-sm">
                تابع أحدث التحديثات والتحسينات على التطبيق
              </p>
              <p className="mb-4 text-blue-600 text-sm">
                Stay updated with the latest changes, bug fixes, and new
                features
              </p>
              <Link href="/changelog">
                <Button className="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white transition-colors duration-200 hover:bg-blue-700">
                  <span className="ml-2 font-arabic">عرض السجل</span>
                  <span>View Changelog</span>
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* API Documentation Card */}
          <Card className="border-purple-200 bg-purple-50 transition-shadow duration-300 hover:shadow-lg">
            <CardContent className="pt-6">
              <h3 className="mb-3 font-arabic font-semibold text-lg text-purple-800">
                وثائق واجهة البرمجة
              </h3>
              <h4 className="mb-2 font-medium text-md text-purple-700">
                API Documentation
              </h4>
              <p className="mb-4 font-arabic text-purple-700 text-sm">
                للمطورين: استكشف واجهة البرمجة الخاصة بنا
              </p>
              <p className="mb-4 text-purple-600 text-sm">
                Developer? Check out our comprehensive API documentation and
                integration guides
              </p>
              <Link href="/docs">
                <Button className="rounded-lg bg-purple-600 px-6 py-2 font-medium text-white transition-colors duration-200 hover:bg-purple-700">
                  <span className="ml-2 font-arabic">عرض الوثائق</span>
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
