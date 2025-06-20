import { NextResponse } from 'next/server';

export interface APIError {
  success: false;
  error: string;
  message?: string;
  code?: string;
  timestamp: string;
}

export interface APISuccess<T = unknown> {
  success: true;
  data: T;
  count?: number;
  timestamp: string;
}

export function createErrorResponse(
  error: string,
  status: number = 500,
  message?: string,
  code?: string
): NextResponse<APIError> {
  return NextResponse.json(
    {
      success: false,
      error,
      message,
      code,
      timestamp: new Date().toISOString(),
    },
    {
      status,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}

export function createSuccessResponse<T>(data: T, count?: number): NextResponse<APISuccess<T>> {
  return NextResponse.json(
    {
      success: true,
      data,
      count,
      timestamp: new Date().toISOString(),
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}

// Predefined error responses
export const APIErrors = {
  NOT_FOUND: (resource: string = 'Resource') =>
    createErrorResponse(
      `${resource} not found`,
      404,
      `The requested ${resource.toLowerCase()} could not be found`,
      'NOT_FOUND'
    ),

  INVALID_ID: (resource: string = 'Resource') =>
    createErrorResponse(
      `Invalid ${resource.toLowerCase()} ID`,
      400,
      `The provided ${resource.toLowerCase()} ID is not valid`,
      'INVALID_ID'
    ),

  INTERNAL_ERROR: () =>
    createErrorResponse(
      'Internal server error',
      500,
      'An unexpected error occurred while processing your request',
      'INTERNAL_ERROR'
    ),

  BAD_REQUEST: (message: string = 'Bad request') =>
    createErrorResponse('Bad request', 400, message, 'BAD_REQUEST'),

  METHOD_NOT_ALLOWED: (allowedMethods: string[] = []) =>
    createErrorResponse(
      'Method not allowed',
      405,
      `This endpoint only supports: ${allowedMethods.join(', ')}`,
      'METHOD_NOT_ALLOWED'
    ),
};
