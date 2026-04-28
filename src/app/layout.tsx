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
      <body className={`${inter.variable} bg-[#FFFAF0] antialiased`}>
        {/* Beta Feedback Banner */}
        {process.env.NEXT_PUBLIC_SHOW_BETA_BANNER !== 'false' && (
          <div className="fixed top-0 right-0 left-0 z-50 border-blue-200 border-b bg-blue-50 px-4 py-2 text-center">
            <p className="text-blue-700 text-sm">
              <span className="font-medium">Still in beta.</span> For feedback, email me at{' '}
              <a
                href="mailto:aramb@aramb.dev"
                className="text-blue-600 underline hover:text-blue-800"
              >
                aramb@aramb.dev
              </a>
            </p>
          </div>
        )}
        <div className={process.env.NEXT_PUBLIC_SHOW_BETA_BANNER === 'false' ? '' : 'pt-20'}>
          {children}
        </div>
      </body>
    </html>
  );
}
