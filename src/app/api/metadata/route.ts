import { NextResponse } from 'next/server';
import { booksData } from '@/data/books';

export async function GET() {
  try {
    const totalLessons = booksData.reduce((total, book) => total + book.lessons.length, 0);
    const totalRules = booksData.reduce(
      (total, book) => total + book.lessons.reduce(
        (lessonTotal, lesson) => lessonTotal + lesson.rules.length, 0
      ), 0
    );
    const availableBooks = booksData.filter(book => book.available);

    const metadata = {
      totalBooks: booksData.length,
      availableBooks: availableBooks.length,
      totalLessons,
      totalRules,
      averageRulesPerLesson: Math.round((totalRules / totalLessons) * 100) / 100,
      books: booksData.map(book => ({
        id: book.id,
        title: book.title,
        lessonCount: book.lessons.length,
        ruleCount: book.lessons.reduce((total, lesson) => total + lesson.rules.length, 0),
        available: book.available,
        comingSoon: book.comingSoon || false
      })),
      apiRoutes: {
        allBooks: '/api/books',
        allLessons: '/api/lessons',
        metadata: '/api/metadata',
        allLessonTitles: '/api/lesson-titles'
      }
    };

    return NextResponse.json({
      success: true,
      data: metadata
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}