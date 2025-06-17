import { NextResponse } from 'next/server';
import { getBookById, getLessonById } from '@/data/books';

type Params = {
  bookId: string;
  lessonId: string;
};

export async function GET(
  request: Request,
  { params }: { params: Promise<Params> }
) {
  try {
    const { bookId, lessonId } = await params;
    
    const book = getBookById(bookId);
    
    if (!book) {
      return NextResponse.json(
        {
          success: false,
          error: 'Book not found'
        },
        { status: 404 }
      );
    }
    
    const lesson = getLessonById(bookId, lessonId);
    
    if (!lesson) {
      return NextResponse.json(
        {
          success: false,
          error: 'Lesson not found'
        },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      data: lesson,
      bookInfo: {
        id: book.id,
        title: book.title,
        description: book.description
      }
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch lesson'
      },
      { status: 500 }
    );
  }
}