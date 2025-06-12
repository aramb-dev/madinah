'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { getBookById } from '@/data/books';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarProps {
  currentBookId?: string;
  isVisible?: boolean;
}

const Sidebar = ({ currentBookId, isVisible = true }: SidebarProps) => {
  const pathname = usePathname();

  // Filter lessons based on currentBookId
  const lessonsToDisplay = currentBookId ? getBookById(currentBookId)?.lessons || [] : [];

  // Determine if a lesson is currently active based on the URL
  const isLessonActive = (lessonId: string): boolean => {
    if (currentBookId) {
      return pathname === `/books/${currentBookId}/lessons/${lessonId}`;
    }
    return pathname === `/lessons/${lessonId}`; // Fallback for non-book specific lessons if any
  };

  // Don't render sidebar if not visible or no lessons to display
  if (!isVisible || lessonsToDisplay.length === 0) {
    return null;
  }

  return (
    <>
      {/* Mobile Hamburger Button & Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="default"
            className="md:hidden fixed top-16 left-4 z-40 p-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md shadow-lg"
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
                    <span className="arabic-text font-arabic text-base">{lesson.title.ar}</span>
                    <span className="block text-xs mt-1 text-emerald-600 english-text text-left">
                      {lesson.title.en}
                    </span>
                  </button>
                </Link>
              </SheetClose>
            ))}
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <aside className="hidden md:block md:w-72 bg-amber-50 border-l border-amber-200 p-4 fixed top-24 right-0 h-full overflow-y-auto z-30 shadow-lg">
        <div className="sticky top-0 bg-amber-50 pt-6 pb-4 z-10">
          <h2 className="text-2xl font-bold text-emerald-700 mb-6 arabic-text font-arabic text-center">
            فهرس الدروس
          </h2>
        </div>
        <nav id="lessonListDesktop" className="space-y-1 flex-grow pb-16">
          {lessonsToDisplay.map((lesson) => (
            <Link key={lesson.id} href={`/books/${currentBookId}/lessons/${lesson.id}`} passHref>
              <button
                className={`w-full text-right block px-3 py-3 rounded-md text-sm font-medium text-emerald-800 hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 nav-link ${
                  isLessonActive(lesson.id) ? 'bg-amber-200' : ''
                }`}
              >
                <span className="arabic-text font-arabic text-base">{lesson.title.ar}</span>
                <span className="block text-xs mt-1 text-emerald-600 english-text text-left">
                  {lesson.title.en}
                </span>
              </button>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
