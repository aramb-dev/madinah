/**
 * @file Madinah Book 3 Vocabulary Data
 * @description This file contains the vocabulary data for Madinah Book 3.
 * The data is structured according to the unified vocabulary schema.
 */

import {
  BookVocabulary,
} from '../vocab';

/**
 * Complete vocabulary data for Madinah Book 3
 */
export const madinahBook3: BookVocabulary = {
  bookId: 'book3',
  title: {
    ar: 'دروس اللغة العربية لغير الناطقين بها - الكتاب الثالث',
    en: 'Lessons in Arabic Language for Non-Native Speakers - Book 3',
  },
  description: {
    ar: 'مفردات الكتاب الثالث من سلسلة دروس اللغة العربية',
    en: 'Vocabulary from Book 3 of the Arabic Language Lessons series',
  },
  isPublished: false,
  vocabularyLists: [],
};