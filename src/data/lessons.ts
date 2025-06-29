
export interface Lesson {
  id: string;
  title: {
    ar: string;
    en: string;
  };
  introduction: {
    arabic: string;
    english: string;
  };
  rules: {
    name: string;
    arabicText: string;
    explanation: string;
  }[];
}

// Define the Book interface
export interface Book {
  id: string;
  title: {
    ar: string;
    en: string;
  };
  description: {
    arabic: string;
    english: string;
  };
  lessons: Lesson[];
  available: boolean; // Added
  comingSoon?: boolean; // Added
}

// Example usage (remove this when implementing actual lessons):
// export const lessonsData: Lesson[] = [
//   {
//     id: 'lesson1',
//     title: { ar: 'الدرس الأول', en: 'Lesson 1' },
//     introduction: {
//       arabic: 'مقدمة الدرس باللغة العربية',
//       english: 'Lesson introduction in English'
//     },
//     rules: [
//       {
//         name: 'Rule Name',
//         arabicText: 'النص العربي للقاعدة',
//         explanation: 'Explanation of the rule in English'
//       }
//     ]
//   }
// ];
