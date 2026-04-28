'use client';
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
            className="fixed top-16 left-4 z-40 rounded-md bg-emerald-600 p-2 text-white shadow-lg hover:bg-emerald-700 md:hidden"
            aria-label="Open sidebar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
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
          className="max-w-[85vw] space-y-2 overflow-y-auto bg-amber-100 p-4 sm:max-w-[350px]"
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 className="arabic-text text-center font-arabic font-bold text-emerald-700 text-xl">
              فهرس الدروس
            </h2>
          </div>
          <div id="lessonListMobile" className="flex-grow space-y-1">
            {lessonsToDisplay.map((lesson) => (
              <SheetClose key={lesson.id} asChild>
                <Link href={`/books/${currentBookId}/lessons/${lesson.id}`} passHref>
                  <button
                    type="button"
                    className={`nav-link block w-full rounded-md px-3 py-3 text-right font-medium text-emerald-800 text-sm hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                      isLessonActive(lesson.id) ? 'bg-amber-200' : ''
                    }`}
                  >
                    <span className="arabic-text font-arabic text-base">{lesson.title.ar}</span>
                    <span className="english-text mt-1 block text-left text-emerald-600 text-xs">
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
      <aside className="fixed top-24 right-0 z-30 hidden h-full overflow-y-auto border-amber-200 border-l bg-amber-50 p-4 shadow-lg md:block md:w-72">
        <div className="sticky top-0 z-10 bg-amber-50 pt-6 pb-4">
          <h2 className="arabic-text mb-6 text-center font-arabic font-bold text-2xl text-emerald-700">
            فهرس الدروس
          </h2>
        </div>
        <nav id="lessonListDesktop" className="flex-grow space-y-1 pb-16">
          {lessonsToDisplay.map((lesson) => (
            <Link key={lesson.id} href={`/books/${currentBookId}/lessons/${lesson.id}`} passHref>
              <button
                type="button"
                className={`nav-link block w-full rounded-md px-3 py-3 text-right font-medium text-emerald-800 text-sm hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                  isLessonActive(lesson.id) ? 'bg-amber-200' : ''
                }`}
              >
                <span className="arabic-text font-arabic text-base">{lesson.title.ar}</span>
                <span className="english-text mt-1 block text-left text-emerald-600 text-xs">
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
