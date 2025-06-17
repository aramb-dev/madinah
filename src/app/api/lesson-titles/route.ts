import { NextResponse } from 'next/server';
import { booksData } from '@/data/books';

export async function GET() {
  try {
    const allLessonTitles = booksData.flatMap(book =>
      book.lessons.map(lesson => ({
        lessonId: lesson.id,
        lessonTitle: lesson.title,
        bookId: book.id,
        bookTitle: book.title,
        ruleCount: lesson.rules.length
      }))
    );

    return NextResponse.json({
      success: true,
      data: {
        totalLessons: allLessonTitles.length,
        lessons: allLessonTitles
      },
      count: allLessonTitles.length
    });
  } catch (error) {
    console.error('Error fetching lesson titles:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}