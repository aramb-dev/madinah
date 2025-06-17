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
      data: book
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch book'
      },
      { status: 500 }
    );
  }
}