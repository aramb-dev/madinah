/**
 * @file Madinah Book 2 Vocabulary Data
 * @description This file contains the vocabulary data extracted from Madinah Book 2, lessons 1-31.
 * The data is structured according to the unified vocabulary schema.
 * @version 1.0.0
 */

import {
  WordType,
  DifficultyLevel,
  Gender,
  VocabularyItem,
  BookVocabulary
} from './vocab';

/**
 * Complete vocabulary data for Madinah Book 2
 */
export const madinahBook2: BookVocabulary = {
  bookId: 'book2',
  title: {
    ar: 'دروس اللغة العربية لغير الناطقين بها - الكتاب الثاني',
    en: 'Lessons in Arabic Language for Non-Native Speakers - Book 2'
  },
  description: {
    arabic: 'مفردات الكتاب الثاني من سلسلة دروس اللغة العربية، الدروس 1-31',
    english: 'Vocabulary from Book 2 of the Arabic Language Lessons series, lessons 1-31'
  },
  vocabularyItems: [
    // ----------- LESSON 1 -----------
    {
      id: 'b2l1v1',
      word: 'ذُو',
      transliteration: 'dhu',
      translation: { en: 'Possessor of' },
      type: WordType.Noun,
      gender: Gender.Masculine,
      definition: 'Possessor of, owner of (masculine, singular).',
      examples: [],
      difficulty: DifficultyLevel.Intermediate,
      tags: ['lesson1', 'possession'],
      notes: 'Used in construct state.',
      plural: 'ذَوُو',
      bookId: 'book2',
      lessonId: 1
    },
    {
      id: 'b2l1v2',
      word: 'ذَاتُ',
      transliteration: 'dhatu',
      translation: { en: 'Possessor of' },
      type: WordType.Noun,
      gender: Gender.Feminine,
      definition: 'Possessor of, owner of (feminine, singular).',
      examples: [],
      difficulty: DifficultyLevel.Intermediate,
      tags: ['lesson1', 'possession'],
      notes: 'Used in construct state.',
      plural: 'ذَوَاتُ',
      bookId: 'book2',
      lessonId: 1
    },
    {
      id: 'b2l1v3',
      word: 'خُلُق',
      transliteration: 'khuluq',
      translation: { en: 'Manner' },
      type: WordType.Noun,
      plural: 'أَخْلَاق',
      definition: 'Manner, character, or disposition.',
      examples: [],
      difficulty: DifficultyLevel.Intermediate,
      tags: ['lesson1', 'character'],
      bookId: 'book2',
      lessonId: 1
    },
    {
      id: 'b2l1v4',
      word: 'أَمْ',
      transliteration: 'am',
      translation: { en: 'Or' },
      type: WordType.Conjunction,
      definition: 'Or (used in questions to present an alternative).',
      examples: [],
      difficulty: DifficultyLevel.Intermediate,
      tags: ['lesson1', 'conjunction'],
      bookId: 'book2',
      lessonId: 1
    },
    {
      id: 'b2l1v5',
      word: 'أَوْ',
      transliteration: 'aw',
      translation: { en: 'Or' },
      type: WordType.Conjunction,
      definition: 'Or (used in statements, not typically in questions).',
      examples: [],
      difficulty: DifficultyLevel.Intermediate,
      tags: ['lesson1', 'conjunction'],
      bookId: 'book2',
      lessonId: 1
    },

    // ----------- LESSON 2 -----------
    {
      id: 'b2l2v1',
      word: 'لَيْسَ',
      transliteration: 'laysa',
      translation: { en: 'Is not' },
      type: WordType.Verb,
      definition: 'A verb of negation, meaning "is not", "am not", "are not". It is an incomplete verb (فعل ناقص).',
      examples: [],
      difficulty: DifficultyLevel.Intermediate,
      tags: ['lesson2', 'verb', 'negation'],
      notes: 'Conjugates for person and number, e.g., لَسْتُ (I am not), لَيْسُوا (they are not).',
      bookId: 'book2',
      lessonId: 2
    },
    {
      id: 'b2l2v2',
      word: 'مَسْرُور',
      transliteration: 'masrur',
      translation: { en: 'Happy' },
      type: WordType.Adjective,
      definition: 'Feeling or showing pleasure or contentment.',
      examples: [],
      difficulty: DifficultyLevel.Intermediate,
      tags: ['lesson2', 'adjective', 'emotion'],
      bookId: 'book2',
      lessonId: 2
    },

    // ----------- LESSON 3 -----------
    {
      id: 'b2l3v1',
      word: 'أَكْبَرُ',
      transliteration: 'akbar',
      translation: { en: 'Bigger / Biggest' },
      type: WordType.Adjective,
      definition: 'The elative/comparative form of كَبِير, meaning "bigger" or "biggest".',
      examples: [],
      difficulty: DifficultyLevel.Intermediate,
      tags: ['lesson3', 'adjective', 'comparative'],
      bookId: 'book2',
      lessonId: 3
    },
    {
      id: 'b2l3v2',
      word: 'أَطْوَلُ',
      transliteration: 'atwal',
      translation: { en: 'Taller / Tallest' },
      type: WordType.Adjective,
      definition: 'The elative/comparative form of طَوِيل, meaning "taller" or "tallest".',
      examples: [],
      difficulty: DifficultyLevel.Intermediate,
      tags: ['lesson3', 'adjective', 'comparative'],
      bookId: 'book2',
      lessonId: 3
    }
  ]
};
