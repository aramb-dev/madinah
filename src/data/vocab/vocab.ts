/**
 * @file Unified Vocabulary Schema for Madinah Books
 * @description This file defines the common schema for vocabulary data across all Madinah books.
 * It standardizes the data structure while preserving all essential information from individual books.
 */

/**
 * Enum for the different types of words (parts of speech)
 */
export enum WordType {
  Noun = 'noun',
  Verb = 'verb',
  Adjective = 'adjective',
  Adverb = 'adverb',
  Preposition = 'preposition',
  Pronoun = 'pronoun',
  Conjunction = 'conjunction',
  Particle = 'particle',
  Expression = 'expression',
  Number = 'number',
  ProperNoun = 'proper noun',
}

/**
 * Enum for difficulty levels
 */
export enum DifficultyLevel {
  Beginner = 'beginner',
  Intermediate = 'intermediate',
  Advanced = 'advanced',
}

/**
 * Enum for gender types
 */
export enum Gender {
  Masculine = 'masculine',
  Feminine = 'feminine',
  Dual = 'dual',
}

/**
 * Interface for usage examples
 */
export interface Example {
  /** The example in Arabic */
  arabic: string;

  /** The English translation of the example */
  english: string;

  /** Optional notes about the example */
  notes?: string;
}

/**
 * Interface for verb conjugation details
 */
export interface VerbConjugation {
  /** Past tense conjugations */
  past: {
    singular: {
      first: string;
      secondMasculine: string;
      secondFeminine: string;
      thirdMasculine: string;
      thirdFeminine: string;
    };
    plural: {
      first: string;
      second: string;
      thirdMasculine: string;
      thirdFeminine: string;
    };
  };

  /** Present tense conjugations */
  present: {
    singular: {
      first: string;
      secondMasculine: string;
      secondFeminine: string;
      thirdMasculine: string;
      thirdFeminine: string;
    };
    plural: {
      first: string;
      second: string;
      thirdMasculine: string;
      thirdFeminine: string;
    };
  };

  /** Optional imperative forms */
  imperative?: {
    singular: {
      masculine: string;
      feminine: string;
    };
    plural: string;
  };

  /** Optional verbal noun */
  verbalNoun?: string;

  /** Optional active participle */
  activeParticiple?: string;

  /** Optional passive participle */
  passiveParticiple?: string;
}

/**
 * Core interface for a vocabulary item
 */
export interface VocabularyItem {
  /** Unique identifier for the vocabulary item */
  id: string;

  /** The Arabic word */
  word: string;

  /** Latin character transliteration */
  transliteration: string;

  /** Translation information */
  translation: {
    /** English translation */
    en: string;
    // Can be extended for other languages in the future
  };

  /** Part of speech */
  type: WordType;

  /** Optional Arabic root */
  root?: string;

  /** Optional plural form for nouns */
  plural?: string;

  /** Optional gender information */
  gender?: Gender;

  /** Optional verb conjugation details */
  conjugation?: VerbConjugation;

  /** Detailed definition in English */
  definition: string;

  /** Usage examples */
  examples: Example[];

  /** Optional additional notes */
  notes?: string;

  /** Difficulty level */
  difficulty: DifficultyLevel;

  /** Tags for categorization and filtering */
  tags: string[];

  /** Optional related vocabulary items (by ID) */
  relatedWords?: string[];

  /** Optional book identifier */
  bookId?: string;

  /** Optional lesson number or identifier */
  lessonId?: string | number;
}

/**
 * Interface for a vocabulary list (grouping of vocabulary items)
 */
export interface VocabularyList {
  /** Unique identifier for the list */
  id: string;

  /** Title of the vocabulary list */
  title: {
    /** Arabic title */
    ar: string;

    /** English title */
    en: string;
  };

  /** Description of the vocabulary list */
  description: {
    /** Arabic description */
    arabic: string;

    /** English description */
    english: string;
  };

  /** Optional book identifier */
  bookId?: string;

  /** Optional lesson identifier */
  lessonId?: string | number;

  /** Vocabulary items in this list */
  items: VocabularyItem[];

  /** Difficulty level of the list */
  level: DifficultyLevel;

  /** Tags for categorization and filtering */
  tags: string[];

  /** Order/sequence number */
  order: number;
}

/**
 * Interface for a complete book vocabulary
 */
export interface BookVocabulary {
  /** Book identifier */
  bookId: string;

  /** Book title */
  title: {
    /** Arabic title */
    ar: string;

    /** English title */
    en: string;
  };

  /** Book description */
  description?: {
    /** Arabic description */
    arabic?: string;

    /** English description */
    english?: string;
  };

  /**
   * Vocabulary data - can be organized either as lists or as a flat array
   * Use vocabularyLists for grouped organization (like Book1)
   * Use vocabularyItems for flat organization (like Book2)
   */
  vocabularyLists?: VocabularyList[];
  vocabularyItems?: VocabularyItem[];
}

/**
 * Helper function to convert flat vocabulary items to vocabulary lists
 * @param items Flat array of vocabulary items
 * @param bookId Book identifier
 * @param bookTitle Book title object
 * @returns Organized vocabulary lists
 */
export function organizeItemsIntoLists(
  items: VocabularyItem[],
  bookId: string,
  bookTitle: { ar: string; en: string }
): VocabularyList[] {
  // Group items by lesson
  const lessonGroups = items.reduce(
    (groups, item) => {
      const lessonId = item.lessonId?.toString() || 'unknown';
      if (!groups[lessonId]) {
        groups[lessonId] = [];
      }
      groups[lessonId].push(item);
      return groups;
    },
    {} as Record<string, VocabularyItem[]>
  );

  // Convert groups to vocabulary lists
  return Object.entries(lessonGroups).map(([lessonId, lessonItems], index) => {
    return {
      id: `list${lessonId.padStart(3, '0')}`,
      title: {
        ar: `مفردات الدرس ${lessonId}`,
        en: `Lesson ${lessonId} Vocabulary`,
      },
      description: {
        arabic: `الكلمات الجديدة في الدرس ${lessonId}.`,
        english: `New words in lesson ${lessonId}.`,
      },
      bookId,
      lessonId,
      items: lessonItems,
      level: lessonItems[0]?.difficulty || DifficultyLevel.Beginner,
      tags: [`lesson${lessonId}`],
      order: parseInt(lessonId) || index + 1,
    };
  });
}

/**
 * Helper function to flatten vocabulary lists into individual items
 * @param lists Vocabulary lists
 * @returns Flat array of vocabulary items
 */
export function flattenListsToItems(lists: VocabularyList[]): VocabularyItem[] {
  return lists.flatMap((list) =>
    list.items.map((item) => ({
      ...item,
      bookId: item.bookId || list.bookId,
      lessonId: item.lessonId || list.lessonId,
    }))
  );
}
