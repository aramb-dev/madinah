"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function RootError({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FFFAF0] px-4">
      <div className="max-w-md text-center">
        <h1 className="mb-4 font-arabic font-bold text-4xl text-emerald-700">
          عذراً، حدث خطأ
        </h1>
        <h2 className="mb-6 font-semibold text-2xl text-emerald-600">
          Something went wrong
        </h2>
        <p className="mb-8 text-neutral-700">
          We encountered an unexpected error. Please try again or return to the
          homepage.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            onClick={reset}
            className="bg-emerald-600 text-white hover:bg-emerald-700"
          >
            Try Again
          </Button>
          <Button
            variant="outline"
            onClick={() => (window.location.href = "/")}
            className="border-emerald-600 text-emerald-700 hover:bg-emerald-50"
          >
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
}
