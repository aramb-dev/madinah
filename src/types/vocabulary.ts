/**
 * @file Vocabulary data types for the Madinah Books application.
 * @description This file defines the core TypeScript interfaces for vocabulary items.
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
  };

  /** Part of speech */
  type: WordType;

  /** Optional Arabic root */
  root?: string;

  /** Optional plural form for nouns */
  plural?: string;

  /** Optional gender information */
  gender?: Gender;

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