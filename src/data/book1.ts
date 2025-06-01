export interface Lesson {
  id: string;
  title: string;
  englishTitle: string;
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

export interface Book {
  id: string;
  title: string;
  englishTitle: string;
  description: {
    arabic: string;
    english: string;
  };
  lessons: Lesson[];
}

export const book1Data: Book = {
  id: 'book1',
  title: 'كتاب المدينة الأول',
  englishTitle: 'Madinah Book 1',
  description: {
    arabic: 'الكتاب الأول من سلسلة تعليم اللغة العربية لغير الناطقين بها - المستوى المبتدئ',
    english: 'The first book in the Arabic language learning series for non-native speakers - Beginner level'
  },
  lessons: [
    {
      id: 'lesson1',
      title: 'الدرس الأول',
      englishTitle: 'Lesson 1',
      introduction: {
        arabic:
          'هذا القسم يغطي الدرس الأول. ستجد هنا شروحات وأمثلة للمفاهيم النحوية الأساسية المقدمة في هذا الدرس، مع التركيز على أسماء الإشارة والاستفهام الأساسية.',
        english:
          'This section covers Lesson 1. You will find explanations and examples for the key grammatical concepts introduced in this lesson, focusing on basic demonstrative and interrogative pronouns.',
      },
      rules: [
        {
          name: 'هَذَا (hādhā - this)',
          arabicText:
            'هَذَا : اِسْمُ إِشَارَةٍ لِلْمُفْرَدِ الْمُذَكَّرِ الْقَرِيبِ الْعَاقِلِ ، وَغَيْرِ الْعَاقِلِ.',
          explanation:
            'Is a demonstrative pronoun for a singular, masculine, near, rational or irrational noun.',
        },
        {
          name: 'مَا (mā - what?)',
          arabicText: 'مَا : اِسْمُ اسْتِفْهَامٍ لِغَيْرِ الْعَاقِلِ.',
          explanation: 'Is an interrogative pronoun used for non-rational nouns.',
        },
        {
          name: 'أ (a - ?)',
          arabicText: 'أ : هَمْزَةُ الاسْتِفْهَامِ ، حَرْفٌ جَوَابُهُ ( نَعَمْ ) أَوْ ( لا ).',
          explanation:
            "Is an interrogative particle (hamzat al-istifhām); its answer is (نَعَمْ - na'am - yes) or (لَا - lā - no).",
        },
        {
          name: 'مَنْ (man - who?)',
          arabicText: 'مَنْ : اسْمُ اسْتِفْهَامٍ لِلْعَاقِلِ.',
          explanation: 'Is an interrogative pronoun used for rational nouns.',
        },
      ],
    },
    {
      id: 'lesson2',
      title: 'الدرس الثاني',
      englishTitle: 'Lesson 2',
      introduction: {
        arabic:
          'هذا القسم يغطي الدرس الثاني. ستجد هنا شروحات وأمثلة لأسماء الإشارة للبعيد وأسئلة الاستفهام المتعلقة بها.',
        english:
          'This section covers Lesson 2. You will find explanations and examples for demonstrative pronouns for distant objects/persons and related interrogative questions.',
      },
      rules: [
        {
          name: 'ذَلِكَ (dhālika - that)',
          arabicText:
            'ذَلِكَ : اِسْمُ إِشَارَةٍ لِلْمُفْرَدِ الْمُذَكَّرِ الْبَعِيدِ الْعَاقِلِ ، وَغَيْرِ الْعَاقِلِ.',
          explanation:
            'Is a demonstrative pronoun for a singular, masculine, distant, rational or irrational noun.',
        },
        {
          name: 'مَنْ هَذَا؟ (man hādhā? - who is this?)',
          arabicText: 'مَنْ هَذَا؟ سُؤَالٌ عَنِ الْقَرِيبِ العَاقِلِ.',
          explanation: 'Is a question about a near, rational being.',
        },
        {
          name: 'مَنْ ذَلِكَ؟ (man dhālika? - who is that?)',
          arabicText: 'مَنْ ذَلِكَ؟ سُؤَالٌ عَنِ الْبَعِيدِ العَاقِلِ.',
          explanation: 'Is a question about a distant, rational being.',
        },
        {
          name: 'مَا هَذَا؟ (mā hādhā? - what is this?)',
          arabicText: 'مَا هَذَا؟ سُؤَالٌ عَنِ الْقَرِيبِ غَيْرِ الْعَاقِلِ.',
          explanation: 'Is a question about a near, non-rational thing.',
        },
        {
          name: 'مَا ذَلِكَ؟ (mā dhālika? - what is that?)',
          arabicText: 'مَا ذَلِكَ؟ سُؤَالٌ عَنِ الْبَعِيدِ غَيْرِ الْعَاقِلِ.',
          explanation: 'Is a question about a distant, non-rational thing.',
        },
      ],
    },
    {
      id: 'lesson3',
      title: 'الدرس الثالث',
      englishTitle: 'Lesson 3',
      introduction: {
        arabic:
          'هذا القسم يغطي الدرس الثالث. ستتعلم عن أداة التعريف (ال)، والفرق بين النكرة والمعرفة، والحروف القمرية والشمسية.',
        english:
          'This section covers Lesson 3. You will learn about the definite article (al), the difference between indefinite and definite nouns, and lunar and solar letters.',
      },
      rules: [
        {
          name: 'ال (al - the)',
          arabicText: 'ال : أَدَاةُ التَّعْرِيفِ.',
          explanation: 'Is the definite article.',
        },
        {
          name: 'النَّكِرَة (al-nakirah - indefinite)',
          arabicText: 'النَّكِرَة : اِسْمٌ يَدُلُّ عَلَى شَيْءٍ غَيْرِ مُعَيَّنٍ.',
          explanation: 'Is a noun that indicates something indefinite.',
        },
        {
          name: 'المَعْرِفَة (al-ma\'rifah - definite)',
          arabicText: 'المَعْرِفَة : اِسْمٌ يَدُلُّ عَلَى شَيْءٍ مُعَيَّنٍ.',
          explanation: 'Is a noun that indicates something definite.',
        },
        {
          name: 'الحُرُوف القَمَرِيَّة (al-ḥurūf al-qamariyyah - lunar letters)',
          arabicText:
            'الحُرُوف القَمَرِيَّة : هِيَ الحُرُوف الَّتِي تُلْفَظُ مَعَهَا (ال) كَامِلَةً.',
          explanation:
            'Are the letters with which the definite article (al) is pronounced completely.',
        },
        {
          name: 'الحُرُوف الشَّمْسِيَّة (al-ḥurūf al-shamsiyyah - solar letters)',
          arabicText:
            'الحُرُوف الشَّمْسِيَّة : هِيَ الحُرُوف الَّتِي لَا تُلْفَظُ مَعَهَا لَامُ (ال) ، وَتُدْغَمُ فِي الحَرْفِ بَعْدَهَا.',
          explanation:
            'Are the letters with which the lām of the definite article (al) is not pronounced, and it is assimilated into the letter after it.',
        },
      ],
    }
    // Additional lessons would continue here
  ]
};