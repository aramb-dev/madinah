'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

import { booksData, getBookById } from '@/data/books';
import { Toggle } from '@/components/ui/toggle';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

interface CustomLayoutProps {
  children: React.ReactNode;
  currentBookId?: string;
}

const Layout = ({ children, currentBookId }: CustomLayoutProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);



  // Get the current book data if a book ID is provided
  const currentBook = currentBookId ? getBookById(currentBookId) : null;
  
  // Determine if a lesson is currently active based on the URL
  const isLessonActive = (lessonId: string): boolean => {
    if (currentBookId) {
      return pathname === `/books/${currentBookId}/lessons/${lessonId}`;
    }
    return pathname === `/lessons/${lessonId}`;
  };
  
  // Determine if a book is currently active based on the URL
  const isBookActive = (bookId: string): boolean => {
    return pathname.startsWith(`/books/${bookId}`);
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
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
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
          className="bg-amber-100 p-0 space-y-2 overflow-y-auto max-w-[85vw] sm:max-w-[350px]"
        >
          <div className="h-full flex flex-col p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-emerald-700 arabic-text font-arabic text-center">
                فهرس الدروس
              </h2>
              <SheetClose asChild>
                <Button variant="ghost" size="icon" className="text-emerald-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </Button>
              </SheetClose>
            </div>
            <div id="lessonListMobile" className="space-y-1 flex-grow overflow-y-auto">
              {/* Home Link for Mobile Sidebar */}
              <SheetClose asChild>
                <Link href="/" passHref>
                  <button
                    className={`w-full text-right block px-3 py-3 rounded-md text-sm font-medium text-emerald-800 hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 nav-link ${pathname === '/' ? 'bg-amber-200' : ''}`}
                    onClick={() => setIsMobileMenuOpen(false)} // Close on select
                  >
                    <span className="arabic-text font-arabic text-base">الصفحة الرئيسية</span>
                    <span className="block text-xs mt-1 text-emerald-600 english-text text-left">
                      Home
                    </span>
                  </button>
                </Link>
              </SheetClose>
              
              {/* Books Navigation */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-emerald-700 mb-2 text-right font-arabic">الكتب</h3>
                {booksData.map((book) => (
                  <SheetClose key={book.id} asChild>
                    <Link href={`/books/${book.id}`} passHref>
                      <button
                        className={`w-full text-right block px-3 py-2 rounded-md text-sm font-medium text-emerald-800 hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 nav-link ${
                          isBookActive(book.id) ? 'bg-amber-200' : ''
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="arabic-text font-arabic text-base">{book.title}</span>
                        <span className="block text-xs mt-1 text-emerald-600 english-text text-left">
                          {book.englishTitle}
                        </span>
                      </button>
                    </Link>
                  </SheetClose>
                ))}
              </div>
              
              {/* Lessons Navigation - Show lessons for current book if selected */}
              {currentBook && (
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-emerald-700 mb-2 text-right font-arabic">الدروس</h3>
                  {currentBook.lessons.map((lesson) => (
                    <SheetClose key={lesson.id} asChild>
                      <Link href={`/books/${currentBookId}/lessons/${lesson.id}`} passHref>
                        <button
                          className={`w-full text-right block px-3 py-3 rounded-md text-sm font-medium text-emerald-800 hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 nav-link ${
                            isLessonActive(lesson.id) ? 'bg-amber-200' : ''
                          }`}
                          onClick={() => {
                            setIsMobileMenuOpen(false); // Close on select
                          }}
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
              )}
              
              {/* Changelog Link for Mobile Sidebar */}
              <SheetClose asChild>
                <Link href="/changelog" passHref>
                  <button
                    className={`w-full text-right block px-3 py-3 rounded-md text-sm font-medium text-emerald-800 hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 nav-link ${pathname === '/changelog' ? 'bg-amber-200' : ''}`}
                    onClick={() => setIsMobileMenuOpen(false)} // Close on select
                  >
                    <span className="arabic-text font-arabic text-base">سجل التغييرات</span>
                    <span className="block text-xs mt-1 text-emerald-600 english-text text-left">
                      Changelog
                    </span>
                  </button>
                </Link>
              </SheetClose>
            </div>
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
          {/* Home Link for Desktop Sidebar */}
          <Link href="/" passHref>
            <button
              className={`w-full text-right block px-3 py-3 rounded-md text-sm font-medium text-emerald-800 hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 nav-link ${pathname === '/' ? 'bg-amber-200' : ''}`}
            >
              <span className="arabic-text font-arabic text-base">الصفحة الرئيسية</span>
              <span className="block text-xs mt-1 text-emerald-600 english-text text-left">
                Home
              </span>
            </button>
          </Link>
          
          {/* Books Navigation */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-emerald-700 mb-2 text-right font-arabic">الكتب</h3>
            {booksData.map((book) => (
              <Link key={book.id} href={`/books/${book.id}`} passHref>
                <button
                  className={`w-full text-right block px-3 py-2 rounded-md text-sm font-medium text-emerald-800 hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 nav-link ${
                    isBookActive(book.id) ? 'bg-amber-200' : ''
                  }`}
                >
                  <span className="arabic-text font-arabic text-base">{book.title}</span>
                  <span className="block text-xs mt-1 text-emerald-600 english-text text-left">
                    {book.englishTitle}
                  </span>
                </button>
              </Link>
            ))}
          </div>
          
          {/* Lessons Navigation - Show lessons for current book if selected */}
          {currentBook && (
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-emerald-700 mb-2 text-right font-arabic">الدروس</h3>
              {currentBook.lessons.map((lesson) => (
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
          )}
          
          {/* Changelog Link for Desktop Sidebar */}
          <Link href="/changelog" passHref>
            <button
              className={`w-full text-right block px-3 py-3 rounded-md text-sm font-medium text-emerald-800 hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 nav-link ${pathname === '/changelog' ? 'bg-amber-200' : ''}`}
            >
              <span className="arabic-text font-arabic text-base">سجل التغييرات</span>
              <span className="block text-xs mt-1 text-emerald-600 english-text text-left">
                Changelog
              </span>
            </button>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 lg:p-10 overflow-y-auto pt-20 md:pt-10">{children}</main>
    </div>
  );
};

export default Layout;
