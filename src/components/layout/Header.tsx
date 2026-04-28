'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import FontScaler from '@/components/custom/FontScaler'; // Changed to default import
import FontSelector from '@/components/custom/FontSelector';
import type { Book } from '@/data/lessons';

interface HeaderProps {
  book?: Book;
  homeUrl?: string;
}

const Header = ({ book, homeUrl = '/' }: HeaderProps) => {
  return (
    <header className="relative mb-8 border-amber-300 border-b pb-4">
      {/* Home Button - Fixed and sticky like sidebar toggle */}
      <div className="fixed top-16 right-4 z-40 md:absolute md:top-0 md:left-0 md:z-auto">
        <Link href={homeUrl}>
          <Button
            variant="outline"
            className="border-amber-300 bg-amber-50 text-emerald-700 shadow-md hover:bg-amber-100"
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
              className="mr-1 h-5 w-5"
              aria-hidden="true"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span className="english-text text-sm">Home</span>
          </Button>
        </Link>
      </div>

      <h1 className="arabic-text text-center font-arabic font-bold text-3xl text-emerald-700 md:text-4xl">
        المصادر المعينة على فهم كتب المدينة
      </h1>
      <p className="arabic-text mt-1 text-center font-arabic text-lg text-neutral-600">
        {book ? book.description.arabic : 'شرح كتب دروس اللغة العربية لغير الناطقين بها'}
      </p>
      <p className="english-text mt-2 text-center text-neutral-500 text-sm">
        {book ? book.description.english : 'Madinah Book Resources - Explanation of Madinah Book 1'}
      </p>

      <div className="mt-6 flex flex-col items-center justify-center gap-4 md:flex-row">
        <FontScaler /> {/* Added FontScaler component */}
        <FontSelector />
      </div>
    </header>
  );
};

export default Header;
