import { NextRequest, NextResponse } from 'next/server';
import { getBookById } from '@/data/books';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ bookId: string }> }
) {
  try {
    const { bookId } = await params;
    const book = getBookById(bookId);

    if (!book) {
      return NextResponse.json({ success: false, error: 'Book not found' }, { status: 404 });
    }

    const ruleStats = {
      bookId: book.id,
      bookTitle: book.title,
      totalRules: book.lessons.reduce((total, lesson) => total + lesson.rules.length, 0),
      lessonCount: book.lessons.length,
      averageRulesPerLesson:
        book.lessons.length > 0
          ? Math.round(
              (book.lessons.reduce((total, lesson) => total + lesson.rules.length, 0) /
                book.lessons.length) *
                100
            ) / 100
          : 0,
      rulesByLesson: book.lessons.map((lesson) => ({
        lessonId: lesson.id,
        lessonTitle: lesson.title,
        ruleCount: lesson.rules.length,
      })),
    };

    return NextResponse.json({
      success: true,
      data: ruleStats,
    });
  } catch (error) {
    console.error('Error fetching rule count:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
