import { NextResponse } from 'next/server';
import { getBookById } from '@/data/books';

type Params = {
  bookId: string;
};

export async function GET(
  request: Request,
  { params }: { params: Promise<Params> }
) {
  try {
    const { bookId } = await params;
    
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
    
    return NextResponse.json({
      success: true,
      data: book.lessons,
      count: book.lessons.length,
      bookInfo: {
        id: book.id,
        title: book.title,
        description: book.description
      }
    });
  } catch (error) {
    console.error('Error fetching lessons:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch lessons'
      },
      { status: 500 }
    );
  }
}