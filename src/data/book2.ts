import { Book } from './lessons';

export const book2Data: Book = {
  id: 'book2',
  title: { ar: 'كِتَابُ الْمَدِينَةِ الثَّانِي', en: 'Madinah Book 2' },
  available: true,
  comingSoon: false,
  description: {
    arabic:
      'الْكِتَابُ الثَّانِي مِنْ سِلْسِلَةِ تَعْلِيمِ اللُّغَةِ الْعَرَبِيَّةِ لِغَيْرِ النَّاطِقِينَ بِهَا - الْمُسْتَوَى الْمُتَوَسِّطُ',
    english:
      'The second book in the Arabic language learning series for non-native speakers - Intermediate level',
  },
  lessons: [
    {
      id: 'lesson1',
      title: { ar: 'الدَّرْسُ الْأَوَّلُ', en: 'Lesson 1' },
      introduction: {
        arabic:
          'يُقَدِّمُ هَذَا الدَّرْسُ حَرْفَيْ النَّصْبِ "إِنَّ" وَ "لَعَلَّ" وَعَمَلَهُمَا، كَيْفِيَّةَ دُخُولِهِمَا عَلَى الضَّمَائِرِ وَالْأَسْمَاءِ الظَّاهِرَةِ، مَعْنَى "أَمْ" لِلتَّخْيِيرِ، الِاسْتِفْهَامَ بِالْهَمْزَةِ لِطَلَبِ التَّعْيِينِ، اسْمَ "ذُو" وَمُشْتَقَّاتِهِ، الِاسْمَ الْمَنْقُوصَ، وَقَوَاعِدَ الْعَدَدَيْنِ مِائَةٍ وَأَلْفٍ.',
        english:
          'This lesson introduces the particles "إِنَّ" (inna) and "لَعَلَّ" (la‘alla) and their function, how they attach to pronouns and explicit nouns, the meaning of "أَمْ" (am) for choosing, interrogation with Hamzah for specification, the noun "ذُو" (dhu) and its forms, the defective noun, and rules for the numbers 100 and 1000.',
      },
      rules: [
        {
          name: 'إِنَّ (inna) and لَعَلَّ (la‘alla)',
          arabicText:
            'إِنَّ: حَرْفُ نَصْبٍ، يَنْصِبُ الِاسْمَ، وَيَرْفَعُ الْخَبَرَ. لَعَلَّ: حَرْفُ نَصْبٍ، يَنْصِبُ الِاسْمَ، وَيَرْفَعُ الْخَبَرَ. تُفِيدُ إِنَّ: التَّوْكِيدَ، وتفيدُ لَعَلَّ: التَّرَجِّيَ.',
          explanation:
            '"إِنَّ" (inna) and "لَعَلَّ" (la‘alla) are particles that make the following noun (Ism) accusative (مَنْصُوب) and the predicate (Khabar) nominative (مَرْفُوع). "إِنَّ" signifies emphasis, and "لَعَلَّ" signifies hope or perhaps.',
        },
        {
          name: 'Attachment of إِنَّ to Pronouns (دُخُولُ إِنَّ عَلَى الضَّمَائِرِ)',
          arabicText:
            'إِنَّ + أَنَا = إِنَّنِي (أَوْ: إِنِّي). إِنَّ + نَحْنُ = إِنَّنَا (أَوْ: إِنَّا). إِنَّ + أَنْتَ = إِنَّكَ. إِنَّ + هُوَ = إِنَّهُ.',
          explanation:
            'Examples of "إِنَّ" attaching to pronouns: إِنَّنِي (indeed I), إِنَّنَا (indeed we), إِنَّكَ (indeed you - m.sg.), إِنَّهُ (indeed he).',
        },
        {
          name: 'Attachment of لَعَلَّ to Pronouns (دُخُولُ لَعَلَّ عَلَى الضَّمَائِرِ)',
          arabicText:
            'لَعَلَّ + أَنَا = لَعَلِّي. لَعَلَّ + نَحْنُ = لَعَلَّنَا. لَعَلَّ + أَنْتَ = لَعَلَّكَ. لَعَلَّ + هُوَ = لَعَلَّهُ.',
          explanation:
            'Examples of "لَعَلَّ" attaching to pronouns: لَعَلِّي (perhaps I), لَعَلَّنَا (perhaps we), لَعَلَّكَ (perhaps you - m.sg.), لَعَلَّهُ (perhaps he).',
        },
        {
          name: 'إِنَّ and لَعَلَّ with Explicit Nouns',
          arabicText:
            'إِنَّ الْمُدَرِّسَ جَدِيدٌ. لَعَلَّ الْخَبَرَ صَحِيحٌ. اسْمُ إِنَّ/لَعَلَّ: مَنْصُوبٌ بِالْفَتْحَةِ، وَخَبَرُهَا مَرْفُوعٌ بِالضَّمَّةِ.',
          explanation:
            'With explicit nouns, the Ism of "إِنَّ" or "لَعَلَّ" is accusative (e.g., "al-mudarrisa", "al-khabara") and the Khabar is nominative (e.g., "jadīdun", "ṣaḥīḥun").',
        },
        {
          name: 'أَمْ (am - or)',
          arabicText:
            'أَمْ: حَرْفُ عَطْفٍ يَأْتِي مَعَ هَمْزَةِ التَّعْيِينِ. أَمُجْتَهِدٌ أَنْتَ أَمْ كَسْلَانُ؟',
          explanation:
            '"أَمْ" is a conjunction used with the interrogative Hamzah (for specification) to offer a choice between two options. Example: "Are you hardworking or lazy?"',
        },
        {
          name: 'Interrogation with Hamzah for Specification (الِاسْتِفْهَامُ بِالْهَمْزَةِ لِطَلَبِ التَّعْيِينِ)',
          arabicText:
            'أَمِنَ الْهِنْدِ أَنْتَ أَمْ مِنْ بَاكِسْتَانَ؟ الْجَوَابُ: أَنَا مِنَ الْهِنْدِ. (لَيْسَ جَوَابُهَا نَعَمْ، أَوْ لَا).',
          explanation:
            'The interrogative Hamzah (أَ) when used for specification requires a specific answer from the choices given, not a "yes" or "no". Example: "Are you from India or from Pakistan?" Answer: "I am from India."',
        },
        {
          name: 'ذُو (dhū - owner of/possessing)',
          arabicText:
            'ذُو: اسْمٌ مِنَ الْأَسْمَاءِ الْخَمْسَةِ، مَرْفُوعٌ بِالْوَاوِ. الِاسْمُ الَّذِي بَعْدَهُ مُضَافٌ إِلَيْهِ. مُؤَنَّثُهُ: ذَاتُ. جَمْعُهُ الْمُذَكَّرُ: ذَوُو. جَمْعُهُ الْمُؤَنَّثُ: ذَوَاتُ. هَذَا الرَّجُلُ ذُو خُلُقٍ.',
          explanation:
            '"ذُو" is one of the Five Nouns, nominative with a "wāw". The noun following it is always genitive (muḍāf ilayhi). Feminine: ذَاتُ. Masculine Plural: ذَوُو. Feminine Plural: ذَوَاتُ. Example: "This man is of good character."',
        },
        {
          name: 'Defective Noun (الِاسْمُ الْمَنْقُوصُ)',
          arabicText:
            'اسْمٌ آخِرُهُ يَاءٌ مَكْسُورٌ مَا قَبْلَهَا، نَحْوُ: الْغَالِي، الْقَاضِي. تُحْذَفُ يَاؤُهَا إِذَا حُذِفَتْ (ال)، تَقُولُ: غَالٍ، قَاضٍ. (هَذَا التَّنْوِينُ يُسَمَّى تَنْوِينَ عِوَضٍ).',
          explanation:
            'A noun ending in a "yāʾ" preceded by a kasrah (e.g., الْقَاضِي - the judge). If indefinite and in the nominative or genitive case, its "yāʾ" is dropped and it takes "tanwīn ʿiwaḍ" (e.g., قَاضٍ).',
        },
        {
          name: 'Numbers 100 (مِائَةٌ) and 1000 (أَلْفٌ)',
          arabicText:
            'الْعَدَدَانِ مِائَةٌ، وَأَلْفُ: الِاسْمُ الَّذِي بَعْدَهُمَا مُفْرَدٌ مَجْرُورٌ بِالْإِضَافَةِ. لَا يَخْتَلِفُ لَفْظُهُ مَعَ الْمُذَكَّرِ وَالْمُؤَنَّثِ. مِائَةُ رَجُلٍ، مِائَةُ امْرَأَةٍ.',
          explanation:
            'The counted noun (maʿdūd) following 100 (مِائَة) and 1000 (أَلْف) is singular and in the genitive case (muḍāf ilayhi). The form of مِائَة and أَلْف does not change based on the gender of the counted noun.',
        },
      ],
    },
    {
      id: 'lesson2',
      title: { ar: 'الدَّرْسُ الثَّانِي', en: 'Lesson 2' },
      introduction: {
        arabic:
          'يَتَنَاوَلُ هَذَا الدَّرْسُ الْفِعْلَ النَّاقِصَ "لَيْسَ" وَعَمَلَهُ، وَإِمْكَانِيَّةَ دُخُولِ حَرْفِ الْجَرِّ "الْبَاءُ" عَلَى خَبَرِهِ. كَمَا يُنَاقِشُ جَوَازَ تَقْدِيمِ خَبَرِ "إِنَّ" عَلَى اسْمِهَا إِذَا كَانَ جَارًّا وَمَجْرُورًا.',
        english:
          'This lesson covers the defective verb "لَيْسَ" (laysa - is not) and its function, including the possibility of the preposition "بِ" (bi) entering its predicate. It also discusses the permissibility of the predicate of "إِنَّ" preceding its subject if it is a prepositional phrase.',
      },
      rules: [
        {
          name: 'لَيْسَ (laysa - is not/are not)',
          arabicText:
            'لَيْسَ: فِعْلٌ مَاضٍ نَاقِصٌ، يَرْفَعُ الِاسْمَ، وَيَنْصِبُ الْخَبَرَ. مَعْنَاهَا: النَّفْيُ. الْبَابُ مُغْلَقٌ -> لَيْسَ الْبَابُ مُغْلَقًا.',
          explanation:
            '"لَيْسَ" is a defective past tense verb (from the "sisters of kāna") meaning "is not/are not". It makes its subject (Ism) nominative and its predicate (Khabar) accusative. Example: "The door is closed" -> "The door is not closed".',
        },
        {
          name: "Adding 'بِ' (bi) to the Predicate of لَيْسَ",
          arabicText:
            'يَجُوزُ أَنْ يَدْخُلَ حَرْفُ الْجَرِّ (الْبَاءُ) عَلَى خَبَرِ لَيْسَ. حَامِدٌ لَيْسَ طَالِبًا، وَيَجُوزُ: حَامِدٌ لَيْسَ بِطَالِبٍ. فَائِدَةُ حَرْفِ الْجَرِّ (الْبَاءُ) التَّوْكِيدُ.',
          explanation:
            'The preposition "بِ" (bi) can be added to the predicate of "لَيْسَ" for emphasis. The predicate becomes genitive in form but remains accusative in grammatical position. Example: "Hamid is not a student" can also be "Hamid is not a student (emphatic)".',
        },
        {
          name: 'Subject of لَيْسَ as a Pronoun',
          arabicText:
            'يَجُوزُ أَنْ يَكُونَ اسْمُ لَيْسَ ضَمِيرًا. أَنَا لَسْتُ مُدَرِّسًا (اسْمُ لَيْسَ: التَّاءُ). الطُّلَّابُ لَيْسُوا صِغَارًا (اسْمُ لَيْسَ: وَاوُ الْجَمَاعَةِ).',
          explanation:
            'The subject of "لَيْسَ" can be an explicit noun or a pronoun (hidden or attached). Examples: "I am not a teacher" (subject is "تُ"). "The students are not young" (subject is "وا").',
        },
        {
          name: 'Precedence of Khabar Inna (تَقْدِيمُ خَبَرٍ إِنَّ عَلَى اسْمِهَا)',
          arabicText:
            'يَجُوزُ تَقْدِيمُ خَبَرِ إِنَّ عَلَى اسْمِهَا إِذَا كَانَ الْخَبَرُ جَارًّا وَمَجْرُورًا. لِي ثَلَاثُ أَخَوَاتٍ -> إِنَّ لِي ثَلَاثَ أَخَوَاتٍ.',
          explanation:
            'The predicate (Khabar) of "إِنَّ" can precede its subject (Ism) if the predicate is a prepositional phrase (jārr wa-majrūr). Example: "I have three sisters" -> "Indeed, I have three sisters."',
        },
      ],
    },
    {
      id: 'lesson3',
      title: { ar: 'الدَّرْسُ الثَّالِثُ', en: 'Lesson 3' },
      introduction: {
        arabic:
          'يُقَدِّمُ هَذَا الدَّرْسُ اسْمَ التَّفْضِيلِ وَصِيَاغَتَهُ، الْحَرْفَيْنِ "لَكِنَّ" وَ "كَأَنَّ" وَعَمَلَهُمَا، الْأَعْدَادَ الْمُرَكَّبَةَ (١١-١٩) وَأَلْفَاظَ الْعُقُودِ (٢٠-٩٠) وَقَوَاعِدَهَا مَعَ الْمَعْدُودِ، الْعَدَدَ التَّرْتِيبِيَّ، الِاسْتِفْهَامَ الْمَنْفِيَّ، وَ "أَيُّهُمَا".',
        english:
          'This lesson introduces the noun of preference (comparative/superlative) and its formation, the particles "لَكِنَّ" (but) and "كَأَنَّ" (as if), compound numbers (11-19) and tens (20-90) with their rules for the counted noun, ordinal numbers, negated interrogation, and "أَيُّهُمَا" (which of the two).',
      },
      rules: [
        {
          name: 'Noun of Preference (اسْمُ التَّفْضِيلِ)',
          arabicText:
            'اسْمٌ يُصَاغُ عَلَى وَزْنِ أَفْعَلَ. ١- أَنْ يَكُونَ نَكِرَةً، وَبَعْدَهُ حَرْفُ الْجَرِّ مِنْ (مُحَمَّدٌ أَفْضَلُ مِنْ خَالِدٍ). ٢- أَنْ يَكُونَ نَكِرَةً مُضَافًا إِلَى نَكِرَةٍ (مُحَمَّدٌ أَحْسَنُ طَالِبٍ). اسْمُ التَّفْضِيلِ مُفْرَدٌ مُذَكَّرٌ دَائِمًا فِي هَاتَيْنِ الصُّورَتَيْنِ وَمَمْنُوعٌ مِنَ الصَّرْفِ.',
          explanation:
            'The noun of preference (comparative/superlative) is usually formed on the pattern أَفْعَلُ (e.g., أَكْبَرُ - bigger/biggest). Two forms are discussed: 1. Indefinite + مِنْ (min) (e.g., "Muhammad is better than Khalid"). 2. Indefinite annexed to an indefinite noun (e.g., "Muhammad is the best student"). In these forms, the noun of preference is always singular masculine and is a diptote (does not take tanween).',
        },
        {
          name: 'لَكِنَّ (lākinna - but) and كَأَنَّ (kaʾanna - as if)',
          arabicText:
            'لَكِنَّ، وَكَأَنَّ: حَرْفَانِ مِنْ أَخَوَاتِ إِنَّ (تَنْصِبُ الِاسْمَ، وَتَرْفَعُ الْخَبَرَ). لَكِنَّ: تُفِيدُ الِاسْتِدْرَاكَ. كَأَنَّ: تُفِيدُ التَّشْبِيهَ. الطُّلَّابُ كَثِيرٌ لَكِنَّ الْفَصْلَ صَغِيرٌ. هُوَ زَمِيلُكَ، كَأَنَّهُ أَخُوكَ.',
          explanation:
            '"لَكِنَّ" (but) and "كَأَنَّ" (as if/it seems) are particles from the "sisters of inna". They make the Ism accusative and the Khabar nominative. "لَكِنَّ" is for contrast/rectification. "كَأَنَّ" is for simile/likeness.',
        },
        {
          name: 'Compound Numbers (11-19) and Tens (20-90) (الْأَعْدَادُ الْمُرَكَّبَةُ، وَأَلْفَاظُ الْعُقُودِ)',
          arabicText:
            'الْأَعْدَادُ مِنْ ١١ إِلَى ١٩. الْعَدَدَانِ (١١ وَ ١٢) يُوَافِقَانِ الْمَعْدُودَ. الْأَعْدَادُ مِنْ (١٣ إِلَى ١٩) الْجُزْءُ الْأَوَّلُ يُخَالِفُ الْمَعْدُودَ، وَالْجُزْءُ الثَّانِي يُوَافِقُ. أَلْفَاظُ الْعُقُودِ (٢٠، ٣٠...٩٠) لَا تَتَغَيَّرُ مَعَ الْمَعْدُودِ. الْمَعْدُودُ مَنْصُوبٌ دَائِمًا (تَمْيِيزٌ).',
          explanation:
            'Numbers 11-12: Both parts agree in gender with the counted noun. Numbers 13-19: The first part (units) disagrees in gender, the second part (tens) agrees. Tens (20, 30...90): Maintain one form. The counted noun (maʿdūd) for numbers 11-99 is singular, accusative, and called "tamyīz" (specification).',
        },
        {
          name: 'Ordinal Numbers (الْعَدَدُ التَّرْتِيبِيُّ)',
          arabicText:
            'وَصْفٌ لِتَرْتِيبِ الْأَشْيَاءِ. الْأَوَّلُ، الثَّانِي... يُوَافِقُ الْمَعْدُودَ. هَذَا الدَّرْسُ الْأَوَّلُ.',
          explanation:
            'Ordinal numbers (first, second, etc.) describe the order of things and agree with the noun they describe in gender, case, and definiteness. Example: "The first lesson."',
        },
        {
          name: 'Negated Interrogation (الِاسْتِفْهَامُ الْمَنْفِيُّ)',
          arabicText:
            'هَمْزَةُ الِاسْتِفْهَامِ + نَفْي = أَلَيْسَ؟ جَوَابُهُ فِي الْإِثْبَاتِ: بَلَى. وَفِي النَّفْي: نَعَمْ. أَلَسْتَ طَالِبًا؟ بَلَى (أَنَا طَالِبٌ). / نَعَمْ (لَسْتُ طَالِبًا).',
          explanation:
            "A question containing a negative particle (e.g., أَلَيْسَ؟ - Isn't it?). Affirmative answer: بَلَى (Yes, indeed it is). Negative answer (confirming the negation): نَعَمْ (Yes, it is not / No, I am not).",
        },
        {
          name: 'أَيُّهُمَا؟ (ayyuhumā? - Which of the two?)',
          arabicText:
            'أَيُّ + هُمَا (ضَمِيرُ الْغَائِبِ لِلْمُثَنَّى). يُسْتَعْمَلُ لِلْعَاقِلِ، وَغَيْرِهِ. هَذَانِ طَالِبَانِ. أَيُّهُمَا أَطْوَلُ؟',
          explanation:
            'Used to ask "which one" when referring to two items/people. "أَيُّ" (which) + "هُمَا" (them two). Example: "These are two students. Which of them is taller?"',
        },
      ],
    },
    {
      id: 'lesson4',
      title: { ar: 'الدَّرْسُ الرَّابِعُ', en: 'Lesson 4' },
      introduction: {
        arabic:
          'يُفَصِّلُ هَذَا الدَّرْسُ إِسْنَادَ الْفِعْلِ الْمَاضِي إِلَى الضَّمَائِرِ الْمُخْتَلِفَةِ (تَاءُ الْفَاعِلِ، وَاوُ الْجَمَاعَةِ، نُونُ النِّسْوَةِ، ضَمِيرُ الْغَائِبِ). كَمَا يُعَرِّفُ بِـ "مَا النَّافِيَةِ" لِنَفْيِ الْمَاضِي، وَ "لِأَنَّ" لِبَيَانِ السَّبَبِ.',
        english:
          'This lesson details assigning the past tense verb to different pronouns (tāʾ al-fāʿil, wāw al-jamāʿah, nūn an-niswah, third-person pronoun). It also introduces "مَا النَّافِيَةُ" (mā of negation) for negating the past, and "لِأَنَّ" (because) for stating reason.',
      },
      rules: [
        {
          name: 'Assigning Past Tense Verbs to Pronouns (إِسْنَادُ الْفِعْلِ الْمَاضِي إِلَى الضَّمَائِرِ)',
          arabicText:
            'تَاءُ الْفَاعِلِ: ذَهَبْتُ، ذَهَبْتَ، ذَهَبْتِ. وَاوُ الْجَمَاعَةِ: ذَهَبُوا. نُونُ النِّسْوَةِ: ذَهَبْنَ. ضَمِيرُ الْغَائِبِ الْمُفْرَدِ: ذَهَبَ (الْفَاعِلُ مُسْتَتِرٌ: هُوَ)، ذَهَبَتْ (الْفَاعِلُ مُسْتَتِرٌ: هِيَ؛ التَّاءُ حَرْفُ تَأْنِيثٍ).',
          explanation:
            'Covers conjugation with: tāʾ al-fāʿil (ذَهَبْتُ - I went), wāw al-jamāʿah (ذَهَبُوا - they m. went), nūn an-niswah (ذَهَبْنَ - they f. went). For 3rd person singular (ذَهَبَ - he went), the doer is a hidden "huwa"; for ذَهَبَتْ (she went), the doer is a hidden "hiya", and the "تْ" is a feminine marker.',
        },
        {
          name: 'مَا النَّافِيَةُ (mā of negation for past tense)',
          arabicText:
            'حَرْفٌ يُنْفَى بِهِ الْفِعْلُ الْمَاضِي. أَذَهَبْتَ إِلَى الْمَعْهَدِ؟ لَا، مَا ذَهَبْتُ.',
          explanation:
            '"مَا" is a particle used to negate past tense verbs. Example: "Did you go to the institute? No, I did not go."',
        },
        {
          name: 'لِأَنَّ (liʾanna - because)',
          arabicText:
            'أَصْلُهَا: لِ + أَنَّ (اللَّامُ: حَرْفُ جَرٍّ، أَنَّ: حَرْفُ نَصْبٍ). تُفِيدُ التَّعْلِيلَ. ذَهَبَ إِلَى الْمُسْتَشْفَى لِأَنَّهُ مَرِيضٌ.',
          explanation:
            'Composed of "لِ" (for/because of) + "أَنَّ" (that). It indicates the reason. Example: "He went to the hospital because he is sick."',
        },
      ],
    },
    {
      id: 'lesson5',
      title: { ar: 'الدَّرْسُ الْخَامِسُ', en: 'Lesson 5' },
      introduction: {
        arabic:
          'يُعَرِّفُ هَذَا الدَّرْسُ بِالْفَاعِلِ وَالْمَفْعُولِ بِهِ وَأَحْكَامِهِمَا الْإِعْرَابِيَّةِ. كَمَا يُوَضِّحُ كَيْفَ تَكُونُ الضَّمَائِرُ الْمُتَّصِلَةُ فَاعِلاً أَوْ مَفْعُولاً بِهِ.',
        english:
          'This lesson defines the doer (الْفَاعِلُ) and the object (الْمَفْعُولُ بِهِ) and their case endings. It also clarifies how attached pronouns can function as doers or objects.',
      },
      rules: [
        {
          name: 'The Doer (الْفَاعِلُ)',
          arabicText:
            'اسْمٌ مَرْفُوعٌ قَبْلَهُ فِعْلٌ، وَهُوَ الَّذِي فَعَلَ الْفِعْلَ. قَرَأَ الطَّالِبُ الْقُرْآنَ (الطَّالِبُ: فَاعِلٌ).',
          explanation:
            'The doer (fāʿil) is a nominative noun (or pronoun) that performs the action of the verb. Example: "The student read the Quran" (الطَّالِبُ is the doer).',
        },
        {
          name: 'The Object (الْمَفْعُولُ بِهِ)',
          arabicText:
            'اسْمٌ مَنْصُوبٌ وَقَعَ عَلَيْهِ فِعْلُ الْفَاعِلِ. قَرَأَ الطَّالِبُ الْقُرْآنَ (الْقُرْآنَ: مَفْعُولٌ بِهِ).',
          explanation:
            'The object (mafʿūl bihi) is an accusative noun (or pronoun) upon which the action of the verb is performed. Example: "The student read the Quran" (الْقُرْآنَ is the object).',
        },
        {
          name: 'Pronouns as Doers',
          arabicText:
            'كَتَبْتُ الْوَاجِبَ (التَّاءُ: فَاعِلٌ). كَتَبُوا (وَاوُ الْجَمَاعَةِ: فَاعِلٌ). ذَهَبْنَ (نُونُ النِّسْوَةِ: فَاعِلٌ).',
          explanation:
            'Attached pronouns can be doers: Tāʾ in كَتَبْتُ (I wrote), Wāw in كَتَبُوا (they m. wrote), Nūn in ذَهَبْنَ (they f. went).',
        },
        {
          name: 'Pronouns as Objects',
          arabicText:
            'مَنْ فَتَحَ الْبَابَ؟ أَنَا فَتَحْتُهُ (الْهَاءُ: مَفْعُولٌ بِهِ). مَنْ فَتَحَ النَّافِذَةَ؟ أَنَا فَتَحْتُهَا (هَا: مَفْعُولٌ بِهِ).',
          explanation:
            'Attached pronouns like ـهُ (him/it) and ـهَا (her/it) function as objects when attached to a verb. Example: "I opened it" (ـهُ or ـهَا is the object).',
        },
        {
          name: 'Tāʾ of Feminization (تَاءُ التَّأْنِيثِ)',
          arabicText:
            'حَرْفٌ يَدُلُّ عَلَى أَنَّ مَا بَعْدَهُ مُؤَنَّثٌ. غَسَلَتْ آمِنَةُ الثَّوْبَ.',
          explanation:
            'The tāʾ at-taʾnīth (ـَتْ) is a letter indicating the doer is feminine, not a pronoun itself. Example: "Amina washed the garment."',
        },
      ],
    },
    {
      id: 'lesson6',
      title: { ar: 'الدَّرْسُ السَّادِسُ', en: 'Lesson 6' },
      introduction: {
        arabic:
          'يُرَكِّزُ هَذَا الدَّرْسُ عَلَى قَوَاعِدِ تَأْنِيثِ الْفَاعِلِ وَتَأْثِيرِهِ عَلَى صِيغَةِ الْفِعْلِ وَالضَّمَائِرِ. كَمَا يُعِيدُ النَّظَرَ فِي ضَمَائِرِ النَّصْبِ الْغَائِبَةِ، وَحَرْفِ النَّصْبِ "أَنَّ". وَيُقَدِّمُ قَاعِدَةَ جَمْعِ الصِّفَاتِ الَّتِي عَلَى وَزْنِ "فَعْلَان".',
        english:
          'This lesson focuses on the rules of feminization related to the doer and its effect on verb forms and pronouns. It revisits third-person object pronouns and the particle "أَنَّ". It also introduces the pluralization of adjectives on the "فَعْلَان" pattern.',
      },
      rules: [
        {
          name: 'Feminization with Tāʾ al-Fāʿil (تَأْنِيثُ الْفَاعِلِ مَعَ تَاءِ الْفَاعِلِ)',
          arabicText:
            'إِذَا كَانَ الْفَاعِلُ ضَمِيرَ الْمُخَاطَبِ (التَّاء): تُفْتَحُ لِلْمُذَكَّرِ (أَذَهَبْتَ؟)، وَتُكْسَرُ لِلْمُؤَنَّثِ (أَذَهَبْتِ؟). لِلْمُتَكَلِّمِ تُضَمُّ (ذَهَبْتُ).',
          explanation:
            'When the doer is the tāʾ al-fāʿil: it takes fatḥah for masculine singular (ـتَ), kasrah for feminine singular (ـتِ), and ḍammah for first person singular (ـتُ).',
        },
        {
          name: 'Third Person Object Pronouns (ضَمَائِرُ الْغَائِبِ - مَفْعُولٌ بِهِ)',
          arabicText:
            'ـهُ (لِلْمُفْرَدِ الْمُذَكَّرِ): رَأَيْتُهُ. ـهَا (لِلْمُفْرَدِ الْمُؤَنَّثِ): رَأَيْتُهَا. ـهُمَا (لِلْمُثَنَّى): رَأَيْتُهُمَا. ـهُمْ (لِجَمْعِ الْمُذَكَّرِ): رَأَيْتُهُمْ. ـهُنَّ (لِجَمْعِ الْمُؤَنَّثِ): رَأَيْتُهُنَّ.',
          explanation:
            'Object pronouns for the third person: ـهُ (him/it), ـهَا (her/it), ـهُمَا (them dual), ـهُمْ (them m. pl.), ـهُنَّ (them f. pl.). When attached to verbs, they are objects.',
        },
        {
          name: 'أَنَّ (anna - that)',
          arabicText:
            'حَرْفُ نَصْبٍ، مِنْ أَخَوَاتِ إِنَّ. لَا تُنْطَقُ وَلَا تُكْتَبُ فِي أَوَّلِ الْكَلَامِ. أَظُنُّ أَنَّ يَاسِرًا مَرِيضٌ. أَظُنُّ أَنَّهُ مَرِيضٌ.',
          explanation:
            '"أَنَّ" is a particle from the "sisters of inna" (makes Ism accusative, Khabar nominative). It is not used at the beginning of a sentence. Typically follows verbs like "أَظُنُّ" (I think). Example: "I think that Yasir is sick."',
        },
        {
          name: 'Numbers 11-19 (Review of Agreement/Disagreement)',
          arabicText:
            'الْعَدَدَانِ ١١ و ١٢ يُوَافِقَانِ الْمَعْدُودَ. الْأَعْدَادُ مِنْ ١٣ إِلَى ١٩ الْجُزْءُ الْأَوَّلُ يُخَالِفُ، وَالثَّانِي يُوَافِقُ. جَاءَ أَحَدَ عَشَرَ طَالِبًا. جَاءَتْ إِحْدَى عَشْرَةَ طَالِبَةً. فِي الْمَدِينَةِ ثَلَاثَةَ عَشَرَ فُنْدُقًا. فِي الْمَدِينَةِ ثَلَاثَ عَشْرَةَ حَدِيقَةً.',
          explanation:
            'Review: 11-12 agree with the counted noun in both parts. 13-19: first part disagrees, second part agrees. The counted noun is singular accusative (tamyīz).',
        },
        {
          name: 'Feminine and Plural of Adjectives on فَعْلَانُ pattern (مُؤَنَّثُ فَعْلَانَ، وَجَمْعُهُ)',
          arabicText:
            'الْمُذَكَّرُ: فَعْلَانُ (غَضْبَانُ). مُؤَنَّثُهُ: فَعْلَى (غَضْبَى). جَمْعُهُ لِلْمُذَكَّرِ وَالْمُؤَنَّثِ: فِعَالٌ (غِضَابٌ)، وَفَعَالَى (كَسَالَى).',
          explanation:
            'Adjectives on the pattern فَعْلَانُ (e.g., كَسْلَانُ - lazy, غَضْبَانُ - angry) have their feminine form on فَعْلَى (e.g., كَسْلَى, غَضْبَى). Their plurals can be فِعَال (e.g., غِضَابٌ) or فَعَالَى (e.g., كُسَالَى).',
        },
        {
          name: 'لِمَ / لِمَهْ (lima / limah - why?)',
          arabicText:
            'سُؤَالٌ عَنِ السَّبَبِ، مِثْلُ: لِمَاذَا؟ يَجُوزُ أَنْ تَتَّصِلَ بِهَا هَاءُ السَّكْتِ (لِمَهْ؟).',
          explanation:
            'An interrogative particle asking for the reason, similar to لِمَاذَا. A silent hāʾ (لِمَهْ) can be added when pausing.',
        },
        {
          name: 'Types of Iʿrāb for Nouns (أَنْوَاعُ الْإِعْرَابِ فِي الْأَسْمَاءِ)',
          arabicText: 'الرَّفْعُ (الضَّمَّةُ)، النَّصْبُ (الْفَتْحَةُ)، الْجَرُّ (الْكَسْرَةُ).',
          explanation:
            'The main case endings for nouns: Nominative (ḍammah), Accusative (fatḥah), Genitive (kasrah).',
        },
        {
          name: 'هَاتِ (hāti - bring/give!)',
          arabicText:
            'فِعْلُ أَمْرٍ، تَاؤُهُ مَكْسُورَةٌ دَائِمًا إِلَّا إِذَا اتَّصَلَتْ بِهِ وَاوُ الْجَمَاعَةِ فَتَكُونُ التَّاءُ مَضْمُومَةً. هَاتِ يَا أَحْمَدُ. هَاتِي يَا مَرْيَمُ. هَاتُوا يَا إِخْوَانُ. هَاتِينَ يَا أَخَوَاتُ.',
          explanation:
            'An imperative verb meaning "bring" or "give". Its tāʾ is usually with kasrah, except with wāw al-jamāʿah (plural masculine) where it takes ḍammah. Forms: هَاتِ (m.sg), هَاتِي (f.sg), هَاتُوا (m.pl), هَاتِينَ (f.pl).',
        },
      ],
    },
    {
      id: 'lesson7',
      title: { ar: 'الدَّرْسُ السَّابِعُ', en: 'Lesson 7' },
      introduction: {
        arabic:
          'يُوَضِّحُ هَذَا الدَّرْسُ تَأْنِيثَ الْفَاعِلِ فِي حَالَتَيِ الْمُفْرَدِ وَالْجَمْعِ، وَتَغَيُّرَ حَرَكَةِ الْمِيمِ السَّاكِنَةِ وَالتَّاءِ السَّاكِنَةِ وَالنُّونِ السَّاكِنَةِ عِنْدَ الْتِقَاءِ السَّاكِنَيْنِ. كَمَا يُعِيدُ النَّظَرَ فِي "كَانَ" وَخَبَرِهَا الشِّبْهِ جُمْلَةٍ، وَيُقَارِنُ بَيْنَ الْفَاعِلِ الْمُفْرَدِ وَالْجَمْعِ مَعَ الضَّمَائِرِ الْمُتَّصِلَةِ، وَيَشْرَحُ اسْتِخْدَامَ "ذُو" وَ "ذَاتُ" كَنَعْتٍ.',
        english:
          'This lesson clarifies feminization of the doer in singular and plural forms, and the vowel changes of silent mīm, tāʾ, and nūn when two silent letters meet. It revisits "كَانَ" and its predicate as a prepositional phrase, compares singular and plural doers with attached pronouns, and explains the use of "ذُو" and "ذَاتُ" as adjectives.',
      },
      rules: [
        {
          name: 'Feminization of the Doer (Singular and Plural) (تَأْنِيثُ الْفَاعِلِ الْمُفْرَدُ، وَالْجَمْعُ)',
          arabicText:
            'الْمُفْرَدُ: أَشَرِبْتَ الْمَاءَ؟ (لِلْمُذَكَّرِ) / أَشَرِبْتِ الْمَاءَ؟ (لِلْمُؤَنَّثِ). الْجَمْعُ: مَتَى خَرَجْتُمْ؟ (لِلْمُذَكَّرِ) / مَتَى خَرَجْتُنَّ؟ (لِلْمُؤَنَّثِ).',
          explanation:
            'Singular: ـتَ (m.), ـتِ (f.). Plural: ـتُمْ (m.), ـتُنَّ (f.) for the tāʾ al-fāʿil.',
        },
        {
          name: 'Vowel Changes for Meeting of Two Sākins',
          arabicText:
            'الْمِيمُ السَّاكِنَةُ (ـتُمْ) + الـ -> تُضَمُّ (أَقَرَأْتُمُ الْقُرْآنَ؟). التَّاءُ السَّاكِنَةُ (ـَتْ) / النُّونُ السَّاكِنَةُ (مَنْ) + الـ -> تُكْسَرُ (خَرَجَتِ الْبِنْتُ. مَنِ الْوَلَدُ؟).',
          explanation:
            'A silent mīm (as in ـتُمْ) takes a ḍammah before "ال" (e.g., أَقَرَأْتُمُ الْقُرْآنَ). A silent tāʾ (ـَتْ) or nūn (as in مَنْ) takes a kasrah before "ال" (e.g., خَرَجَتِ الْبِنْتُ, مَنِ الْوَلَدُ).',
        },
        {
          name: 'كَانَ (kāna) with Prepositional Phrase as Predicate',
          arabicText:
            'يَرْفَعُ الْمُبْتَدَأَ وَيَنْصِبُ الْخَبَرَ. قَدْ يَكُونُ الْخَبَرُ شِبْهَ جُمْلَةٍ (جَارٌّ وَمَجْرُورٌ). كَانَ الْمُدَرِّسُ فِي الْفَصْلِ.',
          explanation:
            '"كَانَ" makes its subject nominative and predicate accusative. The predicate can be a prepositional phrase (shibh jumlah). Example: "The teacher was in the classroom."',
        },
        {
          name: 'Singular vs. Plural Doer with Attached Object Pronouns',
          arabicText:
            'خَالِدٌ ضَرَبَهُ (الْفَاعِلُ ضَمِيرٌ مُسْتَتِرٌ "هُوَ"). ضَرَبْتُمُوهُ (الْفَاعِلُ التَّاءُ، وَالْوَاوُ لِلْإِشْبَاعِ). الْهَاءُ فِي كُلِّ الْأَمْثِلَةِ ضَمِيرُ نَصْبٍ مَفْعُولٌ بِهِ.',
          explanation:
            'Example: "Khalid hit him" (doer is hidden "huwa"). "You (pl.m.) hit him" (doer is "تُمْ"; the "و" before "ـهُ" is for euphony). The attached "ـهُ" is the object.',
        },
        {
          name: 'ذُو and ذَاتُ as Adjectives (نَعْت)',
          arabicText:
            'إِذَا وَقَعَتْ (ذُو) نَعْتًا فَإِنَّ مَا بَعْدَهَا يُوَافِقُ مَا قَبْلَهَا فِي التَّعْرِيفِ وَالتَّنْكِيرِ. عِنْدِي كِتَابٌ ذُو غِلَافٍ أَحْمَرَ. أَيْنَ الْكِتَابُ ذُو الْغِلَافِ الْأَحْمَرِ؟ ذَاتُ: مُؤَنَّثُ ذُو.',
          explanation:
            'When "ذُو" (or its feminine "ذَاتُ") acts as an adjective, the noun following it agrees in definiteness with the noun "ذُو" describes. Example: "I have a book with a red cover." vs. "Where is the book with the red cover?"',
        },
      ],
    },
    {
      id: 'lesson8',
      title: { ar: 'الدَّرْسُ الثَّامِنُ', en: 'Lesson 8' },
      introduction: {
        arabic:
          'يُقَدِّمُ هَذَا الدَّرْسُ جَدْوَلًا مُلَخَّصًا لِإِسْنَادِ الْفِعْلِ الْمَاضِي إِلَى الضَّمَائِرِ الْمُخْتَلِفَةِ، مُبَيِّنًا الْفَاعِلَ فِي كُلِّ حَالَةٍ. كَمَا يُصَنِّفُ الضَّمَائِرَ إِلَى مُسْتَتِرَةٍ وَبَارِزَةٍ، وَمُتَّصِلَةٍ وَمُنْفَصِلَةٍ.',
        english:
          'This lesson presents a summary table for assigning the past tense verb to various pronouns, indicating the doer in each case. It also categorizes pronouns into hidden and apparent, and attached and detached.',
      },
      rules: [
        {
          name: 'Summary Table: Assigning Past Tense Verbs to Pronouns (إِسْنَادُ الْفِعْلِ الْمَاضِي إِلَى الضَّمَائِرِ)',
          arabicText:
            'الْغَائِبُ: ذَهَبَ (هُوَ)، ذَهَبَتْ (هِيَ)، ذَهَبُوا (وَاوُ الْجَمَاعَةِ)، ذَهَبْنَ (نُونُ النِّسْوَةِ). الْمُخَاطَبُ: ذَهَبْتَ، ذَهَبْتِ، ذَهَبْتُمْ، ذَهَبْتُنَّ (الْفَاعِلُ: التَّاءُ). الْمُتَكَلِّمُ: ذَهَبْتُ (التَّاءُ)، ذَهَبْنَا (نَا).',
          explanation:
            'A table summarizing past tense conjugation: 3rd person (he went, she went, they m. went, they f. went), 2nd person (you m.sg. went, you f.sg. went, you m.pl. went, you f.pl. went - doer is Tāʾ), 1st person (I went - doer is Tāʾ, we went - doer is Nā).',
        },
        {
          name: 'Markers vs. Pronouns in Verb Forms',
          arabicText:
            'ذَهَبَتْ: التَّاءُ السَّاكِنَةُ عَلَامَةُ التَّأْنِيثِ، وَلَيْسَتْ ضَمِيرًا. ذَهَبْتُمْ: الْمِيمُ عَلَامَةُ جَمْعِ الْمُذَكَّرِ. ذَهَبْتُنَّ: النُّونُ الْمُشَدَّدَةُ عَلَامَةُ جَمْعِ الْمُؤَنَّثِ.',
          explanation:
            'Clarifies that the silent "تْ" in ذَهَبَتْ is a feminine marker, not a pronoun. The "مْ" in ذَهَبْتُمْ is a masculine plural marker. The "نَّ" in ذَهَبْتُنَّ is a feminine plural marker.',
        },
        {
          name: 'Types of Pronouns: Hidden and Apparent (ضَمِيرٌ مُسْتَتِرٌ، ضَمِيرٌ بَارِزٌ)',
          arabicText:
            'ضَمِيرٌ مُسْتَتِرٌ (مَخْفِيٌّ): الطَّالِبُ خَرَجَ (تَقْدِيرُهُ: هُوَ). ضَمِيرٌ بَارِزٌ (ظَاهِرٌ): خَرَجْتُ، خَرَجُوا، خَرَجْنَ.',
          explanation:
            'Pronouns can be hidden (mustatir), e.g., in "The student left" (he is implied), or apparent (bāriz), e.g., "I left", "they left".',
        },
        {
          name: 'Types of Pronouns: Attached and Detached (ضَمَائِرُ مُتَّصِلَةٌ، ضَمَائِرُ مُنْفَصِلَةٌ)',
          arabicText:
            'ضَمَائِرُ مُتَّصِلَةٌ: تُكْتَبُ وَتُنْطَقُ مُتَّصِلَةً بِالْفِعْلِ (التَّاءُ، وَاوُ الْجَمَاعَةِ...). ضَمَائِرُ مُنْفَصِلَةٌ: تُكْتَبُ وَتُنْطَقُ وَحْدَهَا (أَنَا، نَحْنُ، أَنْتَ...).',
          explanation:
            'Pronouns can be attached (muttaṣilah), written connected to the verb (e.g., Tāʾ, Wāw al-jamāʿah), or detached (munfaṣilah), written and pronounced separately (e.g., I, we, you).',
        },
      ],
    },
    {
      id: 'lesson9',
      title: { ar: 'الدَّرْسُ التَّاسِعُ', en: 'Lesson 9' },
      introduction: {
        arabic:
          'يُعَرِّفُ هَذَا الدَّرْسُ بِفِعْلِ التَّعَجُّبِ وَصِيغَتِهِ، الْمُنَادَى الْمُفْرَدِ وَالْمُضَافِ وَأَحْكَامِهِمَا، إِعْرَابِ جَمْعِ الْمُؤَنَّثِ السَّالِمِ، دُخُولِ هَمْزَةِ الِاسْتِفْهَامِ عَلَى الـْمُعَرَّفِ بِـ "ال"، ضَمَائِرِ النَّصْبِ الْمُتَّصِلَةِ، حَذْفِ أَلِفِ "مَا" الِاسْتِفْهَامِيَّةِ، وَالْأَسْمَاءِ الْمَوْصُولَةِ لِلْجَمْعِ وَالْمُثَنَّى.',
        english:
          'This lesson introduces the verb of exclamation and its pattern, the singular and annexed vocative and their rules, the declension of the sound feminine plural, the interrogative Hamzah with nouns defined by "ال", attached accusative pronouns, the omission of alif from interrogative "مَا", and relative pronouns for plural and dual.',
      },
      rules: [
        {
          name: 'Verb of Exclamation (فِعْلُ التَّعَجُّبِ - مَا أَفْعَلَهُ!)',
          arabicText:
            'التَّعَجُّبُ: هُوَ الشُّعُورُ بِجَمَالِ الشَّيْءِ، أَوْ قُبْحِهِ. يَأْتِي عَلَى وَزْنِ (مَا أَفْعَلَهُ!). مَا أَجْمَلَ الْوَرْدَةَ!',
          explanation:
            'Expresses wonder at beauty or ugliness. Formed on the pattern مَا أَفْعَلَهُ! (e.g., "How beautiful the rose is!"). The noun after it is accusative.',
        },
        {
          name: 'The Vocative: Singular and Annexed (الْمُنَادَى الْمُفْرَدُ، وَالْمُضَافُ)',
          arabicText:
            'الْمُنَادَى الْمُفْرَدُ: مَبْنِيٌّ عَلَى الضَّمِّ (يَا مُحَمَّدُ). الْمُنَادَى الْمُضَافُ: مَنْصُوبٌ بِالْفَتْحَةِ (يَا عَبْدَ اللهِ).',
          explanation:
            'Singular (non-annexed) vocative is built on ḍammah (e.g., "O Muhammad!"). Annexed (muḍāf) vocative is accusative (e.g., "O Abdullah!").',
        },
        {
          name: 'Sound Feminine Plural (جَمْعُ الْمُؤَنَّثِ السَّالِمُ)',
          arabicText:
            'يُرْفَعُ بِالضَّمَّةِ (جَاءَتِ الطَّالِبَاتُ)، وَيُنْصَبُ بِالْكَسْرَةِ (رَأَيْتُ الطَّالِبَاتِ)، وَيُجَرُّ بِالْكَسْرَةِ (مَرَرْتُ بِالطَّالِبَاتِ).',
          explanation:
            'Nominative with ḍammah (e.g., "The female students came"). Accusative with kasrah (e.g., "I saw the female students"). Genitive with kasrah (e.g., "I passed by the female students").',
        },
        {
          name: "Interrogative Hamzah with 'ال' (دُخُولُ هَمْزَةِ الِاسْتِفْهَامِ عَلَى الْمُحَلَّى بِالْ)",
          arabicText: 'أَ + الْـ -> آلْـ. الْبَحَّارُ؟ -> آلْبَحَّارُ؟ الْآنَ؟ -> آلْآنَ؟',
          explanation:
            'When the interrogative Hamzah (أَ) precedes a noun starting with "ال", it combines to form "آلـ". Example: "The sailor?" -> "Is it the sailor?". "Now?" -> "Is it now?".',
        },
        {
          name: 'Attached Accusative Pronouns (ضمائرُ النَّصْبِ الْمُتَّصِلَةُ)',
          arabicText:
            'يَاءُ الْمُتَكَلِّمِ: خَلَقَنِي اللهُ. كَافُ الْمُخَاطَبِ: خَلَقَكَ اللهُ. هَاءُ الْغَائِبِ: خَلَقَهُ اللهُ. (هَذِهِ الضَّمَائِرُ وَقَعَتْ مَفْعُولًا بِهِ).',
          explanation:
            'These are object pronouns: ـنِي (me), ـكَ (you m.sg.), ـكِ (you f.sg.), ـهُ (him/it), ـهَا (her/it), etc. Example: "God created me" (-nī is the object).',
        },
        {
          name: "Omission of Alif from Interrogative 'مَا' (حَذْفُ أَلِفِ مَا الِاسْتِفْهَامِيَّةِ)",
          arabicText:
            'تُحْذَفُ أَلِفُ "مَا" الِاسْتِفْهَامِيَّةِ إِذَا دَخَلَ عَلَيْهَا حَرْفُ جَرٍّ. مِنْ + مَا = مِمَّ؟ عَنْ + مَا = عَمَّ؟ بِـ + مَا = بِمَ؟ لِـ + مَا = لِمَ؟',
          explanation:
            'The alif of interrogative "مَا" (what?) is dropped if preceded by a preposition. Examples: مِنْ + مَا -> مِمَّ (from what?), لِ + مَا -> لِمَ (for what?/why?).',
        },
        {
          name: 'Relative Pronouns: Plural and Dual (الْأَسْمَاءُ الْمَوْصُولَةُ)',
          arabicText:
            'جَمْعُ مُذَكَّرٍ: الَّذِينَ. جَمْعُ مُؤَنَّثٍ: اللَّاتِي (أَوْ: اللَّائِي). مُثَنَّى مُذَكَّرٍ: اللَّذَانِ. مُثَنَّى مُؤَنَّثٍ: اللَّتَانِ.',
          explanation:
            'Masculine Plural: الَّذِينَ (those who/which). Feminine Plural: اللَّاتِي or اللَّائِي (those who/which). Masculine Dual: اللَّذَانِ (the two who/which). Feminine Dual: اللَّتَانِ (the two who/which).',
        },
      ],
    },
    {
      id: 'lesson10',
      title: { ar: 'الدَّرْسُ الْعَاشِرُ', en: 'Lesson 10' },
      introduction: {
        arabic:
          'يُقَارِنُ هَذَا الدَّرْسُ بَيْنَ الْفِعْلِ الْمَاضِي وَالْفِعْلِ الْمُضَارِعِ وَأَحْكَامِهِمَا الْإِعْرَابِيَّةِ الْأَسَاسِيَّةِ. كَمَا يُعِيدُ النَّظَرَ فِي الْأَعْدَادِ الْمَعْطُوفَةِ (٢١-٩٩) وَأَلْفَاظِ الْعُقُودِ، وَيُقَدِّمُ بَعْضَ أَبْوَابِ تَصْرِيفِ الْأَفْعَالِ مِنَ الْمَاضِي إِلَى الْمُضَارِعِ.',
        english:
          'This lesson compares the past tense verb and the present tense verb and their basic declension rules. It revisits coordinated numbers (21-99) and tens, and introduces some patterns for conjugating verbs from past to present.',
      },
      rules: [
        {
          name: 'Past Tense Verb (الْفِعْلُ الْمَاضِي)',
          arabicText: 'مَبْنِيٌّ عَلَى الْفَتْحَةِ (فِي أَصْلِهِ). نَحْوُ: ذَهَبَ، كَتَبَ.',
          explanation:
            'The past tense verb is fundamentally built on fatḥah (e.g., ذَهَبَ - he went).',
        },
        {
          name: 'Present Tense Verb (الْفِعْلُ الْمُضَارِعُ)',
          arabicText: 'مَرْفُوعٌ بِالضَّمَّةِ (فِي أَصْلِهِ). نَحْوُ: يَذْهَبُ، يَكْتُبُ.',
          explanation:
            'The present tense verb is fundamentally nominative with ḍammah (e.g., يَذْهَبُ - he goes).',
        },
        {
          name: 'Coordinated Numbers (21-99) (الْأَعْدَادُ الْمَعْطُوفَةُ)',
          arabicText:
            'مِنْ ٢١ إِلَى ٩٩. الْجُزْءُ الْأَوَّلُ (١-٩)، الْجُزْءُ الثَّانِي أَلْفَاظُ الْعُقُودِ. الْعَدَدَانِ ١ وَ ٢ يُوَافِقَانِ الْمَعْدُودَ. الْأَعْدَادُ مِنْ ٣ إِلَى ٩ تُخَالِفُ الْمَعْدُودَ. أَلْفَاظُ الْعُقُودِ لَا تَتَغَيَّرُ. وَاحِدٌ وَعِشْرُونَ طَالِبًا. إِحْدَى وَعِشْرُونَ طَالِبَةً. ثَلَاثَةٌ وَعِشْرُونَ فُنْدُقًا. ثَلَاثٌ وَعِشْرُونَ حَدِيقَةً.',
          explanation:
            'Numbers from 21 to 99. The first part (units 1-9) follows agreement/disagreement rules: 1 and 2 agree with the counted noun in gender; 3-9 disagree. The second part (tens) does not change for gender. The counted noun is singular accusative.',
        },
        {
          name: 'Verb Patterns (Past -> Present) (أَبْوَابُ الْمَاضِي وَالْمُضَارِعِ)',
          arabicText:
            '١- فَعَلَ -> يَفْعَلُ (ذَهَبَ -> يَذْهَبُ). ٢- فَعَلَ -> يَفْعُلُ (كَتَبَ -> يَكْتُبُ). ٣- فَعَلَ -> يَفْعِلُ (جَلَسَ -> يَجْلِسُ). ٤- فَعِلَ -> يَفْعَلُ (سَمِعَ -> يَسْمَعُ).',
          explanation:
            'Common patterns for deriving present tense from past tense: e.g., فَعَلَ -> يَفْعَلُ (dhahaba -> yadhhabu), فَعَلَ -> يَفْعُلُ (kataba -> yaktubu).',
        },
      ],
    },
    {
      id: 'lesson11',
      title: { ar: 'الدَّرْسُ الْحَادِيَ عَشَرَ', en: 'Lesson 11' },
      introduction: {
        arabic:
          'يُفَصِّلُ هَذَا الدَّرْسُ إِسْنَادَ الْفِعْلِ الْمُضَارِعِ إِلَى الضَّمَائِرِ الْمُخْتَلِفَةِ، مُبَيِّنًا الْفَاعِلَ وَعَلَامَاتِ الرَّفْعِ. كَمَا يُنَاقِشُ النَّفْيَ بِـ "مَا" وَ "لَا"، حَرْفَ الِاسْتِقْبَالِ "سَـ"، صِيَاغَةَ الْمَصْدَرِ عَلَى وَزْنِ "فُعُول"، اسْتِخْدَامَ "أَمَّا" لِلتَّفْصِيلِ، وَالْفَرْقَ بَيْنَ "أَخِي" وَ "أَخٌ لِي".',
        english:
          'This lesson details assigning the present tense verb to various pronouns, indicating the doer and signs of being nominative. It also discusses negation with "مَا" and "لَا", the future particle "سَـ", forming the verbal noun on the "فُعُول" pattern, using "أَمَّا" for detailing, and the difference between "أَخِي" (my brother) and "أَخٌ لِي" (a brother of mine).',
      },
      rules: [
        {
          name: 'Assigning Present Tense Verbs to Pronouns (إِسْنَادُ الْفِعْلِ الْمُضَارِعِ إِلَى الضَّمَائِرِ)',
          arabicText:
            'الْغَائِبُ: يَذْهَبُ (هُوَ)، تَذْهَبُ (هِيَ)، يَذْهَبُونَ (وَاوُ الْجَمَاعَةِ)، يَذْهَبْنَ (نُونُ النِّسْوَةِ). الْمُخَاطَبُ: تَذْهَبُ (أَنْتَ)، تَذْهَبِينَ (يَاءُ الْمُخَاطَبَةِ)، تَذْهَبُونَ (وَاوُ الْجَمَاعَةِ)، تَذْهَبْنَ (نُونُ النِّسْوَةِ). الْمُتَكَلِّمُ: أَذْهَبُ (أَنَا)، نَذْهَبُ (نَحْنُ).',
          explanation:
            'Covers present tense conjugation. Doers can be hidden pronouns, wāw al-jamāʿah, yāʾ al-mukhāṭabah, or nūn an-niswah.',
        },
        {
          name: 'Signs of Nominative for Present Tense Verbs',
          arabicText:
            'أَذْهَبُ، تَذْهَبُ، يَذْهَبُ، نَذْهَبُ: عَلَامَةُ الرَّفْعِ الضَّمَّةُ. يَذْهَبُونَ، تَذْهَبِينَ: عَلَامَةُ الرَّفْعِ ثُبُوتُ النُّونِ (مِنَ الْأَفْعَالِ الْخَمْسَةِ). يَذْهَبْنَ، تَذْهَبْنَ (مَعَ نُونِ النِّسْوَةِ): مَبْنِيٌّ عَلَى السُّكُونِ.',
          explanation:
            'Nominative case marked by ḍammah for singular forms. For "Five Verbs" (those ending in ـُونَ, ـِينَ, ـَانِ), it\'s marked by the presence of nūn (ثُبُوتُ النُّونِ). Verbs with nūn an-niswah are built on sukūn.',
        },
        {
          name: 'Negation with مَا and لَا (مَا، وَلَا النَّافِيَتَانِ)',
          arabicText:
            'يُنْفَى الْفِعْلُ الْمَاضِي بِـ (مَا): مَا ذَهَبْتُ. يُنْفَى الْفِعْلُ الْمُضَارِعُ بِـ (لَا): لَا أَذْهَبُ.',
          explanation:
            '"مَا" negates the past tense (e.g., "I did not go"). "لَا" negates the present/future tense (e.g., "I do not/will not go") and does not change the verb\'s case.',
        },
        {
          name: 'Future Particle سَـ (حَرْفُ الِاسْتِقْبَالِ)',
          arabicText:
            'السِّينُ: لِلْمُسْتَقْبَلِ الْقَرِيبِ. سَيَرْجِعُ الْمُدِيرُ غَدًا. (سَوْفَ: لِلْمُسْتَقْبَلِ الْبَعِيدِ).',
          explanation:
            'The particle "سَـ" (sa-) is prefixed to a present tense verb to indicate the near future (e.g., "The manager will return tomorrow"). "سَوْفَ" (sawfa) is for the more distant future.',
        },
        {
          name: 'Verbal Noun (Maṣdar) on فُعُول Pattern (مَصْدَرُ الْفِعْلِ الْمَاضِي)',
          arabicText: 'جَلَسَ يَجْلِسُ: جُلُوسٌ. سَجَدَ يَسْجُدُ: سُجُودٌ.',
          explanation:
            'One common pattern for verbal nouns (maṣdar) is فُعُول. Examples: جُلُوسٌ (sitting) from جَلَسَ (to sit); سُجُودٌ (prostrating) from سَجَدَ (to prostrate).',
        },
        {
          name: 'أَمَّا (ammā - as for...)',
          arabicText:
            'حَرْفٌ يَدُلُّ عَلَى التَّفْصِيلِ بَيْنَ شَيْئَيْنِ، أَوْ أَكْثَرَ. أَمَّا الْكِتَابُ فَهُوَ بِعَشَرَةِ رِيَالَاتٍ، وَأَمَّا الْمَجَلَّةُ فَهِيَ بِثَلَاثَةِ رِيَالَاتٍ.',
          explanation:
            '"أَمَّا" is used for detailing or contrasting items, often followed by "فَـ" in the clause. Example: "As for the book, it is ten riyals, and as for the magazine, it is three riyals."',
        },
        {
          name: 'أَخِي (my brother) vs. أَخٌ لِي (a brother of mine)',
          arabicText:
            'إِذَا أَرَدْتَ تَعْرِيفَ شَخْصٍ مُعَيَّنٍ، قُلْتَ: أَخِي (بِالْإِضَافَةِ إِلَى يَاءِ الْمُتَكَلِّمِ). وَإِذَا أَرَدْتَ تَنْكِيرَهُ، قُلْتَ: أَخٌ لِي (تَفْصِلُ بِاللَّامِ).',
          explanation:
            'To specify "my brother" (definite), use أَخِي (direct annexation to "my"). To say "a brother of mine" (indefinite), use أَخٌ لِي (with the preposition "لِ").',
        },
      ],
    },
    {
      id: 'lesson12_13', // Combined lesson ID
      title: { ar: 'الدَّرْسَانِ الثَّانِيَ عَشَرَ، والثَّالِثَ عَشَرَ', en: 'Lessons 12 & 13' },
      introduction: {
        arabic:
          'يُعِيدُ هَذَانِ الدَّرْسَانِ النَّظَرَ فِي إِسْنَادِ الْفِعْلِ الْمُضَارِعِ إِلَى ضَمَائِرِ الْجَمْعِ وَالْمُخَاطَبَةِ (الْأَفْعَالُ الْخَمْسَةُ وَنُونُ النِّسْوَةِ). كَمَا يُوَضِّحَانِ مَتَى تُكْسَرُ هَمْزَةُ "إِنَّ" وَمَتَى تُفْتَحُ (أَنَّ).',
        english:
          'These lessons revisit assigning the present tense verb to plural and feminine singular address pronouns (the Five Verbs and nūn an-niswah). They also clarify when the hamzah of "إِنَّ" takes a kasrah (إِنَّ) and when it takes a fatḥah (أَنَّ).',
      },
      rules: [
        {
          name: 'Present Tense with Wāw al-Jamāʿah, Yāʾ al-Mukhāṭabah, Nūn an-Niswah (Review)',
          arabicText:
            'وَاوُ الْجَمَاعَةِ: يَدْرُسُونَ، تَدْرُسُونَ (عَلَامَةُ الرَّفْعِ: ثُبُوتُ النُّونِ). يَاءُ الْمُخَاطَبَةِ: تَدْرُسِينَ (ثُبُوتُ النُّونِ). نُونُ النِّسْوَةِ: يَدْرُسْنَ، تَدْرُسْنَ (مَبْنِيٌّ عَلَى السُّكُونِ).',
          explanation:
            'Review of the "Five Verbs" (nominative with the presence of nūn) and verbs with nūn an-niswah (built on sukūn).',
        },
        {
          name: 'Kasrah on Hamzah of إِنَّ (كَسْرُ هَمْزَةِ إِنَّ)',
          arabicText:
            'تُكْسَرُ هَمْزَةُ إِنَّ فِي مَوَاضِعَ، مِنْهَا: ١- فِي ابْتِدَاءِ الْكَلَامِ (إِنَّ اللهَ غَفُورٌ). ٢- بَعْدَ الْفِعْلِ قَالَ/يَقُولُ (قَالَ الْمُرَاقِبُ: إِنَّ الْمُدَرِّسَ غَائِبٌ).',
          explanation:
            'The hamzah of "إِنَّ" takes a kasrah (إِنَّ) in several situations, including: 1. At the beginning of a sentence. 2. After the verbs قَالَ (he said) or يَقُولُ (he says).',
        },
        {
          name: 'Fatḥah on Hamzah of إِنَّ (فَتْحُ هَمْزَةِ إِنَّ - أَنَّ)',
          arabicText:
            'تُفْتَحُ هَمْزَةُ إِنَّ (أَنَّ) فِي مَوَاضِعَ، مِنْهَا: بَعْدَ جَمِيعِ الْأَفْعَالِ مَا عَدَا أَفْعَالَ الْقَوْلِ. أَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللهِ. سَمِعْتُ أَنَّ الْمُدَرِّسَ غَائِبٌ. (أَنَّ لَا تَأْتِي فِي ابْتِدَاءِ الْكَلَامِ).',
          explanation:
            'The hamzah of "إِنَّ" takes a fatḥah (أَنَّ) in several situations, notably after most verbs (excluding verbs of saying, where إِنَّ is used). "أَنَّ" cannot begin a sentence and often forms an interpreted verbal noun (maṣdar muʾawwal).',
        },
      ],
    },
    {
      id: 'lesson14',
      title: { ar: 'الدَّرْسُ الرَّابِعَ عَشَرَ', en: 'Lesson 14' },
      introduction: {
        arabic:
          'يُقَدِّمُ هَذَا الدَّرْسُ فِعْلَ الْأَمْرِ وَإِسْنَادَهُ إِلَى ضَمَائِرِ الْمُخَاطَبِ، مُوَضِّحًا عَلَامَاتِ الْبِنَاءِ وَقَوَاعِدَ هَمْزَةِ الْوَصْلِ وَحَرَكَةِ عَيْنِ الْفِعْلِ.',
        english:
          'This lesson introduces the imperative verb, its assignment to second-person pronouns, explaining the signs of being built (mabnī), and rules for hamzat al-waṣl and the vowel of the middle radical.',
      },
      rules: [
        {
          name: 'The Imperative Verb (فِعْلُ الْأَمْرِ)',
          arabicText:
            'مَعْنَاهُ: الطَّلَبُ، وَهُوَ مَبْنِيٌّ دَائِمًا. الْمُخَاطَبُ الْمُذَكَّرُ: اذْهَبْ (مَبْنِيٌّ عَلَى السُّكُونِ، الْفَاعِلُ مُسْتَتِرٌ "أَنْتَ"). الْمُخَاطَبَةُ الْمُؤَنَّثَةُ: اذْهَبِي (مَبْنِيٌّ عَلَى حَذْفِ النُّونِ، الْيَاءُ فَاعِلٌ). جَمْعُ الْمُخَاطَبِينَ: اذْهَبُوا (مَبْنِيٌّ عَلَى حَذْفِ النُّونِ، الْوَاوُ فَاعِلٌ). جَمْعُ الْمُخَاطَبَاتِ: اذْهَبْنَ (مَبْنِيٌّ عَلَى السُّكُونِ، النُّونُ فَاعِلٌ).',
          explanation:
            'The imperative verb signifies a request and is always built (mabnī). Forms: اذْهَبْ (go! m.sg. - built on sukūn), اذْهَبِي (go! f.sg. - built on omission of nūn), اذْهَبُوا (go! m.pl. - built on omission of nūn), اذْهَبْنَ (go! f.pl. - built on sukūn).',
        },
        {
          name: 'Hamzat al-Waṣl in Triliteral Imperative (هَمْزَةُ الْأَمْرِ الثُّلَاثِيِّ)',
          arabicText:
            'هَمْزَةُ الْأَمْرِ الثُّلَاثِيِّ هَمْزَةُ وَصْلٍ (ا)، فَلَا يُكْتَبُ فَوْقَهَا وَلَا تَحْتَهَا عَلَامَةُ الْهَمْزَةِ (أ، إِ).',
          explanation: 'The initial hamzah of a triliteral imperative verb is hamzat al-waṣl (ٱ).',
        },
        {
          name: 'Vowel of Hamzat al-Waṣl and Middle Radical',
          arabicText:
            'حَرَكَةُ عَيْنِ الْفِعْلِ فِي الْأَمْرِ تُوَافِقُ حَرَكَةَ عَيْنِ الْفِعْلِ فِي الْمُضَارِعِ. هَمْزَةُ الْوَصْلِ مَكْسُورَةٌ إِذَا كَانَ عَيْنُ الْمُضَارِعِ مَفْتُوحًا أَوْ مَكْسُورًا (يَذْهَبُ -> اِذْهَبْ، يَجْلِسُ -> اِجْلِسْ). وَمَضْمُومَةٌ إِذَا كَانَ عَيْنُ الْمُضَارِعِ مَضْمُومًا (يَكْتُبُ -> اُكْتُبْ).',
          explanation:
            'The vowel of the middle radical in the imperative matches that of the present tense. Hamzat al-waṣl takes kasrah if the present tense middle radical has fatḥah or kasrah (e.g., اِذْهَبْ, اِجْلِسْ). It takes ḍammah if the present tense middle radical has ḍammah (e.g., اُكْتُبْ).',
        },
        {
          name: 'Imperative Built on Sukūn before "ال"',
          arabicText:
            'إِذَا وَقَعَتْ (ال) بَعْدَ فِعْلِ الْأَمْرِ الْمَبْنِيِّ عَلَى السُّكُونِ تَحَوَّلَ السُّكُونُ إِلَى كَسْرَةٍ: اشْرَبْ -> اشْرَبِ الْقَهْوَةَ.',
          explanation:
            'If an imperative verb built on sukūn is followed by "ال", the sukūn changes to a kasrah to facilitate pronunciation. Example: "Drink!" -> "Drink the coffee!"',
        },
      ],
    },
    {
      id: 'lesson15',
      title: { ar: 'الدَّرْسُ الْخَامِسَ عَشَرَ', en: 'Lesson 15' },
      introduction: {
        arabic:
          'يَشْرَحُ هَذَا الدَّرْسُ "لَا النَّاهِيَةَ" وَعَمَلَهَا فِي جَزْمِ الْفِعْلِ الْمُضَارِعِ، وَالْفَرْقَ بَيْنَهَا وَبَيْنَ "لَا النَّافِيَةِ". كَمَا يُعَرِّفُ بِالْفِعْلِ "كَادَ" مِنْ أَفْعَالِ الْمُقَارَبَةِ، وَيُعِيدُ النَّظَرَ فِي فِعْلِ التَّعَجُّبِ.',
        english:
          'This lesson explains "لَا النَّاهِيَةُ" (lā of prohibition) and its function in making the present tense verb jussive, and the difference between it and "لَا النَّافِيَةُ" (lā of negation). It also introduces the verb "كَادَ" (to be on the verge of) and revisits the verb of exclamation.',
      },
      rules: [
        {
          name: 'Lā of Prohibition (لَا النَّاهِيَةُ)',
          arabicText:
            'حَرْفُ جَزْمٍ، يَجْزِمُ الْفِعْلَ الْمُضَارِعَ، وَيَجْعَلُ زَمَنَهُ لِلْمُسْتَقْبَلِ فَقَطْ. لَا تَذْهَبْ (عَلَامَةُ جَزْمِهِ السُّكُونُ). لَا تَذْهَبُوا، لَا تَذْهَبِي (عَلَامَةُ جَزْمِهِمَا حَذْفُ النُّونِ). لَا تَذْهَبْنَ (مَبْنِيٌّ عَلَى السُّكُونِ).',
          explanation:
            "\"لَا النَّاهِيَةُ\" is a particle of prohibition that makes the present tense verb jussive (majzūm) and refers to the future. Signs of jussive: sukūn (لَا تَذْهَبْ - don't go! m.sg.), omission of nūn (لَا تَذْهَبُوا - don't go! m.pl.), or built on sukūn (لَا تَذْهَبْنَ - don't go! f.pl.).",
        },
        {
          name: 'Lā of Negation vs. Lā of Prohibition (لَا النَّافِيَةُ vs. لَا النَّاهِيَةُ)',
          arabicText:
            'لَا النَّافِيَةُ: تَنْفِي الْفِعْلَ الْمُضَارِعَ، وَلَا تَعْمَلُ شَيْئًا (لَا أَشْرَبُ الْقَهْوَةَ). مَا النَّافِيَةُ: تَنْفِي الْفِعْلَ الْمَاضِي (مَا أَكَلْتُ).',
          explanation:
            '"لَا النَّافِيَةُ" (lā of negation) negates the present tense verb without changing its case (e.g., "I do not drink coffee"). "مَا النَّافِيَةُ" negates the past tense.',
        },
        {
          name: 'كَادَ (kāda - to be on the verge of/almost)',
          arabicText:
            'فِعْلٌ مَاضٍ يَعْمَلُ عَمَلَ كَانَ (يَرْفَعُ الِاسْمَ وَيَنْصِبُ الْخَبَرَ)، وَخَبَرُهُ يَجِبُ أَنْ يَكُونَ فِعْلًا مُضَارِعًا. مِنْ أَفْعَالِ الْمُقَارَبَةِ. كَادَ الطِّفْلُ يَسْقُطُ.',
          explanation:
            '"كَادَ" is a past tense verb that acts like "كَانَ" (its subject is nominative, its predicate is accusative). Its predicate must be a present tense verb. It indicates that the action almost happened. Example: "The child almost fell."',
        },
        {
          name: 'Verb of Exclamation (فِعْلُ التَّعَجُّبِ - Review)',
          arabicText: 'مَا أَطْوَلَ حَامِدًا! مَا أَجْمَلَ الْوَرْدَةَ!',
          explanation: 'Review of the pattern مَا أَفْعَلَهُ! (e.g., "How tall Hamid is!").',
        },
      ],
    },
    {
      id: 'lesson16',
      title: { ar: 'الدَّرْسُ السَّادِسَ عَشَرَ', en: 'Lesson 16' },
      introduction: {
        arabic:
          'يُفَصِّلُ هَذَا الدَّرْسُ إِسْنَادَ الْفِعْلِ "يُرِيدُ" إِلَى الضَّمَائِرِ. كَمَا يَشْرَحُ قَاعِدَةَ تَأْنِيثِ الْأَلْوَانِ وَالصِّفَاتِ الَّتِي عَلَى وَزْنِ "أَفْعَل" فَتَكُونُ مُؤَنَّثَتُهَا "فَعْلَاء". وَيُعَرِّفُ بِالْعَلَمِ الْمَعْدُولِ، وَالْفَرْقِ بَيْنَ "عُمَر" وَ "عَمْرو"، وَاسْمَيِ التَّفْضِيلِ "آخَر" وَ "أُخْرَى"، وَاسْتِخْدَامِ "ذُو" فِي حَالَةِ النَّصْبِ ("ذَا"). وَيُقَدِّمُ أَنْوَاعَ "مَا" وَاسْمَ النَّفْيِ "غَيْر".',
        english:
          'This lesson details assigning the verb "يُرِيدُ" (wants) to pronouns. It explains the feminization of colors and adjectives on the "أَفْعَل" pattern to "فَعْلَاء". It introduces "shifted" proper nouns, the difference between "عُمَر" and "عَمْرو", the comparatives "آخَر" and "أُخْرَى", the use of "ذُو" in the accusative ("ذَا"), types of "مَا", and the negation noun "غَيْر".',
      },
      rules: [
        {
          name: 'Assigning يُرِيدُ (wants) to Pronouns (إِسْنَادُ الْفِعْلِ يُرِيدُ إِلَى الضَّمَائِرِ)',
          arabicText:
            'الْغَائِبُ: يُرِيدُ، تُرِيدُ، يُرِيدُونَ، يُرِدْنَ. الْمُخَاطَبُ: تُرِيدُ، تُرِيدِينَ، تُرِيدُونَ، تُرِدْنَ. الْمُتَكَلِّمُ: أُرِيدُ، نُرِيدُ.',
          explanation:
            'Conjugation of the present tense verb يُرِيدُ (to want). Note يُرِدْنَ (they f. want) and تُرِدْنَ (you f.pl. want).',
        },
        {
          name: 'Colors/Adjectives: أَفْعَلُ (m.) -> فَعْلَاءُ (f.)',
          arabicText:
            'إِذَا جَاءَ اللَّوْنُ عَلَى وَزْنِ (أَفْعَلَ) فَإِنَّ مُؤَنَّثَهُ يَكُونُ عَلَى وَزْنِ فَعْلَاءَ. أَحْمَرُ -> حَمْرَاءُ. أَبْيَضُ -> بَيْضَاءُ. (أَفْعَلُ وَفَعْلَاءُ مَمْنُوعَانِ مِنَ الصَّرْفِ).',
          explanation:
            'Colors and some adjectives on the pattern أَفْعَلُ (masculine) have their feminine form on فَعْلَاءُ. Example: أَحْمَرُ (red m.) -> حَمْرَاءُ (red f.). Both forms are diptotes.',
        },
        {
          name: '"Shifted" Proper Nouns (الْعَلَمُ الْمَعْدُولُ)',
          arabicText:
            'مَعْنَاهُ الَّذِي تَغَيَّرَ مِنْ حَالَةٍ إِلَى أُخْرَى، وَيَكُونُ عَلَى وَزْنِ فُعَلَ. مَمْنُوعٌ مِنَ الصَّرْفِ. أَمْثِلَةٌ: عُمَرُ، زُفَرُ، هُبَلُ.',
          explanation:
            'Proper nouns on the pattern فُعَلُ (e.g., عُمَرُ - Umar) are considered "shifted" from another form and are diptotes (do not take tanween).',
        },
        {
          name: 'عُمَرُ vs. عَمْرٌو (Difference between Umar and Amr)',
          arabicText:
            'عُمَرُ: مَمْنُوعٌ مِنَ الصَّرْفِ. عَمْرٌو: لَيْسَ مَمْنُوعًا مِنَ الصَّرْفِ، الْوَاوُ لِلتَّفْرِيقِ، تُقْلَبُ أَلِفًا فِي النَّصْبِ (عَمْرًا).',
          explanation:
            'عُمَرُ is a diptote. عَمْرٌو is a triptote (takes all case endings with tanween: عَمْرٌو, عَمْرًا, عَمْرٍو). The "و" in عَمْرٍو is to differentiate it in writing from عُمَرُ and is dropped in the accusative form عَمْرًا.',
        },
        {
          name: 'آخَرُ (ākhar - other m.) and أُخْرَى (ukhrā - other f.)',
          arabicText:
            'آخَرُ: مُؤَنَّثُهُ أُخْرَى، وَكِلَاهُمَا مَمْنُوعٌ مِنَ الصَّرْفِ. خَرَجَ طَالِبٌ آخَرُ. خَرَجَتْ طَالِبَةٌ أُخْرَى.',
          explanation:
            '"آخَرُ" (other, masculine) and its feminine "أُخْرَى" are both diptotes. Example: "Another student (m.) left." "Another student (f.) left."',
        },
        {
          name: 'ذُو in Accusative: ذَا (dhā)',
          arabicText:
            'ذُو: يُرْفَعُ بِالْوَاوِ، وَيُنْصَبُ بِالْأَلِفِ (ذَا). اشْتَرَيْتُ دَفْتَرًا ذَا وَرَقٍ مُسَطَّرٍ.',
          explanation:
            'The noun "ذُو" (owner of), one of the Five Nouns, is nominative with "wāw" (ذُو) and accusative with "alif" (ذَا). Example: "I bought a notebook with lined paper."',
        },
        {
          name: 'Types of مَا (anwāʿu mā)',
          arabicText:
            '١- مَا الْمَوْصُولَةُ (بِمَعْنَى الَّذِي): أَفْهَمُ مَا تَقُولُ. ٢- مَا الِاسْتِفْهَامِيَّةُ: مَا اسْمُكَ؟ ٣- مَا النَّافِيَةُ: مَا فَهِمْتُ الدَّرْسَ.',
          explanation:
            'Includes: 1. Relative مَا (meaning "that which/what"): "I understand what you are saying." 2. Interrogative مَا (what?): "What is your name?" 3. Negative مَا (not): "I did not understand the lesson."',
        },
        {
          name: 'غَيْرُ (ghayru - other than/non-)',
          arabicText:
            'اسْمٌ يُسْتَعْمَلُ لِلنَّفْيِ، وَمَا بَعْدَهُ مُضَافٌ إِلَيْهِ مَجْرُورٌ دَائِمًا. هَذَا الْخَبَرُ صَحِيحٌ وَذَاكَ الْخَبَرُ غَيْرُ صَحِيحٍ.',
          explanation:
            '"غَيْرُ" is a noun used for negation, meaning "other than" or "non-". The noun following it is always genitive (muḍāf ilayhi). Example: "This news is true and that news is not true."',
        },
      ],
    },
    {
      id: 'lesson17',
      title: { ar: 'الدَّرْسُ السَّابِعَ عَشَرَ', en: 'Lesson 17' },
      introduction: {
        arabic:
          'يَشْرَحُ هَذَا الدَّرْسُ نَوَاصِبَ الْفِعْلِ الْمُضَارِعِ (أَنْ، لَنْ، لَامُ التَّعْلِيلِ) وَعَلَامَاتِ النَّصْبِ. كَمَا يُوَضِّحُ اسْتِخْدَامَ "يُمْكِنُ" وَ "لَا يُمْكِنُ"، وَحَرْفَ الْجَرِّ "مُنْذُ"، وَتَصْرِيفَ الْفِعْلِ "رَأَى" فِي الْمُضَارِعِ.',
        english:
          'This lesson explains the accusative particles for the present tense verb (أَنْ, لَنْ, لَامُ التَّعْلِيلِ) and the signs of being accusative. It also clarifies the use of "يُمْكِنُ" (it is possible) and "لَا يُمْكِنُ" (it is not possible), the preposition "مُنْذُ" (since/for), and the present tense conjugation of the verb "رَأَى" (to see).',
      },
      rules: [
        {
          name: 'Accusative Particles for Present Tense (نَوَاصِبُ الْفِعْلِ الْمُضَارِعِ)',
          arabicText:
            'مِنَ الْحُرُوفِ الَّتِي تَنْصِبُ الْفِعْلَ الْمُضَارِعَ: أَنْ، وَلَنْ، وَلَامُ التَّعْلِيلِ.',
          explanation:
            'Particles that make the present tense verb accusative (manṣūb) include: أَنْ (an - to/that), لَنْ (lan - will not), and لَامُ التَّعْلِيلِ (li - in order to).',
        },
        {
          name: 'Signs of Accusative for Present Tense Verbs',
          arabicText:
            'لَنْ أَذْهَبَ، لَنْ تَذْهَبَ، لَنْ يَذْهَبَ، لَنْ نَذْهَبَ: عَلَامَةُ النَّصْبِ الْفَتْحَةُ. لَنْ يَذْهَبُوا، لَنْ تَذْهَبِي: عَلَامَةُ النَّصْبِ حَذْفُ النُّونِ (الْأَفْعَالُ الْخَمْسَةُ). لَنْ يَذْهَبْنَ، لَنْ تَذْهَبْنَ (مَعَ نُونِ النِّسْوَةِ): مَبْنِيٌّ عَلَى السُّكُونِ فِي مَحَلِّ نَصْبٍ.',
          explanation:
            'Signs of accusative: fatḥah (e.g., لَنْ يَذْهَبَ). Omission of nūn (حَذْفُ النُّونِ) for the "Five Verbs" (e.g., لَنْ يَذْهَبُوا). Verbs with nūn an-niswah are built on sukūn but are in a state of accusative (فِي مَحَلِّ نَصْبٍ).',
        },
        {
          name: 'أَنْ (an - to/that)',
          arabicText:
            'حَرْفٌ يَنْصِبُ الْفِعْلَ الْمُضَارِعَ، وَيَجْعَلُهُ لِلْمُسْتَقْبَلِ. أُرِيدُ أَنْ أَسْأَلَكَ.',
          explanation:
            '"أَنْ" makes the present verb accusative and gives it a future meaning. It often translates to "to" (infinitive) or "that". Example: "I want to ask you."',
        },
        {
          name: 'لَنْ (lan - will not)',
          arabicText:
            'حَرْفُ نَفْيٍ يَنْصِبُ الْفِعْلَ الْمُضَارِعَ، وَيَجْعَلُهُ لِلْمُسْتَقْبَلِ. لَنْ أَتْرُكَ الصَّلَاةَ أَبَدًا.',
          explanation:
            '"لَنْ" is a particle of negation that makes the present verb accusative and refers to the future, meaning "will not". Example: "I will never abandon prayer."',
        },
        {
          name: 'Lām of Causation (لَامُ التَّعْلِيلِ - li)',
          arabicText:
            'حَرْفُ جَرٍّ، وَالْفِعْلُ الْمُضَارِعُ بَعْدَهُ مَنْصُوبٌ بِأَنْ الْمُضْمَرَةِ. جِئْتُ لِأَتَعَلَّمَ (بِمَعْنَى: لِكَيْ أَتَعَلَّمَ).',
          explanation:
            'The "lām of causation" (لِـ) means "in order to" or "so that". The present verb following it is accusative due to an implied (hidden) "أَنْ". Example: "I came to learn."',
        },
        {
          name: 'يُمْكِنُ / لَا يُمْكِنُ (yumkinu / lā yumkinu - it is possible / it is not possible)',
          arabicText:
            'يُمْكِنُ: فِعْلٌ مُضَارِعٌ. أَيُمْكِنُنِي الْجُلُوسُ هُنَا؟ أَوْ: أَيُمْكِنُ أَنْ أَجْلِسَ هُنَا؟ الْجُلُوسُ / أَنْ أَجْلِسَ: فَاعِلٌ.',
          explanation:
            '"يُمْكِنُ" (it is possible) and "لَا يُمْكِنُ" (it is not possible). The subject (fāʿil) of "يُمْكِنُ" can be an explicit noun (e.g., الْجُلُوسُ - the sitting) or an interpreted verbal noun (أَنْ + verb, e.g., أَنْ أَجْلِسَ - to sit).',
        },
        {
          name: 'مُنْذُ (mundhu - since/for [time])',
          arabicText: 'حَرْفُ جَرٍّ يَخْتَصُّ بِالزَّمَانِ. مَا رَأَيْتُكَ مُنْذُ يَوْمَيْنِ.',
          explanation:
            '"مُنْذُ" is a preposition specific to time, meaning "since" or "for (a period of time)". Example: "I have not seen you for two days."',
        },
        {
          name: 'رَأَى (raʾā - to see) in Present Tense',
          arabicText:
            'مُضَارِعُهُ: أَرَى، تَرَى، يَرَى، نَرَى. أَرَى قَلَمًا (أَرَى: فِعْلٌ، الْفَاعِلُ مُسْتَتِرٌ "أَنَا"، قَلَمًا: مَفْعُولٌ بِهِ).',
          explanation:
            'The present tense forms of "رَأَى" (to see) are: أَرَى (I see), تَرَى (you/she see/s), يَرَى (he see/s), نَرَى (we see). Example: "I see a pen."',
        },
      ],
    },
    {
      id: 'lesson18',
      title: { ar: 'الدَّرْسُ الثَّامِنَ عَشَرَ', en: 'Lesson 18' },
      introduction: {
        arabic:
          'يُعِيدُ هَذَا الدَّرْسُ التَّأْكِيدَ عَلَى حَذْفِ النُّونِ مِنَ الْأَفْعَالِ الْخَمْسَةِ لِلنَّصْبِ، وَبِنَاءِ الْفِعْلِ الْمُضَارِعِ الْمُسْنَدِ إِلَى نُونِ النِّسْوَةِ. كَمَا يُوَضِّحُ اسْتِخْدَامَ "أَلَّا" (أَنْ + لَا)، وَكَافِ التَّشْبِيهِ.',
        english:
          'This lesson re-emphasizes the omission of "nūn" from the Five Verbs when accusative, and the built nature of the present tense verb when assigned to "nūn an-niswah". It also clarifies the use of "أَلَّا" (أَنْ + لَا), and the "kāf" of simile.',
      },
      rules: [
        {
          name: 'Omission of Nūn from Five Verbs in Accusative (حَذْفُ النُّونِ مِنَ الْأَفْعَالِ الْخَمْسَةِ لِلنَّصْبِ)',
          arabicText: 'مَاذَا تُرِيدُونَ أَنْ تَشْتَرُوا؟ يَا هِنْدُ لَنْ تَخْرُجِي.',
          explanation:
            'Review: The "nūn" is dropped from the Five Verbs when they are in the accusative case. Examples: "...that you (m.pl.) buy?", "O Hind, you will not go out."',
        },
        {
          name: 'Present Verb with Nūn an-Niswah (بِنَاءُ الْفِعْلِ الْمُضَارِعِ الْمُسْنَدِ إِلَى نُونِ النِّسْوَةِ)',
          arabicText:
            'الْفِعْلُ الْمُضَارِعُ إِذَا دَخَلَتْ عَلَيْهِ نُونُ النِّسْوَةِ صَارَ مَبْنِيًّا عَلَى السُّكُونِ فِي الرَّفْعِ، وَالْجَزْمِ، وَالنَّصْبِ. الطَّالِبَاتُ يَدْرُسْنَ. الطَّالِبَاتُ لَمْ يَدْرُسْنَ. الطَّالِبَاتُ لَنْ يَدْرُسْنَ.',
          explanation:
            'Review: When "nūn an-niswah" (feminine plural "they/you") is attached to a present tense verb, the verb becomes built on sukūn, regardless of whether it is nominative, jussive, or accusative.',
        },
        {
          name: 'أَلَّا (allā - that...not)',
          arabicText:
            'أَصْلُهَا: أَنْ + لَا النَّافِيَةُ. أَرْجُو أَنْ تَدْخُلَ -> أَرْجُو أَلَّا تَدْخُلَ.',
          explanation:
            '"أَلَّا" is a combination of the accusative particle "أَنْ" (that) and "لَا النَّافِيَةُ" (lā of negation - not). The verb following "أَلَّا" remains accusative. Example: "I hope that you enter" -> "I hope that you do not enter."',
        },
        {
          name: 'Kāf of Simile (كَافُ التَّشْبِيهِ - كَـ)',
          arabicText:
            'حَرْفُ جَرٍّ يُفِيدُ التَّشْبِيهَ. هَذِهِ الْمَدْرَسَةُ كَالْمَسْجِدِ. أَنْتَ كَالْأَسَدِ.',
          explanation:
            'The particle "كَـ" (ka-) is a preposition meaning "like" or "as", used for making comparisons. Examples: "This school is like the masjid." "You are like a lion."',
        },
        {
          name: 'The Five Verbs (الْأَفْعَالُ الْخَمْسَةُ - Definition Review)',
          arabicText:
            'كُلُّ فِعْلٍ مُضَارِعٍ اتَّصَلَتْ بِهِ وَاوُ الْجَمَاعَةِ، أَوْ أَلِفُ الِاثْنَيْنِ، أَوْ يَاءُ الْمُخَاطَبَةِ. (يَدْرُسُونَ، تَدْرُسُونَ، يَدْرُسَانِ، تَدْرُسَانِ، تَدْرُسِينَ).',
          explanation:
            'A reminder that the Five Verbs are present tense verbs ending with: wāw al-jamāʿah (ـُونَ), alif al-ithnayn (ـَانِ), or yāʾ al-mukhāṭabah (ـِينَ).',
        },
      ],
    },
    {
      id: 'lesson19',
      title: { ar: 'الدَّرْسُ التَّاسِعَ عَشَرَ', en: 'Lesson 19' },
      introduction: {
        arabic:
          'يُعِيدُ هَذَا الدَّرْسُ التَّأْكِيدَ عَلَى نَصْبِ الْفِعْلِ الْمُضَارِعِ بِـ "لَنْ". كَمَا يُلَخِّصُ أَدَوَاتِ النَّفْيِ لِلْمَاضِي وَالْحَالِ وَالْمُسْتَقْبَلِ.',
        english:
          'This lesson re-emphasizes making the present tense verb accusative with "لَنْ". It also summarizes the negation particles for past, present, and future tenses.',
      },
      rules: [
        {
          name: 'Accusative Present Tense with لَنْ (نَصْبُ الْفِعْلِ الْمُضَارِعِ بِـ لَنْ - Review)',
          arabicText:
            'لَنْ أَخْرُجَ مِنْ قَرْيَتِي فِي الصَّيْفِ. الْأَطِبَّاءُ لَنْ يَخْرُجُوا مِنَ الْمُسْتَشْفَى الْيَوْمَ.',
          explanation:
            'Review: "لَنْ" (lan - will not) makes the present tense verb accusative and refers to the future. Examples: "I will not leave my village in the summer." "The doctors will not leave the hospital today."',
        },
        {
          name: 'Negation of Past, Present, and Future (نَفْيُ الْمَاضِي، وَالْحَالِ، وَالْمُسْتَقْبَلِ)',
          arabicText:
            'يُنْفَى الْمَاضِي بِـ (مَا): مَا كَتَبْتُ الدَّرْسَ. يُنْفَى الْمُضَارِعُ بِـ (لَا) لِلْحَالِ وَالْمُسْتَقْبَلِ: لَا أَشْرَبُ الْقَهْوَةَ (الْآنَ / عَادَةً). يُنْفَى الْمُضَارِعُ بِـ (لَنْ) لِلْمُسْتَقْبَلِ: لَنْ أَخْرُجَ مِنَ الْبَيْتِ غَدًا.',
          explanation:
            'Past is negated with "مَا" (e.g., "I did not write the lesson"). Present/Habitual/Future is negated with "لَا" (e.g., "I do not drink coffee (now/usually)"). Strong future negation is with "لَنْ" (e.g., "I will not leave the house tomorrow").',
        },
      ],
    },
    {
      id: 'lesson20',
      title: { ar: 'الدَّرْسُ الْعِشْرُونَ', en: 'Lesson 20' },
      introduction: {
        arabic:
          'يُعَرِّفُ هَذَا الدَّرْسُ بِالْمُثَنَّى وَإِعْرَابِهِ (الرَّفْعُ بِالْأَلِفِ، وَالنَّصْبُ وَالْجَرُّ بِالْيَاءِ). كَمَا يُقَدِّمُ أُسْلُوبَ "أَحَدُهُمَا، وَالْآخَرُ" لِلتَّفْصِيلِ، وَيُعِيدُ النَّظَرَ فِي "ذُو" وَ "ذَاتُ" فِي حَالَاتِ الْإِعْرَابِ الْمُخْتَلِفَةِ.',
        english:
          'This lesson defines the dual and its declension (nominative with alif, accusative and genitive with yāʾ). It also introduces the "أَحَدُهُمَا، وَالْآخَرُ" (one of them, and the other) structure for detailing, and revisits "ذُو" and "ذَاتُ" in different case endings.',
      },
      rules: [
        {
          name: 'The Dual (الْمُثَنَّى)',
          arabicText:
            'اسْمٌ يَدُلُّ عَلَى اثْنَيْنِ، أَوْ اثْنَتَيْنِ، بِزِيَادَةِ أَلِفٍ وَنُونٍ (ـَانِ) فِي الرَّفْعِ، وَيَاءٍ وَنُونٍ (ـَيْنِ) فِي النَّصْبِ وَالْجَرِّ. يُرْفَعُ بِالْأَلِفِ، وَيُنْصَبُ بِالْيَاءِ، وَيُجَرُّ بِالْيَاءِ.',
          explanation:
            'The dual indicates two. It is formed by adding ـَانِ (nominative, e.g., مُدَرِّسَانِ - two teachers) or ـَيْنِ (accusative/genitive, e.g., مُدَرِّسَيْنِ). It is nominative with alif, and accusative/genitive with yāʾ.',
        },
        {
          name: 'Examples of Dual Declension',
          arabicText:
            'الرَّفْعُ: جَاءَ الْمُدَرِّسَانِ. النَّصْبُ: رَأَيْتُ الْمُدَرِّسَيْنِ. الْجَرُّ: ذَهَبْتُ إِلَى الْمُدَرِّسَيْنِ.',
          explanation:
            'Nominative: "The two teachers came." Accusative: "I saw the two teachers." Genitive: "I went to the two teachers."',
        },
        {
          name: 'أَحَدُهُمَا، وَالْآخَرُ (one of them, and the other)',
          arabicText:
            'أُسْلُوبٌ يُسْتَعْمَلُ عِنْدَ إِرَادَةِ التَّفْصِيلِ بَيْنَ شَيْئَيْنِ. أَحَدُ (مُذَكَّرٌ) / إِحْدَى (مُؤَنَّثٌ). الْآخَرُ (مُذَكَّرٌ) / الْأُخْرَى (مُؤَنَّثٌ). لِي أَخَوَانِ أَحَدُهُمَا طَبِيبٌ وَالْآخَرُ مُهَنْدِسٌ.',
          explanation:
            'A structure used to detail two items. Masculine: أَحَدُهُمَا (one of them), وَالْآخَرُ (and the other). Feminine: إِحْدَاهُمَا, وَالْأُخْرَى. Example: "I have two brothers; one of them is a doctor and the other is an engineer."',
        },
        {
          name: 'ذُو and ذَاتُ (Declension Review)',
          arabicText:
            'ذُو: مِنَ الْأَسْمَاءِ الْخَمْسَةِ، يُرْفَعُ بِالْوَاوِ (ذُو)، وَيُنْصَبُ بِالْأَلِفِ (ذَا)، وَيُجَرُّ بِالْيَاءِ (ذِي). ذَاتُ: مُؤَنَّثُ ذُو، يُرْفَعُ بِالضَّمَّةِ، وَيُنْصَبُ بِالْفَتْحَةِ، وَيُجَرُّ بِالْكَسْرَةِ.',
          explanation:
            '"ذُو" (owner of) is one of the Five Nouns: nominative ذُو, accusative ذَا, genitive ذِي. Its feminine counterpart "ذَاتُ" is declined regularly with ḍammah (nom.), fatḥah (acc.), and kasrah (gen.).',
        },
      ],
    },
    {
      id: 'lesson21',
      title: { ar: 'الدَّرْسُ الْحَادِي وَالْعِشْرُونَ', en: 'Lesson 21' },
      introduction: {
        arabic:
          'يُقَدِّمُ هَذَا الدَّرْسُ حَرْفَيِ الْجَزْمِ "لَمْ" وَ "لَمَّا" وَعَمَلَهُمَا فِي جَزْمِ الْفِعْلِ الْمُضَارِعِ وَقَلْبِ زَمَنِهِ إِلَى الْمَاضِي. كَمَا يُعَرِّفُ بِأَقْسَامِ الْكَلِمَةِ، وَالْجُمْلَتَيْنِ الِاسْمِيَّةِ وَالْفِعْلِيَّةِ، وَاسْمَيِ الْمَوْصُولِ لِجَمْعِ الْمُؤَنَّثِ "اللَّاتِي" وَ "اللَّائِي".',
        english:
          'This lesson introduces the jussive particles "لَمْ" (lam - did not) and "لَمَّا" (lammā - not yet) and their function in making the present tense verb jussive and changing its tense to the past. It also defines the parts of speech, nominal and verbal sentences, and the feminine plural relative pronouns "اللَّاتِي" and "اللَّائِي".',
      },
      rules: [
        {
          name: 'Jussive with لَمْ (lam) and لَمَّا (lammā)',
          arabicText:
            'لَمْ: حَرْفُ جَزْمٍ وَنَفْيٍ يَجْزِمُ الْفِعْلَ الْمُضَارِعَ، وَيَقْلِبُ زَمَنَهُ إِلَى الزَّمَنِ الْمَاضِي. لَمَّا: مِثْلُ لَمْ، وَلَكِنَّهَا تُفِيدُ اسْتِمْرَارَ النَّفْيِ إِلَى الْحَالِ مَعَ تَوَقُّعِ الْحُصُولِ.',
          explanation:
            '"لَمْ" (did not) and "لَمَّا" (not yet) are particles that make the present tense verb jussive (majzūm) and change its tense to the past. "لَمَّا" implies the negation continues to the present with an expectation that the action will occur.',
        },
        {
          name: 'Signs of Jussive for Present Tense Verbs (with لَمْ/لَمَّا)',
          arabicText:
            'لَمْ أَذْهَبْ، لَمَّا تَذْهَبْ: عَلَامَةُ الْجَزْمِ السُّكُونُ. لَمْ يَذْهَبُوا، لَمَّا تَذْهَبِي: عَلَامَةُ الْجَزْمِ حَذْفُ النُّونِ. لَمْ يَذْهَبْنَ، لَمَّا تَذْهَبْنَ: مَبْنِيٌّ عَلَى السُّكُونِ فِي مَحَلِّ جَزْمٍ.',
          explanation:
            'Signs of jussive: sukūn (e.g., لَمْ أَذْهَبْ). Omission of nūn (حَذْفُ النُّونِ) for the "Five Verbs" (e.g., لَمْ يَذْهَبُوا). Verbs with nūn an-niswah are built on sukūn but are in a state of jussive (فِي مَحَلِّ جَزْمٍ).',
        },
        {
          name: 'Difference between لَمْ and لَمَّا in Usage',
          arabicText:
            'لَمْ أَكْتُبْ (قَدْ يَكْتُبُ، وَقَدْ لَا يَكْتُبُ). لَمَّا أَكْتُبْ (مَا كَتَبْتُ إِلَى الْآنَ، وَسَأَكْتُبُ إِنْ شَاءَ اللهُ). فِي الْجَوَابِ: أَكَتَبْتَ الْوَاجِبَ؟ لَمْ أَكْتُبْ. / لَمَّا (يَجُوزُ حَذْفُ الْفِعْلِ مَعَ لَمَّا).',
          explanation:
            '"لَمْ أَكْتُبْ" (I did not write) implies the action didn\'t happen. "لَمَّا أَكْتُبْ" (I have not written yet) implies it hasn\'t happened but is expected. In response to a question, the verb can be omitted after "لَمَّا" (e.g., Answer: "Not yet." - لَمَّا).',
        },
        {
          name: 'Parts of Speech (أَقْسَامُ الْكَلِمَةِ)',
          arabicText: 'الِاسْمُ، الْفِعْلُ (مَاضٍ، مُضَارِعٌ، أَمْرٌ)، الْحَرْفُ.',
          explanation:
            'The three parts of speech: Noun (اسْم), Verb (فِعْل - past, present, imperative), Particle (حَرْف).',
        },
        {
          name: 'Nominal and Verbal Sentences (الْجُمْلَتَانِ الِاسْمِيَّةُ، وَالْفِعْلِيَّةُ)',
          arabicText:
            'الْجُمْلَةُ الِاسْمِيَّةُ: تَبْدَأُ بِالِاسْمِ (مُبْتَدَأٌ وَخَبَرٌ). الطَّالِبُ مُجْتَهِدٌ. الْجُمْلَةُ الْفِعْلِيَّةُ: تَبْدَأُ بِالْفِعْلِ (فِعْلٌ وَفَاعِلٌ). خَرَجَ الْمُدَرِّسُ.',
          explanation:
            'Nominal Sentence (جُمْلَةٌ اسْمِيَّةٌ): Starts with a noun (subject + predicate). Example: "The student is hardworking." Verbal Sentence (جُمْلَةٌ فِعْلِيَّةٌ): Starts with a verb (verb + doer). Example: "The teacher left."',
        },
        {
          name: 'اللَّاتِي and اللَّائِي (Feminine Plural Relative Pronouns)',
          arabicText:
            'اسْمَانِ مَوْصُولَانِ لِجَمْعِ الْمُؤَنَّثِ. الطَّالِبَاتُ اللَّاتِي/اللَّائِي خَرَجْنَ...',
          explanation:
            '"اللَّاتِي" and "اللَّائِي" are both relative pronouns for the feminine plural ("those who/which"). Example: "The female students who left..."',
        },
      ],
    },
    {
      id: 'lesson22',
      title: { ar: 'الدَّرْسُ الثَّانِي وَالْعِشْرُونَ', en: 'Lesson 22' },
      introduction: {
        arabic:
          'يُقَدِّمُ هَذَا الدَّرْسُ جَدْوَلًا مُلَخَّصًا لِحَالَاتِ الْفِعْلِ الْمُضَارِعِ الثَّلَاثِ (الرَّفْعُ، النَّصْبُ، الْجَزْمُ) مَعَ الضَّمَائِرِ الْمُخْتَلِفَةِ وَعَلَامَاتِ الْإِعْرَابِ لِكُلِّ حَالَةٍ.',
        english:
          'This lesson presents a summary table of the three states of the present tense verb (nominative, accusative, jussive) with various pronouns and the signs of declension for each state.',
      },
      rules: [
        {
          name: 'Three States of the Present Tense Verb (حَالَاتُ الْمُضَارِعِ الثَّلَاثُ - Table Summary)',
          arabicText:
            'الْمَرْفُوعُ (يَشْرَبُ، يَشْرَبُونَ، تَشْرَبِينَ، يَشْرَبْنَ). الْمَنْصُوبُ (لَنْ يَشْرَبَ، لَنْ يَشْرَبُوا، لَنْ تَشْرَبِي، لَنْ يَشْرَبْنَ). الْمَجْزُومُ (لَمْ يَشْرَبْ، لَمْ يَشْرَبُوا، لَمْ تَشْرَبِي، لَمْ يَشْرَبْنَ).',
          explanation:
            'A comprehensive table showing the present tense verb in its nominative (e.g., يَشْرَبُ - he drinks), accusative (e.g., لَنْ يَشْرَبَ - he will not drink), and jussive (e.g., لَمْ يَشْرَبْ - he did not drink) states, with different pronouns and their respective endings (ḍammah/fatḥah/sukūn, presence/absence of nūn, or being built on sukūn with nūn an-niswah).',
        },
      ],
    },
    {
      id: 'lesson23',
      title: { ar: 'الدَّرْسُ الثَّالِثُ وَالْعِشْرُونَ', en: 'Lesson 23' },
      introduction: {
        arabic:
          'يَشْرَحُ هَذَا الدَّرْسُ إِعْرَابَ جَمْعِ الْمُذَكَّرِ السَّالِمِ وَأَلْفَاظِ الْعُقُودِ (الرَّفْعُ بِالْوَاوِ، وَالنَّصْبُ وَالْجَرُّ بِالْيَاءِ). كَمَا يُنَاقِشُ نَفْيَ الْفِعْلِ الْمَاضِي بِـ "لَا" النَّافِيَةِ وَشَرْطَ تَكْرَارِهَا.',
        english:
          'This lesson explains the declension of the sound masculine plural and tens (nominative with wāw, accusative and genitive with yāʾ). It also discusses negating the past tense verb with "لَا" (lā of negation) and the condition of its repetition.',
      },
      rules: [
        {
          name: 'Declension of Sound Masculine Plural and Tens (إِعْرَابُ جَمْعِ الْمُذَكَّرِ السَّالِمِ، وَأَلْفَاظُ الْعُقُودِ)',
          arabicText:
            'جَمْعُ الْمُذَكَّرِ السَّالِمُ وَأَلْفَاظُ الْعُقُودِ (٢٠، ٣٠...): يُرْفَعُ بِالْوَاوِ (ـُونَ)، وَيُنْصَبُ وَيُجَرُّ بِالْيَاءِ (ـِينَ).',
          explanation:
            'The sound masculine plural (e.g., مُدَرِّسُونَ - teachers) and tens (e.g., عِشْرُونَ - twenty) are nominative with "wāw" (ending in ـُونَ) and accusative/genitive with "yāʾ" (ending in ـِينَ).',
        },
        {
          name: 'Examples of Sound Masculine Plural/Tens Declension',
          arabicText:
            'الرَّفْعُ: جَاءَ الْمُدَرِّسُونَ. جَاءَ عِشْرُونَ طَالِبًا. النَّصْبُ: رَأَيْتُ الْمُدَرِّسِينَ. رَأَيْتُ عِشْرِينَ طَالِبًا. الْجَرُّ: سَلَّمْتُ عَلَى الْمُدَرِّسِينَ. مَرَرْتُ بِعِشْرِينَ طَالِبًا.',
          explanation:
            'Nominative: "The teachers came." "Twenty students came." Accusative: "I saw the teachers." "I saw twenty students." Genitive: "I greeted the teachers." "I passed by twenty students."',
        },
        {
          name: 'Negating Past Tense with لَا (نَفْيُ الْفِعْلِ الْمَاضِي بِـ لَا النَّافِيَةِ)',
          arabicText:
            'الْأَصْلُ أَنْ يُنْفَى الْمَاضِي بِـ (مَا). قَدْ يُنْفَى بِـ (لَا)، وَحِينَئِذٍ يَجِبُ تَكْرَارُهَا. لَا أَكَلْتُ وَلَا شَرِبْتُ. قَالَ تَعَالَى: ﴿فَلَا صَدَّقَ وَلَا صَلَّى﴾.',
          explanation:
            'While the past tense is usually negated with "مَا", it can be negated with "لَا". If "لَا" is used to negate a past action, it must be repeated. Example: "I neither ate nor drank." (Lit: I did not eat and I did not drink).',
        },
      ],
    },
    {
      id: 'lesson24',
      title: { ar: 'الدَّرْسُ الرَّابِعُ وَالْعِشْرُونَ', en: 'Lesson 24' },
      introduction: {
        arabic:
          'يُقَدِّمُ هَذَا الدَّرْسُ مُرَاجَعَةً شَامِلَةً لِقَوَاعِدِ الْعَدَدِ وَالْمَعْدُودِ، مُغَطِّيًا الْأَعْدَادَ الْمُفْرَدَةَ، الْمُرَكَّبَةَ، أَلْفَاظَ الْعُقُودِ، الْمِئَاتِ، وَالْآلَافَ، مَعَ أَحْكَامِ الْمُوَافَقَةِ وَالْمُخَالَفَةِ فِي التَّذْكِيرِ وَالتَّأْنِيثِ، وَإِعْرَابِ الْمَعْدُودِ.',
        english:
          'This lesson provides a comprehensive review of the rules for numbers and the counted noun, covering single numbers, compound numbers, tens, hundreds, and thousands, along with rules of agreement/disagreement in gender, and the declension of the counted noun.',
      },
      rules: [
        {
          name: 'Numbers 1 and 2 (الْعَدَدَانِ ١، ٢)',
          arabicText: 'يُوَافِقَانِ الْمَعْدُودَ. طَالِبٌ وَاحِدٌ. طَالِبَتَانِ اثْنَتَانِ.',
          explanation:
            'Numbers 1 and 2 agree in gender with the counted noun. They usually follow the noun.',
        },
        {
          name: 'Numbers 3 to 10 (الْأَعْدَادُ مِنْ ٣ إِلَى ١٠)',
          arabicText:
            'تُخَالِفُ الْمَعْدُودَ فِي الْجِنْسِ. الْمَعْدُودُ جَمْعٌ مَجْرُورٌ بِالْإِضَافَةِ. ثَلَاثَةُ طُلَّابٍ. ثَلَاثُ طَالِبَاتٍ.',
          explanation:
            'Numbers 3-10 disagree in gender with the counted noun. The counted noun is plural and genitive (muḍāf ilayhi). Gender is determined by the singular of the counted noun.',
        },
        {
          name: 'Numbers 11 and 12 (الْعَدَدَانِ ١١، ١٢)',
          arabicText:
            'الْجُزْءَانِ يُوَافِقَانِ الْمَعْدُودَ. الْمَعْدُودُ مُفْرَدٌ مَنْصُوبٌ (تَمْيِيزٌ). أَحَدَ عَشَرَ طَالِبًا. اثْنَتَا عَشْرَةَ طَالِبَةً.',
          explanation:
            'For 11 and 12, both parts of the number agree in gender with the counted noun. The counted noun is singular and accusative (tamyīz).',
        },
        {
          name: 'Numbers 13 to 19 (الْأَعْدَادُ مِنْ ١٣ إِلَى ١٩)',
          arabicText:
            'الْجُزْءُ الْأَوَّلُ (الْآحَادُ) يُخَالِفُ الْمَعْدُودَ، وَالْجُزْءُ الثَّانِي (عَشَرَ/عَشْرَةَ) يُوَافِقُ. الْمَعْدُودُ مُفْرَدٌ مَنْصُوبٌ. ثَلَاثَةَ عَشَرَ طَالِبًا. ثَلَاثَ عَشْرَةَ طَالِبَةً.',
          explanation:
            'For 13-19, the first part (units) disagrees in gender with the counted noun, and the second part ("ten") agrees. The counted noun is singular and accusative.',
        },
        {
          name: 'Tens (20, 30...90) (أَلْفَاظُ الْعُقُودِ)',
          arabicText:
            'تَأْتِي بِصُورَةٍ وَاحِدَةٍ مَعَ الْمُذَكَّرِ وَالْمُؤَنَّثِ. الْمَعْدُودُ مُفْرَدٌ مَنْصُوبٌ. عِشْرُونَ طَالِبًا. عِشْرُونَ طَالِبَةً.',
          explanation:
            'Tens (20, 30, etc.) have one form regardless of the gender of the counted noun. The counted noun is singular and accusative.',
        },
        {
          name: 'Hundreds and Thousands (100, 1000, 2000, etc.)',
          arabicText:
            'تَأْتِي بِصُورَةٍ وَاحِدَةٍ مَعَ الْمُذَكَّرِ وَالْمُؤَنَّثِ. الْمَعْدُودُ مُفْرَدٌ مَجْرُورٌ بِالْإِضَافَةِ. مِائَةُ طَالِبٍ. أَلْفُ طَالِبَةٍ.',
          explanation:
            '100 (مِائَة), 1000 (أَلْف), 2000 (أَلْفَانِ/أَلْفَيْ) etc., have one form for gender. The counted noun is singular and genitive (muḍāf ilayhi).',
        },
        {
          name: 'Hundreds (300-900)',
          arabicText:
            'الْعَدَدُ مِنْ (٣-٩) يَكُونُ مُذَكَّرًا؛ لِأَنَّ لَفْظَ (مِائَةٍ) مُؤَنَّثٌ. ثَلَاثُمِائَةِ طَالِبٍ.',
          explanation:
            'For 300-900, the unit (3-9) is masculine because "مِائَة" (hundred) is treated as feminine. Example: ثَلَاثُمِائَةِ (three hundred).',
        },
        {
          name: 'Thousands (3000-9000)',
          arabicText:
            'الْعَدَدُ مِنْ (٣-٩) يَكُونُ مُؤَنَّثًا؛ لِأَنَّ لَفْظَ (أَلْفٍ) مُذَكَّرٌ. ثَلَاثَةُ آلَافِ طَالِبٍ.',
          explanation:
            'For 3000-9000, the unit (3-9) is feminine because "أَلْف" (thousand) is treated as masculine. Example: ثَلَاثَةُ آلَافٍ (three thousand).',
        },
        {
          name: 'Shīn in عَشَر/عَشْرَة',
          arabicText:
            'عَشَر (مَعَ الْمُذَكَّرِ): الشِّينُ سَاكِنٌ فِي الْمُفْرَدِ (عَشْرُ)، مَفْتُوحٌ فِي الْمُرَكَّبِ (أَحَدَ عَشَرَ). عَشْرَة (مَعَ الْمُؤَنَّثِ): الشِّينُ مَفْتُوحٌ فِي الْمُفْرَدِ (عَشْرَةُ)، سَاكِنٌ فِي الْمُرَكَّبِ (إِحْدَى عَشْرَةَ).',
          explanation:
            'The vowel on the "shīn" of "ten" varies: With masculine counted noun, عَشْرُ (sukūn) when alone, but ـعَشَرَ (fatḥah) in 11-19. With feminine counted noun, عَشْرَةُ (fatḥah) when alone, but ـعَشْرَةَ (sukūn or fatḥah) in 11-19.',
        },
      ],
    },
    {
      id: 'lesson25',
      title: { ar: 'الدَّرْسُ الْخَامِسُ وَالْعِشْرُونَ', en: 'Lesson 25' },
      introduction: {
        arabic:
          'يُقَارِنُ هَذَا الدَّرْسُ بَيْنَ "كَانَ" وَ "مَازَالَ" وَعَمَلِهِمَا. كَمَا يُعِيدُ النَّظَرَ فِي إِعْرَابِ "الْأَبُ" وَ "الْأَخُ" مِنَ الْأَسْمَاءِ الْخَمْسَةِ.',
        english:
          'This lesson compares "كَانَ" (kāna - was) and "مَازَالَ" (māzāla - still is/continues to be) and their function. It also revisits the declension of "الْأَبُ" (father) and "الْأَخُ" (brother) from the Five Nouns.',
      },
      rules: [
        {
          name: 'كَانَ (kāna) and مَا زَالَ (mā zāla)',
          arabicText:
            'كَانَ: فِعْلٌ مَاضٍ نَاقِصٌ، يَرْفَعُ الِاسْمَ، وَيَنْصِبُ الْخَبَرَ. مَا زَالَ: مِثْلُ كَانَ (مِنْ أَخَوَاتِ كَانَ)، وَتُفِيدُ اسْتِمْرَارَ الْحَالِ. يَعْمَلَانِ فِي الْمَاضِي وَالْمُضَارِعِ (يَكُونُ، لَا يَزَالُ).',
          explanation:
            '"كَانَ" (was/were) and "مَا زَالَ" (still is/continues to be) are defective verbs. They make their subject nominative and predicate accusative. "مَا زَالَ" indicates continuation. They function in both past and present (يَكُونُ - is, لَا يَزَالُ - still is).',
        },
        {
          name: 'Examples of كَانَ and مَا زَالَ',
          arabicText:
            'الطَّالِبُ مَرِيضٌ. كَانَ الطَّالِبُ مَرِيضًا أَمْسِ. مَا زَالَ الطَّالِبُ مَرِيضًا (إِلَى الْآنَ).',
          explanation:
            'Example: "The student is sick." -> "The student was sick yesterday." -> "The student is still sick (until now)."',
        },
        {
          name: 'الْأَبُ (father) and الْأَخُ (brother) - The Five Nouns',
          arabicText:
            'مِنَ الْأَسْمَاءِ الْخَمْسَةِ: تُرْفَعُ بِالْوَاوِ (أَبُوكَ، أَخُوكَ)، وَتُنْصَبُ بِالْأَلِفِ (أَبَاكَ، أَخَاكَ)، وَتُجَرُّ بِالْيَاءِ (أَبِيكَ، أَخِيكَ) عِنْدَ إِضَافَتِهَا لِغَيْرِ يَاءِ الْمُتَكَلِّمِ.',
          explanation:
            '"الْأَبُ" and "الْأَخُ" are from the Five Nouns when annexed to any pronoun other than "my" (يَاءُ الْمُتَكَلِّمِ) or to an explicit noun. They are nominative with "wāw" (e.g., أَبُوكَ - your father), accusative with "alif" (e.g., أَبَاكَ), and genitive with "yāʾ" (e.g., أَبِيكَ).',
        },
        {
          name: 'The Five Nouns (General Note)',
          arabicText:
            'الْأَسْمَاءُ الْخَمْسَةُ: أَبٌ، أَخٌ، حَمٌ، ذُو، فُو. تُضَافُ إِلَى كُلِّ الضَّمَائِرِ مَا عَدَا يَاءَ الْمُتَكَلِّمِ (فَإِذَا قُلْتَ: أَبِي، أَخِي فَهِيَ لَيْسَتْ مِنَ الْأَسْمَاءِ الْخَمْسَةِ).',
          explanation:
            'The Five Nouns are: أَبٌ (father), أَخٌ (brother), حَمٌ (father-in-law), ذُو (owner of), فُو (mouth - usually فَمٌ, but فُو in this construction). They follow special declension when annexed, except when annexed to "my" (يَاءُ الْمُتَكَلِّمِ), in which case they decline with estimated vowels (e.g., أَبِي).',
        },
      ],
    },
    {
      id: 'lesson26',
      title: { ar: 'الدَّرْسُ السَّادِسُ وَالْعِشْرُونَ', en: 'Lesson 26' },
      introduction: {
        arabic:
          'يَشْرَحُ هَذَا الدَّرْسُ الْفِعْلَ الْمُعْتَلَّ الْفَاءَ (الْمِثَالَ الْوَاوِيَّ) وَتَصْرِيفَهُ. كَمَا يُقَدِّمُ قَاعِدَةَ التَّصْغِيرِ لِلِاسْمِ الثُّلَاثِيِّ، وَصِيَاغَةَ اسْمِ التَّفْضِيلِ مِنَ الْفِعْلِ الْمُضَعَّفِ، وَتَرْكِيبَ "هَا هُوَ ذَا"، وَاسْتِخْدَامَ الْفِعْلِ "يَجِبُ"، وَمَصْدَرَ الْفِعْلِ "ذَهَبَ".',
        english:
          'This lesson explains the assimilated verb (first radical is weak "و" - al-mithāl al-wāwī) and its conjugation. It also introduces the diminutive for triliteral nouns, forming the noun of preference from doubled verbs, the structure "هَا هُوَ ذَا" (here he is), the use of the verb "يَجِبُ" (it is necessary), and the verbal noun of "ذَهَبَ" (to go).',
      },
      rules: [
        {
          name: 'Assimilated Verb (الْفِعْلُ الْمُعْتَلُّ الْفَاءِ - الْمِثَالُ الْوَاوِيُّ)',
          arabicText:
            'هُوَ الَّذِي فِي أَوَّلِهِ حَرْفُ عِلَّةٍ (وَاوٌ أَوْ يَاءٌ). إِذَا كَانَ وَاوًا (مِثَالٌ وَاوِيٌّ) وَعَيْنُ مُضَارِعِهِ مَكْسُورَةٌ، تُحْذَفُ الْوَاوُ فِي الْمُضَارِعِ وَالْأَمْرِ. وَجَدَ -> يَجِدُ (أَصْلُهُ: يَوْجِدُ) -> جِدْ. وَضَعَ -> يَضَعُ (عَيْنُ مُضَارِعِهِ مَفْتُوحَةٌ، فَلَا تُحْذَفُ الْوَاوُ).',
          explanation:
            'An assimilated verb has a weak first radical ("و" or "ي"). If it\'s "و" (al-mithāl al-wāwī) and its present tense middle radical has a kasrah, the "و" is dropped in the present and imperative forms (e.g., وَجَدَ -> يَجِدُ -> جِدْ - to find). If the present middle radical has a fatḥah, the "و" is usually not dropped (e.g., وَضَعَ -> يَضَعُ - to put).',
        },
        {
          name: 'Diminutive (التَّصْغِيرُ)',
          arabicText:
            'جَعْلُ الشَّيْءِ صَغِيرًا. تَصْغِيرُ الِاسْمِ الثُّلَاثِيِّ: عَلَى وَزْنِ (فُعَيْلٍ). وَلَدٌ -> وُلَيْدٌ. نَهْرٌ -> نُهَيْرٌ.',
          explanation:
            'The diminutive form makes something small. For triliteral nouns, it is on the pattern فُعَيْلٌ. Examples: وَلَدٌ (boy) -> وُلَيْدٌ (little boy); نَهْرٌ (river) -> نُهَيْرٌ (small river).',
        },
        {
          name: 'Noun of Preference from Doubled Verbs',
          arabicText:
            'إِذَا كَانَ الْفِعْلُ مُضَعَّفًا انْتَقَلَ التَّضْعِيفُ إِلَى اسْمِ التَّفْضِيلِ. قَلَّ (قَلِيلٌ) -> أَقَلُّ. شَدَّ (شَدِيدٌ) -> أَشَدُّ.',
          explanation:
            'If the verb is doubled (mudaʿʿaf), the doubling is maintained in the noun of preference. Examples: قَلَّ (to be little) -> أَقَلُّ (less/least); شَدَّ (to be strong/intense) -> أَشَدُّ (stronger/most intense).',
        },
        {
          name: 'هَا هُوَ ذَا (hā huwa dhā - here he is)',
          arabicText:
            'أَصْلُهُ: الضَّمِيرُ (هُوَ) وَاسْمُ الْإِشَارَةِ (هَذَا). فُصِلَ بَيْنَ هَاءِ التَّنْبِيهِ وَاسْمِ الْإِشَارَةِ بِالضَّمِيرِ. هَا أَنَا ذَا. هَا هِيَ ذِي.',
          explanation:
            'A structure meaning "here/there [pronoun] is". It combines هَا (particle of attention), a pronoun (e.g., هُوَ, أَنَا, هِيَ), and a demonstrative (ذَا, ذِي). Examples: هَا هُوَ ذَا (here he is), هَا أَنَا ذَا (here I am), هَا هِيَ ذِي (here she is).',
        },
        {
          name: 'يَجِبُ (yajibu - it is necessary/must)',
          arabicText:
            'يَأْتِي بَعْدَهُ مَصْدَرٌ مُؤَوَّلٌ (أَنْ + فِعْلٌ مُضَارِعٌ). يَجِبُ أَنْ أَخْرُجَ (أَيْ: يَجِبُ الْخُرُوجُ). يَجُوزُ أَنْ يَدْخُلَ عَلَيْهِ حَرْفُ الْجَرِّ (عَلَى): يَجِبُ عَلَيْنَا أَنْ نَفْهَمَ الْقُرْآنَ.',
          explanation:
            'The verb "يَجِبُ" (it is necessary/one must) is often followed by an interpreted verbal noun (أَنْ + present verb). Example: "I must go out" (Lit: It is necessary that I go out). The preposition "عَلَى" (on) can be used to specify for whom it is necessary (e.g., "We must understand the Quran").',
        },
        {
          name: 'Verbal Noun (Maṣdar) of ذَهَبَ (dhahaba - to go)',
          arabicText: 'مَصْدَرُ الْفِعْلِ ذَهَبَ: ذَهَابٌ. أُرِيدُ الذَّهَابَ إِلَى الْبَيْتِ.',
          explanation:
            'The verbal noun (maṣdar) of ذَهَبَ is ذَهَابٌ (going/departure). Example: "I want to go home."',
        },
      ],
    },
    {
      id: 'lesson27',
      title: { ar: 'الدَّرْسُ السَّابِعُ وَالْعِشْرُونَ', en: 'Lesson 27' },
      introduction: {
        arabic:
          'يُفَصِّلُ هَذَا الدَّرْسُ الْفِعْلَ الْمُعْتَلَّ الْعَيْنِ (الْأَجْوَفَ) وَإِسْنَادَهُ إِلَى الضَّمَائِرِ فِي الْأَزْمِنَةِ الثَّلَاثَةِ (الْمَاضِي، الْمُضَارِعُ، الْأَمْرُ)، مُوَضِّحًا التَّغَيُّرَاتِ الَّتِي تَطْرَأُ عَلَى حَرْفِ الْعِلَّةِ وَعَلَامَاتِ الْإِعْرَابِ أَوِ الْبِنَاءِ.',
        english:
          'This lesson details the hollow verb (middle radical is weak - al-ajwaf) and its assignment to pronouns in the three tenses (past, present, imperative), explaining the changes to the weak letter and the signs of declension or being built.',
      },
      rules: [
        {
          name: 'Hollow Verb (الْفِعْلُ مُعْتَلُّ الْعَيْنِ - الْأَجْوَفُ)',
          arabicText:
            'هُوَ الَّذِي فِي وَسَطِهِ حَرْفُ عِلَّةٍ (أَلِفٌ، وَاوٌ، يَاءٌ). نَحْوُ: قَالَ، بَاعَ، خَافَ.',
          explanation:
            'A hollow verb (ajwaf) has a weak middle radical (which appears as alif in the past tense 3rd m.sg. form, originally "و" or "ي"). Examples: قَالَ (he said - originally قَوَلَ), بَاعَ (he sold - originally بَيَعَ), خَافَ (he feared - originally خَوَفَ).',
        },
        {
          name: 'Hollow Verb: Past Tense Conjugation',
          arabicText:
            'قَالَ، قَالَتْ، قَالُوا (مَبْنِيٌّ عَلَى الْفَتْحِ/الضَّمِّ). قُلْتُ، قُلْتَ، قُلْتِ، قُلْنَا، قُلْتُمْ، قُلْتُنَّ، قُلْنَ (مَبْنِيٌّ عَلَى السُّكُونِ، وَتُحْذَفُ الْأَلِفُ لِالْتِقَاءِ السَّاكِنَيْنِ).',
          explanation:
            'In the past tense, the weak middle letter (alif) is dropped when the verb ending starts with a consonant (making the verb built on sukūn), e.g., قَالَ (he said) but قُلْتُ (I said). With wāw al-jamāʿah, it remains: قَالُوا (they said).',
        },
        {
          name: 'Hollow Verb: Present Tense Conjugation (Nominative, Accusative, Jussive)',
          arabicText:
            'الْمَرْفُوعُ: يَقُولُ، يَبِيعُ، يَخَافُ. الْمَنْصُوبُ: لَنْ يَقُولَ، لَنْ يَبِيعَ، لَنْ يَخَافَ. الْمَجْزُومُ: لَمْ يَقُلْ، لَمْ يَبِعْ، لَمْ يَخَفْ (تُحْذَفُ الْوَاوُ/الْيَاءُ/الْأَلِفُ لِالْتِقَاءِ السَّاكِنَيْنِ). مَعَ نُونِ النِّسْوَةِ: يَقُلْنَ، يَبِعْنَ، يَخَفْنَ (مَبْنِيٌّ عَلَى السُّكُونِ، وَتُحْذَفُ الْعِلَّةُ).',
          explanation:
            'Present tense: Nominative (يَقُولُ - he says). Accusative (لَنْ يَقُولَ - he will not say). Jussive (لَمْ يَقُلْ - he did not say; weak letter dropped). With nūn an-niswah, the verb is built on sukūn and the weak letter is dropped (يَقُلْنَ - they f. say).',
        },
        {
          name: 'Hollow Verb: Imperative Conjugation',
          arabicText:
            'قُلْ، بِعْ، خَفْ (مَبْنِيٌّ عَلَى السُّكُونِ، وَتُحْذَفُ الْعِلَّةُ). قُولِي، بِيعِي، خَافِي (مَبْنِيٌّ عَلَى حَذْفِ النُّونِ). قُولُوا، بِيعُوا، خَافُوا (مَبْنِيٌّ عَلَى حَذْفِ النُّونِ). قُلْنَ، بِعْنَ، خِفْنَ (مَبْنِيٌّ عَلَى السُّكُونِ، وَتُحْذَفُ الْعِلَّةُ).',
          explanation:
            'Imperative: For m.sg., built on sukūn with weak letter dropped (قُلْ - say!). For f.sg. and m.pl., built on omission of nūn, weak letter often returns (قُولِي - say! f.sg.). For f.pl. (with nūn an-niswah), built on sukūn with weak letter dropped (قُلْنَ - say! f.pl.).',
        },
        {
          name: 'Original Weak Letter of Hollow Verbs',
          arabicText:
            'قَالَ (أَصْلُ أَلِفِهِ الْوَاوُ: يَقُولُ، قَوْلٌ). بَاعَ (أَصْلُ أَلِفِهِ الْيَاءُ: يَبِيعُ، بَيْعٌ). خَافَ (أَصْلُ أَلِفِهِ الْوَاوُ: يَخَافُ، خَوْفٌ).',
          explanation:
            'The alif in the past tense of hollow verbs originates from either "و" or "ي", which can be seen in the present tense or the verbal noun.',
        },
      ],
    },
    {
      id: 'lesson28',
      title: { ar: 'الدَّرْسُ الثَّامِنُ وَالْعِشْرُونَ', en: 'Lesson 28' },
      introduction: {
        arabic:
          'يُفَصِّلُ هَذَا الدَّرْسُ الْفِعْلَ الْمُعْتَلَّ اللَّامِ (النَّاقِصَ) وَإِسْنَادَهُ إِلَى الضَّمَائِرِ فِي الْأَزْمِنَةِ الثَّلَاثَةِ، مُوَضِّحًا التَّغَيُّرَاتِ الَّتِي تَطْرَأُ عَلَى حَرْفِ الْعِلَّةِ الْأَخِيرِ وَعَلَامَاتِ الْإِعْرَابِ أَوِ الْبِنَاءِ.',
        english:
          'This lesson details the defective verb (last radical is weak - an-nāqiṣ) and its assignment to pronouns in the three tenses, explaining the changes to the final weak letter and the signs of declension or being built.',
      },
      rules: [
        {
          name: 'Defective Verb (الْفِعْلُ مُعْتَلُّ اللَّامِ - النَّاقِصُ)',
          arabicText:
            'هُوَ الَّذِي فِي آخِرِهِ حَرْفُ عِلَّةٍ (أَلِفٌ، وَاوٌ، يَاءٌ). نَحْوُ: مَشَى، نَسِيَ، دَعَا.',
          explanation:
            'A defective verb (nāqiṣ) has a weak final radical ("و", "ي", or "ا" which is originally "و" or "ي"). Examples: مَشَى (he walked), نَسِيَ (he forgot), دَعَا (he called/invited).',
        },
        {
          name: 'Defective Verb: Past Tense Conjugation',
          arabicText:
            'مَشَى، دَعَا (مَبْنِيٌّ عَلَى فَتْحَةٍ مُقَدَّرَةٍ). مَشَتْ، دَعَتْ (حُذِفَتِ الْأَلِفُ لِالْتِقَاءِ السَّاكِنَيْنِ). مَشَوْا، دَعَوْا (حُذِفَ حَرْفُ الْعِلَّةِ لِالْتِقَاءِ السَّاكِنَيْنِ بَعْدَ تَحْوِيلِهِ إِلَى وَاوٍ أَوْ يَاءٍ وَضَمِّ مَا قَبْلَ الْوَاوِ وَكَسْرِ مَا قَبْلَ الْيَاءِ). مَشَيْتُ، دَعَوْتُ، مَشَيْنَ، دَعَوْنَ (يَرْجِعُ حَرْفُ الْعِلَّةِ إِلَى أَصْلِهِ).',
          explanation:
            'Past tense: 3rd m.sg. (مَشَى) is built on an estimated fatḥah. The weak letter is dropped before tāʾ at-taʾnīth (مَشَتْ) and wāw al-jamāʿah (مَشَوْا). With tāʾ al-fāʿil, nā, and nūn an-niswah, the original weak letter (ي or و) often reappears (مَشَيْتُ, دَعَوْنَ).',
        },
        {
          name: 'Defective Verb: Present Tense Conjugation (Nominative, Accusative, Jussive)',
          arabicText:
            'الْمَرْفُوعُ: يَمْشِي، يَدْعُو (ضَمَّةٌ مُقَدَّرَةٌ لِلثِّقَلِ)، يَنْسَى (ضَمَّةٌ مُقَدَّرَةٌ لِلتَّعَذُّرِ). الْمَنْصُوبُ: لَنْ يَمْشِيَ، لَنْ يَدْعُوَ (فَتْحَةٌ ظَاهِرَةٌ)، لَنْ يَنْسَى (فَتْحَةٌ مُقَدَّرَةٌ). الْمَجْزُومُ: لَمْ يَمْشِ، لَمْ يَدْعُ، لَمْ يَنْسَ (حَذْفُ حَرْفِ الْعِلَّةِ). مَعَ وَاوِ الْجَمَاعَةِ/يَاءِ الْمُخَاطَبَةِ: يُحْذَفُ حَرْفُ الْعِلَّةِ (يَمْشُونَ، تَدْعِينَ). مَعَ نُونِ النِّسْوَةِ: يَبْقَى حَرْفُ الْعِلَّةِ (يَمْشِينَ، يَدْعُونَ).',
          explanation:
            'Present tense: Nominative has estimated ḍammah (يَمْشِي). Accusative has fatḥah (visible on ـِيَ/ـوَ, estimated on ـَى). Jussive is by omitting the weak letter (لَمْ يَمْشِ). With wāw al-jamāʿah or yāʾ al-mukhāṭabah, the weak letter is dropped (يَمْشُونَ). With nūn an-niswah, the weak letter usually remains (يَمْشِينَ).',
        },
        {
          name: 'Defective Verb: Imperative Conjugation',
          arabicText:
            'امْشِ، ادْعُ، انْسَ (مَبْنِيٌّ عَلَى حَذْفِ حَرْفِ الْعِلَّةِ). امْشِي، ادْعِي، انْسَيْ (مَبْنِيٌّ عَلَى حَذْفِ النُّونِ، وَيُحْذَفُ حَرْفُ الْعِلَّةِ الْأَصْلِيُّ). امْشُوا، ادْعُوا، انْسَوْا (مَبْنِيٌّ عَلَى حَذْفِ النُّونِ، وَيُحْذَفُ حَرْفُ الْعِلَّةِ الْأَصْلِيُّ). امْشِينَ، ادْعُونَ، انْسَيْنَ (مَبْنِيٌّ عَلَى السُّكُونِ، وَحَرْفُ الْعِلَّةِ لَا يُحْذَفُ).',
          explanation:
            'Imperative: For m.sg., built on omission of the weak letter (اِمْشِ - walk!). For f.sg. and m.pl., built on omission of nūn; the original weak letter is also dropped (اِمْشِي - walk! f.sg.). For f.pl. (with nūn an-niswah), built on sukūn, and the weak letter remains (اِمْشِينَ - walk! f.pl.).',
        },
      ],
    },
    {
      id: 'lesson29',
      title: { ar: 'الدَّرْسُ التَّاسِعُ وَالْعِشْرُونَ', en: 'Lesson 29' },
      introduction: {
        arabic:
          'يُفَصِّلُ هَذَا الدَّرْسُ الْفِعْلَ الْمُضَعَّفَ وَإِسْنَادَهُ إِلَى الضَّمَائِرِ فِي الْأَزْمِنَةِ الثَّلَاثَةِ، مُوَضِّحًا مَتَى يَجِبُ فَكُّ الْإِدْغَامِ وَمَتَى يَجُوزُ. كَمَا يُقَدِّمُ ظَرْفَيِ الزَّمَانِ "قَطُّ" وَ "أَبَدًا"، وَالْفِعْلَيْنِ الْأَجْوَفَيْنِ "طَابَ" وَ "لَانَ" وَاسْمَيِ التَّفْضِيلِ مِنْهُمَا.',
        english:
          'This lesson details the doubled verb (al-muḍaʿʿaf) and its assignment to pronouns in the three tenses, explaining when the assimilation (idghām) must be released and when it is permissible. It also introduces the adverbs of time "قَطُّ" (ever - with past negative) and "أَبَدًا" (ever/never - with future), and the hollow verbs "طَابَ" (to be good) and "لَانَ" (to be soft) and their nouns of preference.',
      },
      rules: [
        {
          name: 'Doubled Verb (الْفِعْلُ الْمُضَعَّفُ)',
          arabicText:
            'هُوَ مَا كَانَتْ عَيْنُهُ وَلَامُهُ مِنْ جِنْسٍ وَاحِدٍ. مَاضِي: عَدَّ (أَصْلُهُ: عَدَدَ). مُضَارِعٌ: يَعُدُّ (أَصْلُهُ: يَعْدُدُ).',
          explanation:
            'A doubled verb (muḍaʿʿaf) has its second and third radicals being the same letter, which are then assimilated with a shaddah. Example: عَدَّ (he counted - originally عَدَدَ); يَعُدُّ (he counts - originally يَعْدُدُ).',
        },
        {
          name: 'Doubled Verb: Past Tense Conjugation',
          arabicText:
            'عَدَّ، عَدَّتْ، عَدُّوا (يَجِبُ الْإِدْغَامُ). عَدَدْتَ، عَدَدْتِ، عَدَدْتُ، عَدَدْنَا، عَدَدْتُمْ، عَدَدْتُنَّ، عَدَدْنَ (يَجِبُ فَكُّ الْإِدْغَامِ مَعَ تَاءِ الْفَاعِلِ وَنَا وَنُونِ النِّسْوَةِ).',
          explanation:
            'Past tense: Assimilation (idghām) is maintained (عَدَّ - he counted) unless attached to tāʾ al-fāʿil, nā, or nūn an-niswah, in which case the assimilation is released (عَدَدْتُ - I counted).',
        },
        {
          name: 'Doubled Verb: Present Tense Conjugation',
          arabicText:
            'الْمَرْفُوعُ/الْمَنْصُوبُ: يَعُدُّ، لَنْ يَعُدَّ (يَبْقَى الْإِدْغَامُ). الْمَجْزُومُ: لَمْ يَعُدَّ (أَوْ لَمْ يَعْدُدْ - يَجُوزُ الْإِدْغَامُ وَالْفَكُّ). مَعَ نُونِ النِّسْوَةِ: يَعْدُدْنَ (يَجِبُ فَكُّ الْإِدْغَامِ).',
          explanation:
            'Present tense: Assimilation is generally maintained (يَعُدُّ - he counts; لَنْ يَعُدَّ - he will not count). In the jussive case, assimilation can be maintained (لَمْ يَعُدَّ - with fatḥah for ease of pronunciation) or released (لَمْ يَعْدُدْ). With nūn an-niswah, assimilation is released (يَعْدُدْنَ).',
        },
        {
          name: 'Doubled Verb: Imperative Conjugation',
          arabicText:
            'عُدَّ (أَوْ اُعْدُدْ - يَجُوزُ الْإِدْغَامُ وَالْفَكُّ). عُدِّي، عُدُّوا (يَبْقَى الْإِدْغَامُ، مَبْنِيٌّ عَلَى حَذْفِ النُّونِ). اُعْدُدْنَ (يَجِبُ فَكُّ الْإِدْغَامِ مَعَ نُونِ النِّسْوَةِ).',
          explanation:
            'Imperative: For m.sg., assimilation can be maintained (عُدَّ - count!) or released (اُعْدُدْ). With yāʾ al-mukhāṭabah and wāw al-jamāʿah, assimilation is maintained (عُدِّي, عُدُّوا). With nūn an-niswah, assimilation is released (اُعْدُدْنَ).',
        },
        {
          name: 'قَطُّ (qaṭṭu - ever) and أَبَدًا (abadan - ever/never)',
          arabicText:
            'قَطُّ: ظَرْفُ زَمَانٍ مُخْتَصٌّ بِالزَّمَنِ الْمَاضِي، وَيُسْبَقُ بِالنَّفْيِ (مَا شَرِبْتُ الْخَمْرَ قَطُّ). أَبَدًا: ظَرْفُ زَمَانٍ مُخْتَصٌّ بِالزَّمَنِ الْمُسْتَقْبَلِ (لَنْ أَتْرُكَ الصَّلَاةَ أَبَدًا).',
          explanation:
            '"قَطُّ" is an adverb of time used with the negated past, meaning "(not) ever". Example: "I have never drunk alcohol." "أَبَدًا" is an adverb of time used with the future (often negated), meaning "ever" or "never". Example: "I will never abandon prayer."',
        },
        {
          name: 'طَابَ (ṭāba - to be good) and لَانَ (lāna - to be soft)',
          arabicText:
            'فِعْلَانِ مَاضِيَانِ أَجْوَفَانِ. اسْمُ التَّفْضِيلِ مِنْهُمَا: أَطْيَبُ، أَلْيَنُ.',
          explanation:
            '"طَابَ" (to be good/pleasant) and "لَانَ" (to be soft/gentle) are hollow past tense verbs. Their nouns of preference are أَطْيَبُ (better/best) and أَلْيَنُ (softer/softest).',
        },
      ],
    },
    {
      id: 'lesson30',
      title: { ar: 'الدَّرْسُ الثَّلَاثُونَ', en: 'Lesson 30' },
      introduction: {
        arabic:
          'يُوَضِّحُ هَذَا الدَّرْسُ إِسْنَادَ الْفِعْلِ الْمَاضِي وَالْمُضَارِعِ وَالْأَمْرِ إِلَى ضَمِيرِ الْمُثَنَّى (أَلِفُ الِاثْنَيْنِ)، مُبَيِّنًا عَلَامَاتِ الْإِعْرَابِ أَوِ الْبِنَاءِ. كَمَا يُعِيدُ التَّأْكِيدَ عَلَى أَنَّ الْمُضَارِعَ الْمُسْنَدَ إِلَى أَلِفِ الِاثْنَيْنِ هُوَ مِنَ الْأَفْعَالِ الْخَمْسَةِ.',
        english:
          'This lesson explains assigning the past, present, and imperative verbs to the dual pronoun (alif al-ithnayn - ـَا), showing the signs of declension or being built. It also re-emphasizes that the present tense verb assigned to alif al-ithnayn is one of the Five Verbs.',
      },
      rules: [
        {
          name: 'Assigning Verbs to Dual Pronoun (أَلِفُ الِاثْنَيْنِ - ـَا)',
          arabicText:
            'الْمَاضِي: الطَّالِبَانِ ذَهَبَا، الطَّالِبَتَانِ ذَهَبَتَا (مَبْنِيٌّ عَلَى الْفَتْحِ، الْأَلِفُ فَاعِلٌ). الْمُضَارِعُ الْمَرْفُوعُ: يَذْهَبَانِ، تَذْهَبَانِ (عَلَامَةُ الرَّفْعِ: ثُبُوتُ النُّونِ). الْمُضَارِعُ الْمَنْصُوبُ/الْمَجْزُومُ: لَنْ يَذْهَبَا، لَمْ يَذْهَبَا (عَلَامَةُ النَّصْبِ/الْجَزْمِ: حَذْفُ النُّونِ). الْأَمْرُ: اذْهَبَا (مَبْنِيٌّ عَلَى حَذْفِ النُّونِ).',
          explanation:
            'The dual pronoun is "alif al-ithnayn" (ـَا), which is the doer. Past: ذَهَبَا (they two m. went), ذَهَبَتَا (they two f. went) - built on fatḥah. Present (one of the Five Verbs): Nominative يَذْهَبَانِ (they two go - presence of nūn). Accusative/Jussive لَنْ/لَمْ يَذْهَبَا (omission of nūn). Imperative: اذْهَبَا (go! dual - built on omission of nūn).',
        },
        {
          name: 'Present Tense with Alif al-Ithnayn is from the Five Verbs',
          arabicText:
            'الْمُضَارِعُ الْمُسْنَدُ إِلَى أَلِفِ الِاثْنَيْنِ فِعْلٌ مِنَ الْأَفْعَالِ الْخَمْسَةِ.',
          explanation:
            'A reminder that a present tense verb ending with "alif al-ithnayn" (ـَانِ) is one of the Five Verbs, and thus is nominative with the presence of nūn, and accusative/jussive with the omission of nūn.',
        },
      ],
    },
    {
      id: 'lesson31',
      title: { ar: 'الدَّرْسُ الْحَادِي وَالثَّلَاثُونَ', en: 'Lesson 31' },
      introduction: {
        arabic:
          'يَخْتَتِمُ الْكِتَابُ بِهَذَا الدَّرْسِ الَّذِي يُعَرِّفُ بِالنَّعْتِ (الصِّفَةِ) وَالْمَنْعُوتِ (الْمَوْصُوفِ)، وَيُوَضِّحُ الْأُمُورَ الَّتِي يَتْبَعُ فِيهَا النَّعْتُ الْمَنْعُوتَ (الْإِعْرَابُ، التَّذْكِيرُ وَالتَّأْنِيثُ، الْإِفْرَادُ وَالتَّثْنِيَةُ وَالْجَمْعُ، التَّعْرِيفُ وَالتَّنْكِيرُ).',
        english:
          'The book concludes with this lesson defining the adjective (النَّعْتُ/الصِّفَةُ) and the described noun (الْمَنْعُوتُ/الْمَوْصُوفُ), and explaining the aspects in which the adjective follows the noun it describes (case, gender, number, definiteness).',
      },
      rules: [
        {
          name: 'The Adjective (النَّعْتُ / الصِّفَةُ)',
          arabicText:
            'النَّعْتُ: هُوَ الَّذِي يُبَيِّنُ صِفَةً مِنْ صِفَاتِ الْمَنْعُوتِ. النَّعْتُ يُسَمَّى: صِفَةً، وَالْمَنْعُوتُ يُسَمَّى: مَوْصُوفًا.',
          explanation:
            'The adjective (naʿt or ṣifah) is what describes an attribute of the noun it modifies (manʿūt or mawṣūf).',
        },
        {
          name: 'Agreement of Adjective with Noun (النَّعْتُ يَتْبَعُ الْمَنْعُوتَ)',
          arabicText:
            'يَتْبَعُ النَّعْتُ الْمَنْعُوتَ فِي: ١- الْإِعْرَابِ (الرَّفْعِ، النَّصْبِ، الْجَرِّ). ٢- التَّذْكِيرِ وَالتَّأْنِيثِ. ٣- الْإِفْرَادِ وَالتَّثْنِيَةِ وَالْجَمْعِ (مُلَاحَظَةٌ: جَمْعُ غَيْرِ الْعَاقِلِ يُعَامَلُ مُعَامَلَةَ الْمُفْرَدِ الْمُؤَنَّثِ). ٤- التَّعْرِيفِ وَالتَّنْكِيرِ.',
          explanation:
            'The adjective follows the noun it describes in four aspects: 1. Case (nominative, accusative, genitive). 2. Gender (masculine, feminine). 3. Number (singular, dual, plural - Note: non-human plurals are often treated as feminine singular for agreement). 4. Definiteness (definite, indefinite).',
        },
        {
          name: 'Examples of Adjective Agreement',
          arabicText:
            'هَذَا كِتَابٌ جَدِيدٌ (نَكِرَةٌ، مُفْرَدٌ، مُذَكَّرٌ، مَرْفُوعٌ). قَرَأْتُ الْكِتَابَ الْجَدِيدَ (مَعْرِفَةٌ، مُفْرَدٌ، مُذَكَّرٌ، مَنْصُوبٌ). هَذِهِ كُتُبٌ جَدِيدَةٌ (جَمْعُ غَيْرِ الْعَاقِلِ + صِفَةٌ مُفْرَدَةٌ مُؤَنَّثَةٌ).',
          explanation:
            'Examples: "This is a new book" (indefinite, singular, masculine, nominative agreement). "I read the new book" (definite, singular, masculine, accusative agreement). "These are new books" (non-human plural noun + singular feminine adjective).',
        },
      ],
    },
  ],
};
