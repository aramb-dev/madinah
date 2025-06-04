// Book 3 data - placeholder
import { Book } from './lessons';

export const book3Data: Book = {
  id: 'book3',
  title: { ar: 'كتاب المدينة الثالث', en: 'Madinah Book 3' },
  available: false,
  comingSoon: true,
  description: {
    arabic: 'الكتاب الثالث من سلسلة تعليم اللغة العربية لغير الناطقين بها - المستوى المتقدم',
    english:
      'The third book in the Arabic language learning series for non-native speakers - Advanced level',
  },
  lessons: [
    // Placeholder for future lessons
    {
      id: 'coming-soon',
      title: { ar: 'قريباً', en: 'Coming Soon' },
      introduction: {
        arabic: 'سيتم إضافة دروس الكتاب الثالث قريباً. ترقبوا التحديثات!',
        english: 'Lessons from Book 3 will be added soon. Stay tuned for updates!',
      },
      rules: [],
    },
  ],
};
