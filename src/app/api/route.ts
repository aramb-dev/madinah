import { NextResponse } from 'next/server';

export async function GET() {
  const apiDocumentation = {
    name: 'Madinah Books API',
    version: '1.0.0',
    description: 'Public API for accessing Madinah Arabic learning books and lessons data',
    baseUrl: '/api',
    endpoints: {
      books: {
        'GET /api/books': {
          description: 'Get all available books',
          response: 'Array of books with lessons'
        },
        'GET /api/books/{bookId}': {
          description: 'Get a specific book by ID',
          parameters: {
            bookId: 'string (book1, book2, book3)'
          },
          response: 'Book object with all lessons'
        },
        'GET /api/books/{bookId}/lessons': {
          description: 'Get all lessons for a specific book',
          parameters: {
            bookId: 'string (book1, book2, book3)'
          },
          response: 'Array of lessons for the specified book'
        },
        'GET /api/books/{bookId}/lessons/{lessonId}': {
          description: 'Get a specific lesson from a specific book',
          parameters: {
            bookId: 'string (book1, book2, book3)',
            lessonId: 'string (lesson1, lesson2, etc.)'
          },
          response: 'Lesson object with book information'
        }
      },
      lessons: {
        'GET /api/lessons': {
          description: 'Get all lessons from all books',
          response: 'Array of all lessons with book information'
        }
      }
    },
    responseFormat: {
      success: {
        success: true,
        data: 'Requested data',
        count: 'Number of items (when applicable)'
      },
      error: {
        success: false,
        error: 'Error message'
      }
    },
    dataStructure: {
      Book: {
        id: 'string',
        title: { ar: 'string', en: 'string' },
        description: { arabic: 'string', english: 'string' },
        lessons: 'Array<Lesson>',
        available: 'boolean',
        comingSoon: 'boolean (optional)'
      },
      Lesson: {
        id: 'string',
        title: { ar: 'string', en: 'string' },
        introduction: { arabic: 'string', english: 'string' },
        rules: 'Array<Rule>'
      },
      Rule: {
        name: 'string',
        arabicText: 'string',
        explanation: 'string'
      }
    }
  };

  return NextResponse.json(apiDocumentation);
}