import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import './custom-globals.css';
import AnimatedLayout from '@/components/layout/AnimatedLayout';

// Load Inter font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Note: Noto Kufi Arabic is now self-hosted in /public/fonts/
// and loaded via @font-face in custom-globals.css

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${inter.variable} antialiased bg-[#FFFAF0]`}>
        <AnimatedLayout>{children}</AnimatedLayout>
      </body>
    </html>
  );
}
