import * as vocab from '../../vocab';

export const lesson14 = {
      id: 'list014',
      title: { ar: 'مفردات الدرس الرابع عشر', en: 'Lesson 14 Vocabulary' },
      description: {
        ar: 'الكلمات الجديدة في الدرس الرابع عشر.',
        en: 'New words in the fourteenth lesson.',
      },
      bookId: 'book1',
      lessonId: '14',
      level: vocab.DifficultyLevel.Beginner,
      tags: ['lesson14', 'plurals', 'pronouns', 'people'],
      order: 14,
      items: [
        {
          id: 'l14-v1',
          word: 'أَنْتُمْ',
          transliteration: '',
          translation: { en: 'You (pl.m)' },
          type: vocab.WordType.Pronoun,
          definition: 'You (pl.m)',
          examples: [
            { arabic: 'أَنْتُمْ طُلَّابٌ مُجْتَهِدُونَ.', english: 'You are hardworking students.' },
            { arabic: 'مَنْ أَنْتُمْ يَا إِخْوَانُ؟', english: 'Who are you, brothers?' }
          ],
          difficulty: vocab.DifficultyLevel.Beginner,
          tags: ['lesson14'],
        },
        {
          id: 'l14-v2',
          word: 'كُمْ',
          transliteration: '',
          translation: { en: 'Your (pl.m) (attached pronoun)' },
          type: vocab.WordType.Pronoun,
          definition: 'Your (pl.m) (attached pronoun)',
          examples: [
            { arabic: 'أَيْنَ بَيْتُكُمْ يَا إِخْوَانُ؟', english: 'Where is your house, brothers?' },
            { arabic: 'مَا اسْمُكُمْ؟', english: 'What is your name?' }
          ],
          difficulty: vocab.DifficultyLevel.Beginner,
          tags: ['lesson14'],
        },
        {
          id: 'l14-v3',
          word: 'نَحْنُ',
          transliteration: '',
          translation: { en: 'We' },
          type: vocab.WordType.Pronoun,
          definition: 'We',
          examples: [
            { arabic: 'نَحْنُ مُسْلِمُونَ.', english: 'We are Muslims.' },
            { arabic: 'نَحْنُ نُحِبُّ اللَّهَ.', english: 'We love Allah.' }
          ],
          difficulty: vocab.DifficultyLevel.Beginner,
          tags: ['lesson14'],
        },
        {
          id: 'l14-v4',
          word: 'بَيْتُنَا',
          transliteration: '',
          translation: { en: 'Our house' },
          type: vocab.WordType.Expression,
          definition: 'Our house',
          examples: [
            { arabic: 'بَيْتُنَا أَمَامَ الْمَسْجِدِ.', english: 'Our house is in front of the masjid.' },
            { arabic: 'هَذَا بَيْتُنَا.', english: 'This is our house.' }
          ],
          difficulty: vocab.DifficultyLevel.Beginner,
          tags: ['lesson14'],
        },
        {
          id: 'l14-v5',
          word: 'الله رَبُّنَا',
          transliteration: '',
          translation: { en: 'Allah is our Lord' },
          type: vocab.WordType.Expression,
          definition: 'Allah is our Lord',
          examples: [
            { arabic: 'اللهُ رَبُّنَا وَرَبُّ كُلِّ شَيْءٍ.', english: 'Allah is our Lord and the Lord of everything.' },
            { arabic: 'نَحْنُ نَعْبُدُ اللهَ رَبَّنَا.', english: 'We worship Allah, our Lord.' }
          ],
          difficulty: vocab.DifficultyLevel.Beginner,
          tags: ['lesson14'],
        },
        {
          id: 'l14-v6',
          word: 'الْإِسْلَامُ دِينُنَا',
          transliteration: '',
          translation: { en: 'Islam is our religion' },
          type: vocab.WordType.Expression,
          definition: 'Islam is our religion',
          examples: [
            { arabic: 'الْإِسْلَامُ دِينُنَا وَالْحَمْدُ لِلَّهِ.', english: 'Islam is our religion, and praise be to Allah.' },
            { arabic: 'دِينُنَا هُوَ الْإِسْلَامُ.', english: 'Our religion is Islam.' }
          ],
          difficulty: vocab.DifficultyLevel.Beginner,
          tags: ['lesson14'],
        },
        {
          id: 'l14-v7',
          word: 'محَمَّدٌ نَبِيُّنَا',
          transliteration: '',
          translation: { en: 'Muhammad is our prophet' },
          type: vocab.WordType.Expression,
          definition: 'Muhammad is our prophet',
          examples: [
            { arabic: 'النَّبِيُّ مُحَمَّدٌ رَسُولُنَا.', english: 'The Prophet Muhammad is our Messenger.' },
            { arabic: 'رَسُولُنَا مُحَمَّدٌ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ.', english: 'Our Messenger is Muhammad, may Allah bless him and grant him peace.' }
          ],
          difficulty: vocab.DifficultyLevel.Beginner,
          tags: ['lesson14'],
        },
        {
          id: 'l14-v8',
          word: 'ذَهَبْتُمْ',
          transliteration: '',
          translation: { en: 'You went (pl.m)' },
          type: vocab.WordType.Verb,
          definition: 'You went (pl.m)',
          examples: [
            { arabic: 'أَيْنَ ذَهَبْتُمْ يَا إِخْوَانُ؟', english: 'Where did you go, brothers?' },
            { arabic: 'لِمَاذَا خَرَجْتُمْ مِنَ الْفَصْلِ؟', english: 'Why did you leave the classroom?' }
          ],
          difficulty: vocab.DifficultyLevel.Beginner,
          tags: ['lesson14'],
        },
        {
          id: 'l14-v9',
          word: 'بَلَدٌ',
          transliteration: '',
          translation: { en: 'Country' },
          type: vocab.WordType.Noun,
          plural: 'بلاد',
          definition: 'Country',
          examples: [
            { arabic: 'مَالِيزِيَا بَلَدٌ جَمِيلٌ.', english: 'Malaysia is a beautiful country.' },
            { arabic: 'أُحِبُّ بَلَدِي كَثِيرًا.', english: 'I love my country very much.' }
          ],
          difficulty: vocab.DifficultyLevel.Beginner,
          tags: ['lesson14'],
        },
        {
          id: 'l14-v10',
          word: 'مَطَارٌ',
          transliteration: '',
          translation: { en: 'Airport' },
          type: vocab.WordType.Noun,
          definition: 'Airport',
          examples: [
            { arabic: 'الْمَطَارُ كَبِيرٌ وَجَمِيلٌ.', english: 'The airport is big and beautiful.' },
            { arabic: 'أَنَا ذَاهِبٌ إِلَى الْمَطَارِ.', english: 'I am going to the airport.' }
          ],
          difficulty: vocab.DifficultyLevel.Beginner,
          tags: ['lesson14'],
        },
        {
          id: 'l14-v11',
          word: 'الزِّيَارَةُ',
          transliteration: '',
          translation: { en: 'To visit' },
          type: vocab.WordType.Verb,
          definition: 'To visit',
          examples: [
            { arabic: 'أُرِيدُ زِيَارَةَ صَدِيقِي الْمَرِيضِ.', english: 'I want to visit my sick friend.' },
            { arabic: 'جَاءَ لِزِيَارَةِ أَقَارِبِهِ.', english: 'He came to visit his relatives.' }
          ],
          difficulty: vocab.DifficultyLevel.Beginner,
          tags: ['lesson14'],
        },
        {
          id: 'l14-v12',
          word: 'أَيُّ',
          transliteration: '',
          translation: { en: 'Which?' },
          type: vocab.WordType.Pronoun,
          definition: 'Which?',
          examples: [
            { arabic: 'أَيُّ يَوْمٍ هَذَا؟', english: 'Which day is this?' },
            { arabic: 'فِي أَيِّ مَدْرَسَةٍ أَنْتَ؟', english: 'In which school are you?' }
          ],
          difficulty: vocab.DifficultyLevel.Beginner,
          tags: ['lesson14'],
        },
        {
          id: 'l14-v13',
          word: 'كُلِّيَّةٌ',
          transliteration: '',
          translation: { en: 'Faculty/college' },
          type: vocab.WordType.Noun,
          plural: 'كليات',
          definition: 'Faculty/college',
          examples: [
            { arabic: 'أَنَا طَالِبٌ فِي الْكُلِّيَّةِ.', english: 'I am a student in the college.' },
            { arabic: 'هَذِهِ كُلِّيَّةٌ كَبِيرَةٌ.', english: 'This is a big college.' }
          ],
          difficulty: vocab.DifficultyLevel.Beginner,
          tags: ['lesson14'],
        },
        {
          id: 'l14-v14',
          word: 'كُلِّيَّةُ الطِّبِّ',
          transliteration: '',
          translation: { en: 'The faculty of medicine' },
          type: vocab.WordType.Expression,
          definition: 'The faculty of medicine',
          examples: [
            { arabic: 'أَخِي يَدْرُسُ فِي كُلِّيَّةِ الطِّبِّ.', english: 'My brother studies in the faculty of medicine.' },
            { arabic: 'كُلِّيَّةُ الطِّبِّ قَرِيبَةٌ مِنَ الْمُسْتَشْفَى.', english: 'The faculty of medicine is near the hospital.' }
          ],
          difficulty: vocab.DifficultyLevel.Beginner,
          tags: ['lesson14'],
        },
        {
          id: 'l14-v15',
          word: 'كُلِيَّةُ الهَنْدَسَة',
          transliteration: '',
          translation: { en: 'The faculty of engineering' },
          type: vocab.WordType.Expression,
          definition: 'The faculty of engineering',
          examples: [
            { arabic: 'صَدِيقِي يَدْرُسُ فِي كُلِّيَّةِ الْهَنْدَسَةِ.', english: 'My friend studies in the faculty of engineering.' },
            { arabic: 'كُلِّيَّةُ الْهَنْدَسَةِ جَدِيدَةٌ.', english: 'The faculty of engineering is new.' }
          ],
          difficulty: vocab.DifficultyLevel.Beginner,
          tags: ['lesson14'],
        },
        {
          id: 'l14-v16',
          word: 'كُلِيَّةُ التَّجَارَةِ',
          transliteration: '',
          translation: { en: 'The faculty of commerce' },
          type: vocab.WordType.Expression,
          definition: 'The faculty of commerce',
          examples: [
            { arabic: 'أَخِي طَالِبٌ فِي كُلِّيَّةِ التِّجَارَةِ.', english: 'My brother is a student in the faculty of commerce.' },
            { arabic: 'كُلِّيَّةُ التِّجَارَةِ بَعِيدَةٌ عَنِ الْبَيْتِ.', english: 'The faculty of commerce is far from the house.' }
          ],
          difficulty: vocab.DifficultyLevel.Beginner,
          tags: ['lesson14'],
        },
        {
          id: 'l14-v17',
          word: 'كُلِّيَّةُ الشَّرِيعَةِ',
          transliteration: '',
          translation: { en: 'The faculty of Islamic law' },
          type: vocab.WordType.Expression,
          definition: 'The faculty of Islamic law',
          examples: [
            { arabic: 'أَنَا أَدْرُسُ فِي كُلِّيَّةِ الشَّرِيعَةِ.', english: 'I study in the faculty of Islamic law.' },
            { arabic: 'كُلِّيَّةُ الشَّرِيعَةِ فِي الْجَامِعَةِ الْإِسْلَامِيَّةِ.', english: 'The faculty of Islamic law is in the Islamic University.' }
          ],
          difficulty: vocab.DifficultyLevel.Beginner,
          tags: ['lesson14'],
        },
        {
          id: 'l14-v18',
          word: 'نَصْرَانِي',
          transliteration: '',
          translation: { en: 'Christian' },
          type: vocab.WordType.Noun,
          plural: 'نَصَارَى',
          definition: 'Christian',
          examples: [
            { arabic: 'هَلْ هُوَ مُسْلِمٌ أَمْ نَصْرَانِيٌّ؟', english: 'Is he a Muslim or a Christian?' },
            { arabic: 'جَارُنَا رَجُلٌ نَصْرَانِيٌّ.', english: 'Our neighbor is a Christian man.' }
          ],
          difficulty: vocab.DifficultyLevel.Beginner,
          tags: ['lesson14'],
        },
        {
          id: 'l14-v19',
          word: 'شَفَاهُ الله',
          transliteration: '',
          translation: { en: 'May Allah cure him' },
          type: vocab.WordType.Expression,
          definition: 'May Allah cure him',
          examples: [
            { arabic: 'صَدِيقِي مَرِيضٌ، شَفَاهُ اللَّهُ.', english: 'My friend is sick, may Allah cure him.' },
            { arabic: 'أَدْعُو لَهُ بِالشِّفَاءِ، شَفَاهُ اللَّهُ.', english: 'I pray for his recovery, may Allah cure him.' }
          ],
          difficulty: vocab.DifficultyLevel.Beginner,
          tags: ['lesson14'],
        },
        {
          id: 'l14-v20',
          word: 'مَحْكَمَةٌ',
          transliteration: '',
          translation: { en: 'Law court' },
          type: vocab.WordType.Noun,
          definition: 'Law court',
          examples: [
            { arabic: 'الْقَاضِي يَعْمَلُ فِي الْمَحْكَمَةِ.', english: 'The judge works in the law court.' },
            { arabic: 'الْمَحْكَمَةُ قَرِيبَةٌ مِنَ السُّوقِ.', english: 'The law court is near the market.' }
          ],
          difficulty: vocab.DifficultyLevel.Beginner,
          tags: ['lesson14'],
        },
        {
          id: 'l14-v21',
          word: 'حَفِيدٌ',
          transliteration: '',
          translation: { en: 'Grandson' },
          type: vocab.WordType.Noun,
          plural: 'حَفَدَةٌ',
          definition: 'Grandson',
          examples: [
            { arabic: 'هَذَا حَفِيدِي الصَّغِيرُ.', english: 'This is my little grandson.' },
            { arabic: 'جَدِّي يُحِبُّ أَحْفَادَهُ كَثِيرًا.', english: 'My grandfather loves his grandsons very much.' }
          ],
          difficulty: vocab.DifficultyLevel.Beginner,
          tags: ['lesson14'],
        },
        {
          id: 'l14-v22',
          word: 'رَبِّ',
          transliteration: '',
          translation: { en: 'Lord' },
          type: vocab.WordType.Noun,
          definition: 'Lord',
          examples: [
            { arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ.', english: 'Praise be to Allah, the Lord of the worlds.' },
            { arabic: 'يَا رَبِّ، اغْفِرْ لِي.', english: 'O my Lord, forgive me.' }
          ],
          difficulty: vocab.DifficultyLevel.Beginner,
          tags: ['lesson14'],
        },
        {
          id: 'l14-v23',
          word: 'يَوْمُ السَّبْت',
          transliteration: '',
          translation: { en: 'Saturday' },
          type: vocab.WordType.Noun,
          definition: 'Saturday',
          examples: [
            { arabic: 'يَوْمُ السَّبْتِ هُوَ يَوْمُ عُطْلَةٍ.', english: 'Saturday is a holiday.' },
            { arabic: 'سَأُسَافِرُ يَوْمَ السَّبْتِ.', english: 'I will travel on Saturday.' }
          ],
          difficulty: vocab.DifficultyLevel.Beginner,
          tags: ['lesson14', 'day'],
        },
        {
          id: 'l14-v24',
          word: 'شَهْرٌ',
          transliteration: '',
          translation: { en: 'Month' },
          type: vocab.WordType.Noun,
          definition: 'Month',
          examples: [
            { arabic: 'رَمَضَانُ شَهْرُ الْقُرْآنِ.', english: 'Ramadan is the month of the Quran.' },
            { arabic: 'فِي السَّنَةِ اثْنَا عَشَرَ شَهْرًا.', english: 'There are twelve months in a year.' }
          ],
          difficulty: vocab.DifficultyLevel.Beginner,
          tags: ['lesson14'],
        },
        {
          id: 'l14-v25',
          word: 'إِبْرَاهِيمُ',
          transliteration: '',
          translation: { en: 'Ibraheem' },
          type: vocab.WordType.Noun,
          definition: 'Ibraheem',
          examples: [
            { arabic: 'إِبْرَاهِيمُ نَبِيُّ اللَّهِ.', english: 'Ibraheem is a prophet of Allah.' },
            { arabic: 'اسْمِي إِبْرَاهِيمُ.', english: 'My name is Ibraheem.' }
          ],
          difficulty: vocab.DifficultyLevel.Beginner,
          tags: ['lesson14', 'name'],
        },
      ],
}