import { Book } from './lessons';

export const book2Data: Book = {
  id: 'book2',
  title: { ar: 'كتاب المدينة الثاني', en: 'Madinah Book 2' },
  description: {
    arabic: 'الكتاب الثاني من سلسلة تعليم اللغة العربية لغير الناطقين بها - المستوى المتوسط',
    english:
      'The second book in the Arabic language learning series for non-native speakers - Intermediate level',
  },
  lessons: [
    // Placeholder for future lessons
    {
      id: 'coming-soon',
      title: { ar: 'قريباً', en: 'Coming Soon' },
      introduction: {
        arabic: 'سيتم إضافة دروس الكتاب الثاني قريباً. ترقبوا التحديثات!',
        english: 'Lessons from Book 2 will be added soon. Stay tuned for updates!',
      },
      rules: [],
    },
  ],
};
