// Book 3 data - filled in based on the provided grammatical rules
import { Book } from './lessons';

export const book3Data: Book = {
  id: 'book3',
  title: {
    ar: 'كِتَابُ الْمَدِينَةِ الثَّالِثُ',
    en: 'Madinah Book 3',
  },
  available: true,
  description: {
    arabic:
      'الْكِتَابُ الثَّالِثُ مِنْ سِلْسِلَةِ تَعْلِيمِ اللُّغَةِ الْعَرَبِيَّةِ لِغَيْرِ النَّاطِقِينَ بِهَا - الْمُسْتَوَى الْمُتَقَدِّمُ',
    english:
      'The third book in the Arabic language learning series for non-native speakers - Advanced level',
  },
  lessons: [
    {
      id: 'lesson1',
      title: { ar: 'الدَّرْسُ الْأَوَّلُ', en: 'Lesson 1' },
      introduction: {
        arabic:
          'يُقَدِّمُ هَذَا الدَّرْسُ مَفْهُومَيْ الْإِعْرَابِ وَالْبِنَاءِ فِي الْأَسْمَاءِ وَالْأَفْعَالِ، وَعَلَامَاتِ الْإِعْرَابِ الْأَصْلِيَّةِ وَالْفَرْعِيَّةِ، وَأَنْوَاعَ الْإِعْرَابِ.',
        english:
          'This lesson introduces the concepts of declension (I’rāb) and indeclinability (Binā’) in nouns and verbs, the original and derived signs of declension, and the types of declension.',
      },
      rules: [
        {
          name: 'الْمُعْرَبُ (Al-Mu’rab - Declinable)',
          arabicText:
            'الْأَسْمَاءُ الْمُعْرَبَةُ هِيَ الَّتِي تَتَغَيَّرُ حَرَكَةُ آخِرِهَا بِحَسَبِ حَالَتِهَا النَّحْوِيَّةِ. ',
          explanation:
            'Nouns whose endings change based on grammatical case (e.g., الْمُدَرِّسُ, الْمُدَرِّسَ, الْمُدَرِّسِ). ',
        },
        {
          name: 'الْمَبْنِيُّ (Al-Mabniyy - Indeclinable)',
          arabicText:
            'الْأَسْمَاءُ الْمَبْنِيَّةُ هِيَ الَّتِي لَا تَتَغَيَّرُ حَرَكَةُ آخِرِهَا وَتُوصَفُ بِأَنَّهَا (فِي مَحَلِّ رَفْعٍ/نَصْبٍ/جَرٍّ). ',
          explanation:
            'Nouns whose endings do not change and are described as being in a position of nominative/accusative/genitive (فِي مَحَلِّ رَفْعٍ/نَصْبٍ/جَرٍّ). ',
        },
        {
          name: 'أَقْسَامُ الْأَسْمَاءِ الْمَبْنِيَّةِ (Categories of Indeclinable Nouns)',
          arabicText:
            'تَشْمَلُ الْأَسْمَاءُ الْمَبْنِيَّةُ: الضَّمَائِرَ، وَأَسْمَاءَ الْإِشَارَةِ (مَا عَدَا الْمُثَنَّى)، وَالْأَسْمَاءَ الْمَوْصُولَةَ (مَا عَدَا الْمُثَنَّى)، وَأَسْمَاءَ الِاسْتِفْهَامِ (مَا عَدَا أَيّ)، وَأَسْمَاءَ الشَّرْطِ (مَا عَدَا أَيّ)، وَبَعْضَ الظُّرُوفِ، وَالْأَعْدَادَ الْمُرَكَّبَةَ، وَأَسْمَاءَ الْأَفْعَالِ. ',
          explanation:
            'Includes: Pronouns, demonstrative nouns (except duals), relative nouns (except duals), interrogative nouns (except أَيّ), conditional nouns (except أَيّ), some adverbs, compound numbers 11-19, and verb-like nouns. ',
        },
        {
          name: 'عَلَامَاتُ الْإِعْرَابِ الْأَصْلِيَّةُ (Original Signs of Declension)',
          arabicText: 'الضَّمَّةُ لِلرَّفْعِ، وَالْفَتْحَةُ لِلنَّصْبِ، وَالْكَسْرَةُ لِلْجَرِّ. ',
          explanation:
            'The original signs are Dammah (nominative), Fathah (accusative), and Kasrah (genitive). ',
        },
        {
          name: 'عَلَامَاتُ الْإِعْرَابِ الْفَرْعِيَّةُ (Derived Signs of Declension)',
          arabicText:
            'مِثْلُ: الْوَاوُ وَالْأَلِفُ وَالْيَاءُ لِلْأَسْمَاءِ الْخَمْسَةِ وَالْجَمْعِ وَالْمُثَنَّى، وَالْكَسْرَةُ نِيَابَةً عَنِ الْفَتْحَةِ فِي نَصْبِ جَمْعِ الْمُؤَنَّثِ السَّالِمِ، وَالْفَتْحَةُ نِيَابَةً عَنِ الْكَسْرَةِ فِي جَرِّ الْمَمْنُوعِ مِنَ الصَّرْفِ. ',
          explanation:
            'Includes: Waw for nominative sound masculine plural & Five Nouns; Alif for nominative dual & accusative Five Nouns; Ya for accusative/genitive dual, sound masculine plural & Five Nouns; Kasrah for accusative sound feminine plural; Fathah for genitive diptotes. ',
        },
        {
          name: 'الْفِعْلُ الْمَاضِي وَالْأَمْرُ (Past and Imperative Verbs)',
          arabicText: 'الْفِعْلُ الْمَاضِي وَفِعْلُ الْأَمْرِ مَبْنِيَّانِ دَائِمًا. ',
          explanation: 'The past tense verb and the imperative verb are always indeclinable. ',
        },
        {
          name: 'الْفِعْلُ الْمُضَارِعُ (Present Tense Verb)',
          arabicText:
            'الْفِعْلُ الْمُضَارِعُ مُعْرَبٌ إِلَّا إِذَا اتَّصَلَتْ بِهِ نُونُ التَّوْكِيدِ أَوْ نُونُ النِّسْوَةِ. ',
          explanation:
            'The present tense verb is declinable unless it is attached to the Nūn of emphasis (نُونُ التَّوْكِيدِ) or the Nūn of women (نُونُ النِّسْوَةِ). ',
        },
      ],
    },
    {
      id: 'lesson2',
      title: { ar: 'الدَّرْسُ الثَّانِي', en: 'Lesson 2' },
      introduction: {
        arabic:
          'يَسْتَعْرِضُ هَذَا الدَّرْسُ قَوَاعِدَ مُتَنَوِّعَةً مِثْلَ وَاوِ الْحَالِ، وَلَعَلَّ، وَاسْمِ الْفِعْلِ (إِلَيْكُمْ)، وَاسْتِخْدَامِ الْفِعْلِ الْمَاضِي لِلدُّعَاءِ، وَ (مِنْ) الزَّائِدَةِ.',
        english:
          'This lesson covers various rules such as the Waw of Circumstance, لَعَلَّ (perhaps), the verb-like noun إِلَيْكُمْ (take), using the past tense for supplication, and the extra مِنْ for emphasis.',
      },
      rules: [
        {
          name: 'وَاوُ الْحَالِ (Waw of Circumstance)',
          arabicText:
            'وَاوُ الْحَالِ: تَدْخُلُ عَلَى جُمْلَةِ الْحَالِ الَّتِي تَكُونُ فِي مَحَلِّ نَصْبٍ. ',
          explanation: 'Introduces a circumstantial clause, which is in the accusative state. ',
        },
        {
          name: 'لَعَلَّ (La’alla - Perhaps/Maybe)',
          arabicText: 'لَعَلَّ: مِنْ أَخَوَاتِ (إِنَّ)، تُفِيدُ التَّرَجِّيَ أَوِ الْإِشْفَاقَ. ',
          explanation:
            'A sister of إِنَّ that expresses hope (الترجي) or apprehension (الإِشْفَاقُ). ',
        },
        {
          name: 'إِلَيْكُمْ (Ilaykum - Take)',
          arabicText: 'إِلَيْكُمْ: اسْمُ فِعْلِ أَمْرٍ بِمَعْنَى (خُذُوا). ',
          explanation: 'An imperative verb-like noun meaning "Take" or "Here you are". ',
        },
        {
          name: 'الْفِعْلُ الْمَاضِي لِلدُّعَاءِ (Past Tense Verb for Supplication)',
          arabicText:
            'قَدْ يَأْتِي الْفِعْلُ الْمَاضِي بِمَعْنَى الْمُسْتَقْبَلِ لِلدُّعَاءِ، وَيُنْفَى بِـ (لَا). ',
          explanation:
            'A verb in the past tense form can have a future meaning for supplication (e.g., شَفَاهُ اللهُ - may Allah heal him), and it is negated with لَا. ',
        },
        {
          name: 'مِنْ الزَّائِدَةُ (The Extra "Min")',
          arabicText:
            'تُزَادُ (مِنْ) لِلتَّأْكِيدِ بَعْدَ نَفْيٍ أَوْ نَهْيٍ أَوْ (هَلْ) إِذَا كَانَ مَجْرُورُهَا نَكِرَةً. ',
          explanation:
            'Adds emphasis when it is preceded by negation, prohibition, or هل (hal), and its object is indefinite. ',
        },
        {
          name: 'الْجَمْعُ عَلَى صِيغَةِ مُنْتَهَى الْجُمُوعِ (Plural on the "Plural of Plurality" Pattern)',
          arabicText:
            'الْجُمُوعُ الَّتِي تَأْتِي عَلَى هَذِهِ الصِّيغَةِ تَكُونُ مَمْنُوعَةً مِنَ الصَّرْفِ. ',
          explanation: 'These patterns are diptotes (prevented from tanween and kasra). ',
        },
      ],
    },
    {
      id: 'lesson3',
      title: { ar: 'الدَّرْسُ الثَّالِثُ', en: 'Lesson 3' },
      introduction: {
        arabic:
          'يَتَنَاوَلُ هَذَا الدَّرْسُ نَائِبَ الْفَاعِلِ، وَالنَّسَبَ، وَاسْتِخْدَامَ (إِمَّا... وَإِمَّا)، وَالْأَعْدَادَ الْمُرَكَّبَةَ مِثْلَ ثَلَاثِمِائَةٍ، وَاسْمَ الْجِنْسِ الْجَمْعِيَّ.',
        english:
          'This lesson deals with the passive subject (Nā’ib al-Fā’il), attribution (Nisba), the use of "Either... or..." (إِمَّا... وَإِمَّا), compound numbers like three hundred, and collective generic nouns.',
      },
      rules: [
        {
          name: 'نَائِبُ الْفَاعِلِ (Passive Subject)',
          arabicText:
            'نَائِبُ الْفَاعِلِ: اسْمٌ مَرْفُوعٌ يَحُلُّ مَحَلَّ الْفَاعِلِ بَعْدَ حَذْفِهِ فِي الْجُمْلَةِ الْمَبْنِيَّةِ لِلْمَجْهُولِ. ',
          explanation: 'A nominative noun that replaces the subject in a passive sentence. ',
        },
        {
          name: 'النَّسَبُ (Attribution/Nisba Adjective)',
          arabicText:
            'يُصَاغُ اسْمُ النَّسَبِ بِإِضَافَةِ يَاءٍ مُشَدَّدَةٍ (ـِيٌّ) إِلَى آخِرِ الِاسْمِ. ',
          explanation: 'Formed by adding ـِيٌّ to a noun to create an adjective of attribution. ',
        },
        {
          name: 'إِمَّا ، وَإِمَّا (Immā... wa Immā... - Either... or...)',
          arabicText:
            'إِمَّا ، وَإِمَّا: حَرْفٌ يُسْتَخْدَمُ لِلتَّفْصِيلِ أَوِ الشَّكِّ أَوِ التَّخْيِيرِ أَوِ الْإِبَاحَةِ أَوِ الْإِبْهَامِ. ',
          explanation: 'A particle used for detailing, doubt, choice, permission, or vagueness. ',
        },
        {
          name: 'اسْمُ الْجِنْسِ الْجَمْعِيَّ (Collective Generic Noun)',
          arabicText:
            'اسْمٌ يَدُلُّ عَلَى جَمْعٍ، وَيُفَرَّقُ بَيْنَهُ وَبَيْنَ مُفْرَدِهِ بِإِضَافَةِ يَاءٍ أَوْ تَاءٍ. ',
          explanation:
            'A noun whose singular form differs from its collective form by adding a ياء or a تاء. ',
        },
      ],
    },
    {
      id: 'lesson4_5',
      title: { ar: 'الدَّرْسَانِ الرَّابِعُ وَالْخَامِسُ', en: 'Lessons 4 & 5' },
      introduction: {
        arabic:
          'يُغَطِّي هَذَانِ الدَّرْسَانِ اسْمَ الْفَاعِلِ، وَاسْمَ الْمَفْعُولِ، وَ (مَا) الْعَامِلَةَ عَمَلَ (لَيْسَ).',
        english:
          'These lessons cover the active participle (Ism al-Fā’il), the passive participle (Ism al-Maf’ūl), and the "Mā" that functions like "Laysa".',
      },
      rules: [
        {
          name: 'اسْمُ الْفَاعِلِ (Active Participle)',
          arabicText:
            'يُصَاغُ مِنَ الْفِعْلِ الثُّلَاثِيِّ عَلَى وَزْنِ (فَاعِل)، وَمِنْ غَيْرِ الثُّلَاثِيِّ عَلَى وَزْنِ مُضَارِعِهِ مَعَ إِبْدَالِ حَرْفِ الْمُضَارَعَةِ مِيمًا مَضْمُومَةً وَكَسْرِ مَا قَبْلَ الْآخِرِ. ',
          explanation:
            'Derived from an active verb. It follows the pattern فَاعِل for triliteral verbs, and for others, it starts with مُـ and has a kasra on the penultimate letter. ',
        },
        {
          name: 'اسْمُ الْمَفْعُولِ (Passive Participle)',
          arabicText:
            'يُصَاغُ مِنَ الْفِعْلِ الثُّلَاثِيِّ عَلَى وَزْنِ (مَفْعُول)، وَمِنْ غَيْرِ الثُّلَاثِيِّ عَلَى وَزْنِ مُضَارِعِهِ مَعَ إِبْدَالِ حَرْفِ الْمُضَارَعَةِ مِيمًا مَضْمُومَةً وَفَتْحِ مَا قَبْلَ الْآخِرِ. ',
          explanation:
            'Derived from a passive verb. It follows the pattern مَفْعُول for triliteral verbs, and for others, it starts with مُـ and has a fatha on the penultimate letter. ',
        },
        {
          name: 'مَا الْعَامِلَةُ عَمَلَ لَيْسَ (The "Mā" that Functions like "Laysa")',
          arabicText:
            'مَا: حَرْفُ نَفْيٍ يَعْمَلُ عَمَلَ (لَيْسَ)، فَيَرْفَعُ الِاسْمَ وَيَنْصِبُ الْخَبَرَ. ',
          explanation:
            'A negation particle that makes its subject nominative and its predicate accusative, just like لَيْسَ. ',
        },
      ],
    },
    {
      id: 'lesson6',
      title: { ar: 'الدَّرْسُ السَّادِسُ', en: 'Lesson 6' },
      introduction: {
        arabic:
          'يَشْرَحُ هَذَا الدَّرْسُ صِيَاغَةَ اسْمَيْ الزَّمَانِ وَالْمَكَانِ مِنَ الْأَفْعَالِ الثُّلَاثِيَّةِ وَغَيْرِ الثُّلَاثِيَّةِ.',
        english:
          'This lesson explains the formation of nouns of time and place from triliteral and non-triliteral verbs.',
      },
      rules: [
        {
          name: 'اسْمَا الزَّمَانِ وَالْمَكَانِ (Nouns of Time and Place)',
          arabicText:
            'مِنَ الثُّلَاثِيِّ عَلَى وَزْنِ (مَفْعَل) أَوْ (مَفْعِل)، وَمِنْ غَيْرِ الثُّلَاثِيِّ عَلَى صِيغَةِ اسْمِ الْمَفْعُولِ. ',
          explanation:
            'From triliteral verbs, they follow the patterns مَفْعَل or مَفْعِل. From non-triliteral verbs, they are formed like the passive participle (مُـ with a fatha before the end). ',
        },
      ],
    },
    {
      id: 'lesson7',
      title: { ar: 'الدَّرْسُ السَّابِعُ', en: 'Lesson 7' },
      introduction: {
        arabic:
          'يُقَدِّمُ هَذَا الدَّرْسُ اسْمَ الْآلَةِ وَأَوْزَانَهُ الْقِيَاسِيَّةَ وَالْحَدِيثَةَ.',
        english:
          'This lesson introduces the noun of instrument and its standard and modern patterns.',
      },
      rules: [
        {
          name: 'اسْمُ الْآلَةِ (Noun of Instrument)',
          arabicText:
            'أَوْزَانُهُ الْقِيَاسِيَّةُ: مِفْعَالٌ، مِفْعَلٌ، مِفْعَلَةٌ. وَأَوْزَانُهُ الْحَدِيثَةُ: فَاعِلَةٌ، فَاعُولٌ، فَعَّالَةٌ. ',
          explanation:
            'Standard patterns are مِفْعَالٌ, مِفْعَلٌ, مِفْعَلَةٌ. Modern patterns include فَاعِلَة, فَاعُول, and فَعَّالَة. Some are underived (جامدة). ',
        },
      ],
    },
    {
      id: 'lesson8',
      title: { ar: 'الدَّرْسُ الثَّامِنُ', en: 'Lesson 8' },
      introduction: {
        arabic:
          'يُفَصِّلُ هَذَا الدَّرْسُ أَقْسَامَ الِاسْمِ مِنْ حَيْثُ التَّعْرِيفُ وَالتَّنْكِيرُ، وَيَعُدِّدُ أَنْوَاعَ الْمَعَارِفِ.',
        english:
          'This lesson details the categories of nouns with respect to definiteness and indefiniteness, listing the types of definite nouns.',
      },
      rules: [
        {
          name: 'أَنْوَاعُ الْمَعَارِفِ (Categories of Definite Nouns)',
          arabicText:
            'تَشْمَلُ الْمَعَارِفُ: الضَّمِيرَ، وَالْعَلَمَ، وَاسْمَ الْإِشَارَةِ، وَالِاسْمَ الْمَوْصُولَ، وَالْمُعَرَّفَ بِـ(أَلْ)، وَالْمُضَافَ إِلَى مَعْرِفَةٍ، وَالنَّكِرَةَ الْمَقْصُودَةَ بِالنِّدَاءِ. ',
          explanation:
            "The categories of definite nouns are: Pronoun, Proper Noun, Demonstrative Noun, Relative Noun, Noun defined by 'Al-', Noun annexed to a definite noun, and the Intended indefinite noun in a vocative construction. ",
        },
      ],
    },
    {
      id: 'lesson9',
      title: { ar: 'الدَّرْسُ التَّاسِعُ', en: 'Lesson 9' },
      introduction: {
        arabic:
          'يَتَنَاوَلُ هَذَا الدَّرْسُ أَحْكَامَ الْمُثَنَّى وَجَمْعِ الْمُذَكَّرِ السَّالِمِ مِنْ حَيْثُ الْإِعْرَابُ وَحَذْفُ النُّونِ عِنْدَ الْإِضَافَةِ.',
        english:
          'This lesson covers the rules of the dual and the sound masculine plural regarding declension and the dropping of the Nūn upon annexation.',
      },
      rules: [
        {
          name: 'الْمُثَنَّى (The Dual)',
          arabicText:
            'يُرْفَعُ بِالْأَلِفِ (ـَانِ)، وَيُنْصَبُ وَيُجَرُّ بِالْيَاءِ (ـَيْنِ). وَتُحْذَفُ نُونُهُ عِنْدَ الْإِضَافَةِ. ',
          explanation:
            'Nominative with Alif (ـَانِ), Accusative/Genitive with Ya (ـَيْنِ). The نون is dropped upon annexation. ',
        },
        {
          name: 'جَمْعُ الْمُذَكَّرِ السَّالِمِ (Sound Masculine Plural)',
          arabicText:
            'يُرْفَعُ بِالْوَاوِ (ـُونَ)، وَيُنْصَبُ وَيُجَرُّ بِالْيَاءِ (ـِينَ). وَتُحْذَفُ نُونُهُ عِنْدَ الْإِضَافَةِ. ',
          explanation:
            'Nominative with Waw (ـُونَ), Accusative/Genitive with Ya (ـِينَ). The نون is dropped upon annexation. ',
        },
      ],
    },
    {
      id: 'lesson10',
      title: { ar: 'الدَّرْسُ الْعَاشِرُ', en: 'Lesson 10' },
      introduction: {
        arabic:
          'يُمَيِّزُ هَذَا الدَّرْسُ بَيْنَ الْجُمْلَةِ الِاسْمِيَّةِ وَالْفِعْلِيَّةِ، وَيُعَرِّفُ بِأَفْعَالِ الشُّرُوعِ وَالْمُقَارَبَةِ وَالرَّجَاءِ.',
        english:
          'This lesson distinguishes between the nominal and verbal sentences, and introduces verbs of commencement, proximity, and hope.',
      },
      rules: [
        {
          name: 'الْجُمْلَةُ الِاسْمِيَّةُ (Nominal Sentence)',
          arabicText:
            'هِيَ الَّتِي تَبْدَأُ بِاسْمٍ، أَوْ بِمَصْدَرٍ مُؤَوَّلٍ، أَوْ بِـ(إِنَّ) وَأَخَوَاتِهَا. ',
          explanation: 'Starts with a noun, an interpreted verbal noun, or إِنَّ and its sisters. ',
        },
        {
          name: 'الْجُمْلَةُ الْفِعْلِيَّةُ (Verbal Sentence)',
          arabicText:
            'هِيَ الَّتِي تَبْدَأُ بِفِعْلٍ تَامٍّ أَوْ نَاقِصٍ (كَانَ وَكَادَ وَأَخَوَاتُهُمَا). ',
          explanation:
            'Starts with a complete or defective verb (كَانَ, كَادَ and their sisters). ',
        },
        {
          name: 'أَفْعَالُ الشُّرُوعِ (Verbs of Commencement)',
          arabicText:
            'تَعْمَلُ عَمَلَ (كَانَ)، وَلَكِنَّ خَبَرَهَا يَكُونُ جُمْلَةً فِعْلِيَّةً فِعْلُهَا مُضَارِعٌ غَيْرُ مُقْتَرِنٍ بِـ(أَنْ). ',
          explanation:
            'Function like كَانَ, but their predicate must be a present tense verb without أَنْ. ',
        },
      ],
    },
    {
      id: 'lesson11',
      title: { ar: 'الدَّرْسُ الْحَادِيَ عَشَرَ', en: 'Lesson 11' },
      introduction: {
        arabic:
          'يُفَصِّلُ هَذَا الدَّرْسُ أَحْكَامَ الْمُبْتَدَأِ وَالْخَبَرِ، مِنْ حَيْثُ التَّقْدِيمُ وَالتَّأْخِيرُ وَالْحَذْفُ وَأَنْوَاعُ الْخَبَرِ.',
        english:
          'This lesson details the rules of the subject (Mubtada’) and predicate (Khabar), regarding their order, omission, and the different types of predicates.',
      },
      rules: [
        {
          name: 'الْمُبْتَدَأُ (Subject)',
          arabicText:
            'الْأَصْلُ فِي الْمُبْتَدَأِ أَنْ يَكُونَ مَعْرِفَةً، وَقَدْ يَأْتِي نَكِرَةً بِشُرُوطٍ. ',
          explanation:
            'The subject is usually definite, but it can be indefinite if the predicate (if a quasi-sentence) precedes it, or if the subject is part of an interrogative phrase. ',
        },
        {
          name: 'الْخَبَرُ (Predicate)',
          arabicText:
            'يَأْتِي الْخَبَرُ مُفْرَدًا، أَوْ جُمْلَةً (اسْمِيَّةً أَوْ فِعْلِيَّةً)، أَوْ شِبْهَ جُمْلَةٍ (جَارٌ وَمَجْرُورٌ أَوْ ظَرْفٌ). ',
          explanation:
            'The predicate can be a single word (مُفْرَدٌ), a nominal sentence, a verbal sentence, or a quasi-sentence (شبه جملة - prepositional phrase or adverb). ',
        },
        {
          name: 'التَّطَابُقُ بَيْنَ الْمُبْتَدَأِ وَالْخَبَرِ (Agreement between Subject and Predicate)',
          arabicText: 'يُطَابِقُ الْخَبَرُ الْمُبْتَدَأَ فِي الْجِنْسِ وَالْعَدَدِ. ',
          explanation: 'The predicate must agree with the subject in number and gender. ',
        },
      ],
    },
    {
      id: 'lesson12',
      title: { ar: 'الدَّرْسُ الثَّانِيَ عَشَرَ', en: 'Lesson 12' },
      introduction: {
        arabic:
          'يَتَنَاوَلُ هَذَا الدَّرْسُ الْمَفْعُولَ فِيهِ (ظَرْفَ الزَّمَانِ وَالْمَكَانِ)، وَحُكْمَ (قَبْلُ وَبَعْدُ)، وَ(لَوْ) الشَّرْطِيَّةَ.',
        english:
          'This lesson deals with the adverb of time or place (Maf’ūl Fīhi), the rule of قَبْلُ and بَعْدُ, and the hypothetical conditional particle لَوْ.',
      },
      rules: [
        {
          name: 'الْمَفْعُولُ فِيهِ (Adverb of Time or Place)',
          arabicText: 'اسْمٌ مَنْصُوبٌ يَتَضَمَّنُ مَعْنَى (فِي). ',
          explanation: 'An accusative noun that implies the meaning of "in" (فِي). ',
        },
        {
          name: 'قَبْلُ وَبَعْدُ (Before and After)',
          arabicText:
            'تُبْنَيَانِ عَلَى الضَّمِّ إِذَا حُذِفَ الْمُضَافُ إِلَيْهِ وَنُوِيَ مَعْنَاهُ. ',
          explanation:
            'They are declinable, but become indeclinable on a Damma if the annexed noun (مضاف إليه) is omitted but its meaning is still intended. ',
        },
        {
          name: 'لَوْ (Law - If)',
          arabicText:
            'حَرْفُ امْتِنَاعٍ لِامْتِنَاعٍ، تَدْخُلُ عَلَى فِعْلِ الشَّرْطِ الْمَاضِي، وَيَقْتَرِنُ جَوَابُهَا بِاللَّامِ غَالِبًا. ',
          explanation:
            'A particle of "prevention for prevention," used for hypothetical past conditions. Its answer often takes a لَـ. ',
        },
      ],
    },
    {
      id: 'lesson13',
      title: { ar: 'الدَّرْسُ الثَّالِثَ عَشَرَ', en: 'Lesson 13' },
      introduction: {
        arabic:
          'يُعَدِّدُ هَذَا الدَّرْسُ أَدَوَاتِ جَزْمِ الْفِعْلِ الْمُضَارِعِ، وَيَشْرَحُ الْجَزْمَ بِالطَّلَبِ، وَأُسْلُوبَ النُّدْبَةِ.',
        english:
          'This lesson lists the particles that make the present tense jussive, explains the jussive as a result of a request, and covers the style of lamentation (الندبة).',
      },
      rules: [
        {
          name: 'جَوَازِمُ الْمُضَارِعِ (Particles Making Present Tense Jussive)',
          arabicText:
            'مِنْهَا مَا يَجْزِمُ فِعْلًا وَاحِدًا (لَمْ، لَمَّا، لَا النَّاهِيَةُ، لَامُ الْأَمْرِ). ',
          explanation:
            'Particles that make one verb jussive are: لَمْ, لَمَّا, لا النَّاهِيَة, and لام الأمر. ',
        },
        {
          name: 'الْجَزْمُ بِالطَّلَبِ (Jussive as a Result of a Request)',
          arabicText:
            'يُجْزَمُ الْفِعْلُ الْمُضَارِعُ إِذَا وَقَعَ جَوَابًا لِلطَّلَبِ (أَمْرٍ أَوْ نَهْيٍ). ',
          explanation:
            'A present tense verb becomes jussive when it serves as the answer to a request (command or prohibition). ',
        },
        {
          name: 'النُّدْبَةُ (Lamentation)',
          arabicText:
            'أُسْلُوبُ نِدَاءٍ يُسْتَخْدَمُ لِلتَّفَجُّعِ عَلَى مَيِّتٍ، وَأَدَاتُهُ (وَا). ',
          explanation: 'A vocative style used for mourning, using the particle وَا. ',
        },
      ],
    },
    {
      id: 'lesson14',
      title: { ar: 'الدَّرْسُ الرَّابِعَ عَشَرَ', en: 'Lesson 14' },
      introduction: {
        arabic:
          'يَتَنَاوَلُ هَذَا الدَّرْسُ (إِذَا) الشَّرْطِيَّةَ وَالْحَالَاتِ الَّتِي يَجِبُ فِيهَا اقْتِرَانُ جَوَابِ الشَّرْطِ بِالْفَاءِ.',
        english:
          'This lesson deals with conditional "Idhā" and the cases where the answer to the condition must be paired with "Fa".',
      },
      rules: [
        {
          name: 'إِذَا الشَّرْطِيَّةُ (Conditional "Idhā")',
          arabicText: 'ظَرْفٌ لِمَا يُسْتَقْبَلُ مِنَ الزَّمَانِ، شَرْطِيَّةٌ غَيْرُ جَازِمَةٍ. ',
          explanation:
            'An adverb for future time that functions as a non-jussive conditional particle. ',
        },
        {
          name: 'وُجُوبُ اقْتِرَانِ جَوَابِ الشَّرْطِ بِالْفَاءِ (Obligatory Pairing of Conditional Answer with Fa)',
          arabicText:
            'يَجِبُ اقْتِرَانُ الْجَوَابِ بِالْفَاءِ إِذَا كَانَ جُمْلَةً اسْمِيَّةً، أَوْ طَلَبِيَّةً، أَوْ فِعْلُهُ جَامِدٌ، أَوْ سُبِقَ بِـ(قَدْ) أَوْ (مَا) النَّافِيَةِ أَوْ (لَنْ) أَوْ (السِّينِ/سَوْفَ) أَوْ (كَأَنَّمَا). ',
          explanation:
            'The answer must be paired with فَـ if the answer is a nominal sentence, a request, a rigid verb, or is preceded by قَدْ, مَا النَّافِيَةِ, لَنْ, سـَ / سَوْفَ, or كَأَنَّمَا. ',
        },
      ],
    },
    {
      id: 'lesson15',
      title: { ar: 'الدَّرْسُ الْخَامِسَ عَشَرَ', en: 'Lesson 15' },
      introduction: {
        arabic:
          'يُعَدِّدُ هَذَا الدَّرْسُ الْأَدَوَاتِ الَّتِي تَجْزِمُ فِعْلَيْنِ، وَيُوَضِّحُ الْفَرْقَ بَيْنَ (كَمْ) الِاسْتِفْهَامِيَّةِ وَالْخَبَرِيَّةِ، وَأَحْكَامَ (حَتَّى).',
        english:
          'This lesson lists the conditional tools that make two verbs jussive, clarifies the difference between interrogative and exclamatory "Kam", and explains the rules of "Hattā".',
      },
      rules: [
        {
          name: 'أَدَوَاتُ الشَّرْطِ الْجَازِمَةُ (Jussive Conditional Tools)',
          arabicText:
            'مِنْهَا الْحُرُوفُ (إِنْ، إِذْمَا)، وَالْأَسْمَاءُ (مَنْ، مَا، مَهْمَا، مَتَى، أَيْنَ، أَيْنَمَا، حَيْثُمَا، أَيّ). ',
          explanation:
            'Includes particles (إِنْ, إِذْمَا) and nouns (مَنْ, مَا, مَهْمَا, مَتَى, أَيْنَ / أَيْنَمَا, حَيْثُمَا, أَيّ). All are indeclinable except أَيّ. ',
        },
        {
          name: 'كم الاسْتِفْهَامِيَّةُ وَكَمِ الْخَبَرِيَّةُ (Interrogative vs. Exclamatory "Kam")',
          arabicText: 'تَخْتَلِفَانِ فِي الْمَعْنَى وَفِي إِعْرَابِ تَمْيِيزِهِمَا. ',
          explanation:
            'They differ in meaning and in the rules governing their subsequent noun of specification (Tamyīz). ',
        },
        {
          name: 'حَتَّى (Hattā - Until / So that)',
          arabicText:
            'تَكُونُ حَرْفَ جَرٍّ بِمَعْنَى (إِلَى) أَوْ لِلتَّعْلِيلِ، وَيُنْصَبُ الْفِعْلُ الْمُضَارِعُ بَعْدَهَا بِـ(أَنْ) مُضْمَرَةٍ. ',
          explanation:
            'A preposition meaning "until" or for reasoning ("so that"). The verb after it is made accusative by an implied أَنْ. ',
        },
      ],
    },
    {
      id: 'lesson16_17',
      title: { ar: 'الدَّرْسَانِ السَّادِسَ عَشَرَ وَالسَّابِعَ عَشَرَ', en: 'Lessons 16 & 17' },
      introduction: {
        arabic:
          'يُقَارِنُ هَذَانِ الدَّرْسَانِ بَيْنَ الْأَفْعَالِ الْمُجَرَّدَةِ وَالْمَزِيدَةِ، وَيَسْتَعْرِضَانِ أَوْزَانَ الثُّلَاثِيِّ الْمُجَرَّدِ وَأَوْزَانَ الثُّلَاثِيِّ الْمَزِيدِ بِحَرْفٍ وَاحِدٍ (أَفْعَلَ، فَعَّلَ).',
        english:
          'These lessons compare primitive (Mujarrad) and derived (Mazīd) verbs, and present the patterns of the triliteral primitive verb and the patterns of triliteral verbs with one added letter (أَفْعَلَ, فَعَّلَ).',
      },
      rules: [
        {
          name: 'الْأَفْعَالُ الْمُجَرَّدَةُ (Primitive Verbs)',
          arabicText:
            'هِيَ مَا كَانَتْ جَمِيعُ حُرُوفِهَا أَصْلِيَّةً، وَتَكُونُ ثُلَاثِيَّةً أَوْ رُبَاعِيَّةً. ',
          explanation:
            'Verbs whose letters are all original radicals. Can be triliteral (e.g., خَرَجَ) or quadriliteral (e.g., زَلْزَلَ). ',
        },
        {
          name: 'أَوْزَانُ الثُّلَاثِيِّ الْمُجَرَّدِ (Patterns of Triliteral Primitive Verbs)',
          arabicText:
            'لِلْفِعْلِ الثُّلَاثِيِّ الْمُجَرَّدِ سِتَّةُ أَبْوَابٍ رَئِيسِيَّةٍ تُعْرَفُ بِحَرَكَةِ عَيْنِ الْفِعْلِ فِي الْمَاضِي وَالْمُضَارِعِ. ',
          explanation:
            'There are six main past-present patterns based on the vowel of the middle radical (e.g., فَعَلَ - يَفْعُلُ). ',
        },
        {
          name: 'الْفِعْلُ الْمَزِيدُ بِحَرْفٍ: فَعَّلَ (Derived Verb with One Letter: Fa’’ala)',
          arabicText: 'مَصْدَرُهُ عَلَى وَزْنِ (تَفْعِيل) أَوْ (تَفْعِلَة). ',
          explanation:
            'The pattern فَعَّلَ (e.g., سَلَّمَ) has a masdar (verbal noun) on the pattern تَفْعِيلٌ or تَفْعِلَة. ',
        },
        {
          name: 'الْفِعْلُ الْمَزِيدُ بِحَرْفٍ: أَفْعَلَ (Derived Verb with One Letter: Af’ala)',
          arabicText: 'مَصْدَرُهُ عَلَى وَزْنِ (إِفْعَال). ',
          explanation:
            'The pattern أَفْعَلَ (e.g., أَسْلَمَ) has a masdar on the pattern إِفْعَالٌ. ',
        },
        {
          name: 'لَامُ الِابْتِدَاءِ (Lam of Incipience/Emphasis)',
          arabicText: 'لَامٌ مَفْتُوحَةٌ تَدْخُلُ عَلَى الْمُبْتَدَأِ لِتَأْكِيدِهِ. ',
          explanation:
            'A particle for emphasis used at the beginning of a statement (e.g., لَمُحَمَّدٌ مُجْتَهِدٌ). ',
        },
      ],
    },
    {
      id: 'lesson18',
      title: { ar: 'الدَّرْسُ الثَّامِنَ عَشَرَ', en: 'Lesson 18' },
      introduction: {
        arabic:
          'يُفَرِّقُ هَذَا الدَّرْسُ بَيْنَ الْفِعْلِ اللَّازِمِ وَالْمُتَعَدِّي، وَيَشْرَحُ طُرُقَ تَعْدِيَةِ الْفِعْلِ اللَّازِمِ، وَمَعَانِيَ وَزْنِ (فَعَّلَ)، وَأُسْلُوبَ التَّحْذِيرِ، وَ(إِنَّمَا).',
        english:
          'This lesson differentiates between intransitive and transitive verbs, explains methods of making intransitive verbs transitive, the meanings of the فَعَّلَ pattern, the style of warning, and the particle إِنَّمَا.',
      },
      rules: [
        {
          name: 'الْفِعْلُ الْمُتَعَدِّي (Transitive Verb)',
          arabicText: 'هُوَ الَّذِي يَتَعَدَّى أَثَرُهُ الْفَاعِلَ لِيَنْصِبَ مَفْعُولًا بِهِ. ',
          explanation: 'A verb whose effect passes to an object. It can accept the suffix ـهُ. ',
        },
        {
          name: 'الْفِعْلُ اللَّازِمُ (Intransitive Verb)',
          arabicText:
            'هُوَ الَّذِي لَا يَنْصِبُ مَفْعُولًا بِهِ، بَلْ يَقْتَصِرُ أَثَرُهُ عَلَى فَاعِلِهِ. ',
          explanation: 'A verb whose effect does not pass to an object. ',
        },
        {
          name: 'طُرُقُ تَعْدِيَةِ الْفِعْلِ اللَّازِمِ (Methods of Making Intransitive Verbs Transitive)',
          arabicText:
            'مِنْ طُرُقِ التَّعْدِيَةِ: النَّقْلُ إِلَى وَزْنِ (أَفْعَلَ) أَوِ (فَعَّلَ)، أَوْ اسْتِخْدَامُ حَرْفِ جَرٍّ. ',
          explanation:
            'Methods include: Transferring to the أَفْعَلَ pattern, transferring to the فَعَّلَ pattern, or using a preposition. ',
        },
        {
          name: 'إِنَّمَا (Innamā - Only/Indeed)',
          arabicText: 'تَتَكَوَّنُ مِنْ (إِنَّ) وَ(مَا) الْكَافَّةِ، وَتُفِيدُ الْحَصْرَ. ',
          explanation:
            'Composed of إِنَّ + مَا (which prevents إِنَّ from working). It annuls the work of إِنَّ and conveys restriction/specification. ',
        },
        {
          name: 'أُسْلُوبُ التَّحْذِيرِ (Style of Warning)',
          arabicText:
            'أُسْلُوبٌ يُسْتَخْدَمُ لِتَنْبِيهِ الْمُخَاطَبِ لِيَحْذَرَ أَمْرًا مَكْرُوهًا (مِثْلُ: إِيَّاكَ وَالْكَذِبَ). ',
          explanation:
            'A style used to warn someone against a disliked matter (e.g., إِيَّاكَ وَالْكَذِبَ). ',
        },
      ],
    },
    {
      id: 'lesson19',
      title: { ar: 'الدَّرْسُ التَّاسِعَ عَشَرَ', en: 'Lesson 19' },
      introduction: {
        arabic:
          'يَتَنَاوَلُ هَذَا الدَّرْسُ وَزْنَ (فَاعَلَ) وَمَعَانِيهِ، وَمَعَانِيَ (قَدْ)، وَأَحْكَامَ (لَكِنْ) الْمُخَفَّفَةِ، وَ(ذَوُو - أُولُو)، وَاللَّامَ الْمُزَحْلَقَةَ.',
        english:
          'This lesson covers the فَاعَلَ pattern and its meanings, the meanings of قَدْ, the rules of lightened لَكِنَّ, the words ذَوُو/أُولُو, and the "slipped" Lam.',
      },
      rules: [
        {
          name: 'وَزْنُ فَاعَلَ (The Fā’ala Pattern)',
          arabicText: 'مَصْدَرُهُ عَلَى وَزْنِ (مُفَاعَلَة) أَوْ (فِعَال). ',
          explanation:
            'Its masdar is مُفَاعَلَةٌ (e.g., مُقَاتَلَةٌ) or فِعَالٌ (e.g., قِتَالٌ). One of its primary meanings is participation (الْمُشَارَكَةُ). ',
        },
        {
          name: 'مَعَانِي قَدْ (Meanings of "Qad")',
          arabicText:
            'مَعَ الْفِعْلِ الْمَاضِي تُفِيدُ التَّوْكِيدَ، وَمَعَ الْمُضَارِعِ تُفِيدُ الِاحْتِمَالَ أَوِ التَّقْلِيلَ أَوِ التَّحْقِيقَ. ',
          explanation:
            'With a past verb, it signifies emphasis/certainty. With a present verb, it can mean possibility/doubt, scarcity, or certainty. ',
        },
        {
          name: 'اللَّامُ الْمُزَحْلَقَةُ (The "Slipped" Lam)',
          arabicText:
            'هِيَ لَامُ الِابْتِدَاءِ الَّتِي تُزَحْلَقُ إِلَى الْخَبَرِ أَوْ إِلَى اسْمِ (إِنَّ) الْمُؤَخَّرِ بَعْدَ دُخُولِ (إِنَّ) لِلتَّأْكِيدِ. ',
          explanation:
            'It is the Lam of Incipience that moves to the predicate (or a delayed subject) after إِنَّ for added emphasis. ',
        },
      ],
    },
    {
      id: 'lesson20',
      title: { ar: 'الدَّرْسُ الْعِشْرُونَ', en: 'Lesson 20' },
      introduction: {
        arabic:
          'يَشْرَحُ هَذَا الدَّرْسُ وَزْنَ (تَفَعَّلَ) وَمَعْنَاهُ الْأَسَاسِيَّ (الْمُطَاوَعَةَ)، وَأَحْكَامَ (لَمَّا) الْحِينِيَّةِ، وَالِاسْمَ الْمَنْصُوبَ عَلَى الِاخْتِصَاصِ.',
        english:
          'This lesson explains the تَفَعَّلَ pattern and its primary meaning (conformity/result), the rules of temporal "Lammā", and the noun of specification.',
      },
      rules: [
        {
          name: 'وَزْنُ تَفَعَّلَ (The Tafa’’ala Pattern)',
          arabicText: 'مَصْدَرُهُ عَلَى وَزْنِ (تَفَعُّل). وَمِنْ مَعَانِيهِ الْمُطَاوَعَةُ. ',
          explanation:
            'Its masdar has the pattern تَفَعُّلٌ. One of its main meanings is conformity/result (الْمُطَاوَعَةُ), which can make a transitive verb intransitive. ',
        },
        {
          name: 'لَمَّا الْحِينِيَّةُ (Temporal "Lammā")',
          arabicText:
            'ظَرْفُ زَمَانٍ بِمَعْنَى (حِينَ)، شَرْطِيَّةٌ غَيْرُ جَازِمَةٍ، وَيَكُونُ فِعْلُ شَرْطِهَا وَجَوَابُهَا مَاضِيَيْنِ. ',
          explanation:
            'An adverb of past time meaning "when". It is non-jussive and its condition and answer are in the past tense. ',
        },
        {
          name: 'الِاسْمُ الْمَنْصُوبُ عَلَى الِاخْتِصَاصِ (Noun of Specification)',
          arabicText:
            'اسْمٌ ظَاهِرٌ مَنْصُوبٌ يُذْكَرُ بَعْدَ ضَمِيرٍ لِتَوْضِيحِهِ، وَيُعْرَبُ مَفْعُولًا بِهِ لِفِعْلٍ مَحْذُوفٍ تَقْدِيرُهُ (أَخُصُّ). ',
          explanation:
            'An accusative noun that clarifies a preceding pronoun, serving as the object of an omitted verb like أَخُصُّ (I specify). ',
        },
      ],
    },
    {
      id: 'lesson21',
      title: { ar: 'الدَّرْسُ الْحَادِي وَالْعِشْرُونَ', en: 'Lesson 21' },
      introduction: {
        arabic:
          'يُقَدِّمُ هَذَا الدَّرْسُ وَزْنَ (تَفَاعَلَ)، وَلَا النَّافِيَةَ لِلْجِنْسِ وَأَحْكَامَهَا، وَأَنْوَاعَ الْبَدَلِ، وَمَعَانِيَ الْأَحْرُفِ الْمُشَبَّهَةِ بِالْفِعْلِ.',
        english:
          'This lesson presents the تَفَاعَلَ pattern, "La" of absolute negation and its rules, the types of apposition (Badal), and the meanings of the particles resembling verbs (Inna and its sisters).',
      },
      rules: [
        {
          name: 'وَزْنُ تَفَاعَلَ (The Tafā’ala Pattern)',
          arabicText:
            'مَصْدَرُهُ عَلَى وَزْنِ (تَفَاعُل). وَمِنْ مَعَانِيهِ الْمُشَارَكَةُ وَإِظْهَارُ مَا لَيْسَ فِي الْبَاطِنِ. ',
          explanation:
            'Its masdar has the pattern تَفَاعُلٌ. Its meanings include participation and pretension (e.g., تَبَاكَى - he pretended to cry). ',
        },
        {
          name: 'لَا النَّافِيَةُ لِلْجِنْسِ (La of Absolute Negation)',
          arabicText:
            'تَعْمَلُ عَمَلَ (إِنَّ)، فَتَنْصِبُ اسْمَهَا وَتَرْفَعُ خَبَرَهَا، بِشُرُوطٍ. ',
          explanation:
            'It negates the predicate for the entire genus of its noun and functions like إِنَّ (noun accusative, predicate nominative) under specific conditions. ',
        },
        {
          name: 'اسْمُ لَا النَّافِيَةِ لِلْجِنْسِ (The Noun of "La" of Absolute Negation)',
          arabicText:
            'يَكُونُ اسْمُهَا مُضَافًا أَوْ شَبِيهًا بِالْمُضَافِ (فَيَكُونُ مَنْصُوبًا)، أَوْ مُفْرَدًا (فَيَكُونُ مَبْنِيًّا عَلَى مَا يُنْصَبُ بِهِ). ',
          explanation:
            'Its noun can be annexed (مضاف) or similar-to-annexed (شبيه بالمضاف), both of which are accusative. If it is a singular noun (not annexed), it is built upon what it would be accusative with. ',
        },
        {
          name: 'الْبَدَلُ (Apposition)',
          arabicText:
            'مِنَ التَّوَابِعِ، وَلَهُ أَرْبَعَةُ أَنْوَاعٍ: بَدَلُ الْكُلِّ مِنَ الْكُلِّ، وَبَدَلُ الْبَعْضِ مِنَ الْكُلِّ، وَبَدَلُ الِاشْتِمَالِ، وَبَدَلُ الْغَلَطِ. ',
          explanation:
            'A follower with four types: Total (كُلِّ مِنْ كُلِّ), Partial (بَعْضٍ مِنْ كُلِّ), Inclusive (اشْتِمَالٍ), and Error/Forgetfulness (الْمُبَايِنِ). ',
        },
        {
          name: 'الْأَحْرُفُ الْمُشَبَّهَةُ بِالْفِعْلِ (Particles Resembling Verbs)',
          arabicText: 'إِنَّ، أَنَّ، كَأَنَّ، لَكِنَّ، لَيْتَ، لَعَلَّ. ',
          explanation:
            'إِنَّ/أَنَّ (emphasis), كَأَنَّ (similarity), لَكِنَّ (reservation), لَيْتَ (wish), لَعَلَّ (hope/fear). ',
        },
      ],
    },
    {
      id: 'lesson22',
      title: { ar: 'الدَّرْسُ الثَّانِي وَالْعِشْرُونَ', en: 'Lesson 22' },
      introduction: {
        arabic:
          'يَشْرَحُ هَذَا الدَّرْسُ وَزْنَ (انْفَعَلَ)، وَاسْتِخْدَامَ (لَوْلَا)، وَقَاعِدَةَ التَّغْلِيبِ، وَإِضَافَةَ الظَّرْفِ إِلَى الْجُمْلَةِ.',
        english:
          'This lesson explains the انْفَعَلَ pattern, the use of لَوْلَا (were it not for), the rule of preponderance (التغليب), and the annexation of an adverb to a sentence.',
      },
      rules: [
        {
          name: 'وَزْنُ انْفَعَلَ (The Infa’ala Pattern)',
          arabicText:
            'مَصْدَرُهُ عَلَى وَزْنِ (انْفِعَال). وَمِنْ مَعَانِيهِ الْمُطَاوَعَةُ، وَهُوَ لَازِمٌ دَائِمًا. ',
          explanation:
            'Its masdar is انْفِعَالٌ. Its meaning is conformity/result (الْمُطَاوَعَةُ), and this pattern is always intransitive. ',
        },
        {
          name: 'لَوْلَا (Lawlā - Were it not for)',
          arabicText:
            'حَرْفُ امْتِنَاعٍ لِوُجُودٍ، وَالِاسْمُ بَعْدَهُ مُبْتَدَأٌ خَبَرُهُ مَحْذُوفٌ وُجُوبًا تَقْدِيرُهُ (مَوْجُودٌ). ',
          explanation:
            'A particle of "prevention due to existence". The noun after it is a subject (مبتدأ) whose predicate (موجود) is obligatorily omitted. ',
        },
        {
          name: 'التَّغْلِيبُ (Preponderance)',
          arabicText:
            'إِعْطَاءُ حُكْمِ أَحَدِ اللَّفْظَيْنِ لِلْآخَرِ، كَتَغْلِيبِ الْمُذَكَّرِ عَلَى الْمُؤَنَّثِ (مِثْلُ: الْأَبَوَانِ لِلْأَبِ وَالْأُمِّ). ',
          explanation:
            'Giving grammatical preference to one of two terms, for example, preferring the masculine over the feminine (e.g., الأَبَوَانِ for father and mother). ',
        },
      ],
    },
    {
      id: 'lesson23',
      title: { ar: 'الدَّرْسُ الثَّالِثُ وَالْعِشْرُونَ', en: 'Lesson 23' },
      introduction: {
        arabic:
          'يَتَنَاوَلُ هَذَا الدَّرْسُ وَزْنَ (افْتَعَلَ) وَمَا فِيهِ مِنْ إِبْدَالٍ، وَ(إِذَا) الْفُجَائِيَّةَ، وَأَحْكَامَ فِعْلِ (ظَنَّ) وَأَخَوَاتِهِ، وَصِيَغَ الْمُبَالَغَةِ.',
        english:
          'This lesson covers the افْتَعَلَ pattern and its phonetic substitutions, the sudden "Idhā", the rules of the verb ظَنَّ and its sisters, and the patterns of exaggeration.',
      },
      rules: [
        {
          name: 'وَزْنُ افْتَعَلَ (The Ifta’ala Pattern)',
          arabicText:
            'مَصْدَرُهُ عَلَى وَزْنِ (افْتِعَال). وَمِنْ مَعَانِيهِ الْمُطَاوَعَةُ وَالْمُشَارَكَةُ. ',
          explanation:
            'Its masdar is افْتِعَالٌ. Its meanings include conformity/result and participation. ',
        },
        {
          name: 'الْإِبْدَالُ فِي وَزْنِ افْتَعَلَ (Phonetic Assimilation/Substitution in Ifta’ala)',
          arabicText:
            'تُبْدَلُ تَاءُ (افْتَعَلَ) حُرُوفًا أُخْرَى بِحَسَبِ فَاءِ الْفِعْلِ، كَقَلْبِهَا (دَالًا) بَعْدَ الدَّالِ وَالذَّالِ وَالزَّايِ، أَوْ (طَاءً) بَعْدَ الصَّادِ وَالضَّادِ وَالطَّاءِ وَالظَّاءِ. ',
          explanation:
            'The ـتَـ of this pattern changes based on the first radical of the verb. For example, it becomes د if the first radical is د, ذ, or ز, and it becomes ط if the first radical is ص, ض, ط, or ظ. ',
        },
        {
          name: 'إِذَا الْفُجَائِيَّةُ (Sudden "Idhā")',
          arabicText:
            'حَرْفٌ يَدُلُّ عَلَى وُقُوعِ شَيْءٍ غَيْرِ مُتَوَقَّعٍ، وَيَدْخُلُ عَلَى الْجُمْلَةِ الِاسْمِيَّةِ. ',
          explanation:
            'A particle indicating an unexpected occurrence. It does not start a sentence and enters a nominal sentence. ',
        },
        {
          name: 'ظَنَّ وَأَخَوَاتُهَا (Thanna and its Sisters)',
          arabicText: 'أَفْعَالٌ تَنْصِبُ مَفْعُولَيْنِ أَصْلُهُمَا مُبْتَدَأٌ وَخَبَرٌ. ',
          explanation:
            'Verbs of thinking/supposing that are transitive to two objects, which were originally a subject and predicate. ',
        },
        {
          name: 'صِيَغُ الْمُبَالَغَةِ (Patterns of Exaggeration)',
          arabicText:
            'أَوْزَانٌ تُشْتَقُّ مِنِ اسْمِ الْفَاعِلِ لِلدَّلَالَةِ عَلَى كَثْرَةِ الْحَدَثِ، أَشْهَرُهَا: فَعَّالٌ، فَعُولٌ، فَعِيلٌ، مِفْعَالٌ، فَعِلٌ. ',
          explanation:
            'Derived from the active participle to indicate intensity or frequency. Common patterns include: فَعَّالٌ, فَعِيْلٌ, فَعُولٌ, مِفْعَالٌ, and فَعِلٌ. ',
        },
      ],
    },
    {
      id: 'lesson24',
      title: { ar: 'الدَّرْسُ الرَّابِعُ وَالْعِشْرُونَ', en: 'Lesson 24' },
      introduction: {
        arabic:
          'يَتَنَاوَلُ هَذَا الدَّرْسُ وَزْنَيْ (افْعَلَّ) وَ(افْعَالَّ) لِلْمُبَالَغَةِ، وَالْفَرْقَ بَيْنَ (رَأَى) الْبَصَرِيَّةِ وَالْقَلْبِيَّةِ، وَ(مَا) الْمَصْدَرِيَّةَ، وَأَحْكَامَ (عَسَى).',
        english:
          'This lesson covers the افْعَلَّ and افْعَالَّ patterns for exaggeration, the difference between visual and mental "ra’ā", verbal noun "mā", and the rules of "’asā".',
      },
      rules: [
        {
          name: 'وَزْنُ افْعَلَّ (The If’alla Pattern)',
          arabicText:
            'مَصْدَرُهُ عَلَى وَزْنِ (افْعِلَال). يُفِيدُ الْمُبَالَغَةَ فِي الْأَلْوَانِ وَالْعُيُوبِ، وَهُوَ لَازِمٌ دَائِمًا. ',
          explanation:
            'Its masdar is افْعِلَالٌ. It indicates exaggeration, typically for colors and defects, and is always intransitive. ',
        },
        {
          name: 'وَزْنُ افْعَالَّ (The If’ālla Pattern)',
          arabicText:
            'مَصْدَرُهُ عَلَى وَزْنِ (افْعِيلَال). يُفِيدُ الْمُبَالَغَةَ فِي الْأَلْوَانِ فَقَطْ، وَهُوَ لَازِمٌ دَائِمًا. ',
          explanation:
            'Its masdar is افْعِيلَالٌ. It indicates exaggeration for colors only and is always intransitive. ',
        },
        {
          name: 'رَأَى (Ra’ā - To see)',
          arabicText:
            'إِذَا كَانَتْ بَصَرِيَّةً تَنْصِبُ مَفْعُولًا وَاحِدًا، وَإِذَا كَانَتْ قَلْبِيَّةً (بِمَعْنَى عَلِمَ) تَنْصِبُ مَفْعُولَيْنِ. ',
          explanation:
            'If it refers to visual sight (بَصَرِيَّةٌ), it takes one object. If it refers to mental sight/knowing (قَلْبِيَّةٌ), it means عَلِمَ and takes two objects. ',
        },
        {
          name: "عَسَى ('Asā - Perhaps/It may be)",
          arabicText:
            'مِنْ أَفْعَالِ الرَّجَاءِ، تَعْمَلُ عَمَلَ (كَانَ)، وَيَكُونُ خَبَرُهَا فِعْلًا مُضَارِعًا مُقْتَرِنًا بِـ(أَنْ) غَالِبًا. [cite: 141]',
          explanation:
            'A verb of hope that works like كَانَ. Its predicate is a present tense verb, often with أَنْ. It can be defective (requiring a noun and predicate) or complete (requiring a subject in the form of an interpreted verbal noun). [cite: 141, 142]',
        },
      ],
    },
    {
      id: 'lesson25',
      title: { ar: 'الدَّرْسُ الْخَامِسُ وَالْعِشْرُونَ', en: 'Lesson 25' },
      introduction: {
        arabic:
          'يُغَطِّي هَذَا الدَّرْسُ وَزْنَ (اسْتَفْعَلَ) وَمَعَانِيَهُ، وَأَدَوَاتِ نَصْبِ الْفِعْلِ الْمُضَارِعِ، وَمَعَانِيَ فِعْلِ (جَعَلَ).',
        english:
          'This lesson covers the اسْتَفْعَلَ pattern and its meanings, the particles that make the present tense accusative, and the meanings of the verb جَعَلَ.',
      },
      rules: [
        {
          name: 'وَزْنُ اسْتَفْعَلَ (The Istaf’ala Pattern)',
          arabicText:
            'مَصْدَرُهُ عَلَى وَزْنِ (اسْتِفْعَال). مِنْ مَعَانِيهِ الطَّلَبُ وَالصَّيْرُورَةُ وَالتَّشَبُّهُ. [cite: 143, 144]',
          explanation:
            'Its masdar is اسْتِفْعَالٌ. Its meanings include request (الطَّلَبُ), transformation (الصَّيْرُورَةُ), and resemblance (التَّشَبُّهُ). [cite: 143, 144]',
        },
        {
          name: 'نَوَاصِبُ الْفِعْلِ الْمُضَارِعِ (Particles Making Present Tense Accusative)',
          arabicText: 'هِيَ: أَنْ، لَنْ، كَيْ، إِذَنْ. [cite: 147, 148]',
          explanation:
            'The primary particles are أَنْ, لَنْ, كَيْ, and إِذَنْ, each with its own meaning and conditions. [cite: 147, 148]',
        },
        {
          name: 'مَعَانِي جَعَلَ (Meanings of "Ja’ala")',
          arabicText:
            'يَأْتِي بِمَعْنَى: صَيَّرَ (يَنْصِبُ مَفْعُولَيْنِ)، ظَنَّ (يَنْصِبُ مَفْعُولَيْنِ)، شَرَعَ (مِنْ أَفْعَالِ الشُّرُوعِ)، أَوْجَدَ (يَنْصِبُ مَفْعُولًا وَاحِدًا). [cite: 150, 151]',
          explanation:
            'Can mean: to make something become something else (takes two objects), to think (takes two objects), to begin (a verb of commencement), or to create/bring into being (takes one object). [cite: 150, 151]',
        },
      ],
    },
    {
      id: 'lesson26',
      title: { ar: 'الدَّرْسُ السَّادِسُ وَالْعِشْرُونَ', en: 'Lesson 26' },
      introduction: {
        arabic:
          'يَتَنَاوَلُ هَذَا الدَّرْسُ الْأَفْعَالَ الرُّبَاعِيَّةَ الْمُجَرَّدَةَ وَالْمَزِيدَةَ وَأَوْزَانَهَا، وَضَمِيرَ الْفَصْلِ، وَ(مَا) الْمَصْدَرِيَّةَ الظَّرْفِيَّةَ.',
        english:
          'This lesson deals with primitive and derived quadriliteral verbs and their patterns, the pronoun of separation, and the adverbial verbal noun "Mā".',
      },
      rules: [
        {
          name: 'الْفِعْلُ الرُّبَاعِيُّ الْمُجَرَّدُ (Primitive Quadriliteral Verb)',
          arabicText:
            'لَهُ وَزْنٌ وَاحِدٌ هُوَ (فَعْلَلَ)، وَمَصْدَرُهُ (فِعْلَال) أَوْ (فَعْلَلَة). [cite: 153]',
          explanation:
            'Has one pattern: فَعْلَلَ (e.g., دَحْرَجَ). Its masdar is فِعْلَالٌ or فَعْلَلَةٌ. [cite: 153]',
        },
        {
          name: 'الْفِعْلُ الرُّبَاعِيُّ الْمَزِيدُ (Derived Quadriliteral Verb)',
          arabicText:
            'لَهُ أَوْزَانٌ مِنْهَا: تَفَعْلَلَ، افْعَنْلَلَ، افْعَلَلَّ. [cite: 154, 155, 156]',
          explanation:
            'Has derived patterns, including: تَفَعْلَلَ (one added letter), افْعَنْلَلَ (two added letters), and افْعَلَلَّ (two added letters). [cite: 154, 155, 156]',
        },
        {
          name: 'ضَمِيرُ الْفَصْلِ (Pronoun of Separation)',
          arabicText:
            'ضَمِيرُ رَفْعٍ مُنْفَصِلٌ يَقَعُ بَيْنَ الْمُبْتَدَأِ وَالْخَبَرِ لِتَوْكِيدِ الْحُكْمِ وَتَخْصِيصِهِ، وَلَا مَحَلَّ لَهُ مِنَ الْإِعْرَابِ. [cite: 157, 159]',
          explanation:
            'A separate nominative pronoun placed between two definite nouns (like a subject and predicate) to clarify that the second is a predicate, not a follower. It has no grammatical locus. [cite: 157, 159]',
        },
        {
          name: 'مَا الْمَصْدَرِيَّةُ الظَّرْفِيَّةُ (Adverbial Verbal Noun "Mā")',
          arabicText:
            'تُؤَوَّلُ مَعَ الْفِعْلِ بَعْدَهَا بِمَصْدَرٍ يَدُلُّ عَلَى الْمُدَّةِ. [cite: 162]',
          explanation:
            'مَا + verb, interpreted as a verbal noun along with an adverbial meaning of duration (مُدَّةَ). [cite: 162]',
        },
      ],
    },
    {
      id: 'lesson27',
      title: { ar: 'الدَّرْسُ السَّابِعُ وَالْعِشْرُونَ', en: 'Lesson 27' },
      introduction: {
        arabic:
          'يُقَدِّمُ هَذَا الدَّرْسُ تَصْنِيفًا شَامِلًا لِلضَّمَائِرِ (الْبَارِزَةِ وَالْمُسْتَتِرَةِ، الْمُتَّصِلَةِ وَالْمُنْفَصِلَةِ)، وَيَشْرَحُ أَحْكَامَ الْوَصْلِ وَالْفَصْلِ.',
        english:
          'This lesson provides a comprehensive classification of pronouns (apparent and hidden, attached and separate) and explains the rules of when to attach or separate them.',
      },
      rules: [
        {
          name: 'أَنْوَاعُ الضَّمَائِرِ (Types of Pronouns)',
          arabicText:
            'تَنْقَسِمُ الضَّمَائِرُ إِلَى بَارِزَةٍ (مُتَّصِلَةٍ وَمُنْفَصِلَةٍ) وَمُسْتَتِرَةٍ. [cite: 166]',
          explanation:
            'Pronouns are divided into Apparent (بَارِزَةٌ) and Hidden (مُسْتَتِرَةٌ). Apparent pronouns are further divided into Attached (مُتَّصِلَةٌ) and Separate (مُنْفَصِلَةٌ). [cite: 166]',
        },
        {
          name: 'الضَّمَائِرُ الْمُتَّصِلَةُ (Attached Pronouns)',
          arabicText:
            'تَأْتِي لِلرَّفْعِ (تُ، نَا، وَا، ا، ي، نَ)، وَلِلنَّصْبِ (نِي، كَ، هُ، نَا)، وَلِلْجَرِّ (كَ، هُ، نَا). [cite: 166, 167]',
          explanation:
            'Can be nominative (e.g., ـوا in ذَهَبُوا), accusative (e.g., ـكَ in أَكْرَمَكَ), or genitive (e.g., ـكَ in كِتَابُكَ). [cite: 166, 167]',
        },
        {
          name: 'الضَّمَائِرُ الْمُنْفَصِلَةُ (Separate Pronouns)',
          arabicText:
            'تَأْتِي لِلرَّفْعِ (أَنَا، أَنْتَ، هُوَ)، وَلِلنَّصْبِ (إِيَّايَ، إِيَّاكَ، إِيَّاهُ). [cite: 168]',
          explanation:
            'Can be nominative (e.g., أَنَا, هُوَ) or accusative (e.g., إِيَّايَ, إِيَّاهُ). [cite: 168]',
        },
        {
          name: 'حُكْمُ الْوَصْلِ وَالْفَصْلِ (Rule of Attachment vs. Separation)',
          arabicText:
            'إِذَا اجْتَمَعَ ضَمِيرَانِ مَنْصُوبَانِ وَكَانَا مِنْ رُتْبَةٍ وَاحِدَةٍ وَجَبَ الْفَصْلُ (أَعْطَيْتُهُ إِيَّاهُ)، وَإِنِ اخْتَلَفَتِ الرُّتْبَةُ جَازَ الْوَصْلُ وَالْفَصْلُ. [cite: 171, 172]',
          explanation:
            'If two accusative pronouns of the same rank meet (e.g., two 3rd person), separation is obligatory. If their ranks are different (e.g., 2nd and 3rd person), both attachment and separation are permissible. [cite: 171, 172]',
        },
      ],
    },
    {
      id: 'lesson28',
      title: { ar: 'الدَّرْسُ الثَّامِنُ وَالْعِشْرُونَ', en: 'Lesson 28' },
      introduction: {
        arabic:
          'يُفَصِّلُ هَذَا الدَّرْسُ أَحْكَامَ الْمَفْعُولِ الْمُطْلَقِ وَأَنْوَاعَهُ وَمَا يَنُوبُ عَنْهُ، وَيُمَيِّزُ بَيْنَ أَنْوَاعِ الْمَصْدَرِ (مَصْدَرِ الْمَرَّةِ وَالْهَيْئَةِ وَالْمِيمِيِّ).',
        english:
          'This lesson details the rules of the absolute object (cognate accusative), its types, and its substitutes, and distinguishes between types of verbal nouns (noun of instance, manner, and the Mim-Masdar).',
      },
      rules: [
        {
          name: 'الْمَفْعُولُ الْمُطْلَقُ (Absolute Object / Cognate Accusative)',
          arabicText:
            'مَصْدَرٌ يُذْكَرُ بَعْدَ فِعْلِهِ لِتَأْكِيدِهِ، أَوْ لِبَيَانِ نَوْعِهِ، أَوْ لِبَيَانِ عَدَدِهِ. [cite: 173, 174]',
          explanation:
            'A masdar (verbal noun) mentioned after its verb to confirm it, explain its type, or explain its number. [cite: 173, 174]',
        },
        {
          name: 'النَّائِبُ عَنِ الْمَصْدَرِ (Substitutes for the Masdar)',
          arabicText:
            'يَنُوبُ عَنِ الْمَصْدَرِ فِي النَّصْبِ: كُلّ وَبَعْض وَأَيّ (مُضَافَةً إِلَى الْمَصْدَرِ)، وَصِفَتُهُ، وَعَدَدُهُ، وَمُرَادِفُهُ، وَاسْمُ الْإِشَارَةِ، وَضَمِيرُهُ. [cite: 175, 176, 177]',
          explanation:
            'Substitutes include: كُلّ, بَعْض, أَيّ + masdar; the adjective of the masdar; its number; its synonym; a demonstrative noun; a pronoun referring to it. [cite: 175, 176, 177]',
        },
        {
          name: 'أَقْسَامُ الْمَصْدَرِ (Divisions of the Masdar)',
          arabicText:
            'يَنْقَسِمُ الْمَصْدَرُ إِلَى: مَصْدَرِ الْمَرَّةِ (فَعْلَةٌ)، وَمَصْدَرِ الْهَيْئَةِ (فِعْلَةٌ)، وَالْمَصْدَرِ الْمِيمِيِّ (مَبْدُوءٌ بِمِيمٍ). [cite: 178, 179, 180]',
          explanation:
            'Divisions include: Masdar of Instance (مَصْدَرُ الْمَرَّة), Masdar of Manner (مَصْدَرُ الْهَيْئَةِ), and the Mim-Masdar (الْمَصْدَرُ الْمِيمِيُّ). [cite: 178, 179, 180]',
        },
      ],
    },
    {
      id: 'lesson29',
      title: { ar: 'الدَّرْسُ التَّاسِعُ وَالْعِشْرُونَ', en: 'Lesson 29' },
      introduction: {
        arabic:
          'يَتَنَاوَلُ هَذَا الدَّرْسُ الْمَفْعُولَ لِأَجْلِهِ، وَ(لَا) الْعَاطِفَةَ، وَأَحْرُفَ التَّحْضِيضِ وَالتَّنْدِيمِ.',
        english:
          'This lesson covers the object of reason/purpose, the conjunctive "La", and the particles of urging and inducing regret.',
      },
      rules: [
        {
          name: 'الْمَفْعُولُ لِأَجْلِهِ (Object of Reason/Purpose)',
          arabicText: 'مَصْدَرٌ قَلْبِيٌّ يُذْكَرُ لِبَيَانِ سَبَبِ وُقُوعِ الْفِعْلِ. [cite: 181]',
          explanation:
            'A masdar that explains the reason for the occurrence of the verb. [cite: 181]',
        },
        {
          name: 'لَا الْعَاطِفَةُ (Conjunctive "La")',
          arabicText:
            'حَرْفُ عَطْفٍ يَنْفِي الْحُكْمَ عَمَّا بَعْدَهُ، بِشَرْطِ أَنْ يُعْطَفَ بِهِ مُفْرَدٌ بَعْدَ إِثْبَاتٍ أَوْ أَمْرٍ. [cite: 183, 184]',
          explanation:
            'Negates the ruling for what follows it from what precedes it. It must conjoin a single word and follow an affirmation or a command. [cite: 183, 184]',
        },
        {
          name: 'أَحْرُفُ التَّحْضِيضِ وَالتَّنْدِيمِ (Particles of Urging and Inducing Regret)',
          arabicText:
            'هِيَ: هَلَّا، أَلَّا، أَلَا، لَوْلَا، لَوْمَا. تَكُونُ لِلتَّحْضِيضِ إِذَا دَخَلَتْ عَلَى الْمُضَارِعِ، وَلِلتَّنْدِيمِ إِذَا دَخَلَتْ عَلَى الْمَاضِي. [cite: 185, 186]',
          explanation:
            'Includes: هَلَّا, أَلَّا, أَلَا, لَوْلَا, لَوْمَا. They are for urging (التحضيض) if followed by a present verb, and for inducing regret (التنديم) if followed by a past verb. [cite: 185, 186]',
        },
      ],
    },
    {
      id: 'lesson30',
      title: { ar: 'الدَّرْسُ الثَّلَاثُونَ', en: 'Lesson 30' },
      introduction: {
        arabic:
          'يُعَرِّفُ هَذَا الدَّرْسُ بِالتَّمْيِيزِ وَيُمَيِّزُ بَيْنَ نَوْعَيْهِ (تَمْيِيزِ الذَّاتِ وَتَمْيِيزِ النِّسْبَةِ)، وَيَسْتَعْرِضُ صِيغَتَيِ التَّعَجُّبِ.',
        english:
          'This lesson defines specification (Tamyīz) and distinguishes between its two types (of essence and of relationship), and presents the two patterns of exclamation.',
      },
      rules: [
        {
          name: 'التَّمْيِيزُ (Specification/Discriminative Accusative)',
          arabicText: 'اسْمٌ نَكِرَةٌ يُذْكَرُ لِتَفْسِيرِ مُبْهَمٍ قَبْلَهُ. [cite: 187]',
          explanation:
            'An indefinite noun, implying the meaning of مِنْ (of), that clarifies a preceding ambiguity. [cite: 187]',
        },
        {
          name: 'أَنْوَاعُ التَّمْيِيزِ (Types of Specification)',
          arabicText:
            'يَنْقَسِمُ إِلَى: تَمْيِيزِ الذَّاتِ (أَوْ تَمْيِيزِ الْمُفْرَدِ)، وَتَمْيِيزِ النِّسْبَةِ (أَوْ تَمْيِيزِ الْجُمْلَةِ). [cite: 188, 190]',
          explanation:
            'Divided into Specification of Essence (تمييز الذات), which clarifies a vague word (like a number or measurement), and Specification of Relationship (تمييز النِّسْبَةِ), which clarifies ambiguity within a sentence. [cite: 188, 190]',
        },
        {
          name: 'صِيغَتَا التَّعَجُّبِ (The Two Patterns of Exclamation)',
          arabicText:
            'صِيغَتَا التَّعَجُّبِ الْقِيَاسِيَّتَانِ هُمَا: (مَا أَفْعَلَهُ!) وَ (أَفْعِلْ بِهِ!). [cite: 192]',
          explanation:
            'The two standard patterns of exclamation are مَا أَفْعَلَهُ! and أَفْعِلْ بِهِ!. [cite: 192]',
        },
      ],
    },
    {
      id: 'lesson31',
      title: { ar: 'الدَّرْسُ الْحَادِي وَالثَّلَاثُونَ', en: 'Lesson 31' },
      introduction: {
        arabic:
          'يَتَنَاوَلُ هَذَا الدَّرْسُ الْحَالَ وَأَحْكَامَهَا، وَشُرُوطَ صَاحِبِ الْحَالِ، وَأَنْوَاعَ الْحَالِ، وَالرَّابِطَ فِي جُمْلَةِ الْحَالِ.',
        english:
          'This lesson covers the circumstantial accusative (Hāl) and its rules, the conditions for the owner of the Hāl, the types of Hāl, and the connector in a sentence Hāl.',
      },
      rules: [
        {
          name: 'الْحَالُ (Circumstantial Adverb/Accusative of State)',
          arabicText:
            'وَصْفٌ نَكِرَةٌ مَنْصُوبٌ يُبَيِّنُ هَيْئَةَ صَاحِبِهِ عِنْدَ وُقُوعِ الْفِعْلِ. [cite: 193]',
          explanation:
            'A surplus, indefinite, descriptive noun indicating the state of its owner. [cite: 193]',
        },
        {
          name: 'صَاحِبُ الْحَالِ (Owner of the Hāl)',
          arabicText:
            'الْأَصْلُ فِي صَاحِبِ الْحَالِ أَنْ يَكُونَ مَعْرِفَةً، وَقَدْ يَأْتِي نَكِرَةً بِمُسَوِّغَاتٍ. [cite: 195]',
          explanation:
            'The owner of the state is usually definite, but can be indefinite under certain conditions. [cite: 195]',
        },
        {
          name: 'أَنْوَاعُ الْحَالِ (Types of Hāl)',
          arabicText:
            'يَأْتِي الْحَالُ مُفْرَدًا، أَوْ جُمْلَةً (اسْمِيَّةً أَوْ فِعْلِيَّةً)، أَوْ شِبْهَ جُمْلَةٍ. [cite: 197, 198]',
          explanation:
            'The Hāl can be a single word, a sentence (nominal or verbal), or a quasi-sentence (prepositional phrase or adverb). [cite: 197, 198]',
        },
        {
          name: 'الرَّابِطُ فِي جُمْلَةِ الْحَالِ (The Connector in a Sentence Hāl)',
          arabicText:
            'يَجِبُ أَنْ تَشْتَمِلَ جُمْلَةُ الْحَالِ عَلَى رَابِطٍ يَرْبُطُهَا بِصَاحِبِ الْحَالِ، وَهُوَ الضَّمِيرُ، أَوْ الْوَاوُ، أَوْ هُمَا مَعًا. [cite: 199]',
          explanation:
            'A sentence Hāl requires a connector, which can be a pronoun only, the وَاو only, or both the وَاو and a pronoun together. [cite: 199]',
        },
      ],
    },
    {
      id: 'lesson32',
      title: { ar: 'الدَّرْسُ الثَّانِي وَالثَّلَاثُونَ', en: 'Lesson 32' },
      introduction: {
        arabic:
          'يَشْرَحُ هَذَا الدَّرْسُ أُسْلُوبَ الِاسْتِثْنَاءِ وَأَرْكَانَهُ وَأَدَوَاتِهِ وَأَنْوَاعَهُ الْمُخْتَلِفَةَ.',
        english:
          'This lesson explains the style of exception, its components, its particles, and its different types.',
      },
      rules: [
        {
          name: 'أَرْكَانُ الِاسْتِثْنَاءِ (Components of Exception)',
          arabicText:
            'يَتَكَوَّنُ أُسْلُوبُ الِاسْتِثْنَاءِ مِنْ: الْمُسْتَثْنَى مِنْهُ، وَأَدَاةِ الِاسْتِثْنَاءِ، وَالْمُسْتَثْنَى. [cite: 201]',
          explanation:
            'The components are: the one from which the exception is made (المستثنى مِنْهُ), the particle of exception (أداة الاستثناء), and the exception itself (المستثنى). [cite: 201]',
        },
        {
          name: 'أَنْوَاعُ الِاسْتِثْنَاءِ (Types of Exception)',
          arabicText:
            'يَنْقَسِمُ إِلَى: تَامٍّ مُوجَبٍ، وَتَامٍّ غَيْرِ مُوجَبٍ (مَنْفِيٍّ)، وَمُفَرَّغٍ، وَمُتَّصِلٍ، وَمُنْقَطِعٍ. [cite: 202, 203, 204, 206]',
          explanation:
            'Types include: Complete Affirmative (تَامٌّ مُوجَبٌ), Complete Non-Affirmative (تَامٌّ غَيْرُ مُوجَبٍ), Empty/Discharged (الْمُفَرَّغُ), Connected (الْمُتَّصِلُ), and Disconnected (الْمُنْقَطِعُ). [cite: 202, 203, 204, 206]',
        },
        {
          name: 'حُكْمُ الْمُسْتَثْنَى بِـ(إِلَّا) (Ruling of the Exception with "illā")',
          arabicText:
            'يَخْتَلِفُ إِعْرَابُ الْمُسْتَثْنَى بِـ(إِلَّا) بِحَسَبِ نَوْعِ الِاسْتِثْنَاءِ. [cite: 203, 204, 207]',
          explanation:
            'In a complete affirmative sentence, it is accusative. In a complete non-affirmative sentence, it can be accusative or follow the original as a substitute (بدل). In an empty exception, it is declined according to its grammatical role in the sentence. [cite: 203, 204, 207]',
        },
        {
          name: 'الِاسْتِثْنَاءُ بِـ(غَيْرِ) وَ(سِوَى) (Exception with "ghayr" and "siwā")',
          arabicText:
            'يَأْخُذُ (غَيْرُ) وَ(سِوَى) حُكْمَ الِاسْمِ الْوَاقِعِ بَعْدَ (إِلَّا)، وَيَكُونُ مَا بَعْدَهُمَا مُضَافًا إِلَيْهِ مَجْرُورًا. [cite: 208, 209]',
          explanation:
            'What follows غَيْرُ and سِوَى is always genitive (مضاف إليه). غَيْرُ and سِوَى themselves take the declension that the exception would have taken with إِلَّا. [cite: 208, 209]',
        },
        {
          name: 'الِاسْتِثْنَاءُ بِـ(مَا خَلَا) وَ(مَا عَدَا) (Exception with "mā khalā" and "mā adā")',
          arabicText:
            'يُعَدَّانِ فِعْلَيْنِ مَاضِيَيْنِ، وَيَكُونُ الِاسْمُ بَعْدَهُمَا مَفْعُولًا بِهِ مَنْصُوبًا. [cite: 210]',
          explanation:
            'They are considered past tense verbs, and what follows them is accusative (as a مفعول به). [cite: 210]',
        },
      ],
    },
    {
      id: 'lesson33',
      title: { ar: 'الدَّرْسُ الثَّالِثُ وَالثَّلَاثُونَ', en: 'Lesson 33' },
      introduction: {
        arabic:
          'يَتَنَاوَلُ هَذَا الدَّرْسُ أَحْكَامَ تَوْكِيدِ الْأَفْعَالِ بِنُونِ التَّوْكِيدِ (الثَّقِيلَةِ وَالْخَفِيفَةِ) مِنْ حَيْثُ الْوُجُوبُ وَالْجَوَازُ وَالِامْتِنَاعُ.',
        english:
          'This lesson covers the rules of emphasizing verbs with the Nūn of Emphasis (heavy and light) regarding when it is obligatory, permissible, or impermissible.',
      },
      rules: [
        {
          name: 'حالات توكيد الفعل المضارع بالنون (Cases of Emphasizing the Present Verb with Nun)',
          arabicText:
            'يَجِبُ تَوْكِيدُهُ إِذَا كَانَ جَوَابًا لِقَسَمٍ مُثْبَتٍ مُسْتَقْبَلٍ غَيْرِ مَفْصُولٍ عَنِ اللَّامِ. وَيَجُوزُ إِذَا سُبِقَ بِطَلَبٍ. وَيَمْتَنِعُ فِي غَيْرِ ذَلِكَ. [cite: 216, 217]',
          explanation:
            'Obligatory: As the affirmative, future answer to an oath, connected to لَـ. Permissible: If preceded by a request (طلب). Impermissible: If the conditions for obligation or permissibility are not met. [cite: 216, 217]',
        },
        {
          name: 'تَوْكِيدُ فِعْلِ الْأَمْرِ بِالنُّونِ (Emphasizing the Imperative Verb with Nun)',
          arabicText: 'يَجُوزُ تَوْكِيدُ فِعْلِ الْأَمْرِ بِالنُّونِ مُطْلَقًا. [cite: 215]',
          explanation:
            'It is always permissible to emphasize an imperative verb with the Nun of Emphasis. [cite: 215]',
        },
        {
          name: 'إِعْرَابُ الْفِعْلِ الْمُؤَكَّدِ بِالنُّونِ (Declension of the Verb Emphasized with Nun)',
          arabicText:
            'يُبْنَى عَلَى الْفَتْحِ إِذَا اتَّصَلَتْ بِهِ النُّونُ مُبَاشَرَةً، وَيَكُونُ مُعْرَبًا إِذَا فُصِلَ بَيْنَهُ وَبَيْنَ النُّونِ بِأَلِفِ الِاثْنَيْنِ أَوْ وَاوِ الْجَمَاعَةِ أَوْ يَاءِ الْمُخَاطَبَةِ. [cite: 218, 219, 220]',
          explanation:
            'It is built on Fatha if the connection is direct. It remains declinable if separated by the Alif of the dual, Waw of the plural, or Ya of the feminine singular. [cite: 218, 219, 220]',
        },
        {
          name: 'بَلْ الاِبْتِدَائِيَّةُ (Inceptive "Bal")',
          arabicText:
            'حَرْفٌ يُفِيدُ الْإِضْرَابَ، وَيَكُونُ إِبْطَالِيًّا أَوْ انْتِقَالِيًّا. [cite: 222, 223]',
          explanation:
            'Introduces a new idea, signifying retraction (إضراب). It can be for invalidation (إِبْطَالِي) or for transition (انْتِقَالِي). [cite: 222, 223]',
        },
      ],
    },
    {
      id: 'lesson34',
      title: { ar: 'الدَّرْسُ الرَّابِعُ وَالثَّلَاثُونَ', en: 'Lesson 34' },
      introduction: {
        arabic:
          'يُعَرِّفُ هَذَا الدَّرْسُ بِالْمَمْنُوعِ مِنَ الصَّرْفِ وَيُعَدِّدُ أَسْبَابَ الْمَنْعِ، سَوَاءٌ لِعِلَّةٍ وَاحِدَةٍ أَوْ لِعِلَّتَيْنِ.',
        english:
          'This lesson defines diptotes (nouns prevented from tanween and kasra) and lists the reasons for this prevention, whether for one reason or two.',
      },
      rules: [
        {
          name: 'الْمَمْنُوعُ مِنَ الصَّرْفِ (Diptotes)',
          arabicText:
            'اسْمٌ مُعْرَبٌ لَا يُنَوَّنُ، وَيُجَرُّ بِالْفَتْحَةِ نِيَابَةً عَنِ الْكَسْرَةِ، إِلَّا إِذَا أُضِيفَ أَوْ دَخَلَتْ عَلَيْهِ (الْ). [cite: 232]',
          explanation:
            'A declinable noun that does not accept Tanween. Its genitive case is marked with a Fatha instead of a Kasra, unless it is defined with "Al-" or annexed (in an Iḍāfah construction). [cite: 232]',
        },
        {
          name: 'الْمَمْنُوعُ مِنَ الصَّرْفِ لِعِلَّةٍ وَاحِدَةٍ (Prevented for One Reason)',
          arabicText:
            'يُمْنَعُ لِعِلَّةٍ وَاحِدَةٍ: مَا انْتَهَى بِأَلِفِ التَّأْنِيثِ الْمَقْصُورَةِ أَوِ الْمَمْدُودَةِ، وَمَا كَانَ عَلَى صِيغَةِ مُنْتَهَى الْجُمُوعِ. [cite: 224, 225]',
          explanation:
            'Includes nouns ending in Alif Ta\'neeth Maqsura (ـَى) or Mamduda (ـَاءُ), and nouns on the "plural of plurality" pattern (e.g., مَفَاعِلُ, مَفَاعِيلُ). ',
        },
        {
          name: 'الْمَمْنُوعُ مِنَ الصَّرْفِ لِعِلَّتَيْنِ: الْعَلَمُ (Prevented for Two Reasons: Proper Noun)',
          arabicText:
            'يُمْنَعُ الْعَلَمُ إِذَا كَانَ مُؤَنَّثًا، أَوْ أَعْجَمِيًّا، أَوْ عَلَى وَزْنِ الْفِعْلِ، أَوْ مَعْدُولًا، أَوْ مَخْتُومًا بِأَلِفٍ وَنُونٍ زَائِدَتَيْنِ، أَوْ مُرَكَّبًا تَرْكِيبًا مَزْجِيًّا. ',
          explanation:
            'A proper noun is a diptote if it is also: feminine, foreign, on a verb pattern, an altered form (عدل), ends in an extra Alif and Nun, or is a compound noun. ',
        },
        {
          name: 'الْمَمْنُوعُ مِنَ الصَّرْفِ لِعِلَّتَيْنِ: الصِّفَةُ (Prevented for Two Reasons: Adjective)',
          arabicText:
            'تُمْنَعُ الصِّفَةُ إِذَا كَانَتْ عَلَى وَزْنِ (أَفْعَل)، أَوْ (فَعْلَان)، أَوْ كَانَتْ مِنَ الْأَعْدَادِ الْمَعْدُولَةِ (مَفْعَل وَفُعَال)، أَوْ كَلِمَة (أُخَر). ',
          explanation:
            'An adjective is a diptote if it is also: on the أَفْعَلُ pattern, ends in an extra Alif and Nun (فَعْلَانُ), or is an altered form (عدل) like the numbers 1-10 on the مَفْعَل & فُعَال patterns, or the word أُخَرُ. ',
        },
      ],
    },
  ],
};
