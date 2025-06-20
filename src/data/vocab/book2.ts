/**
 * @file This file contains the vocabulary data for Madinah Book 2.
 *
 * @description The data is structured according to the schema defined in
 * vocabulary-schema-design.md and extracted from "madinah book 2 vocab.pdf".
 * This implementation covers the first lesson as a starting point.
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
 * Represents a single vocabulary item.
 */
export interface VocabularyItem {
  id: string; // Unique identifier (e.g., 'b2-l1-v01')
  word: string; // The Arabic word
  transliteration?: string; // Latin character transliteration
  translation: {
    en: string; // English translation
  };
  type: WordType; // Part of speech
  plural?: string; // Plural form
  gender?: 'masculine' | 'feminine' | 'neuter';
  definition: string; // Detailed definition in English
  examples: Example[];
  notes?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
  relatedWords?: string[];
}

/**
 * Represents a list of vocabulary items, typically for a lesson.
 */
export interface VocabularyList {
  id: string; // Unique identifier for the list (e.g., 'b2-list01')
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
// 2. VOCABULARY DATA (Madinah Book 2)
// ---------------------------------------------------------------- //

/**
 * All vocabulary items for Madinah Book 2.
 */
export const vocabularyItemsBook2: VocabularyItem[] = [
  // --- Lesson 1 Vocabulary ---
  {
    id: 'b2-l1-v01',
    word: 'ذُو',
    translation: { en: 'Possess (m, sing)' },
    type: WordType.Noun,
    gender: 'masculine',
    plural: 'ذَوُو',
    definition: 'A noun meaning owner or possessor, used in constructs.',
    examples: [],
    difficulty: 'intermediate',
    tags: ['book2', 'lesson1', 'state'],
  },
  {
    id: 'b2-l1-v02',
    word: 'خُلُق',
    translation: { en: 'Manner' },
    type: WordType.Noun,
    plural: 'أَخْلَاق',
    definition: 'Refers to character, disposition, or manners.',
    examples: [],
    difficulty: 'intermediate',
    tags: ['book2', 'lesson1', 'abstract'],
  },
  {
    id: 'b2-l1-v03',
    word: 'غَالٍ',
    translation: { en: 'Expensive' },
    type: WordType.Adjective,
    gender: 'masculine',
    definition: 'Describes something of high price or value.',
    notes: "Feminine form is غَالِيَةٌ",
    examples: [],
    difficulty: 'intermediate',
    tags: ['book2', 'lesson1', 'adjective', 'quality'],
  },
  {
    id: 'b2-l1-v04',
    word: 'رَخِيصٌ',
    translation: { en: 'Cheap' },
    type: WordType.Adjective,
    gender: 'masculine',
    plural: 'رِخَاصٌ',
    definition: 'Describes something of low price.',
    notes: "Feminine form is رَخِيصَةٌ",
    examples: [],
    difficulty: 'intermediate',
    tags: ['book2', 'lesson1', 'adjective', 'quality'],
  },
  {
    id: 'b2-l1-v05',
    word: 'مِائَة',
    translation: { en: 'Hundred' },
    type: WordType.Noun,
    definition: 'The number 100.',
    examples: [],
    difficulty: 'intermediate',
    tags: ['book2', 'lesson1', 'number'],
  },
  {
    id: 'b2-l1-v06',
    word: 'أَلْف',
    translation: { en: 'Thousand' },
    type: WordType.Noun,
    definition: 'The number 1000.',
    examples: [],
    difficulty: 'intermediate',
    tags: ['book2', 'lesson1', 'number'],
  },
  {
    id: 'b2-l1-v07',
    word: 'ذَكِيٌّ',
    translation: { en: 'Intelligent' },
    type: WordType.Adjective,
    gender: 'masculine',
    plural: 'أَذْكِيَاءُ',
    definition: 'Having or showing a quick-witted intelligence.',
    notes: "Feminine form is ذَكِيَّةٌ",
    examples: [],
    difficulty: 'intermediate',
    tags: ['book2', 'lesson1', 'adjective', 'people'],
  },
  {
    id: 'b2-l1-v08',
    word: 'مُتَزَوِّج',
    translation: { en: 'Married' },
    type: WordType.Adjective,
    gender: 'masculine',
    definition: 'Describes a person who is married.',
    notes: "Feminine form is مُتَزَوِّجَةٌ",
    examples: [],
    difficulty: 'intermediate',
    tags: ['book2', 'lesson1', 'people', 'status'],
  },
  {
    id: 'b2-l1-v09',
    word: 'أَعْزَبُ',
    translation: { en: 'Unmarried' },
    type: WordType.Adjective,
    gender: 'masculine',
    plural: 'عُزَّابٌ',
    definition: 'Describes a person who is not married; single.',
    notes: 'The source PDF for this vocabulary item has a likely typo.',
    examples: [],
    difficulty: 'intermediate',
    tags: ['book2', 'lesson1', 'people', 'status'],
  },
   {
    id: 'b2-l1-v10',
    word: 'مُعْجَمٌ',
    translation: { en: 'Dictionary' },
    type: WordType.Noun,
    gender: 'masculine',
    plural: 'مَعَاجِمُ',
    definition: 'A book or electronic resource that lists the words of a language and gives their meaning.',
    examples: [],
    difficulty: 'intermediate',
    tags: ['book2', 'lesson1', 'objects', 'education'],
  },
  {
    id: 'b2-l1-v11',
    word: 'فَقَطْ',
    translation: { en: 'Only' },
    type: WordType.Adverb,
    definition: 'And nothing more or different; only.',
    examples: [],
    difficulty: 'intermediate',
    tags: ['book2', 'lesson1', 'adverb'],
  },
];

/**
 * All vocabulary lists for Madinah Book 2, organized by lesson.
 */
export const vocabularyListsBook2: VocabularyList[] = [
  {
    id: 'b2-list01',
    title: {
      ar: 'مُفْرَدَاتُ الدَّرْسِ الْأَوَّلِ',
      en: 'Lesson 1 Vocabulary',
    },
    description: {
      arabic: 'الْكَلِمَاتُ الْجَدِيدَةُ فِي الدَّرْسِ الْأَوَّلِ مِنْ الْكِتَابِ الثَّانِي',
      english: 'New words introduced in Lesson 1 of Book 2.',
    },
    bookId: 'book2',
    lessonId: 'lesson1',
    items: [
      'b2-l1-v01',
      'b2-l1-v02',
      'b2-l1-v03',
      'b2-l1-v04',
      'b2-l1-v05',
      'b2-l1-v06',
      'b2-l1-v07',
      'b2-l1-v08',
      'b2-l1-v09',
      'b2-l1-v10',
      'b2-l1-v11',
    ],
    level: 'intermediate',
    tags: ['book2', 'lesson1'],
    order: 1,
  },
];
