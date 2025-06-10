'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import FontScaler from '@/components/custom/FontScaler'; // Changed to default import
import FontSelector from '@/components/custom/FontSelector';
import { Book } from '@/data/lessons';

interface HeaderProps {
  book?: Book;
  homeUrl?: string;
}

const Header = ({ book, homeUrl = '/' }: HeaderProps) => {
  return (
    <header className="mb-8 pb-4 border-b border-amber-300 relative">
      {/* Home Button - Fixed and sticky like sidebar toggle */}
      <div className="fixed top-4 right-4 z-20 md:absolute md:left-0 md:top-0 md:z-auto">
        <Link href={homeUrl}>
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
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-emerald-700 arabic-text font-arabic text-center">
        المصادر المعينة على فهم كتب المدينة
      </h1>
      <p className="text-lg text-neutral-600 arabic-text font-arabic text-center mt-1">
        {book ? book.description.arabic : 'شرح كتب دروس اللغة العربية لغير الناطقين بها'}
      </p>
      <p className="text-sm text-neutral-500 english-text text-center mt-2">
        {book ? book.description.english : 'Madinah Book Resources - Explanation of Madinah Book 1'}
      </p>

      <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4">
        <FontScaler /> {/* Added FontScaler component */}
        <FontSelector />
      </div>
    </header>
  );
};

export default Header;
