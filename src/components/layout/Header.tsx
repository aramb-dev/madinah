'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import FontScaler from '@/components/custom/FontScaler'; // Changed to default import
import FontSelector from '@/components/custom/FontSelector';
import { Book } from '@/data/lessons';

interface HeaderProps {
  book?: Book;
}

const Header = ({ book }: HeaderProps) => {
  return (
    <header className="mb-8 pb-4 border-b border-amber-300 relative">
      {/* Home Button - Left side of header */}
      <div className="absolute left-0 top-0">
        <Link href="/">
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
        قواعد اللغة العربية التفاعلية
      </h1>
      <p className="text-lg text-neutral-600 arabic-text font-arabic text-center mt-1">
        {book
          ? book.description.arabic
          : 'شرح كتاب دروس اللغة العربية لغير الناطقين بها - الجزء الأول'}
      </p>
      <p className="text-sm text-neutral-500 english-text text-center mt-2">
        {book
          ? book.description.english
          : 'Interactive Arabic Grammar Rules - Explanation of Madinah Book 1'}
      </p>

      <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4">
        <FontScaler /> {/* Added FontScaler component */}
        <FontSelector />
      </div>
    </header>
  );
};

export default Header;
