"use client";

import { useEffect } from "react";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="ar" dir="rtl">
      <body className="flex min-h-screen items-center justify-center bg-[#FFFAF0] px-4">
        <div className="max-w-md text-center">
          <h1 className="mb-4 font-arabic font-bold text-4xl text-emerald-700">
            عذراً، حدث خطأ
          </h1>
          <h2 className="mb-6 font-semibold text-2xl text-emerald-600">
            Something went wrong
          </h2>
          <p className="mb-8 text-neutral-700">
            We encountered an unexpected error. Please try again or return to
            the homepage.
          </p>
          <button
            type="button"
            onClick={reset}
            className="rounded-md bg-emerald-600 px-6 py-3 font-medium text-white hover:bg-emerald-700"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
