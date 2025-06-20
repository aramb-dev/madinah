/**
 * @file This file contains the vocabulary data for Madinah Book 1,
 * structured according to the schema defined in vocabulary-schema-design.md.
 *
 * @description The data is extracted from "Madinah book 1 vocab.pdf".
 * This implementation covers the first two lessons as a sample.
 * The remaining lessons can be added following the same structure.
 * Note: Transliteration and other detailed fields like root, gender, etc.,
 * are not consistently available in the source PDF and are omitted where unknown.
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
  Question = 'question', // Added for interrogative words
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
  id: string; // Unique identifier (e.g., 'b1-l1-v01')
  word: string; // The Arabic word
  transliteration?: string; // Latin character transliteration (omitted if not available)
  translation: {
    en: string; // English translation
  };
  type: WordType; // Part of speech
  plural?: string; // Plural form (for nouns)
  gender?: 'masculine' | 'feminine' | 'neuter'; // Gender (for nouns)
  definition: string; // Detailed definition in English
  examples: Example[]; // Usage examples (empty if not available)
  notes?: string; // Additional notes
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tags: string[]; // For categorization and filtering
  relatedWords?: string[]; // IDs of related vocabulary items
}

/**
 * Represents a list of vocabulary items, typically for a lesson.
 */
export interface VocabularyList {
  id: string; // Unique identifier for the list (e.g., 'b1-list01')
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
// 2. VOCABULARY DATA (from Madinah book 1 vocab.pdf)
// ---------------------------------------------------------------- //

/**
 * All vocabulary items for Madinah Book 1.
 */
export const vocabularyItems: VocabularyItem[] = [
  // --- Lesson 1 Vocabulary ---
  {
    id: 'b1-l1-v01',
    word: 'هَذَا',
    translation: { en: 'This is (m)' },
    type: WordType.Pronoun,
    gender: 'masculine',
    definition: 'A masculine demonstrative pronoun used to point to something near.',
    examples: [],
    difficulty: 'beginner',
    tags: ['book1', 'lesson1', 'demonstrative'],
  },
  {
    id: 'b1-l1-v02',
    word: 'بَيْتٌ',
    translation: { en: 'House' },
    type: WordType.Noun,
    gender: 'masculine',
    plural: 'بُيُوتٌ',
    definition: 'A building for human habitation.',
    examples: [],
    difficulty: 'beginner',
    tags: ['book1', 'lesson1', 'places'],
  },
  {
    id: 'b1-l1-v03',
    word: 'مَسْجِدٌ',
    translation: { en: 'Mosque' },
    type: WordType.Noun,
    gender: 'masculine',
    plural: 'مَسَاجِدُ',
    definition: 'A Muslim place of worship.',
    examples: [],
    difficulty: 'beginner',
    tags: ['book1', 'lesson1', 'places', 'islamic'],
  },
  {
    id: 'b1-l1-v04',
    word: 'بَابٌ',
    translation: { en: 'Door' },
    type: WordType.Noun,
    gender: 'masculine',
    plural: 'أَبْوَابٌ',
    definition: 'A hinged or otherwise movable barrier that allows ingress into and egress from an enclosure.',
    examples: [],
    difficulty: 'beginner',
    tags: ['book1', 'lesson1', 'objects'],
  },
  {
    id: 'b1-l1-v05',
    word: 'كِتَابٌ',
    translation: { en: 'Book' },
    type: WordType.Noun,
    gender: 'masculine',
    plural: 'كُتُبٌ',
    definition: 'A written or printed work consisting of pages glued or sewn together along one side and bound in covers.',
    examples: [],
    difficulty: 'beginner',
    tags: ['book1', 'lesson1', 'objects', 'education'],
  },
  {
    id: 'b1-l1-v06',
    word: 'قَلَمٌ',
    translation: { en: 'Pen' },
    type: WordType.Noun,
    gender: 'masculine',
    plural: 'أَقْلَامٌ',
    definition: 'An instrument for writing or drawing with ink.',
    examples: [],
    difficulty: 'beginner',
    tags: ['book1', 'lesson1', 'objects', 'education'],
  },
  {
    id: 'b1-l1-v07',
    word: 'مِفْتَاحٌ',
    translation: { en: 'Key' },
    type: WordType.Noun,
    gender: 'masculine',
    plural: 'مَفَاتِيحُ',
    definition: 'A small piece of shaped metal with incisions cut to fit the wards of a particular lock, which is inserted into a lock and turned to open or close it.',
    examples: [],
    difficulty: 'beginner',
    tags: ['book1', 'lesson1', 'objects'],
  },
  {
    id: 'b1-l1-v08',
    word: 'مَكْتَبٌ',
    translation: { en: 'Desk' },
    type: WordType.Noun,
    gender: 'masculine',
    plural: 'مَكَاتِبُ',
    definition: 'A piece of furniture with a flat table-style work surface used in a school, office, or home.',
    examples: [],
    difficulty: 'beginner',
    tags: ['book1', 'lesson1', 'objects', 'furniture'],
  },
  {
    id: 'b1-l1-v09',
    word: 'سَرِيرٌ',
    translation: { en: 'Bed' },
    type: WordType.Noun,
    gender: 'masculine',
    plural: 'سُرُرٌ',
    definition: 'A piece of furniture used as a place to sleep or rest.',
    examples: [],
    difficulty: 'beginner',
    tags: ['book1', 'lesson1', 'objects', 'furniture'],
  },
  {
    id: 'b1-l1-v10',
    word: 'كُرْسِيٌّ',
    translation: { en: 'A chair' },
    type: WordType.Noun,
    gender: 'masculine',
    plural: 'كَرَاسِيُّ',
    definition: 'A separate seat for one person, typically with a back and four legs.',
    examples: [],
    difficulty: 'beginner',
    tags: ['book1', 'lesson1', 'objects', 'furniture'],
  },
  {
    id: 'b1-l1-v11',
    word: 'مَا هَذَا...؟',
    translation: { en: 'What is this?' },
    type: WordType.Question,
    definition: 'An interrogative phrase used to ask about the identity of an inanimate object.',
    examples: [],
    difficulty: 'beginner',
    tags: ['book1', 'lesson1', 'question'],
  },
  {
    id: 'b1-l1-v12',
    word: 'أَهَذَا...؟',
    translation: { en: 'Is this?' },
    type: WordType.Question,
    definition: 'An interrogative phrase used to ask a yes/no question about an object.',
    examples: [],
    difficulty: 'beginner',
    tags: ['book1', 'lesson1', 'question'],
  },
  {
    id: 'b1-l1-v13',
    word: 'نَعَمْ',
    translation: { en: 'Yes' },
    type: WordType.Particle,
    definition: 'Used to give an affirmative response.',
    examples: [],
    difficulty: 'beginner',
    tags: ['book1', 'lesson1', 'response'],
  },
    {
    id: 'b1-l1-v14',
    word: 'لَا',
    translation: { en: 'No' },
    type: WordType.Particle,
    definition: 'Used to give a negative response.',
    examples: [],
    difficulty: 'beginner',
    tags: ['book1', 'lesson1', 'response'],
  },
  {
    id: 'b1-l1-v15',
    word: 'قَمِيصٌ',
    translation: { en: 'Shirt' },
    type: WordType.Noun,
    gender: 'masculine',
    plural: 'قُمْصَانٌ',
    definition: 'A garment for the upper body.',
    examples: [],
    difficulty: 'beginner',
    tags: ['book1', 'lesson1', 'clothing'],
  },
  {
    id: 'b1-l1-v16',
    word: 'مَنْ',
    translation: { en: 'Who' },
    type: WordType.Question,
    definition: 'An interrogative pronoun used to ask about a person.',
    examples: [],
    difficulty: 'beginner',
    tags: ['book1', 'lesson1', 'question'],
  },
  {
    id: 'b1-l1-v17',
    word: 'طَبِيبٌ',
    translation: { en: 'Doctor' },
    type: WordType.Noun,
    gender: 'masculine',
    plural: 'أَطِبَّاءُ',
    definition: 'A person qualified to practice medicine.',
    examples: [],
    difficulty: 'beginner',
    tags: ['book1', 'lesson1', 'people', 'profession'],
  },
  {
    id: 'b1-l1-v18',
    word: 'وَلَدٌ',
    translation: { en: 'Boy' },
    type: WordType.Noun,
    gender: 'masculine',
    plural: 'أَوْلَادٌ',
    definition: 'A male child or young man.',
    examples: [],
    difficulty: 'beginner',
    tags: ['book1', 'lesson1', 'people'],
  },
  {
    id: 'b1-l1-v19',
    word: 'طَالِبٌ',
    translation: { en: 'Student' },
    type: WordType.Noun,
    gender: 'masculine',
    plural: 'طُلَّابٌ',
    definition: 'A person who is studying at a school or college.',
    examples: [],
    difficulty: 'beginner',
    tags: ['book1', 'lesson1', 'people', 'education'],
  },
  {
    id: 'b1-l1-v20',
    word: 'رَجُلٌ',
    translation: { en: 'Man' },
    type: WordType.Noun,
    gender: 'masculine',
    plural: 'رِجَالٌ',
    definition: 'An adult human male.',
    examples: [],
    difficulty: 'beginner',
    tags: ['book1', 'lesson1', 'people'],
  },

  // --- Lesson 2 Vocabulary ---
  {
    id: 'b1-l2-v01',
    word: 'ذَلِكَ',
    translation: { en: 'That' },
    type: WordType.Pronoun,
    gender: 'masculine',
    definition: 'A masculine demonstrative pronoun used to point to something far.',
    examples: [],
    difficulty: 'beginner',
    tags: ['book1', 'lesson2', 'demonstrative'],
  },
  {
    id: 'b1-l2-v02',
    word: 'إِمَامٌ',
    translation: { en: 'Leader' },
    type: WordType.Noun,
    gender: 'masculine',
    plural: 'أَئِمَّةٌ',
    definition: 'The person who leads prayers in a mosque; a leader.',
    examples: [],
    difficulty: 'beginner',
    tags: ['book1', 'lesson2', 'people', 'islamic'],
  },
  {
    id: 'b1-l2-v03',
    word: 'حَجَرٌ',
    translation: { en: 'Stone' },
    type: WordType.Noun,
    gender: 'masculine',
    plural: 'أَحْجَارٌ',
    definition: 'Hard solid non-metallic mineral matter of which rock is made.',
    examples: [],
    difficulty: 'beginner',
    tags: ['book1', 'lesson2', 'objects'],
  },
  {
    id: 'b1-l2-v04',
    word: 'سُكَّرٌ',
    translation: { en: 'Sugar' },
    type: WordType.Noun,
    gender: 'masculine',
    definition: 'A sweet crystalline substance obtained from various plants.',
    examples: [],
    difficulty: 'beginner',
    tags: ['book1', 'lesson2', 'food'],
  },
  {
    id: 'b1-l2-v05',
    word: 'لَبَنٌ',
    translation: { en: 'Milk' },
    type: WordType.Noun,
    gender: 'masculine',
    definition: 'An opaque white fluid rich in fat and protein, secreted by female mammals for the nourishment of their young.',
    examples: [],
    difficulty: 'beginner',
    tags: ['book1', 'lesson2', 'food'],
  },
];

/**
 * All vocabulary lists for Madinah Book 1, organized by lesson.
 */
export const vocabularyLists: VocabularyList[] = [
  {
    id: 'b1-list01',
    title: {
      ar: 'مُفْرَدَاتُ الدَّرْسِ الْأَوَّلِ',
      en: 'Lesson 1 Vocabulary',
    },
    description: {
      arabic: 'الْكَلِمَاتُ الْجَدِيدَةُ فِي الدَّرْسِ الْأَوَّلِ',
      english: 'New words introduced in Lesson 1.',
    },
    bookId: 'book1',
    lessonId: 'lesson1',
    items: [
      'b1-l1-v01',
      'b1-l1-v02',
      'b1-l1-v03',
      'b1-l1-v04',
      'b1-l1-v05',
      'b1-l1-v06',
      'b1-l1-v07',
      'b1-l1-v08',
      'b1-l1-v09',
      'b1-l1-v10',
      'b1-l1-v11',
      'b1-l1-v12',
      'b1-l1-v13',
      'b1-l1-v14',
      'b1-l1-v15',
      'b1-l1-v16',
      'b1-l1-v17',
      'b1-l1-v18',
      'b1-l1-v19',
      'b1-l1-v20',
    ],
    level: 'beginner',
    tags: ['book1', 'lesson1'],
    order: 1,
  },
  {
    id: 'b1-list02',
    title: {
      ar: 'مُفْرَدَاتُ الدَّرْسِ الثَّانِي',
      en: 'Lesson 2 Vocabulary',
    },
    description: {
      arabic: 'الْكَلِمَاتُ الْجَدِيدَةُ فِي الدَّرْسِ الثَّانِي',
      english: 'New words introduced in Lesson 2.',
    },
    bookId: 'book1',
    lessonId: 'lesson2',
    items: [
        'b1-l2-v01',
        'b1-l2-v02',
        'b1-l2-v03',
        'b1-l2-v04',
        'b1-l2-v05'
    ],
    level: 'beginner',
    tags: ['book1', 'lesson2'],
    order: 2,
  },
];
