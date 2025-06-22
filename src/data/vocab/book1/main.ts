import { BookVocabulary } from '../vocab';
import { book1Lessons } from './lessons';

export const madinahBook1: BookVocabulary = {
  bookId: 'book1',
  title: {
    ar: 'دروس اللغة العربية لغير الناطقين بها - الكتاب الأول',
    en: 'Lessons in Arabic Language for Non-Native Speakers - Book 1',
  },
  description: {
    arabic: 'مفردات الكتاب الأول من سلسلة دروس اللغة العربية، الدروس 1-23',
    english: 'Vocabulary from Book 1 of the Arabic Language Lessons series, lessons 1-23',
  },
  vocabularyLists: book1Lessons,
};