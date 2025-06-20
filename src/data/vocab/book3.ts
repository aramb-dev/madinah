/**
 * @file This file contains the vocabulary data for Madinah Book 3.
 *
 * @description The data is structured according to the schema from
 * vocabulary-schema-design.md, with slight adaptations for the verb-heavy
 * content of "madina-arabic-book-3-vocabulary.pdf". This implementation
 * covers the first lesson as a starting point.
 */

// ---------------------------------------------------------------- //
// 1. CORE INTERFACES (from vocabulary-schema-design.md)
// ---------------------------------------------------------------- //

/**
 * Defines the type of a word (e.g., noun, verb).
 */
export enum WordType {
  Noun = 'noun',
  Verb = 'verb',
  Adjective = 'adjective',
  Adverb = 'adverb',
  Preposition = 'preposition',
  Pronoun = 'pronoun',
  Conjunction = 'conjunction',
  Particle = 'particle',
  Expression = 'expression',
  Question = 'question',
}

/**
 * Represents a usage example for a vocabulary item.
 */
export interface Example {
  arabic: string; // Example sentence in Arabic
  english: string; // Translation in English
  notes?: string; // Optional notes about the example
}

/**
 * Represents a single vocabulary item, adapted for Book 3 content.
 */
export interface VocabularyItem {
  id: string; // Unique identifier (e.g., 'b3-l1-v01')
  word: string; // The Arabic word, typically the past tense for verbs or the singular for nouns.
  pastTense?: string; // Past tense form of the verb.
  presentTense?: string; // Present tense form of the verb.
  translation: {
    en: string; // English translation
  };
  type: WordType; // Part of speech
  plural?: string; // Plural form
  gender?: 'masculine' | 'feminine' | 'neuter';
  definition: string; // Detailed definition in English
  examples: Example[];
  notes?: string; // For verb forms (e.g., "Form V") or other details.
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
  relatedWords?: string[];
}

/**
 * Represents a list of vocabulary items, typically for a lesson.
 */
export interface VocabularyList {
  id: string; // Unique identifier for the list (e.g., 'b3-list01')
  title: {
    ar: string;
    en: string;
  };
  description: {
    arabic: string;
    english: string;
  };
  bookId: string; // Associated book
  lessonId: string; // Associated lesson
  items: string[]; // Array of vocabulary item IDs
  level: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
  order: number; // For custom ordering
}


// ---------------------------------------------------------------- //
// 2. VOCABULARY DATA (Madinah Book 3, Lesson 1)
// ---------------------------------------------------------------- //

/**
 * All vocabulary items for Madinah Book 3.
 */
export const vocabularyItemsBook3: VocabularyItem[] = [
  // --- Lesson 1 Vocabulary ---
  {
    id: 'b3-l1-v01',
    word: 'تَغَيَّرَ',
    pastTense: 'تَغَيَّرَ',
    presentTense: 'يَتَغَيَّرُ',
    translation: { en: 'to change' },
    type: WordType.Verb,
    definition: 'To make or become different.',
    examples: [],
    notes: 'Form V',
    difficulty: 'advanced',
    tags: ['book3', 'lesson1', 'verb'],
  },
  {
    id: 'b3-l1-v02',
    word: 'ظَهَرَ',
    pastTense: 'ظَهَرَ',
    presentTense: 'يَظْهَرُ',
    translation: { en: 'to appear' },
    type: WordType.Verb,
    definition: 'To come into sight; become visible or noticeable.',
    examples: [],
    notes: 'Form (a-a)',
    difficulty: 'advanced',
    tags: ['book3', 'lesson1', 'verb'],
  },
  {
    id: 'b3-l1-v03',
    word: 'مَيَّزَ',
    pastTense: 'مَيَّزَ',
    presentTense: 'يُمَيِّزُ',
    translation: { en: 'to sort out, separate' },
    type: WordType.Verb,
    definition: 'To distinguish or separate from others.',
    examples: [],
    notes: 'Form II',
    difficulty: 'advanced',
    tags: ['book3', 'lesson1', 'verb'],
  },
  {
    id: 'b3-l1-v04',
    word: 'بَاشَرَ',
    pastTense: 'بَاشَرَ',
    presentTense: 'يُبَاشِرُ',
    translation: { en: 'to be directly attached' },
    type: WordType.Verb,
    definition: 'To be directly attached or to undertake something directly.',
    examples: [],
    notes: 'Form III',
    difficulty: 'advanced',
    tags: ['book3', 'lesson1', 'verb'],
  },
  {
    id: 'b3-l1-v05',
    word: 'نَحْوِيّ',
    translation: { en: 'grammarian' },
    type: WordType.Noun,
    plural: 'نُحَاةٌ',
    definition: 'A person who studies and writes about grammar.',
    examples: [],
    difficulty: 'advanced',
    tags: ['book3', 'lesson1', 'noun', 'people'],
  },
  {
    id: 'b3-l1-v06',
    word: 'فِئَةٌ',
    translation: { en: 'group, class' },
    type: WordType.Noun,
    plural: 'فِئَاتٌ',
    definition: 'A category or group of people or things.',
    examples: [],
    difficulty: 'advanced',
    tags: ['book3', 'lesson1', 'noun'],
  },
  {
    id: 'b3-l1-v07',
    word: 'مُحَامٍ',
    translation: { en: 'lawyer' },
    type: WordType.Noun,
    plural: 'مُحَامُونَ',
    definition: 'A person who practices or studies law.',
    examples: [],
    notes: 'Definite form: الْمُحَامِي',
    difficulty: 'advanced',
    tags: ['book3', 'lesson1', 'noun', 'profession'],
  },
  {
    id: 'b3-l1-v08',
    word: 'جَانٍ',
    translation: { en: 'criminal, culprit' },
    type: WordType.Noun,
    plural: 'جُنَاةٌ',
    definition: 'A person who has committed a crime.',
    examples: [],
    notes: 'Definite form: الْجَانِي',
    difficulty: 'advanced',
    tags: ['book3', 'lesson1', 'noun', 'people'],
  },
  {
    id: 'b3-l1-v09',
    word: 'مُطْلَقًا',
    translation: { en: 'absolutely' },
    type: WordType.Adverb,
    definition: 'With no qualification, restriction, or limitation; totally.',
    examples: [],
    difficulty: 'advanced',
    tags: ['book3', 'lesson1', 'adverb'],
  },
  {
    id: 'b3-l1-v10',
    word: 'مَا عَدَا',
    translation: { en: 'except' },
    type: WordType.Expression,
    definition: 'A phrase used to indicate an exception.',
    examples: [],
    difficulty: 'advanced',
    tags: ['book3', 'lesson1', 'particle'],
  },
  {
    id: 'b3-l1-v11',
    word: 'أَقْرَبُ',
    translation: { en: 'relative' },
    type: WordType.Noun,
    plural: 'أَقْرَبُونَ، أَقَارِبُ',
    definition: 'A person connected by blood or marriage.',
    examples: [],
    difficulty: 'advanced',
    tags: ['book3', 'lesson1', 'noun', 'people'],
  },
  {
    id: 'b3-l1-v12',
    word: 'أَفْعَى',
    translation: { en: 'viper' },
    type: WordType.Noun,
    plural: 'أَفَاعٍ',
    definition: 'A venomous snake with large hinged fangs.',
    examples: [],
    difficulty: 'advanced',
    tags: ['book3', 'lesson1', 'noun', 'animal'],
  },
  {
    id: 'b3-l1-v13',
    word: 'حَذَفَ',
    pastTense: 'حَذَفَ',
    presentTense: 'يَحْذِفُ',
    translation: { en: 'to omit' },
    type: WordType.Verb,
    definition: 'To leave out or exclude (someone or something).',
    examples: [],
    notes: 'Form (a-i)',
    difficulty: 'advanced',
    tags: ['book3', 'lesson1', 'verb'],
  },
  {
    id: 'b3-l1-v14',
    word: 'مُتَّقٍ',
    translation: { en: 'god-fearing, pious' },
    type: WordType.Adjective,
    plural: 'مُتَّقُونَ',
    definition: 'Devoutly religious.',
    examples: [],
    notes: 'Definite form: الْمُتَّقِي',
    difficulty: 'advanced',
    tags: ['book3', 'lesson1', 'adjective', 'people'],
  },
  {
    id: 'b3-l1-v15',
    word: 'حَرٌّ',
    translation: { en: 'heat' },
    type: WordType.Noun,
    definition: 'The quality of being hot; high temperature.',
    examples: [],
    difficulty: 'advanced',
    tags: ['book3', 'lesson1', 'noun', 'nature'],
  },
  {
    id: 'b3-l1-v16',
    word: 'جَرِيحٌ',
    translation: { en: 'wounded person' },
    type: WordType.Noun,
    plural: 'جَرْحَى',
    definition: 'A person who is injured.',
    examples: [],
    difficulty: 'advanced',
    tags: ['book3', 'lesson1', 'noun', 'people'],
  },
  {
    id: 'b3-l1-v17',
    word: 'اتَّصَلَ',
    pastTense: 'اتَّصَلَ',
    presentTense: 'يَتَّصِلُ',
    translation: { en: 'to contact, to get in touch, to be attached' },
    type: WordType.Verb,
    definition: 'To communicate with someone or to be physically connected.',
    examples: [],
    notes: 'Form VIII',
    difficulty: 'advanced',
    tags: ['book3', 'lesson1', 'verb'],
  },
  {
    id: 'b3-l1-v18',
    word: 'ثَبَتَ',
    pastTense: 'ثَبَتَ',
    presentTense: 'يَثْبُتُ',
    translation: { en: 'to remain, to stay' },
    type: WordType.Verb,
    definition: 'To continue to exist, especially after other things have gone.',
    examples: [],
    notes: 'Form (a-u)',
    difficulty: 'advanced',
    tags: ['book3', 'lesson1', 'verb'],
  },
  {
    id: 'b3-l1-v19',
    word: 'سِنٌّ',
    translation: { en: 'tooth, age' },
    type: WordType.Noun,
    definition: 'A hard, resistant structure in the jaws of most vertebrates; also used to refer to a person\'s age.',
    examples: [],
    difficulty: 'advanced',
    tags: ['book3', 'lesson1', 'noun'],
  },
];

/**
 * All vocabulary lists for Madinah Book 3, organized by lesson.
 */
export const vocabularyListsBook3: VocabularyList[] = [
  {
    id: 'b3-list01',
    title: {
      ar: 'مُفْرَدَاتُ الدَّرْسِ الْأَوَّلِ',
      en: 'Lesson 1 Vocabulary',
    },
    description: {
      arabic: 'الْكَلِمَاتُ الْجَدِيدَةُ فِي الدَّرْسِ الْأَوَّلِ مِنْ الْكِتَابِ الثَّالِثِ',
      english: 'New words introduced in Lesson 1 of Book 3.',
    },
    bookId: 'book3',
    lessonId: 'lesson1',
    items: [
        'b3-l1-v01', 'b3-l1-v02', 'b3-l1-v03', 'b3-l1-v04', 'b3-l1-v05',
        'b3-l1-v06', 'b3-l1-v07', 'b3-l1-v08', 'b3-l1-v09', 'b3-l1-v10',
        'b3-l1-v11', 'b3-l1-v12', 'b3-l1-v13', 'b3-l1-v14', 'b3-l1-v15',
        'b3-l1-v16', 'b3-l1-v17', 'b3-l1-v18', 'b3-l1-v19'
    ],
    level: 'advanced',
    tags: ['book3', 'lesson1'],
    order: 1,
  },
];
