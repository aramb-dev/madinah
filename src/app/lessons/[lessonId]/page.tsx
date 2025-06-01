'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Layout from '@/components/layout/Layout';
import Header from '@/components/layout/Header';
import { lessonsData, Lesson, Rule } from '@/data/lessons';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const LessonPage = () => {
  const router = useRouter();
  const params = useParams();
  const lessonId = params.lessonId as string;

  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [currentRuleIndex, setCurrentRuleIndex] = useState(0);

  useEffect(() => {
    const lesson = lessonsData.find((l) => l.id === lessonId);
    if (lesson) {
      setSelectedLesson(lesson);
      setCurrentRuleIndex(0); // Reset to first rule when lesson changes
    } else {
      // Handle lesson not found, e.g., redirect or show error
      router.push('/'); // Redirect to home if lesson not found
    }
  }, [lessonId, router]);

  const handleLessonClick = (id: string) => {
    router.push(`/lessons/${id}`);
  };

  return (
    <Layout
      // onLessonSelect={handleLessonClick} // Removed onLessonSelect prop
    >
      <Header />
      <LessonContent lesson={selectedLesson} />
    </Layout>
  );
}
