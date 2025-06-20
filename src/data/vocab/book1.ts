/**
 * @file Madinah Book 1 Vocabulary Data
 * @description This file contains the vocabulary data for Madinah Book 1, lessons 1-23.
 * The data is structured according to the unified vocabulary schema.
 */

import {
  WordType,
  DifficultyLevel,
  Gender,
  VocabularyItem,
  VocabularyList,
  BookVocabulary
} from './vocab';

/**
 * Complete vocabulary data for Madinah Book 1
 */
export const madinahBook1: BookVocabulary = {
  bookId: 'book1',
  title: {
    ar: 'دروس اللغة العربية لغير الناطقين بها - الكتاب الأول',
    en: 'Lessons in Arabic Language for Non-Native Speakers - Book 1'
  },
  description: {
    arabic: 'مفردات الكتاب الأول من سلسلة دروس اللغة العربية، الدروس 1-23',
    english: 'Vocabulary from Book 1 of the Arabic Language Lessons series, lessons 1-23'
  },
  vocabularyLists: [
    // Lesson 1
    {
      id: 'list001',
      title: { ar: 'مفردات الدرس الأول', en: 'Lesson 1 Vocabulary' },
      description: { arabic: 'الكلمات الجديدة في الدرس الأول.', english: 'New words in the first lesson.' },
      bookId: 'book1',
      lessonId: '1',
      level: DifficultyLevel.Beginner,
      tags: ['lesson1', 'basics', 'objects'],
      order: 1,
      items: [
        { id: 'l1-v1', word: 'هذا', transliteration: '', translation: { en: 'This is (m)' }, type: WordType.Pronoun, definition: 'This is (m)', examples: [], difficulty: DifficultyLevel.Beginner, tags: ['lesson1'], gender: Gender.Masculine },
        { id: 'l1-v2', word: 'بيت', transliteration: '', translation: { en: 'House' }, type: WordType.Noun, plural: 'بيوت', definition: 'House', examples: [], difficulty: DifficultyLevel.Beginner, tags: ['lesson1'] }
      ]
    }
  ]
};
