'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Layout from '@/components/layout/Layout';
import Header from '@/components/layout/Header';
import { getBookById, getLessonById } from '@/data/books';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function LessonPage() {
  const router = useRouter();
  const params = useParams();
  const bookId = params.bookId as string;
  const lessonId = params.lessonId as string;

  const [selectedLesson, setSelectedLesson] = useState<any | null>(null);
  const [currentRuleIndex, setCurrentRuleIndex] = useState(0);
  const [book, setBook] = useState<any | null>(null);

  useEffect(() => {
    const foundBook = getBookById(bookId);
    const lesson = getLessonById(bookId, lessonId);
    
    if (foundBook) {
      setBook(foundBook);
    }
    
    if (lesson) {
      setSelectedLesson(lesson);
      setCurrentRuleIndex(0); // Reset to first rule when lesson changes
    } else {
      // Handle lesson not found, redirect to book page
      router.push(`/books/${bookId}`);
    }
  }, [bookId, lessonId, router]);

  return (
    <Layout
      currentBookId={bookId}
    >
      <Header />
      {selectedLesson && (
        <div className="p-4">
          <Card>
            <CardHeader>
              <CardTitle>{selectedLesson.title}</CardTitle>
              <CardDescription>
                {book?.englishTitle} - Lesson {selectedLesson.id}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {selectedLesson.rules && selectedLesson.rules.length > 0 ? (
                selectedLesson.rules[currentRuleIndex] && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Rule {currentRuleIndex + 1}</h3>
                    <p>{selectedLesson.rules[currentRuleIndex].explanation}</p>
                  </div>
                )
              ) : (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Introduction</h3>
                  <p className="text-right font-arabic mb-4">{selectedLesson.introduction.arabic}</p>
                  <p>{selectedLesson.introduction.english}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </Layout>
  );
}