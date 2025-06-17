import { NextResponse } from 'next/server';
import { booksData, getAvailableBooks } from '@/data/books';

export async function GET() {
  try {
    // Return all available books (those with lessons)
    const availableBooks = getAvailableBooks();
    
    return NextResponse.json({
      success: true,
      data: availableBooks,
      count: availableBooks.length
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch books'
      },
      { status: 500 }
    );
  }
}