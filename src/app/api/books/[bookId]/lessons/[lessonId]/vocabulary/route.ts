import { NextResponse } from 'next/server';
import { getVocabByBookId } from '@/data/vocab';
import { flattenListsToItems } from '@/data/vocab/vocab';

export function GET(
  _request: Request,
  { params }: { params: { bookId: string; lessonId: string } }
) {
  const { bookId, lessonId } = params;
  const bookVocab = getVocabByBookId(bookId);

  if (!bookVocab) {
    return NextResponse.json(
      { success: false, message: 'Book not found' },
      { status: 404 }
    );
  }

  const allVocab = bookVocab.vocabularyLists
    ? flattenListsToItems(bookVocab.vocabularyLists)
    : bookVocab.vocabularyItems || [];

  const lessonVocab = allVocab.filter(
    (item) => String(item.lessonId) === lessonId
  );

  return NextResponse.json({
    success: true,
    data: lessonVocab,
    count: lessonVocab.length,
  });
}