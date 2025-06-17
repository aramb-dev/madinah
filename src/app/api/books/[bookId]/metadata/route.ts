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

    const metadata = {
      bookId: book.id,
      title: book.title,
      lessonCount: book.lessons.length,
      available: book.available,
      comingSoon: book.comingSoon || false,
      apiRoutes: {
        book: `/api/books/${bookId}`,
        lessons: `/api/books/${bookId}/lessons`,
        metadata: `/api/books/${bookId}/metadata`,
        lessonTitles: `/api/books/${bookId}/lesson-titles`,
        ruleCount: `/api/books/${bookId}/rule-count`
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