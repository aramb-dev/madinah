"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { lessonsData } from '@/data/lessons';
import Header from '@/components/layout/Header';

export default function LessonsIndexPage() {
  const router = useRouter();

  // Redirect to the first lesson
  useEffect(() => {
    // Get the first lesson ID
    const firstLessonId = lessonsData[0]?.id;

    if (firstLessonId) {
      router.replace(`/lessons/${firstLessonId}`);
    }
  }, [router]);

  return (
    <div className="p-4">
      <Header />
      <div className="mt-8 text-center">
        <p className="arabic-text font-arabic text-xl text-emerald-700 mb-4">
          جاري التحميل...
        </p>
        <p className="english-text text-lg text-neutral-600">
          Loading the first lesson...
        </p>
      </div>
    </div>
  );
}
