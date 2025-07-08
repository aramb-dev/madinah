import { NextResponse } from 'next/server';

/**
 * Handles requests to non-existent API endpoints by returning a standardized
 * JSON 404 error response. This function is used by all HTTP method handlers
 * in this catch-all route.
 */
function notFoundResponse() {
  return NextResponse.json(
    {
      success: false,
      error: 'API endpoint not found',
      message: 'The requested API endpoint does not exist',
      availableEndpoints: {
        documentation: '/api',
        books: '/api/books',
        lessons: '/api/lessons',
        metadata: '/api/metadata',
        lessonTitles: '/api/lesson-titles',
      },
      timestamp: new Date().toISOString(),
    },
    {
      status: 404,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}

// Export handlers for all common HTTP methods to ensure any type of request
// to a non-existent endpoint is caught.
export async function GET() {
  return notFoundResponse();
}

export async function POST() {
  return notFoundResponse();
}

export async function PUT() {
  return notFoundResponse();
}

export async function DELETE() {
  return notFoundResponse();
}

export async function PATCH() {
  return notFoundResponse();
}

export async function HEAD() {
  return notFoundResponse();
}

export async function OPTIONS() {
  return notFoundResponse();
}