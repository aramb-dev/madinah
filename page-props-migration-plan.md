# PageProps Migration Plan

## Executive Summary

This document outlines the plan to remove the `PageProps` type from the codebase. This migration will simplify the code by removing an unnecessary abstraction and align the components with modern Next.js data-fetching patterns. The change is low-risk and will improve performance by converting a client component to a server component, enabling Static Site Generation (SSG).

## Affected Components

The following components are affected by this migration:

1.  **`src/app/books/[bookId]/vocabulary/page.tsx`**: This server component uses `PageProps` to type the `params` object.
2.  **`src/app/books/[bookId]/lessons/[lessonId]/vocabulary/page.tsx`**: This client component uses a custom interface similar to `PageProps` to type the `params` object.

## Detailed Refactoring Plan

The refactoring will involve removing the `PageProps` type and fetching data directly in each component.

### 1. Refactor `src/app/books/[bookId]/vocabulary/page.tsx`

This component is already a Server Component, so the change is minimal. We will remove the `PageProps` type and simplify the component's props.

**Before:**

```typescript
import { PageProps } from '@/types/page';

type BookVocabularyPageProps = PageProps<{ bookId: string }>;

export default async function BookVocabularyPage({
  params,
}: BookVocabularyPageProps) {
  const { bookId } = params;
  // ...
}
```

**After:**

```typescript
interface BookVocabularyPageProps {
  params: {
    bookId: string;
  };
}

export default async function BookVocabularyPage({
  params,
}: BookVocabularyPageProps) {
  const { bookId } = params;
  // ...
}
```

### 2. Refactor `src/app/books/[bookId]/lessons/[lessonId]/vocabulary/page.tsx`

This component will be converted from a Client Component to a Server Component. This will improve performance by fetching data on the server and rendering the page statically.

**Before:**

```typescript
"use client";

import { getVocabByBookId } from '@/data/vocab';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import { getBookById } from '@/data/books';
import VocabularyList from '@/components/custom/VocabularyList';

interface LessonVocabularyPageProps {
  params: {
    bookId: string;
    lessonId: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function LessonVocabularyPage({
  params,
}: LessonVocabularyPageProps) {
  const { bookId, lessonId } = params;
  const book = getVocabByBookId(bookId);
  const bookDetails = getBookById(bookId);

  const lesson = book?.vocabularyLists?.find(
    (l) => l.lessonId?.toString() === lessonId,
  );

  if (!lesson || !bookDetails) {
    notFound();
  }

  // ...
}
```

**After:**

```typescript
import { getVocabByBookId } from '@/data/vocab';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import { getBookById } from '@/data/books';
import VocabularyList from '@/components/custom/VocabularyList';

interface LessonVocabularyPageProps {
  params: {
    bookId: string;
    lessonId: string;
  };
}

export default async function LessonVocabularyPage({
  params,
}: LessonVocabularyPageProps) {
  const { bookId, lessonId } = params;
  const book = getVocabByBookId(bookId);
  const bookDetails = getBookById(bookId);

  const lesson = book?.vocabularyLists?.find(
    (l) => l.lessonId?.toString() === lessonId,
  );

  if (!lesson || !bookDetails) {
    notFound();
  }

  if (!book) {
    return null;
  }

  return (
    <>
      <Header book={bookDetails} />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-4">
          {book.title.en} - Lesson {lesson.lessonId} Vocabulary
        </h1>
        <p className="text-center text-gray-600 mb-6">{lesson.title.en}</p>
        <VocabularyList items={lesson.items} />
      </main>
    </>
  );
}
```

## Risk and Performance Assessment

*   **Risks:** The risk is low. The primary risk is a temporary build failure if the refactoring is done incorrectly. Given the small scope, this is easily manageable.
*   **Performance:** The performance will be significantly improved. By converting `src/app/books/[bookId]/lessons/[lessonId]/vocabulary/page.tsx` to a Server Component, we enable Static Site Generation (SSG) for this page. This results in faster page loads, better SEO, and a better user experience.
*   **Caveats:** The components will become more self-contained, which is the recommended pattern in Next.js. Data is fetched directly within the component rather than being passed down from a parent.

## High-Level Migration Steps

1.  Create a new branch for the refactoring.
2.  Refactor `src/app/books/[bookId]/vocabulary/page.tsx`.
3.  Test the changes locally to ensure the page works as expected.
4.  Refactor `src/app/books/[bookId]/lessons/[lessonId]/vocabulary/page.tsx`.
5.  Test the changes locally to ensure the page works as expected.
6.  Delete the `src/types/page.ts` file.
7.  Run the build to ensure there are no build errors.
8.  Create a pull request for review.