/**
 * @file Madinah Book 2 Vocabulary Data
 * @description This file contains the vocabulary data extracted from Madinah Book 2, lessons 1-31.
 * The data is structured according to the unified vocabulary schema.
 * @version 2.0.0
 */

import {
  BookVocabulary,
  DifficultyLevel,
  Gender,
  WordType,
} from '../vocab';

/**
 * Complete vocabulary data for Madinah Book 2
 */
export const madinahBook2: BookVocabulary = {
  bookId: 'book2',
  title: {
    ar: 'دروس اللغة العربية لغير الناطقين بها - الكتاب الثاني',
    en: 'Lessons in Arabic Language for Non-Native Speakers - Book 2',
  },
  description: {
    ar: 'مفردات الكتاب الثاني من سلسلة دروس اللغة العربية، الدروس 1-31',
    en: 'Vocabulary from Book 2 of the Arabic Language Lessons series, lessons 1-31',
  },
  isPublished: false,
  vocabularyLists: [],
};