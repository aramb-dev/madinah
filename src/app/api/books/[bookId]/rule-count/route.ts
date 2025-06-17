import { NextRequest, NextResponse } from 'next/server';
import { getBookById } from '@/data/books';

export async function GET(
  request: NextRequest,
  { params }: { params: { bookId: string } }
) {
  try {
    const { bookId } = params;
    const book = getBookById(bookId);

    if (!book) {
      return NextResponse.json(
        { success: false, error: 'Book not found' },
        { status: 404 }
      );
    }

    const ruleStats = {
      bookId: book.id,
      bookTitle: book.title,
      totalRules: book.lessons.reduce((total, lesson) => total + lesson.rules.length, 0),
      lessonCount: book.lessons.length,
      averageRulesPerLesson: Math.round(
        (book.lessons.reduce((total, lesson) => total + lesson.rules.length, 0) / book.lessons.length) * 100
      ) / 100,
      rulesByLesson: book.lessons.map(lesson => ({
        lessonId: lesson.id,
        lessonTitle: lesson.title,
        ruleCount: lesson.rules.length
      }))
    };

    return NextResponse.json({
      success: true,
      data: ruleStats
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}