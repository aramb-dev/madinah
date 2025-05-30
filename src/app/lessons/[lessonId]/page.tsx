'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import Header from '@/components/layout/Header';
import LessonContent from '@/components/custom/LessonContent';
import { lessonsData, Lesson } from '@/data/lessons';

export default function LessonPage() {
  const params = useParams();
  const lessonId = params.lessonId as string;

  const [selectedLesson, setSelectedLesson] = useState<Lesson | undefined>(undefined);

  // Initialize state from localStorage on component mount
  useEffect(() => {
    // Find the lesson based on the URL parameter
    const lesson = lessonsData.find((l) => l.id === lessonId);
    if (lesson) {
      setSelectedLesson(lesson);
    }
  }, [lessonId]);

  // Handle lesson selection
  const handleLessonClick = (lessonId: string) => {
    const lesson = lessonsData.find((l) => l.id === lessonId);
    if (lesson) {
      setSelectedLesson(lesson);
    }
  };

  return (
    <Layout onLessonSelect={handleLessonClick}>
      <Header />
      <LessonContent lesson={selectedLesson} />
    </Layout>
  );
}
