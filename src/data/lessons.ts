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

// Define the Book interface
export interface Book {
  id: string;
  title: string;
  englishTitle: string;
  description: {
    arabic: string;
    english: string;
  };
  lessons: Lesson[];
  available: boolean; // Added
  comingSoon?: boolean; // Added
}

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

export const lessonsData: Lesson[] = [
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
        'This section covers Lesson 3. You will learn about the definite article (ال - al), the difference between indefinite and definite nouns, and lunar and solar letters.',
    },
    rules: [
      {
        name: 'ال (al - the)',
        arabicText: 'ال : حَرْفُ تَعْرِيفِ.',
        explanation: 'Is the definite article.',
      },
      {
        name: 'إزالة التنوين مع ال (Tanween removal with ال)',
        arabicText: 'يُحْذَفُ التَّنْوِينُ عِنْدَ دُخُولِ (ال).',
        explanation: 'When (ال) enters a noun, the tanween (nunation) is removed.',
      },
      {
        name: 'النَّكِرَةُ (al-nakirah - indefinite)',
        arabicText:
          'النَّكِرَةُ : شَيْءٌ غَيْرُ مُعَيَّنٍ ، نَحْوُ : بَيْتٌ ، قَلَمٌ ، رَجُلٌ ، بِنْتٌ.',
        explanation:
          'Refers to an unspecified thing, e.g., بَيْتٌ (baytun - a house), قَلَمٌ (qalamun - a pen), رَجُلٌ (rajulun - a man), بِنْتٌ (bintun - a girl).',
      },
      {
        name: "الْمَعْرِفَةُ (al-ma'rifah - definite)",
        arabicText:
          'الْمَعْرِفَةُ : شَيْءٌ مُعَيَّنٌ ، نَحْوُ : الْبَيْتُ ، الْقَلَمُ ، الرَّجُلُ ، الْبِنْتُ.',
        explanation:
          'Refers to a specific thing, e.g., الْبَيْتُ (al-baytu - the house), الْقَلَمُ (al-qalamu - the pen), الرَّجُلُ (al-rajulu - the man), الْبِنْتُ (al-bintu - the girl).',
      },
      {
        name: 'الْحُرُوفُ الْقَمَرِيَّةُ (al-ḥurūf al-qamariyyah - lunar letters)',
        arabicText: 'الْحُرُوفُ الْقَمَرِيَّةُ : يُنْطَقُ السُّكُونُ عَلَى اللام ( القمر ).',
        explanation: 'The sukoon on the lām (ل) is pronounced (e.g., الْقَمَرُ - al-qamar).',
      },
      {
        name: 'الْحُرُوفُ الشَّمْسِيَّةُ (al-ḥurūf al-shamsiyyah - solar letters)',
        arabicText:
          'الْحُرُوفُ الشَّمْسِيَّةُ : لا يُنْطَقُ السُّكُونَ عَلَى اللام ، وَتُوضَعُ شَدَّةٌ عَلَى الْحَرْفِ الَّذِي بَعْدَهُ ( الشمس ).',
        explanation:
          'The sukoon on the lām (ل) is not pronounced, and a shaddah is placed on the letter that follows (e.g., الشَّمْسُ - al-shams).',
      },
    ],
  },
  {
    id: 'lesson4',
    title: 'الدرس الرابع',
    englishTitle: 'Lesson 4',
    introduction: {
      arabic:
        'هذا القسم يغطي الدرس الرابع. ستتعلم عن حروف الجر، وأسئلة المكان، وقاعدة الأسماء المؤنثة العلم.',
      english:
        'This section covers Lesson 4. You will learn about prepositions, questions about place, and the rule for feminine proper nouns.',
    },
    rules: [
      {
        name: 'حُرُوفُ الْجَرِّ (ḥurūf al-jarr - prepositions)',
        arabicText:
          'حُرُوفُ الْجَرِّ ( فِي ، عَلَى ، مِنْ ، إِلَى ) : تَجُرُّ الاسْمَ الَّذِي بَعْدَهَا بِالْكَسْرَةِ.',
        explanation:
          "(فِي - fī - in, عَلَى - 'alā - on, مِنْ - min - from, إِلَى - ilā - to): These prepositions cause the noun following them to take a kasrah.",
      },
      {
        name: 'أَيْنَ؟ (ayna? - where?)',
        arabicText: 'أَيْنَ؟ سُؤَالٌ عَنِ الْمَكَانِ.',
        explanation: 'Is a question about place.',
      },
      {
        name: 'مَاذَا؟ (mādhā? - what?)',
        arabicText: 'مَاذَا؟ = مَا هَذَا؟ لِغَيْرِ الْعَاقِلِ.',
        explanation: 'Is equivalent to مَا هَذَا؟ (mā hādhā?) for non-rational things.',
      },
      {
        name: 'الْعَلَمُ الْمُؤَنَّثُ لَا يُنَوَّنُ (Feminine proper nouns do not take tanween)',
        arabicText:
          'الْعَلَمُ الْمُؤَنَّثُ لَا يُنَوَّنُ (نَحْوُ: آمِنَةُ, فَاطِمَةُ, مَرْيَمُ, عَائِشَةُ).',
        explanation:
          'Feminine proper nouns do not take tanween (e.g., آمِنَةُ, فَاطِمَةُ, مَرْيَمُ, عَائِشَةُ).',
      },
      {
        name: 'مِنَ الْبَيْتِ (mina al-bayti - from the house)',
        arabicText:
          'مِنَ الْبَيْتِ : أَصْلُهُ : مِنْ الْبَيْتِ - مِنْ + ال -> مِنَ الْ. حُرِّكَتِ النُّونُ بِالْفَتْحَةِ مَنْعاً لالْتِقَاءِ السَّاكِنَيْنِ.',
        explanation:
          'Its origin is مِنْ الْبَيْتِ (min al-bayti). The noon (ن) is given a fatḥah to prevent the meeting of two sukoons.',
      },
    ],
  },
  {
    id: 'lesson5',
    title: 'الدرس الخامس',
    englishTitle: 'Lesson 5',
    introduction: {
      arabic:
        'يستعرض هذا الدرس مفهوم الإضافة (المضاف والمضاف إليه) وكيفية استخدام أداة النداء (يا).',
      english:
        'This lesson covers the concept of Iḍāfah (possessive construction) and the use of the vocative particle (Yā).',
    },
    rules: [
      {
        name: 'الْمُضَافُ، وَالْمُضَافُ إِلَيْهِ (al-muḍāf, wa-al-muḍāf ilayhi - the possessed, and the possessor)',
        arabicText:
          "كِتَابٌ + مُحَمَّدٌ -> كِتَابُ مُحَمَّدٍ. (كِتَابُ: مُضَافٌ، مُحَمَّدٍ: مُضَافٌ إِلَيْهِ). نَحْذِفُ التَّنْوِينَ عِنْدَ الإِضَافَةِ. نَحْذِفُ 'ال' عِنْدَ الإِضَافَةِ. الْمُضَافُ إِلَيْهِ مَجْرُورٌ بِالْكَسْرَةِ.",
        explanation:
          'The possessive construction. Tanween is removed from the muḍāf. The definite article (ال) is removed from the muḍāf. The muḍāf ilayhi is genitive (majroor), indicated by a kasrah.',
      },
      {
        name: 'الْمُنَادَى (al-munādā - the one called)',
        arabicText: 'يَا مُحَمَّدُ. (يَا شَيْخُ - نَحْذِفُ التَّنْوِينَ عِنْدَ النِّدَاءِ).',
        explanation:
          'The vocative. Tanween is removed from the noun when it is called using يَا (yā - O) (e.g., يَا شَيْخُ - yā shaykhu).',
      },
      {
        name: 'كِتَابُ مَنْ هَذَا؟ (kitābu man hādhā? - whose book is this?)',
        arabicText: 'كِتَابُ مَنْ هَذَا؟ سُؤَالٌ عَنِ الْعَاقِلِ.',
        explanation: 'Is a question about a rational being (possessor).',
      },
    ],
  },
  {
    id: 'lesson6',
    title: 'الدرس السادس',
    englishTitle: 'Lesson 6',
    introduction: {
      arabic:
        'هذا الدرس يتناول اسم الإشارة للمفرد المؤنث القريب (هَذِهِ) والجملة الاسمية ومكوناتها (المبتدأ والخبر).',
      english:
        'This lesson covers the demonstrative pronoun for singular feminine near (هَذِهِ - hādhihi) and the nominal sentence with its components (subject and predicate).',
    },
    rules: [
      {
        name: 'هَذِهِ (hādihi - this/these)',
        arabicText:
          'هَذِهِ : اِسْمُ إِشَارَةٍ لِلْمُفْرَدِ الْمُؤَنَّثِ الْقَرِيبِ الْعَاقِلِ ، وغَيْرِ الْعَاقِلِ.',
        explanation:
          'Is a demonstrative pronoun for a singular, feminine, near, rational or irrational noun. (Also used for non-rational plurals, see Lesson 16 & 17).',
      },
      {
        name: 'الْجُمْلَةُ الاسْمِيَّةُ (al-jumlah al-ismiyyah - the nominal sentence)',
        arabicText:
          'الْجُمْلَةُ الاسْمِيَّةُ : تَتَكَوَّنُ مِنْ كَلِمَتَيْنِ تُفِيدَانِ مَعْنَى تَامّاً مُفيداً . ( وَتُسَمَّى جُمْلَةً مُفِيدَةً ).',
        explanation:
          'Consists of two words that form a complete, beneficial meaning. It is also called جُمْلَةٌ مُفِيدَةٌ (jumlah mufīdah - a beneficial sentence).',
      },
      {
        name: "مُبْتَدَأٌ وَ خَبَرٌ (mubtada' wa khabar - subject and predicate)",
        arabicText: 'مُحَمَّدٌ طَالِبٌ ( مُحَمَّدٌ : مُبْتَدَأٌ، طَالِبٌ : خَبَرٌ ).',
        explanation:
          "A nominal sentence has a مُبْتَدَأٌ (mubtada' - subject) and a خَبَرٌ (khabar - predicate) (e.g., مُحَمَّدٌ طَالِبٌ - Muḥammadun ṭālibun - Muhammad is a student; مُحَمَّدٌ is mubtada', طَالِبٌ is khabar).",
      },
    ],
  },
  {
    id: 'lesson7',
    title: 'الدرس السابع',
    englishTitle: 'Lesson 7',
    introduction: {
      arabic: 'يركز هذا الدرس على اسم الإشارة للمفرد المؤنث البعيد (تِلْكَ) مع أمثلة توضيحية.',
      english:
        'This lesson focuses on the demonstrative pronoun for singular feminine distant (تِلْكَ - tilka) with illustrative examples.',
    },
    rules: [
      {
        name: 'تِلْكَ (tilka - that/those)',
        arabicText:
          'تِلْكَ : اِسْمُ إِشَارَةٍ لِلْمُفْرَدِ الْمُؤَنَّثِ الْبَعِيدِ الْعَاقِلِ ، وَغَيْرِ الْعَاقِلِ.',
        explanation:
          'Is a demonstrative pronoun for a singular, feminine, distant, rational or irrational noun. (Also used for non-rational plurals, see Lesson 16 & 17).',
      },
      {
        name: 'همزة الاستفهام مع أسماء الإشارة (Interrogative Hamzah with Demonstrative Pronouns)',
        arabicText:
          'أَسَاعَةُ عَبَّاسٍ هَذِهِ؟ لا. هَذِهِ سَاعَةُ حَامِدٍ، تِلْكَ سَاعَةُ عَبَّاسٍ. (فِي هَذَا الْمِثَالِ : هَمْزَةُ الاسْتِفْهَامِ ( أ ) الْجَوَابُ بِ : نَعَمْ ، أَوْ لا . هَذِهِ : اسْمُ إِشَارَةٍ لِلْمُؤَنَّثِ الْقَرِيبِ غَيْرِ الْعَاقِلِ ( سَاعَة ) . حَامِدٍ : مُضَافٌ إِلَيْهِ . تِلْكَ : اسْمُ إِشَارَةٍ لِلْمُؤَنَّثِ الْبَعِيدِ غَيْرِ الْعَاقِلِ ( سَاعَة ) . عَبَّاسٍ : مُضَافٌ إِلَيْهِ).',
        explanation:
          "In the example أَسَاعَةُ عَبَّاسٍ هَذِهِ؟ (a-sā'atu 'Abbāsin hādhihi? - Is this Abbas's watch?), هَمْزَةُ الاسْتِفْهَامِ (أ) (hamzat al-istifhām - the interrogative hamzah) expects an answer of نَعَمْ (yes) or لَا (no). In لَا. هَذِهِ سَاعَةُ حَامِدٍ، تِلْكَ سَاعَةُ عَبَّاسٍ, هَذِهِ is for near feminine non-rational, حَامِدٍ is muḍāf ilayhi, تِلْكَ is for distant feminine non-rational, and عَبَّاسٍ is muḍāf ilayhi.",
      },
    ],
  },
  {
    id: 'lesson8',
    title: 'الدرس الثامن',
    englishTitle: 'Lesson 8',
    introduction: {
      arabic:
        "يشرح هذا الدرس الإشارة إلى الاسم المعرف بـ 'ال'، واستخدام 'لِمَنْ؟'، وظرفي المكان 'أَمَامَ' و 'خَلْفَ'، ومعاني بعض حروف الجر.",
      english:
        "This lesson explains pointing to nouns defined with 'ال', the use of 'لِمَنْ؟' (whose?), the adverbs of place 'أَمَامَ' (in front of) and 'خَلْفَ' (behind), and the meanings of some prepositions.",
    },
    rules: [
      {
        name: "الإِشَارَةُ إِلَى الْمُعَرَّفِ بِأَلْ (Pointing to the definite noun with 'al')",
        arabicText:
          'هَذَا الرَّجُلُ تَاجِرٌ. (هَذَا: مُبْتَدَأٌ، الرَّجُلُ: بَدَلٌ، تَاجِرٌ: خَبَرٌ). ذَلِكَ الرَّجُلُ طَبِيبٌ. (ذَلِكَ: مُبْتَدَأٌ، الرَّجُلُ: بَدَلٌ، طَبِيبٌ: خَبَرٌ).',
        explanation:
          "Example: هَذَا الرَّجُلُ تَاجِرٌ (hādhā al-rajulu tājirun - This man is a merchant). Here, هَذَا is mubtada' (subject), الرَّجُلُ is badal (substitute/appositive), and تَاجِرٌ is khabar (predicate).",
      },
      {
        name: 'لِمَنْ؟ (liman? - whose?)',
        arabicText:
          'لِمَنْ؟ سُؤَالٌ عَنِ الْعَاقِلِ. لِمَنْ هَذَا الْبَيْتُ؟ هَذَا الْبَيْتُ لِلتَّاجِرِ.',
        explanation:
          'Is a question about a rational being. The preposition لِ (li - for/belongs to) is a ḥarf jarr (preposition).',
      },
      {
        name: 'أَمَامَ، خَلْفَ (amāma - in front of, khalfa - behind)',
        arabicText:
          'السَّبُورَةُ أَمَامَ الطُّلابِ. (أَمَامَ: ظَرْفُ مَكَانٍ، الطُّلابِ: مُضَافٌ إِلَيْهِ).',
        explanation:
          'Are adverbs of place (ظَرْفُ مَكَانٍ - ẓarf makān). The noun following them is muḍāf ilayhi.',
      },
      {
        name: 'معاني حروف الجر (Meanings of prepositions)',
        arabicText:
          'مِنْ: تُفِيدُ الْبِدَايَةَ. إِلَى: تُفِيدُ النَّهَايَةَ. فِي: تُفِيدُ الظَّرْفِيَّةَ. عَلَى: تُفِيدُ الاسْتِعْلَاءَ. اللام (لِ): تُفِيدُ الْمِلْكَ.',
        explanation:
          'مِنْ (from): Indicates the beginning. إِلَى (to): Indicates the end. فِي (in): Indicates containment. عَلَى (on): Indicates on top of. لِ (for): Indicates possession.',
      },
    ],
  },
  {
    id: 'lesson9',
    title: 'الدرس التاسع',
    englishTitle: 'Lesson 9',
    introduction: {
      arabic: "يتناول هذا الدرس النعت والمنعوت (الصفة والموصوف) والاسم الموصول 'الَّذِي'.",
      english:
        "This lesson covers the adjective and the described noun (النَّعْتُ وَالْمَنْعُوتُ) and the relative pronoun 'الَّذِي' (who/which).",
    },
    rules: [
      {
        name: "النَّعْتُ، وَالْمَنْعُوتُ (al-na't, wa-al-man'ūt - the adjective, and the noun described)",
        arabicText:
          'عَبَّاسٌ تَاجِرٌ غَنِيٌّ. (تَاجِرٌ: مَنْعُوتٌ، غَنِيٌّ: نَعْتٌ). النَّعْتُ يَتْبَعُ الْمَنْعُوتَ فِي التَّذْكِيرِ والتَّأْنيث، والتَّعْرِيفِ والتَّنْكِيرِ، والإِعْرَابِ، والإِفْرَادِ.',
        explanation:
          "Example: عَبَّاسٌ تَاجِرٌ غَنِيٌّ ('Abbāsun tājirun ghaniyyun - Abbas is a rich merchant). تَاجِرٌ is man'ūt, غَنِيٌّ is na't. The na't follows the man'ūt in gender, definiteness, case (i'rāb), and number.",
      },
      {
        name: 'الَّذِي (alladhī - who/which)',
        arabicText:
          'الَّذِي : اسْمٌ مَوْصُولٌ لِلْمُفْرَدِ الْمُذَكَّرِ الْعَاقِلِ ، وَغَيْرِ الْعَاقِلِ.',
        explanation:
          'Is a relative pronoun for a singular, masculine, rational or irrational noun.',
      },
    ],
  },
  {
    id: 'lesson10',
    title: 'الدرس العاشر',
    englishTitle: 'Lesson 10',
    introduction: {
      arabic:
        "يشرح هذا الدرس أنواع الضمائر (المتكلم، المخاطب، الغائب)، واستخدام 'عِنْدِي' و 'لِي'، وظرف المكان 'مَعَ'، وقاعدة الأسماء المذكرة المختومة بتاء التأنيث.",
      english:
        "This lesson explains types of pronouns (first, second, third person), the use of 'عِنْدِي' (I have - for things) and 'لِي' (I have - for people), the adverb of place 'مَعَ' (with), and the rule for masculine proper nouns ending with ة.",
    },
    rules: [
      {
        name: "الضَّمَائِرُ (al-ḍamā'ir - pronouns)",
        arabicText:
          'الضَّمَائِرُ ثَلاثَةٌ: ١- الْمُتَكَلِّمُ (أَنَا، بَيْتِي). ٢- الْمُخَاطَبُ (أَنْتَ، بَيْتُكَ). ٣- الْغَائِبُ (هُوَ، بَيْتُهُ).',
        explanation:
          'Pronouns are of three types: First person (e.g., أَنَا - I, بَيْتِي - my house), Second person (e.g., أَنْتَ - you (m.sg.), بَيْتُكَ - your (m.sg.) house), Third person (e.g., هُوَ - he/it, بَيْتُهُ - his/its house).',
      },
      {
        name: "عِنْدِي، لِي ('indī - I have [non-rational], lī - I have [rational])",
        arabicText:
          'عِنْدِي: لِغَيْرِ الْعَاقِلِ (عِنْدِي كِتَابٌ). لِي: لِلْعَاقِلِ (لِي أُخْتٌ).',
        explanation:
          'عِنْدِي is used for non-rational things (e.g., I have a book). لِي is used for rational beings (e.g., I have a sister).',
      },
      {
        name: "مَعَ (ma'a - with)",
        arabicText:
          'مَعَ: ظَرْفُ مَكَانٍ، الاِسْمُ الَّذِي بَعْدَهُ مَجْرُورٌ بِالْكَسْرَةِ (مُضَافٌ إِلَيْهِ).',
        explanation: 'Is an adverb of place. The noun following it is genitive (muḍāf ilayhi).',
      },
      {
        name: 'الْعَلَمُ الْمُذَكَّرُ الْمَخْتُومُ بِتَاءِ التَّأْنِيثِ لَا يُنَوَّنُ (Masculine proper nouns ending with ة do not take tanween)',
        arabicText: 'مُحَمَّدٌ: حَمْزَةُ، خَالِدٌ: طَلْحَةُ.',
        explanation:
          "Masculine proper nouns ending with ة (tā' marbūṭah) do not take tanween (e.g., حَمْزَةُ, طَلْحَةُ).",
      },
    ],
  },
  {
    id: 'lesson11',
    title: 'الدرس الحادي عشر',
    englishTitle: 'Lesson 11',
    introduction: {
      arabic: "يتناول هذا الدرس استخدام حرف الجر 'فِي' مع ضمير الغائب، وياء المتكلم.",
      english:
        "This lesson covers the use of the preposition 'فِي' (in) with the third-person pronoun, and the first-person possessive suffix 'يَاءُ الْمُتَكَلِّمِ'.",
    },
    rules: [
      {
        name: 'فِي + ضَمِيرُ الْغَائِبِ (fī + third person pronoun)',
        arabicText:
          'ضَمِيرُ الْغَائِبِ الْمُذَكَّرِ: فِيهِ. ضَمِيرُ الْغَائِبِ الْمُؤَنَّثِ: فِيهَا.',
        explanation: 'Masculine: فِيهِ (fīhi - in it/him). Feminine: فِيهَا (fīhā - in it/her).',
      },
      {
        name: "يَاءُ الْمُتَكَلِّمِ (yā' al-mutakallim - the 'ya' of the first person)",
        arabicText: 'يَاءُ الْمُتَكَلِّمِ: ضَمِيرٌ لِلْمُتَكَلِّمِ (بَيْتِي، غُرْفَتِي).',
        explanation:
          'Is a pronoun for the first person, indicating possession (e.g., بَيْتِي - my house).',
      },
    ],
  },
  {
    id: 'lesson12',
    title: 'الدرس الثاني عشر',
    englishTitle: 'Lesson 12',
    introduction: {
      arabic:
        "يشرح هذا الدرس كاف المخاطب، والضميرين 'أَنَا' و 'أَنْتَ'، وتأنيث الفاعل، والاسمين الموصولين 'الَّذِي' و 'الَّتِي'.",
      english:
        "This lesson explains the second-person possessive suffix 'كَافُ الْمُخَاطَبِ', the pronouns 'أَنَا' (I) and 'أَنْتَ' (you), feminization of the doer, and the relative pronouns 'الَّذِي' and 'الَّتِي'.",
    },
    rules: [
      {
        name: "كَافُ الْمُخَاطَبِ (kāf al-mukhāṭab - the 'kaf' of the second person)",
        arabicText:
          'ضَمِيرُ الْمُخَاطَبِ الْمُذَكَّرِ: كَ (مَا اسْمُكَ؟). ضَمِيرُ الْمُخَاطَبِ الْمُؤَنَّثِ: كِ (مَا اسْمُكِ؟).',
        explanation:
          'Masculine singular: كَ (ka) (e.g., your (m.sg.) name). Feminine singular: كِ (ki) (e.g., your (f.sg.) name).',
      },
      {
        name: 'أَنَا، وَأَنْتَ (anā - I, anta - you (m.sg.))',
        arabicText:
          'أَنَا: ضَمِيرٌ لِلْمُتَكَلِّمِ (أَنَا طَالِبٌ). أَنْتَ: ضَمِيرٌ لِلْمُخَاطَبِ الْمُذَكَّرِ (أَنْتَ مُهَنْدِسٌ). أَنْتِ: ضَمِيرٌ لِلْمُخَاطَبِ الْمُؤَنَّثِ (أَنْتِ طَبِيبَةٌ).',
        explanation:
          'أَنَا for first person (m/f). أَنْتَ for second person masculine singular. أَنْتِ for second person feminine singular.',
      },
      {
        name: 'تَأْنِيثُ الْفَاعِلِ (Feminization of the doer)',
        arabicText: 'خَرَجَ مُحَمَّدٌ (فِعْلٌ + فَاعِلٌ). خَرَجَتْ آمِنَةُ (فِعْلٌ + فَاعِلٌ).',
        explanation:
          'The verb agrees in gender with the doer. Example: خَرَجَ مُحَمَّدٌ (Muhammad went out). خَرَجَتْ آمِنَةُ (Amina went out).',
      },
      {
        name: 'الَّذِي، الَّتِي (alladhī - who/which (m.), allatī - who/which (f.))',
        arabicText:
          'الَّذِي: اسْمٌ مَوْصُولٌ لِلْمُفْرَدِ الْمُذَكَّرِ. الَّتِي: اسْمٌ مَوْصُولٌ لِلْمُفْرَدِ الْمُؤَنَّثِ.',
        explanation:
          'الَّذِي is for singular masculine (rational/irrational). الَّتِي is for singular feminine (rational/irrational).',
      },
      {
        name: 'التقاء الساكنين (Meeting of two sukoons)',
        arabicText:
          'ذَهَبَتِ الطَّالِبَةُ: أَصْلُهُ: ذَهَبَتْ الطَّالِبَةُ - ذَهَبَتْ + ال -> ذَهَبَتِ الْ.',
        explanation:
          'Example: ذَهَبَتِ الطَّالِبَةُ (the female student went). The kasrah on the تْ is to prevent the meeting of two sukoons.',
      },
    ],
  },
  {
    id: 'lesson13',
    title: 'الدرس الثالث عشر',
    englishTitle: 'Lesson 13',
    introduction: {
      arabic:
        "يتناول هذا الدرس اسم الإشارة للجمع القريب 'هَؤُلَاءِ'، وضمير الجمع الغائب المذكر 'هُمْ'، وإضافة الأسماء إلى الاسم الظاهر والضمير، وواو الجماعة، وضمير الجمع الغائب المؤنث 'هُنَّ'، وتاء التأنيث، ونون النسوة، واسم الإشارة للجمع البعيد 'أُولَئِكَ'.",
      english:
        "This lesson covers the demonstrative pronoun for near plural 'هَؤُلَاءِ', third-person plural masculine pronoun 'هُمْ', attaching nouns to apparent nouns and pronouns, the 'wāw' of plural, third-person plural feminine pronoun 'هُنَّ', the 'tā'' of feminization, the 'nūn' of women, and the demonstrative pronoun for distant plural 'أُولَئِكَ'.",
    },
    rules: [
      {
        name: "هَؤُلَاءِ (hā'ulā'i - these)",
        arabicText:
          'هَؤُلَاءِ: اِسْمُ إِشَارَةٍ لِلْجَمْعِ الْقَرِيبِ الْعَاقِلِ الْمُذَكَّرِ، وَالْمُؤَنَّثِ.',
        explanation:
          'Is a demonstrative pronoun for a plural, near, rational, masculine or feminine noun.',
      },
      {
        name: 'هُمْ (hum - they (m.pl.))',
        arabicText: 'هُمْ: ضَمِيرُ جَمْعِ الْغَائِبِ الْمُذَكَّرِ الْعَاقِلِ.',
        explanation: 'Is a plural third-person masculine rational pronoun.',
      },
      {
        name: 'إِضَافَةُ الْأَسْمَاءِ إِلَى الاسْمِ الظَّاهِرِ، وَالضَّمِيرِ (Attaching nouns to apparent nouns and pronouns)',
        arabicText: 'الاسْمُ الظَّاهِرُ: أَبْنَاءُ مُحَمَّدٍ. الضَّمِيرُ: أَبْنَاؤُهُ.',
        explanation:
          'Nouns can be attached (iḍāfah) to apparent nouns (e.g., sons of Muhammad) or pronouns (e.g., his sons).',
      },
      {
        name: "وَاوُ الْجَمَاعَةِ (wāw al-jamā'ah - the 'waw' of the plural)",
        arabicText:
          'وَاوُ الْجَمَاعَةِ: ضَمِيرٌ لِلْمُذَكَّرِ الْعَاقِلِ يَتَّصِلُ بِالْفِعْلِ، وَهُوَ الْفَاعِلُ (ذَهَبُوا).',
        explanation:
          'Is a pronoun for masculine rational beings that attaches to the verb and is the doer (e.g., ذَهَبُوا - they (m.) went).',
      },
      {
        name: 'هُنَّ (hunna - they (f.pl.))',
        arabicText: 'هُنَّ: ضَمِيرُ جَمْعِ الْغَائِبِ الْمُؤَنَّثِ الْعَاقِلِ.',
        explanation: 'Is a plural third-person feminine rational pronoun.',
      },
      {
        name: "تَاءُ التَّأْنِيثِ (tā' al-ta'nīth - the 'ta' of feminization)",
        arabicText:
          'تَاءُ التَّأْنِيثِ: حَرْفٌ سَاكِنٌ يَتَّصِلُ بِالْفِعْلِ، وَيَدُلُّ عَلَى أَنَّ الْفَاعِلَ مُؤَنَّثٌ (خَرَجَتْ فَاطِمَةُ).',
        explanation:
          'Is a silent letter that attaches to the verb and indicates that the doer is feminine.',
      },
      {
        name: "نُونُ النِّسْوَةِ (nūn al-niswah - the 'nun' of women)",
        arabicText:
          'نُونُ النِّسْوَةِ: ضَمِيرٌ لِلْمُؤَنَّثِ الْعَاقِلِ يَتَّصِلُ بِالْفِعْلِ، وَهُوَ الْفَاعِلُ (الطَّبِيبَاتُ خَرَجْنَ).',
        explanation:
          'Is a pronoun for feminine rational beings that attaches to the verb and is the doer.',
      },
      {
        name: "أُولَئِكَ (ulā'ika - those)",
        arabicText:
          'أُولَئِكَ: اسْمُ إِشَارَةٍ لِلْجَمْعِ الْبَعِيدِ الْعَاقِلِ الْمُذَكَّرِ، وَالْمُؤَنَّثِ.',
        explanation:
          'Is a demonstrative pronoun for a plural, distant, rational, masculine or feminine noun.',
      },
    ],
  },
  {
    id: 'lesson14',
    title: 'الدرس الرابع عشر',
    englishTitle: 'Lesson 14',
    introduction: {
      arabic:
        "يشرح هذا الدرس إضافة الأسماء إلى ضميري المخاطبين والمتكلمين (الجمع)، والضميرين 'نَحْنُ' و 'أَنْتُمْ'، واسم الاستفهام 'أَيُّ'، وضمير المخاطب المتصل بالفعل.",
      english:
        "This lesson explains attaching nouns to second and first person plural pronouns, the pronouns 'نَحْنُ' (we) and 'أَنْتُمْ' (you m.pl.), the interrogative 'أَيُّ' (which), and second person pronouns attached to verbs.",
    },
    rules: [
      {
        name: 'إِضَافَةُ الْأَسْمَاءِ إِلَى ضَمِيرَي الْمُخَاطَبِينَ وَالْمُتَكَلِّمِينَ (Attaching nouns to 2nd/1st person plural pronouns)',
        arabicText:
          'ضَمِيرُ الْمُخَاطَبِينَ (كُمْ): رَبُّكُمْ. ضَمِيرُ الْمُتَكَلِّمِينَ (نَا): رَبُّنَا.',
        explanation:
          'Second person plural (كُمْ - kum): e.g., your (pl.m.) Lord. First person plural (نَا - nā): e.g., our Lord.',
      },
      {
        name: 'نَحْنُ، أَنْتُمْ (naḥnu - we, antum - you (m.pl.))',
        arabicText:
          'نَحْنُ: ضَمِيرُ الْجَمْعِ لِلْمُتَكَلِّمِ (نَحْنُ مُسْلِمُونَ). أَنْتُمْ: ضَمِيرُ الْجَمْعِ لِلْمُخَاطَبِ (أَنْتُمْ مُسْلِمُونَ).',
        explanation: 'نَحْنُ for first person plural. أَنْتُمْ for second person plural masculine.',
      },
      {
        name: 'أَيُّ (ayyu - which/what)',
        arabicText:
          'أَيُّ: اسْمُ اسْتِفْهَامٍ لِلْعَاقِلِ وَغَيْرِ الْعَاقِلِ، وَالاسْمُ الَّذِي بَعْدَهُ مُضَافٌ إِلَيْهِ.',
        explanation:
          'Is an interrogative noun for rational and non-rational beings. The noun following it is muḍāf ilayhi.',
      },
      {
        name: 'ضَمِيرُ الْمُخَاطَبِ الْمُتَّصِلِ بِالْفِعْلِ (Second person pronoun attached to the verb)',
        arabicText:
          'الْمُفْرَدُ الْمُذَكَّرُ: ذَهَبْتَ. الْمُفْرَدُ الْمُؤَنَّثُ: ذَهَبْتِ. الْجَمْعُ الْمُذَكَّرُ: ذَهَبْتُمْ. الْجَمْعُ الْمُؤَنَّثُ: ذَهَبْتُنَّ.',
        explanation:
          'Singular masculine: تَ (ta). Singular feminine: تِ (ti). Plural masculine: تُمْ (tum). Plural feminine: تُنَّ (tunna).',
      },
      {
        name: "الْعَلَمُ الْأَعْجَمِيُّ (al-'alam al-a'jamī - the foreign proper noun)",
        arabicText:
          'الْعَلَمُ الْأَعْجَمِيُّ: لَا يُنَوَّنُ (مَمْنُوعٌ مِنَ الصَّرْفِ) (إِبْرَاهِيمُ، وَلْيَمُ).',
        explanation: 'Does not take tanween (diptote) (e.g., إِبْرَاهِيمُ, وَلْيَمُ).',
      },
    ],
  },
  {
    id: 'lesson15',
    title: 'الدرس الخامس عشر',
    englishTitle: 'Lesson 15',
    introduction: {
      arabic:
        "يتناول هذا الدرس ضمائر المخاطب المنفصلة (أَنْتَ، أَنْتِ، أَنْتُمْ، أَنْتُنَّ) والمتصلة (كَ، كِ، كُمْ، كُنَّ)، وجدول للضمائر المتصلة بالفعل والمنفصلة، وظرفي الزمان 'قَبْلَ' و 'بَعْدَ'.",
      english:
        "This lesson covers detached second person pronouns (أَنْتَ, أَنْتِ, أَنْتُمْ, أَنْتُنَّ) and attached ones (كَ, كِ, كُمْ, كُنَّ), tables for pronouns attached to verbs and detached pronouns, and the adverbs of time 'قَبْلَ' (before) and 'بَعْدَ' (after).",
    },
    rules: [
      {
        name: 'ضَمَائِرُ الْمُخَاطَبِ (Second person pronouns - detached)',
        arabicText:
          'أَنْتَ (مفرد مذكر). أَنْتِ (مفرد مؤنث). أَنْتُمْ (جمع مذكر). أَنْتُنَّ (جمع مؤنث).',
        explanation: 'أَنْتَ (m.sg.), أَنْتِ (f.sg.), أَنْتُمْ (m.pl.), أَنْتُنَّ (f.pl.).',
      },
      {
        name: 'كَافُ الْمُخَاطَبِ (Second person pronouns - attached)',
        arabicText:
          'كَ (مفرد مذكر). كِ (مفرد مؤنث). كُمْ (جمع مذكر). كُنَّ (جمع مؤنث). تُسَمَّى ضَمَائِرَ مُتَّصِلَةً.',
        explanation:
          'كَ (m.sg.), كِ (f.sg.), كُمْ (m.pl.), كُنَّ (f.pl.). These are attached pronouns.',
      },
      {
        name: 'الضَّمَائِرُ الْمُنْفَصِلَةُ (Detached pronouns)',
        arabicText: 'الضَّمَائِرُ الْمُنْفَصِلَةُ: تُكْتَبُ، وَتُنْطَقُ فِي أَوَّلِ الْكَلَامِ.',
        explanation: 'Are written and pronounced at the beginning of speech.',
      },
      {
        name: "قَبْلَ، وَبَعْدَ (qabla - before, ba'da - after)",
        arabicText:
          'قَبْلَ، وَبَعْدَ: ظَرْفَانِ لِلزَّمَانِ، وَالاسْمُ الَّذِي بَعْدَهُمَا مُضَافٌ إِلَيْهِ.',
        explanation: 'Are adverbs of time. The noun following them is muḍāf ilayhi.',
      },
    ],
  },
  {
    id: 'lesson16_17',
    title: 'الدرسان السادس عشر والسابع عشر',
    englishTitle: 'Lessons 16 & 17',
    introduction: {
      arabic: 'يركز هذان الدرسان على المبتدأ والخبر، والإشارة إلى جمع غير العاقل.',
      english:
        'These lessons focus on the subject (المبتدأ) and predicate (الخبر), and pointing to the plural of non-rational nouns.',
    },
    rules: [
      {
        name: "الْمُبْتَدَأُ (al-mubtada' - subject)",
        arabicText: 'الْمُبْتَدَأُ: اسْمٌ يَقَعُ فِي أَوَّلِ الْجُمْلَةِ.',
        explanation: 'Is a noun that occurs at the beginning of a sentence.',
      },
      {
        name: 'الْخَبَرُ (al-khabar - predicate)',
        arabicText: 'الْخَبَرُ: اسْمٌ يَقَعُ بَعْدَ الْمُبْتَدَأِ، وَتَحْصُلُ بِهِ الْفَائِدَةُ.',
        explanation:
          "Is a noun that occurs after the mubtada', and with it, the meaning is completed.",
      },
      {
        name: 'الإِشَارَةُ إِلَى جَمْعِ غَيْرِ الْعَاقِلِ (Pointing to the plural of non-rational nouns)',
        arabicText:
          'الْجَمْعُ غَيْرُ الْعَاقِلِ لِلْقَرِيبِ (هَذِهِ): هَذِهِ كُتُبٌ. الْجَمْعُ غَيْرُ الْعَاقِلِ لِلْبَعِيدِ (تِلْكَ): تِلْكَ كُتُبٌ.',
        explanation:
          'For the near plural non-rational, هَذِهِ (hādihi) is used. For the distant plural non-rational, تِلْكَ (tilka) is used.',
      },
      {
        name: 'تركيب جملة الإشارة لجمع غير العاقل (Structure of sentences pointing to non-rational plural)',
        arabicText:
          'هَذِهِ الْأَبْوَابُ مَفْتُوحَةٌ (هَذِهِ: مُبْتَدَأٌ، الْأَبْوَابُ: بَدَلٌ، مَفْتُوحَةٌ: خَبَرٌ).',
        explanation:
          "Example: هَذِهِ الْأَبْوَابُ مَفْتُوحَةٌ (These doors are open). هَذِهِ is mubtada', الْأَبْوَابُ is badal, مَفْتُوحَةٌ is khabar.",
      },
    ],
  },
  {
    id: 'lesson18',
    title: 'الدرس الثامن عشر',
    englishTitle: 'Lesson 18',
    introduction: {
      arabic:
        "يتناول هذا الدرس المثنى، واسمي الإشارة للمثنى القريب 'هَذَانِ' و 'هَاتَانِ'، واسم الاستفهام 'كَمْ'.",
      english:
        "This lesson covers the dual (الْمُثَنَّى), the demonstrative pronouns for near dual 'هَذَانِ' (m.) and 'هَاتَانِ' (f.), and the interrogative 'كَمْ' (how many/much).",
    },
    rules: [
      {
        name: 'الْمُثَنَّى (al-muthannā - the dual)',
        arabicText:
          'الْمُثَنَّى: مَا دَلَّ عَلَى اثْنَيْنِ، أَوِ اثْنَتَيْنِ لِلْعَاقِلِ، وَغَيْرِ الْعَاقِلِ.',
        explanation: 'Indicates two, masculine or feminine, rational or irrational.',
      },
      {
        name: 'هَذَانِ، وَهَاتَانِ (hādhāni - these two (m.), hātāni - these two (f.))',
        arabicText:
          'هَذَانِ: اسْمُ إِشَارَةٍ لِلْمُثَنَّى الْقَرِيبِ الْمُذَكَّرِ. هَاتَانِ: اسْمُ إِشَارَةٍ لِلْمُثَنَّى الْقَرِيبِ الْمُؤَنَّثِ.',
        explanation: 'هَذَانِ for near dual masculine. هَاتَانِ for near dual feminine.',
      },
      {
        name: 'كَمْ (kam - how many/much?)',
        arabicText:
          'كَمْ: اسْمُ اسْتِفْهَامٍ يَدُلُّ عَلَى الْعَدَدِ، وَالاسْمُ الَّذِي بَعْدَهُ مَنْصُوبٌ يُسَمَّى تَمْيِيزًا.',
        explanation:
          'Is an interrogative noun indicating number. The noun following it is accusative (manṣūb) and is called tamyīz (specification).',
      },
    ],
  },
  {
    id: 'lesson19_20',
    title: 'الدرسان التاسع عشر والعشرون',
    englishTitle: 'Lessons 19 & 20',
    introduction: {
      arabic:
        'يشرح هذان الدرسان قواعد العدد من ٣ إلى ١٠، وكيفية مخالفته للمعدود في التذكير والتأنيث، وكون المعدود جمعاً مجروراً بالإضافة.',
      english:
        'These lessons explain the rules for numbers from 3 to 10, how they oppose the counted noun in gender, and how the counted noun is plural and genitive through iḍāfah.',
    },
    rules: [
      {
        name: 'الْعَدَدُ مِنْ ٣ إِلَى ١٠ (Numbers from 3 to 10)',
        arabicText:
          'الْعَدَدُ مِنْ (٣ إلى ١٠) يُخَالِفُ الْمَعْدُودَ فِي التَّذْكِيرِ، وَالتَّأْنِيثِ. وَالْمَعْدُودُ يَكُونُ جَمْعاً مَجْرُوراً بِالإِضَافَةِ (أَيْ يَكُونُ: مُضَافَاً إِلَيْهِ).',
        explanation:
          "The number from 3 to 10 opposes the counted noun (ma'dūd) in gender. The ma'dūd is plural and genitive (muḍāf ilayhi).",
      },
      {
        name: 'الحكم في تذكير العدد وتأنيثه (Determining gender of the number)',
        arabicText:
          'الْحُكْمُ فِي تَذْكِيرِ الْعَدَدِ، وَتَأْنِيثِهِ عَلَى الْمُفْرَدِ فِي الْمَعْدُودِ، وَلَيْسَ عَلَى الْجَمْعِ.',
        explanation:
          "The gender of the number (for 3-10) is determined by the gender of the singular form of the ma'dūd, not its plural form.",
      },
    ],
  },
  {
    id: 'lesson21',
    title: 'الدرس الحادي والعشرون',
    englishTitle: 'Lesson 21',
    introduction: {
      arabic:
        'هذا الدرس عبارة عن مراجعة شاملة للدروس السابقة، ويجمع العديد من القواعد التي تم تعلمها.',
      english:
        'This lesson is a comprehensive review of previous lessons, consolidating many of the rules learned.',
    },
    rules: [
      {
        name: 'مراجعة أسماء الإشارة للقريب المذكر (Review: Demonstrative Pronouns - Near Masculine)',
        arabicText: 'هَذَا فَصْلُنَا. هَذَا مُدَرِّسُنَا.',
        explanation: 'e.g., This is our classroom. This is our teacher.',
      },
      {
        name: 'مراجعة أسماء الإشارة للقريب المؤنث (Review: Demonstrative Pronouns - Near Feminine)',
        arabicText: 'هَذِهِ مَدْرَسَتِي. هَذِهِ مُدَرِّسَتُنَا.',
        explanation: 'e.g., This is my school. This is our (female) teacher.',
      },
      {
        name: 'مراجعة أسماء الإشارة للبعيد المذكر (Review: Demonstrative Pronouns - Distant Masculine)',
        arabicText: 'ذَاكَ كُرْسِيُّهُ. ذَاكَ مُحَمَّدٌ.',
        explanation: 'e.g., That is his chair. That is Muhammad.',
      },
      {
        name: 'مراجعة أسماء الإشارة للبعيد المؤنث (Review: Demonstrative Pronouns - Distant Feminine)',
        arabicText: 'تِلْكَ مَكَاتِبُ الطُّلَابِ. تِلْكَ فَاطِمَةُ.',
        explanation: "e.g., Those are the students' desks. That is Fatima.",
      },
      {
        name: 'مراجعة ياء المتكلم (Review: First Person Possessive Suffix)',
        arabicText: 'هَذِهِ مَدْرَسَتِي. هَؤُلَاءِ أَصْدِقَائِي.',
        explanation: 'e.g., This is my school. These are my friends.',
      },
      {
        name: 'مراجعة ضمير الجمع للمتكلم (Review: First Person Plural Pronoun)',
        arabicText: 'هَذَا فَصْلُنَا. نَحْنُ نُحِبُّهُ.',
        explanation: 'e.g., This is our classroom. We love him/it.',
      },
      {
        name: 'مراجعة ضمير الغائب للمفرد المذكر (Review: Third Person Singular Masculine Pronoun)',
        arabicText: 'هُوَ فَصْلٌ وَاسِعٌ. هُوَ مِنَ الْيَابَانِ.',
        explanation: 'e.g., It is a spacious classroom. He is from Japan.',
      },
      {
        name: 'مراجعة ضمير الغائب للمفرد المؤنث (Review: Third Person Singular Feminine Pronoun)',
        arabicText: 'هِيَ قَرِيبَةٌ. هِيَ مَدْرَسَةٌ كَبِيرَةٌ.',
        explanation: 'e.g., She is near. It is a big school.',
      },
      {
        name: 'مراجعة ضمير الغائب للجمع المذكر (Review: Third Person Plural Masculine Pronoun)',
        arabicText: 'كَرَاسِيُّهُمْ. هُمْ مِنْ بِلَادٍ مُخْتَلِفَةٍ.',
        explanation: 'e.g., Their chairs. They are from different countries.',
      },
      {
        name: 'مراجعة منعوت ونعت (Review: Described Noun and Adjective)',
        arabicText: 'مَدْرَسَةٌ كَبِيرَةٌ. فَصْلٌ وَاسِعٌ.',
        explanation: 'e.g., A big school. A spacious classroom.',
      },
      {
        name: 'مراجعة مضاف ومضاف إليه (Review: Possessive Construction)',
        arabicText: 'مَكْتَبُ الْمُدَرِّسِ. فَصْلُنَا.',
        explanation: "e.g., The teacher's desk. Our classroom.",
      },
      {
        name: 'مراجعة مبتدأ وخبر (Review: Subject and Predicate)',
        arabicText: 'هَذِهِ مَدْرَسَتِي. أَبْوَابُهَا مَفْتُوحَةٌ.',
        explanation: 'e.g., This is my school. Its doors are open.',
      },
      {
        name: 'مراجعة المثنى (Review: Dual)',
        arabicText: 'فِيهِ نَافِذَتَانِ كَبِيرَتَانِ. الطَّالِبَانِ مُجْتَهِدَانِ.',
        explanation: 'e.g., It has two big windows. The two students are hardworking.',
      },
      {
        name: 'مراجعة العدد (Review: Number)',
        arabicText: 'ثَلَاثَةُ أَبْوَابٍ. عَشَرَةُ طُلَّابٍ.',
        explanation: 'e.g., Three doors. Ten students.',
      },
      {
        name: 'مراجعة حرف الجر (Review: Preposition)',
        arabicText: 'فِي الْمَدْرَسَةِ فُصُولٌ. هُمْ مِنْ بِلَادٍ مُخْتَلِفَةٍ.',
        explanation: 'e.g., In the school are classrooms. They are from different countries.',
      },
    ],
  },
  {
    id: 'lesson22_23',
    title: 'الدرسان الثاني والعشرون والثالث والعشرون',
    englishTitle: 'Lessons 22 & 23',
    introduction: {
      arabic:
        'هذان الدرسان مخصصان لشرح الممنوع من الصرف، وهو الاسم الذي لا يُنوَّن ويُجر بالفتحة نيابة عن الكسرة، مع ذكر أنواعه المختلفة.',
      english:
        "These two lessons are dedicated to explaining diptotes (الْمَمْنُوعُ مِنَ الصَّرْفِ - al-mamnū' min al-ṣarf), which are nouns that do not take tanween and are made genitive with a fatḥah instead of a kasrah, along with their various types.",
    },
    rules: [
      {
        name: "الْمَمْنُوعُ مِنَ الصَّرْفِ (al-mamnū' min al-ṣarf - Diptotes)",
        arabicText:
          'الْمَمْنُوعُ مِنَ الصَّرْفِ: اِسْمٌ لَا يُنَوَّنُ، وَيُجَرُّ بِالْفَتْحَةِ نِيَابَةً عَنِ الْكَسْرَةِ.',
        explanation:
          'Is a noun that does not take tanween and is made genitive (majroor) with a fatḥah instead of a kasrah.',
      },
      {
        name: 'أنواع الأسماء الممنوعة من الصرف (Types of Diptotes)',
        arabicText:
          '١- الْعَلَمُ الْمُؤَنَّثُ (مَرْيَمُ). ٢- الْعَلَمُ الْمُؤَنَّثُ لَفْظًا (حَمْزَةُ). ٣- الْعَلَمُ الْمَخْتُومُ بِأَلِفٍ وَنُونٍ زَائِدَتَيْنِ (عُثْمَانُ). ٤- الْعَلَمُ الَّذِي عَلَى وَزْنِ الْفِعْلِ (أَحْمَدُ). ٥- الْعَلَمُ الْأَعْجَمِيُّ (إِبْرَاهِيمُ). ٦- الصِّفَةُ الَّتِي عَلَى وَزْنِ أَفْعَلَ (أَبْيَضُ). ٧- الصِّفَةُ الَّتِي عَلَى وَزْنِ فَعْلَانَ (كَسْلَانُ). ٨- الاِسْمُ الْمَخْتُومُ بِأَلِفِ مَمْدُودَةٍ (أَغْنِيَاءُ، فُقَرَاءُ). ٩- الاِسْمُ الَّذِي عَلَى وَزْنِ مَفَاعِلَ (مَسَاجِدُ). ١٠- الاِسْمُ الَّذِي عَلَى وَزْنِ مَفَاعِيلَ (مَنَادِيلُ).',
        explanation:
          "Includes: Feminine proper nouns (e.g., Maryam), masculine proper nouns feminine in form (e.g., Hamza), proper nouns ending with extra alif & noon (e.g., Uthman), proper nouns on verb pattern (e.g., Ahmad), foreign proper nouns (e.g., Ibrahim), adjectives on af'alu pattern (e.g., white), adjectives on fa'lānu pattern (e.g., lazy), nouns ending with extended alif (e.g., rich, poor), nouns on mafā'ilu pattern (e.g., mosques), nouns on mafā'īlu pattern (e.g., handkerchiefs).",
      },
      {
        name: 'جر الممنوع من الصرف بالفتحة (Making Diptotes Genitive with Fatḥah)',
        arabicText: 'ذَهَبْتُ إِلَى زَيْنَبَ. هَذَا الْكِتَابُ لأَحْمَدَ. بَيْتُ زَيْنَبَ جَمِيلٌ.',
        explanation:
          "Diptotes are made genitive with a fatḥah, whether by a preposition (e.g., to Zaynab_a_) or by iḍāfah (e.g., Zaynab_a_'s house).",
      },
    ],
  },
];
