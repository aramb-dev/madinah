import { Book } from './lessons';
import { book1Data } from './book1';
import { book2Data } from './book2';
import { book3Data } from './book3';

// Export all books in an array for easy access
export const booksData: Book[] = [
  book1Data,
  book2Data,
  book3Data
];

// Helper function to get a book by ID
export function getBookById(bookId: string): Book | undefined {
  return booksData.find(book => book.id === bookId);
}

// Helper function to get a lesson by ID within a specific book
export function getLessonById(bookId: string, lessonId: string) {
  const book = getBookById(bookId);
  if (!book) return undefined;
  
  return book.lessons.find(lesson => lesson.id === lessonId);
}

// Helper function to get all available books (those that have lessons)
export function getAvailableBooks() {
  return booksData.filter(book => book.lessons.length > 0);
}