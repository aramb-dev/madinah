import React from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { lessonsData } from '@/data/lessons';
import { Toggle } from '@/components/ui/toggle';

interface LayoutProps {
  children: React.ReactNode;
  onLessonSelect: (lessonId: string) => void;
  aiFeaturesEnabled: boolean;
  setAiFeaturesEnabled: (enabled: boolean) => void;
}

const Layout = ({
  children,
  onLessonSelect,
  aiFeaturesEnabled,
  setAiFeaturesEnabled
}: LayoutProps) => {
  // Handle AI toggle change
  const handleAIToggleChange = () => {
    setAiFeaturesEnabled(!aiFeaturesEnabled);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      {/* Mobile Hamburger Button */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="default"
            className="md:hidden fixed top-4 left-4 z-30 p-2 bg-emerald-600 text-white rounded-md shadow-lg"
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
        <SheetContent side="right" className="bg-amber-100 p-4 space-y-2 overflow-y-auto">
          <div className="flex justify-between items-center md:block">
            <h2 className="text-xl font-bold text-emerald-700 mb-0 md:mb-4 arabic-text font-arabic text-center">فهرس الدروس</h2>
          </div>
          <div id="lessonListMobile" className="space-y-1 flex-grow">
            {lessonsData.map((lesson) => (
              <button
                key={lesson.id}
                className="w-full text-right block px-3 py-2 rounded-md text-sm font-medium text-emerald-800 hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 nav-link"
                data-lesson-id={lesson.id}
                onClick={() => onLessonSelect(lesson.id)}
              >
                <span className="arabic-text font-arabic">{lesson.title}</span>
                <span className="block text-xs text-emerald-600 english-text text-left">
                  {lesson.englishTitle}
                </span>
              </button>
            ))}
          </div>
          <div className="mt-auto pt-4 border-t border-amber-200">
            <label htmlFor="aiToggleMobile" className="toggle-label text-sm flex items-center justify-between">
              <span className="toggle-text-arabic font-arabic">ميزات الذكاء الاصطناعي</span>
              <Toggle
                id="aiToggleMobile"
                className="ai-toggle-input"
                pressed={aiFeaturesEnabled}
                onPressedChange={handleAIToggleChange}
              />
              <span className="toggle-text-english">(AI Features)</span>
            </label>
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <nav
        id="sidebarNav"
        className="hidden md:flex md:flex-col fixed inset-y-0 right-0 md:sticky w-72 bg-amber-100 p-4 space-y-2 shadow-lg overflow-y-auto z-20 md:translate-x-0 md:top-0 md:h-screen"
      >
        <div className="flex justify-between items-center md:block">
          <h2 className="text-xl font-bold text-emerald-700 mb-0 md:mb-4 arabic-text font-arabic text-center">فهرس الدروس</h2>
        </div>
        <div id="lessonList" className="space-y-1 flex-grow">
          {lessonsData.map((lesson) => (
            <button
              key={lesson.id}
              className="w-full text-right block px-3 py-2 rounded-md text-sm font-medium text-emerald-800 hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 nav-link"
              data-lesson-id={lesson.id}
              onClick={() => onLessonSelect(lesson.id)}
            >
              <span className="arabic-text font-arabic">{lesson.title}</span>
              <span className="block text-xs text-emerald-600 english-text text-left">
                {lesson.englishTitle}
              </span>
            </button>
          ))}
        </div>
        <div className="mt-auto pt-4 border-t border-amber-200">
          <label className="toggle-label text-sm flex items-center justify-between">
            <span className="toggle-text-arabic font-arabic">ميزات الذكاء الاصطناعي</span>
            <Toggle
              className="ai-toggle-input"
              pressed={aiFeaturesEnabled}
              onPressedChange={handleAIToggleChange}
            />
            <span className="toggle-text-english">(AI Features)</span>
          </label>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto pt-20 md:pt-10">
        {children}
      </main>
    </div>
  );
};

export default Layout;
