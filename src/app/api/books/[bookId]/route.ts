import { getBookById } from '@/data/books';
import { createSuccessResponse, APIErrors } from '@/lib/api-errors';

type Params = {
  bookId: string;
};

export async function GET(
  request: Request,
  { params }: { params: Promise<Params> }
) {
  try {
    const { bookId } = await params;

    // Validate bookId format if needed
    if (!bookId || typeof bookId !== 'string') {
      return APIErrors.INVALID_ID('Book');
    }

    const book = getBookById(bookId);

    if (!book) {
      return APIErrors.NOT_FOUND('Book');
    }

    return createSuccessResponse(book);
  } catch (error) {
    console.error('Error fetching book:', error);
    return APIErrors.INTERNAL_ERROR();
  }
}

// Handle unsupported methods
export async function POST() {
  return APIErrors.METHOD_NOT_ALLOWED(['GET']);
}

export async function PUT() {
  return APIErrors.METHOD_NOT_ALLOWED(['GET']);
}

export async function DELETE() {
  return APIErrors.METHOD_NOT_ALLOWED(['GET']);
}