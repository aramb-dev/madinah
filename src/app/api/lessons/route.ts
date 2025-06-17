import { NextResponse } from 'next/server';
import { getAvailableBooks } from '@/data/books';
import { Lesson } from '@/data/lessons';

interface LessonWithBookInfo extends Lesson {
  bookId: string;
  bookTitle: {
    ar: string;
    en: string;
  };
}

export async function GET() {
  try {
    const availableBooks = getAvailableBooks();
    
    // Flatten all lessons from all books and include book information
    const allLessons: LessonWithBookInfo[] = [];
    
    availableBooks.forEach(book => {
      book.lessons.forEach(lesson => {
        allLessons.push({
          ...lesson,
          bookId: book.id,
          bookTitle: book.title
        });
      });
    });
    
    return NextResponse.json({
      success: true,
      data: allLessons,
      count: allLessons.length,
      booksCount: availableBooks.length
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