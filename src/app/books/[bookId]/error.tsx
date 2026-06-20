"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function BookError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="mb-4 font-arabic font-bold text-3xl text-emerald-700">
        تعذر تحميل الكتاب
      </h1>
      <h2 className="mb-4 font-semibold text-emerald-600 text-xl">
        Could not load this book
      </h2>
      <p className="mb-8 text-neutral-700">
        We ran into a problem while loading this book. Please try again.
      </p>
      <div className="flex justify-center gap-4">
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
  );
}
