'use client';
import React from 'react';
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
      {/* Sidebar Component */}
      <Sidebar currentBookId={currentBookId} isVisible={!isHomePage} />

      {/* Main Content Area - Conditional Margin */}
      <main
        className={`flex-1 transition-all duration-300 ease-in-out ${
          !isHomePage ? 'md:mr-72' : ''
        } pt-4 md:pt-8 pb-8 px-4 md:px-8`}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;