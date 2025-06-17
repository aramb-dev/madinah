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

    const lessonTitles = book.lessons.map(lesson => ({
      id: lesson.id,
      title: lesson.title,
      ruleCount: lesson.rules.length
    }));

    return NextResponse.json({
      success: true,
      data: {
        bookId: book.id,
        bookTitle: book.title,
        lessonCount: book.lessons.length,
        lessons: lessonTitles
      }
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}