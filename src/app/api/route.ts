import { NextResponse } from 'next/server';

export function GET() {
  const apiDocumentation = {
    name: 'Madinah Books API',
    version: '1.0.0',
    description: 'Public API for accessing Madinah Arabic learning books and lessons data',
    baseUrl: '/api',
    endpoints: {
      books: {
        'GET /api/books': {
          description: 'Get all available books',
          response: 'Array of books with lessons',
        },
        'GET /api/books/{bookId}': {
          description: 'Get a specific book by ID',
          parameters: {
            bookId: 'string (book1, book2, book3)',
          },
          response: 'Book object with all lessons',
        },
        'GET /api/books/{bookId}/lessons': {
          description: 'Get all lessons for a specific book',
          parameters: {
            bookId: 'string (book1, book2, book3)',
          },
          response: 'Array of lessons for the specified book',
        },
        'GET /api/books/{bookId}/lessons/{lessonId}': {
          description: 'Get a specific lesson from a specific book',
          parameters: {
            bookId: 'string (book1, book2, book3)',
            lessonId: 'string (lesson1, lesson2, etc.)',
          },
          response: 'Lesson object with book information',
        },
      },
      lessons: {
        'GET /api/lessons': {
          description: 'Get all lessons from all books',
          response: 'Array of all lessons with book information',
        },
      },
      metadata: {
        'GET /api/metadata': {
          description: 'Get global metadata about all books and lessons',
          response: 'Summary statistics and overview data',
        },
        'GET /api/books/{bookId}/metadata': {
          description: 'Get metadata for a specific book',
          parameters: {
            bookId: 'string (book1, book2, book3)',
          },
          response: 'Book metadata including lesson count and available routes',
        },
        'GET /api/books/{bookId}/lesson-titles': {
          description: 'Get titles of all lessons in a specific book',
          parameters: {
            bookId: 'string (book1, book2, book3)',
          },
          response: 'Array of lesson titles with IDs and rule counts',
        },
        'GET /api/books/{bookId}/rule-count': {
          description: 'Get rule statistics for a specific book',
          parameters: {
            bookId: 'string (book1, book2, book3)',
          },
          response: 'Rule count statistics by lesson and total',
        },
        'GET /api/lesson-titles': {
          description: 'Get titles of all lessons across all books',
          response: 'Array of all lesson titles with book information',
        },
      },
     vocabulary: {
       'GET /api/vocabulary': {
         description: 'Get all vocabulary from all books, with optional filters.',
         parameters: {
           book: 'string (book1, book2, book3)',
           lesson: 'string (lesson1, lesson2, etc.)',
         },
         response: 'Array of vocabulary items',
       },
       'GET /api/books/{bookId}/vocabulary': {
         description: 'Get all vocabulary for a specific book',
         parameters: {
           bookId: 'string (book1, book2, book3)',
         },
         response: 'Array of vocabulary items for the specified book',
       },
       'GET /api/books/{bookId}/lessons/{lessonId}/vocabulary': {
         description: 'Get all vocabulary for a specific lesson in a specific book',
         parameters: {
           bookId: 'string (book1, book2, book3)',
           lessonId: 'string (lesson1, lesson2, etc.)',
         },
         response: 'Array of vocabulary items for the specified lesson',
       },
     },
    },
    responseFormat: {
      success: {
        success: true,
        data: 'Requested data',
        count: 'Number of items (when applicable)',
      },
      error: {
        success: false,
        error: 'Error message',
      },
    },
    dataStructure: {
      Book: {
        id: 'string',
        title: { ar: 'string', en: 'string' },
        description: { arabic: 'string', english: 'string' },
        lessons: 'Array<Lesson>',
        available: 'boolean',
        comingSoon: 'boolean (optional)',
      },
      Lesson: {
        id: 'string',
        title: { ar: 'string', en: 'string' },
        introduction: { arabic: 'string', english: 'string' },
        rules: 'Array<Rule>',
      },
      Rule: {
        name: 'string',
        arabicText: 'string',
        explanation: 'string',
      },
      VocabularyItem: {
       id: 'string',
       word: 'string',
       transliteration: 'string',
       translation: { en: 'string' },
       type: 'string',
       root: 'string (optional)',
       plural: 'string (optional)',
       gender: 'string (optional)',
       definition: 'string',
       examples: 'Array<Example>',
       notes: 'string (optional)',
       difficulty: 'string',
       tags: 'Array<string>',
       relatedWords: 'Array<string> (optional)',
       bookId: 'string (optional)',
       lessonId: 'string | number (optional)',
      }
    },
  };

  return NextResponse.json(apiDocumentation);
}
