import type { Metadata } from "next";
import { Inter, Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";

// Load Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Load Noto Kufi Arabic font
const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-kufi-arabic",
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "قواعد اللغة العربية التفاعلية - شرح كتاب المدينة ١",
  description: "Interactive Arabic Grammar Rules - Explanation of Madinah Book 1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${inter.variable} ${notoKufiArabic.variable} antialiased bg-[#FFFAF0]`}
      >
        {children}
      </body>
    </html>
  );
}
