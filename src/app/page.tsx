"use client";

import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import Header from "@/components/layout/Header";
import LessonContent from "@/components/custom/LessonContent";
import { lessonsData, Lesson } from "@/data/lessons";

export default function Home() {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | undefined>(undefined);
  const [aiFeaturesEnabled, setAiFeaturesEnabled] = useState(false);

  // Initialize state from localStorage on component mount
  useEffect(() => {
    // Load AI toggle preference from localStorage
    const savedAIPreference = typeof window !== 'undefined' ? localStorage.getItem('aiFeaturesEnabled') : null;
    if (savedAIPreference === 'true') {
      setAiFeaturesEnabled(true);
    }
  }, []);

  // Update localStorage when AI features toggle changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('aiFeaturesEnabled', aiFeaturesEnabled.toString());
    }
  }, [aiFeaturesEnabled]);

  // Handle lesson selection
  const handleLessonClick = (lessonId: string) => {
    const lesson = lessonsData.find(l => l.id === lessonId);
    if (lesson) {
      setSelectedLesson(lesson);
    }
  };

  return (
    <Layout
      onLessonSelect={handleLessonClick}
      aiFeaturesEnabled={aiFeaturesEnabled}
      setAiFeaturesEnabled={setAiFeaturesEnabled}
    >
      <Header />
      <LessonContent
        lesson={selectedLesson}
        aiFeaturesEnabled={aiFeaturesEnabled}
      />
    </Layout>
  );
}
