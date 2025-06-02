'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';

interface CustomLayoutProps {
  children: React.ReactNode;
  currentBookId?: string;
}

const Layout = ({ children, currentBookId }: CustomLayoutProps) => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      {/* Home Navigation Button - Always visible */}
      <Link href="/" className="fixed top-4 right-4 z-40">
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

      {/* Sidebar Component */}
      <Sidebar currentBookId={currentBookId} isVisible={!isHomePage} />

      {/* Main Content Area - Conditional Margin */}
      <main
        className={`flex-1 transition-all duration-300 ease-in-out ${
          !isHomePage ? 'md:mr-72' : ''
        } pt-16 md:pt-8 pb-8 px-4 md:px-8`}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
