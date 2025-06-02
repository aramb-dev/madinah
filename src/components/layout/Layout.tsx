'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { lessonsData } from '@/data/lessons'; // Import lessonsData
import { getBookById } from '@/data/books'; // Import getBookById
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface CustomLayoutProps {
  children: React.ReactNode;
  currentBookId?: string; // Add currentBookId as an optional prop
}

const Layout = ({ children, currentBookId }: CustomLayoutProps) => {
  const pathname = usePathname();

  // Filter lessons based on currentBookId
  const lessonsToDisplay = currentBookId
    ? getBookById(currentBookId)?.lessons || []
    : lessonsData; // Fallback to lessonsData if no bookId

  // Determine if a lesson is currently active based on the URL
  const isLessonActive = (lessonId: string): boolean => {
    return pathname === `/lessons/${lessonId}`;
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      {/* Home Navigation Button - Fixed in top-right corner */}
      <Link href="/" className="fixed top-4 right-4 z-30 md:top-4 md:right-80 md:z-10">
        <Button
          variant="outline"
          className="bg-amber-50 hover:bg-amber-100 border-amber-300 text-emerald-700 shadow-md"
          aria-label="Go to home page"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 mr-1"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          <span className="english-text text-sm">Home</span>
        </Button>
      </Link>

      {/* Mobile Hamburger Button */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="default"
            className="md:hidden fixed top-4 left-4 z-30 p-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md shadow-lg"
            aria-label="Open sidebar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="bg-amber-100 p-4 space-y-2 overflow-y-auto max-w-[85vw] sm:max-w-[350px]"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-emerald-700 arabic-text font-arabic text-center">
              فهرس الدروس
            </h2>
          </div>
          <div id="lessonListMobile" className="space-y-1 flex-grow">
            {lessonsToDisplay.map((lesson) => (
              <SheetClose key={lesson.id} asChild>
                <Link href={`/books/${currentBookId}/lessons/${lesson.id}`} passHref>
                  <button
                    className={`w-full text-right block px-3 py-3 rounded-md text-sm font-medium text-emerald-800 hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 nav-link ${
                      isLessonActive(lesson.id) ? 'bg-amber-200' : ''
                    }`}
                  >
                    <span className="arabic-text font-arabic text-base">{lesson.title}</span>
                    <span className="block text-xs mt-1 text-emerald-600 english-text text-left">
                      {lesson.englishTitle}
                    </span>
                  </button>
                </Link>
              </SheetClose>
            ))}
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <nav
        id="sidebarNav"
        className="hidden md:flex md:flex-col fixed inset-y-0 right-0 md:sticky w-72 bg-amber-100 p-4 space-y-2 shadow-lg overflow-y-auto z-20 md:translate-x-0 md:top-0 md:h-screen"
      >
        <div className="flex justify-between items-center md:block">
          <h2 className="text-xl font-bold text-emerald-700 mb-0 md:mb-4 arabic-text font-arabic text-center">
            فهرس الدروس
          </h2>
        </div>
        <div id="lessonList" className="space-y-2 flex-grow">
          {lessonsToDisplay.map((lesson) => (
            <Link key={lesson.id} href={`/books/${currentBookId}/lessons/${lesson.id}`} passHref>
              <button
                className={`w-full text-right block px-3 py-3 rounded-md text-sm font-medium text-emerald-800 hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 nav-link ${
                  isLessonActive(lesson.id) ? 'bg-amber-200' : ''
                }`}
              >
                <span className="arabic-text font-arabic text-base">{lesson.title}</span>
                <span className="block text-xs mt-1 text-emerald-600 english-text text-left">
                  {lesson.englishTitle}
                </span>
              </button>
            </Link>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 lg:p-10 overflow-y-auto pt-20 md:pt-10">{children}</main>
    </div>
  );
};

export default Layout;
