'use client';

import { useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';

// This page handles redirects from the old URL structure to the new one
export default function LegacyLessonRedirect() {
  const router = useRouter();
  const params = useParams();
  const lessonId = params.lessonId as string;

  useEffect(() => {
    // Redirect to the new URL structure (assuming all old lessons are from book1)
    router.replace(`/books/book1/lessons/${lessonId}`);
  }, [lessonId, router]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 font-bold text-2xl">Redirecting...</h1>
        <p>Please wait while we redirect you to the new page.</p>
      </div>
    </div>
  );
}
