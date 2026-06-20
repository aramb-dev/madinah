/**
 * @file Local vocabulary schema for Book 3
 * @description Type definitions used by the legacy Book 3 vocabulary data files.
 * Kept local to the book3 directory so the data is type-checked without
 * conflicting with the unified schema in `src/data/vocab/vocab.ts`.
 */

export enum WordType {
  Noun = "noun",
  Verb = "verb",
  Adjective = "adjective",
  Adverb = "adverb",
  Preposition = "preposition",
  Pronoun = "pronoun",
  Conjunction = "conjunction",
  Particle = "particle",
  Expression = "expression",
  Number = "number",
  ProperNoun = "proper noun",
}

export enum DifficultyLevel {
  Beginner = "beginner",
  Intermediate = "intermediate",
  Advanced = "advanced",
}

export enum Gender {
  Masculine = "masculine",
  Feminine = "feminine",
  Dual = "dual",
}

export interface Example {
  arabic: string;
  english: string;
  notes?: string;
}

export interface VocabularyItem {
  id: string;
  word: string;
  transliteration: string;
  translation: { en: string };
  type: WordType;
  gender?: Gender;
  plural?: string;
  root?: string;
  definition: string;
  examples: Example[];
  difficulty: DifficultyLevel;
  tags: string[];
  bookId?: string;
  lessonId?: string | number;
  notes?: string;
  conjugation?: {
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
    imperative?: {
      singular: { masculine: string; feminine: string };
      plural: string;
    };
    verbalNoun?: string;
    activeParticiple?: string;
    passiveParticiple?: string;
  };
}

export interface VocabularyList {
  id: string;
  title: { ar: string; en: string };
  description: { arabic: string; english: string };
  bookId?: string;
  lessonId?: string | number;
  level: DifficultyLevel;
  tags: string[];
  order: number;
  items: VocabularyItem[];
}

export interface BookVocabulary {
  bookId: string;
  title: { ar: string; en: string };
  description: { arabic: string; english: string };
  vocabularyLists: VocabularyList[];
}
