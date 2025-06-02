import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import './custom-globals.css';
import Layout from '@/components/layout/Layout';
import { usePathname } from 'next/navigation';
import React from 'react';

// Load Inter font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const sharedTitle = 'قواعد اللغة العربية التفاعلية - شرح كتاب المدينة ١';
const sharedDescription = 'Interactive Arabic Grammar Rules - Explanation of Madinah Book 1';
const sharedImages = ['/images/social-share/home.png'];

export const metadata: Metadata = {
  title: sharedTitle,
  description: sharedDescription,
  openGraph: {
    title: sharedTitle,
    description: sharedDescription,
    images: sharedImages,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: sharedTitle,
    description: sharedDescription,
    images: sharedImages,
  },
};

function getCurrentBookId(pathname: string): string | undefined {
  // Matches /books/book1 or /books/book1/lessons/lesson1
  const match = pathname.match(/^\/books\/([^\/]+)/);
  return match ? match[1] : undefined;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const currentBookId = getCurrentBookId(pathname);
  return (
    <html lang="ar" dir="rtl">
      <body className={`${inter.variable} antialiased bg-[#FFFAF0]`}>
        <Layout currentBookId={currentBookId}>{children}</Layout>
      </body>
    </html>
  );
}
