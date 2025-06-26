import { madinahBook1 } from '@/data/vocab/book1';
import { madinahBook2 } from '@/data/vocab/book2';
import { madinahBook3 } from '@/data/vocab/book3';
import { BookVocabulary } from './vocab';

export const allBookVocab: BookVocabulary[] = [
  madinahBook1,
  madinahBook2,
  madinahBook3,
];

export const getVocabByBookId = (bookId: string) => {
  return allBookVocab.find((book) => book.bookId === bookId);
};