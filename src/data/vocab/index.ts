import { madinahBook1 } from './book1/main';
import { madinahBook2 } from './book2/main';
import { madinahBook3 } from './book3/main';
import type { BookVocabulary } from './vocab';

export const allBooksVocab: Record<string, BookVocabulary> = {
  book1: madinahBook1,
  book2: madinahBook2,
  book3: madinahBook3,
};

export type BookId = keyof typeof allBooksVocab;

export const getVocabByBookId = (bookId: string): BookVocabulary | undefined => {
  return allBooksVocab[bookId as BookId];
};

export const getAllBookIds = (): string[] => {
  return Object.keys(allBooksVocab);
};