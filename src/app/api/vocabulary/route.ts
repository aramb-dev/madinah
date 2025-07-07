import { NextResponse } from 'next/server';
import { allBooksVocab } from '@/data/vocab';
import { flattenListsToItems } from '@/data/vocab/vocab';
import type { VocabularyItem } from '@/types/vocabulary';

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const bookId = searchParams.get('book');
  const lessonId = searchParams.get('lesson');

  const allVocab = Object.values(allBooksVocab).flatMap((book) => {
    if (book.vocabularyLists) {
      return flattenListsToItems(book.vocabularyLists);
    }
    return book.vocabularyItems || [];
  });

  let filteredVocab: VocabularyItem[] = allVocab;

  if (bookId) {
    filteredVocab = filteredVocab.filter((item) => item.bookId === bookId);
  }

  if (lessonId) {
    filteredVocab = filteredVocab.filter(
      (item) => String(item.lessonId) === lessonId
    );
  }

  return NextResponse.json({
    success: true,
    data: filteredVocab,
    count: filteredVocab.length,
  });
}
