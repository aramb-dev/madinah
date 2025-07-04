import * as vocab from '../../vocab';

export const lesson22 = {
      id: 'list022',
      title: { ar: 'مفردات الدرس الثاني والعشرون', en: 'Lesson 22 Vocabulary' },
      description: {
        ar: 'الكلمات الجديدة في الدرس الثاني والعشرون.',
        en: 'New words in the twenty-second lesson.',
      },
      bookId: 'book1',
      lessonId: '22',
      level: vocab.DifficultyLevel.Beginner,
      tags: ['lesson22', 'numbers', 'time', 'days'],
      order: 22,
      items: [
        {
          id: 'l22-v1',
          word: 'سَاعَةٌ',
          transliteration: 'sāʿatun',
          translation: { en: 'Hour / Watch / Clock' },
          type: vocab.WordType.Noun,
          plural: 'سَاعَاتٌ',
          definition: 'A unit of time equal to 60 minutes. It can also mean a device for telling time, like a watch or a clock.',
          examples: [
            { arabic: 'الدَّرْسُ يَبْدَأُ بَعْدَ سَاعَةٍ.', english: 'The lesson starts in an hour.' },
            { arabic: 'سَاعَتِي جَدِيدَةٌ.', english: 'My watch is new.' },
          ],
          difficulty: vocab.DifficultyLevel.Beginner,
          tags: ['lesson22', 'time', 'noun'],
        },
        {
          id: 'l22-v2',
          word: 'دَقِيقَةٌ',
          transliteration: 'daqīqatun',
          translation: { en: 'Minute' },
          type: vocab.WordType.Noun,
          plural: 'دَقَائِقُ',
          definition: 'A unit of time equal to 60 seconds. The plural, دَقَائِقُ, is a diptote (مَمْنُوع مِنَ الصَّرْفِ).',
          examples: [
            { arabic: 'اِنْتَظِرْ خَمْسَ دَقَائِقَ.', english: 'Wait for five minutes.' },
            { arabic: 'السَّاعَةُ فِيهَا سِتُّونَ دَقِيقَةً.', english: 'There are sixty minutes in an hour.' },
          ],
          difficulty: vocab.DifficultyLevel.Beginner,
          tags: ['lesson22', 'time', 'noun', 'diptote'],
        },
        {
          id: 'l22-v3',
          word: 'ثَانِيَةٌ',
          transliteration: 'thāniyatun',
          translation: { en: 'Second' },
          type: vocab.WordType.Noun,
          plural: 'ثَوَانٍ',
          definition: 'A fundamental unit of time. The plural ثَوَانٍ is a defective noun (اِسْم مَنْقُوص).',
          examples: [
            { arabic: 'الدَّقِيقَةُ فِيهَا سِتُّونَ ثَانِيَةً.', english: 'A minute has sixty seconds.' },
            { arabic: 'لَحْظَةٌ مِنْ فَضْلِكَ، ثَوَانٍ فَقَطْ.', english: 'One moment please, just a few seconds.' },
          ],
          difficulty: vocab.DifficultyLevel.Beginner,
          tags: ['lesson22', 'time', 'noun'],
        },
        {
          id: 'l22-v4',
          word: 'يَوْمٌ',
          transliteration: 'yawmun',
          translation: { en: 'Day' },
          type: vocab.WordType.Noun,
          plural: 'أَيَّامٌ',
          definition: 'A period of twenty-four hours as a unit of time.',
          examples: [
            { arabic: 'أَيَّامُ الْأُسْبُوعِ سَبْعَةٌ.', english: 'The days of the week are seven.' },
            { arabic: 'سَأُسَافِرُ بَعْدَ ثَلَاثَةِ أَيَّامٍ.', english: 'I will travel after three days.' },
          ],
          difficulty: vocab.DifficultyLevel.Beginner,
          tags: ['lesson22', 'time', 'noun'],
        },
        {
          id: 'l22-v5',
          word: 'أُسْبُوعٌ',
          transliteration: 'ʾusbūʿun',
          translation: { en: 'Week' },
          type: vocab.WordType.Noun,
          plural: 'أَسَابِيعُ',
          definition: 'A period of seven days. The plural, أَسَابِيعُ, is a diptote (مَمْنُوع مِنَ الصَّرْفِ).',
          examples: [
            { arabic: 'أَذْهَبُ إِلَى الْمَكْتَبَةِ مَرَّةً فِي الْأُسْبُوعِ.', english: 'I go to the library once a week.' },
            { arabic: 'الْعُطْلَةُ تَبْدَأُ بَعْدَ أُسْبُوعَيْنِ.', english: 'The vacation starts in two weeks.' },
          ],
          difficulty: vocab.DifficultyLevel.Beginner,
          tags: ['lesson22', 'time', 'noun', 'diptote'],
        },
        {
          id: 'l22-v6',
          word: 'شَهْرٌ',
          transliteration: 'shahrun',
          translation: { en: 'Month' },
          type: vocab.WordType.Noun,
          plural: 'أَشْهُرٌ / شُهُورٌ',
          definition: 'A period of about 30 days, or 4 weeks.',
          examples: [
            { arabic: 'شَهْرُ رَمَضَانَ مُبَارَكٌ.', english: 'The month of Ramadan is blessed.' },
            { arabic: 'السَّنَةُ فِيهَا اثْنَا عَشَرَ شَهْرًا.', english: 'There are twelve months in a year.' },
          ],
          difficulty: vocab.DifficultyLevel.Beginner,
          tags: ['lesson22', 'time', 'noun'],
        },
        {
          id: 'l22-v7',
          word: 'سَنَةٌ',
          transliteration: 'sanatun',
          translation: { en: 'Year' },
          type: vocab.WordType.Noun,
          plural: 'سَنَوَاتٌ',
          definition: 'A period of 365 or 366 days.',
          examples: [
            { arabic: 'كَمْ سَنَةً عُمْرُكَ؟', english: 'How many years old are you?' },
            { arabic: 'وُلِدْتُ قَبْلَ عِشْرِينَ سَنَةً.', english: 'I was born twenty years ago.' },
          ],
          difficulty: vocab.DifficultyLevel.Beginner,
          tags: ['lesson22', 'time', 'noun'],
        },
        {
          id: 'l22-v8',
          word: 'يَوْمُ الْأَحَدِ',
          transliteration: 'yawmu al-ʾaḥadi',
          translation: { en: 'Sunday' },
          type: vocab.WordType.Expression,
          definition: 'The first day of the week in many Arabic countries.',
          examples: [
            { arabic: 'الْيَوْمُ هُوَ يَوْمُ الْأَحَدِ.', english: 'Today is Sunday.' },
            { arabic: 'لَا أَذْهَبُ إِلَى الْعَمَلِ يَوْمَ الْأَحَدِ.', english: 'I do not go to work on Sunday.' },
          ],
          difficulty: vocab.DifficultyLevel.Beginner,
          tags: ['lesson22', 'day', 'time'],
        },
        {
          id: 'l22-v9',
          word: 'يَوْمُ الْإِثْنَيْنِ',
          transliteration: 'yawmu al-ʾithnayni',
          translation: { en: 'Monday' },
          type: vocab.WordType.Expression,
          definition: 'The second day of the week.',
          examples: [
            { arabic: 'عِنْدِي اجْتِمَاعٌ مُهِمٌّ يَوْمَ الْإِثْنَيْنِ.', english: 'I have an important meeting on Monday.' },
            { arabic: 'وُلِدَ النَّبِيُّ ﷺ يَوْمَ الْإِثْنَيْنِ.', english: 'The Prophet (PBUH) was born on a Monday.' },
          ],
          difficulty: vocab.DifficultyLevel.Beginner,
          tags: ['lesson22', 'day', 'time'],
        },
        {
          id: 'l22-v10',
          word: 'يَوْمُ الثُّلَاثَاءِ',
          transliteration: 'yawmu ath-thulāthāʾi',
          translation: { en: 'Tuesday' },
          type: vocab.WordType.Expression,
          definition: 'The third day of the week.',
          examples: [
            { arabic: 'أَلْعَبُ كُرَةَ الْقَدَمِ يَوْمَ الثُّلَاثَاءِ.', english: 'I play football on Tuesday.' },
            { arabic: 'مَاذَا سَتَفْعَلُ يَوْمَ الثُّلَاثَاءِ؟', english: 'What will you do on Tuesday?' },
          ],
          difficulty: vocab.DifficultyLevel.Beginner,
          tags: ['lesson22', 'day', 'time'],
        },
        {
          id: 'l22-v11',
          word: 'يَوْمُ الْأَرْبِعَاءِ',
          transliteration: 'yawmu al-ʾarbiʿāʾi',
          translation: { en: 'Wednesday' },
          type: vocab.WordType.Expression,
          definition: 'The fourth day of the week.',
          examples: [
            { arabic: 'أَذْهَبُ لِلتَّسَوُّقِ يَوْمَ الْأَرْبِعَاءِ.', english: 'I go shopping on Wednesday.' },
            { arabic: 'يَنْتَهِي الدَّوَامُ مُبَكِّرًا يَوْمَ الْأَرْبِعَاءِ.', english: 'Work ends early on Wednesday.' },
          ],
          difficulty: vocab.DifficultyLevel.Beginner,
          tags: ['lesson22', 'day', 'time'],
        },
        {
          id: 'l22-v12',
          word: 'يَوْمُ الْخَمِيسِ',
          transliteration: 'yawmu al-khamīsi',
          translation: { en: 'Thursday' },
          type: vocab.WordType.Expression,
          definition: 'The fifth day of the week.',
          examples: [
            { arabic: 'نُشَاهِدُ فِيلْمًا كُلَّ يَوْمِ خَمِيسٍ.', english: 'We watch a movie every Thursday.' },
            { arabic: 'يَوْمُ الْخَمِيسِ هُوَ بِدَايَةُ عُطْلَةِ نِهَايَةِ الْأُسْبُوعِ.', english: 'Thursday is the start of the weekend.' },
          ],
          difficulty: vocab.DifficultyLevel.Beginner,
          tags: ['lesson22', 'day', 'time'],
        },
        {
          id: 'l22-v13',
          word: 'يَوْمُ الْجُمُعَةِ',
          transliteration: 'yawmu al-jumuʿati',
          translation: { en: 'Friday' },
          type: vocab.WordType.Expression,
          definition: 'The sixth day of the week, a holy day for Muslims.',
          examples: [
            { arabic: 'يَذْهَبُ الْمُسْلِمُونَ إِلَى الْمَسْجِدِ لِصَلَاةِ الْجُمُعَةِ.', english: 'Muslims go to the masjid for Friday prayer.' },
            { arabic: 'يَوْمُ الْجُمُعَةِ يَوْمٌ مُبَارَكٌ.', english: 'Friday is a blessed day.' },
          ],
          difficulty: vocab.DifficultyLevel.Beginner,
          tags: ['lesson22', 'day', 'time', 'islam'],
        },
        {
          id: 'l22-v14',
          word: 'يَوْمُ السَّبْتِ',
          transliteration: 'yawmu as-sabti',
          translation: { en: 'Saturday' },
          type: vocab.WordType.Expression,
          definition: 'The seventh day of the week.',
          examples: [
            { arabic: 'يَوْمُ السَّبْتِ هُوَ يَوْمُ عُطْلَةٍ.', english: 'Saturday is a holiday.' },
            { arabic: 'أُحِبُّ أَنْ أَنَامَ مُتَأَخِّرًا يَوْمَ السَّبْتِ.', english: 'I like to sleep in late on Saturday.' },
          ],
          difficulty: vocab.DifficultyLevel.Beginner,
          tags: ['lesson22', 'day', 'time'],
        },
        {
          id: 'l22-v15',
          word: 'كَمِ السَّاعَةُ؟',
          transliteration: 'kami as-sāʿatu?',
          translation: { en: 'What time is it?' },
          type: vocab.WordType.Expression,
          definition: 'A common question used to ask for the current time.',
          examples: [
            { arabic: 'مِنْ فَضْلِكَ، كَمِ السَّاعَةُ الْآنَ؟', english: 'Excuse me, what time is it now?' },
            { arabic: 'سَأَلْتُ رَجُلًا: "كَمِ السَّاعَةُ؟"', english: 'I asked a man: \'What time is it?\'' },
          ],
          difficulty: vocab.DifficultyLevel.Beginner,
          tags: ['lesson22', 'question', 'time'],
        },
        {
          id: 'l22-v16',
          word: 'السَّاعَةُ الْوَاحِدَةُ',
          transliteration: 'as-sāʿatu al-wāḥidatu',
          translation: { en: 'One o\'clock' },
          type: vocab.WordType.Expression,
          definition: 'The expression for telling the time is one o\'clock. Ordinal numbers are used for hours.',
          examples: [
            { arabic: 'الْآنَ السَّاعَةُ الْوَاحِدَةُ.', english: 'It is now one o\'clock.' },
            { arabic: 'سَأَعُودُ فِي السَّاعَةِ الْوَاحِدَةِ.', english: 'I will return at one o\'clock.' },
          ],
          difficulty: vocab.DifficultyLevel.Beginner,
          tags: ['lesson22', 'time', 'expression'],
        },
      ],
}