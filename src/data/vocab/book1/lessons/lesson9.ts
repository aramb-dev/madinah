import * as vocab from '../../vocab';

export const lesson9 = {
  id: 'list009',
  title: { ar: 'مفردات الدرس التاسع', en: 'Lesson 9 Vocabulary' },
  description: {
    ar: 'الكلمات الجديدة في الدرس التاسع.',
    en: 'New words in the ninth lesson.',
  },
  bookId: 'book1',
  lessonId: '9',
  level: vocab.DifficultyLevel.Beginner,
  tags: ['lesson9', 'adjectives', 'people', 'language'],
  order: 9,
  items: [
    {
      id: 'l9-v1',
      word: 'فَاكِهَةٌ',
      transliteration: '',
      translation: { en: 'Fruit' },
      type: vocab.WordType.Noun,
      definition: 'Fruit',
      examples: [
        { arabic: 'هَذِهِ فَاكِهَةٌ لَذِيذَةٌ.', english: 'This is a delicious fruit.' },
        { arabic: 'أُحِبُّ الْفَاكِهَةَ.', english: 'I like fruit.' }
      ],
      difficulty: vocab.DifficultyLevel.Beginner,
      tags: ['lesson9'],
    },
    {
      id: 'l9-v2',
      word: 'عُصْفُورٌ',
      transliteration: '',
      translation: { en: 'Sparrow' },
      type: vocab.WordType.Noun,
      definition: 'Sparrow',
      examples: [
        { arabic: 'الْعُصْفُورُ عَلَى الشَّجَرَةِ.', english: 'The sparrow is on the tree.' },
        { arabic: 'هَذَا عُصْفُورٌ صَغِيرٌ.', english: 'This is a small sparrow.' }
      ],
      difficulty: vocab.DifficultyLevel.Beginner,
      tags: ['lesson9'],
    },
    {
      id: 'l9-v3',
      word: 'طَائِرٌ',
      transliteration: '',
      translation: { en: 'Bird' },
      type: vocab.WordType.Noun,
      plural: 'طُيُورٌ',
      definition: 'Bird',
      examples: [
        { arabic: 'ذَلِكَ طَائِرٌ جَمِيلٌ.', english: 'That is a beautiful bird.' },
        { arabic: 'الطَّائِرُ يَطِيرُ فِي السَّمَاءِ.', english: 'The bird flies in the sky.' }
      ],
      difficulty: vocab.DifficultyLevel.Beginner,
      tags: ['lesson9'],
    },
    {
      id: 'l9-v4',
      word: 'الْعَرَبِيَّةُ',
      transliteration: '',
      translation: { en: 'Arabic' },
      type: vocab.WordType.Noun,
      definition: 'Arabic',
      examples: [
        { arabic: 'اللُّغَةُ الْعَرَبِيَّةُ سَهْلَةٌ.', english: 'The Arabic language is easy.' },
        { arabic: 'أَنَا أَدْرُسُ الْعَرَبِيَّةَ.', english: 'I am studying Arabic.' }
      ],
      difficulty: vocab.DifficultyLevel.Beginner,
      tags: ['lesson9', 'language'],
    },
    {
      id: 'l9-v5',
      word: 'لُغَةٌ',
      transliteration: '',
      translation: { en: 'Language' },
      type: vocab.WordType.Noun,
      plural: 'لُغَاتٌ',
      definition: 'Language',
      examples: [
        { arabic: 'هَذِهِ لُغَةٌ جَمِيلَةٌ.', english: 'This is a beautiful language.' },
        { arabic: 'كَمْ لُغَةً تَعْرِفُ؟', english: 'How many languages do you know?' }
      ],
      difficulty: vocab.DifficultyLevel.Beginner,
      tags: ['lesson9'],
    },
  ],
};
