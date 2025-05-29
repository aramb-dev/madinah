import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./custom-globals.css";

// Load Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Note: Noto Kufi Arabic is now self-hosted in /public/fonts/
// and loaded via @font-face in custom-globals.css

export const metadata: Metadata = {
  title: "قواعد اللغة العربية التفاعلية - شرح كتاب المدينة ١",
  description: "Interactive Arabic Grammar Rules - Explanation of Madinah Book 1",
  openGraph: {
    title: "قواعد اللغة العربية التفاعلية - شرح كتاب المدينة ١",
    description: "Interactive Arabic Grammar Rules - Explanation of Madinah Book 1",
    images: ["/images/social-share/home.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "قواعد اللغة العربية التفاعلية - شرح كتاب المدينة ١",
    description: "Interactive Arabic Grammar Rules - Explanation of Madinah Book 1",
    images: ["/images/social-share/home.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${inter.variable} antialiased bg-[#FFFAF0]`}
      >
        {children}
      </body>
    </html>
  );
}
