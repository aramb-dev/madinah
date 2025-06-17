import { NextResponse } from 'next/server';

export default function APINotFound() {
  return NextResponse.json(
    {
      success: false,
      error: 'API endpoint not found',
      message: 'The requested API endpoint does not exist',
      availableEndpoints: {
        documentation: '/api',
        books: '/api/books',
        lessons: '/api/lessons',
        metadata: '/api/metadata'
      },
      timestamp: new Date().toISOString()
    },
    { 
      status: 404,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
}