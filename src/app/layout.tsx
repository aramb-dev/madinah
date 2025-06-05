import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import './custom-globals.css';

// Load Inter font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const sharedTitle = 'المصادر المعينة على فهم كتب المدينة - شرح كتاب المدينة ١';
const sharedDescription = 'Madinah Book Resources - Explanation of Madinah Book 1';
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
        {/* Beta Feedback Banner */}
        <div className="bg-blue-50 border-b border-blue-200 px-4 py-2 text-center">
          <p className="text-sm text-blue-700">
            <span className="font-medium">Still in beta.</span> For feedback, email me at{' '}
            <a
              href="mailto:aramb@aramb.dev"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              aramb@aramb.dev
            </a>
          </p>
        </div>
        {children}
      </body>
    </html>
  );
}
