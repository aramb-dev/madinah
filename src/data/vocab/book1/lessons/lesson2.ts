import * as vocab from '../../vocab';

export const lesson2 = {
      id: 'list002',
      title: { arabic: 'مفردات الدرس الثاني', english: 'Lesson 2 Vocabulary' },
      description: {
        arabic: 'الكلمات الجديدة في الدرس الثاني.',
        english: 'New words in the second lesson.',
      },
      bookId: 'book1',
      lessonId: '2',
      level: vocab.DifficultyLevel.Beginner,
      tags: ['lesson2', 'basics'],
      order: 2,
      items: [
        {
          id: 'l2-v1',
          word: 'ذَلِكَ',
          transliteration: '',
          translation: { en: 'That' },
          type: vocab.WordType.Pronoun,
          definition: 'That',
          examples: [
            { arabic: 'ذَلِكَ نَجْمٌ.', english: 'That is a star.' },
            { arabic: 'ذَلِكَ بَيْتٌ.', english: 'That is a house.' },
          ],
          difficulty: vocab.DifficultyLevel.Beginner,
          tags: ['lesson2'],
        },
        {
          id: 'l2-v2',
          word: 'مَا ذَلِكَ؟',
          transliteration: '',
          translation: { en: 'What is that?' },
          type: vocab.WordType.Expression,
          definition: 'What is that?',
          examples: [
            { arabic: 'مَا ذَلِكَ؟ ذَلِكَ قَمَرٌ.', english: 'What is that? That is a moon.' },
            { arabic: 'مَا ذَلِكَ؟ ذَلِكَ مِفْتَاحٌ.', english: 'What is that? That is a key.' },
          ],
          difficulty: vocab.DifficultyLevel.Beginner,
          tags: ['lesson2'],
        },
        {
          id: 'l2-v3',
          word: 'أَذَلِكَ..؟',
          transliteration: '',
          translation: { en: 'Is that..?' },
          type: vocab.WordType.Expression,
          definition: 'Is that..?',
          examples: [
            { arabic: 'أَذَلِكَ كَلْبٌ؟ لَا، ذَلِكَ قِطٌّ.', english: 'Is that a dog? No, that is a cat.' },
            { arabic: 'أَذَلِكَ قَمِيصٌ؟ نَعَمْ، ذَلِكَ قَمِيصٌ.', english: 'Is that a shirt? Yes, that is a shirt.' },
          ],
          difficulty: vocab.DifficultyLevel.Beginner,
          tags: ['lesson2'],
        },
      ],
    }