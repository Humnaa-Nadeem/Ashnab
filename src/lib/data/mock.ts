export const mockCourses = [
  {
    id: 'course-1',
    slug: 'tafsir',
    image_url: 'https://images.unsplash.com/photo-1609599006353-e629aaab315a?q=80&w=1000&auto=format&fit=crop',
    price: 10000,
    duration: '1 Year',
    level: 'Advanced',
    is_featured: true,
    is_published: true,
    lessons_count: 120,
    translations: [
      {
        locale: 'en',
        title: 'Tafsir',
        short_description: 'In-depth explanation and commentary of the Holy Quran.',
        detailed_description: 'This comprehensive Tafsir course delves into the profound meanings, historical context (Asbab al-Nuzul), and linguistic beauty of the Holy Quran. Led by expert scholars, students will explore the deeper wisdom behind the verses, enabling them to connect with the divine message on a spiritual and intellectual level.',
        what_you_will_learn: ['Deep understanding of Quranic verses', 'Historical context of revelations', 'Linguistic miracles of the Quran', 'Application of Quranic wisdom in daily life']
      },
      {
        locale: 'ur',
        title: 'تفسیر',
        short_description: 'قرآن پاک کی گہرائی سے وضاحت اور تفسیر۔',
        detailed_description: 'یہ جامع تفسیر کورس قرآن پاک کے گہرے معانی، تاریخی پس منظر (اسباب النزول) اور لسانی خوبصورتی کا احاطہ کرتا ہے۔ ماہر علمائے کرام کی رہنمائی میں، طلباء آیات کے پیچھے چھپی حکمت کو دریافت کریں گے۔',
        what_you_will_learn: ['قرآنی آیات کی گہری سمجھ', 'نزول کا تاریخی پس منظر', 'قرآن کے لسانی معجزات', 'روزمرہ زندگی میں قرآنی حکمت کا اطلاق']
      },
      {
        locale: 'ar',
        title: 'تفسير',
        short_description: 'شرح وتفسير متعمق للقرآن الكريم.',
        detailed_description: 'تتعمق دورة التفسير الشاملة هذه في المعاني العميقة والسياق التاريخي (أسباب النزول) والجمال اللغوي للقرآن الكريم. بقيادة علماء خبراء، سيستكشف الطلاب الحكمة الأعمق وراء الآيات.',
        what_you_will_learn: ['فهم عميق للآيات القرآنية', 'السياق التاريخي للوحي', 'المعجزات اللغوية للقرآن', 'تطبيق الحكمة القرآنية في الحياة اليومية']
      },
      {
        locale: 'zh',
        title: '塔夫斯尔 (Tafsir)',
        short_description: '对古兰经的深入解释和评论。',
        detailed_description: '这门综合性的 Tafsir 课程深入探讨了《古兰经》的深刻含义、历史背景（降示原因）和语言之美。在专家学者的带领下，学生将探索经文背后更深层次的智慧。',
        what_you_will_learn: ['深入理解古兰经经文', '启示的历史背景', '古兰经的语言奇迹', '古兰经智慧在日常生活中的应用']
      },
      {
        locale: 'hi',
        title: 'तफ़सीर',
        short_description: 'पवित्र कुरान की गहन व्याख्या और टिप्पणी।',
        detailed_description: 'यह व्यापक तफ़सीर पाठ्यक्रम पवित्र कुरान के गहरे अर्थों, ऐतिहासिक संदर्भ (असबाब अल-नुज़ुल) और भाषाई सुंदरता पर प्रकाश डालता है। विशेषज्ञ विद्वानों के नेतृत्व में, छात्र आयतों के पीछे के गहरे ज्ञान का पता लगाएंगे।',
        what_you_will_learn: ['कुरान की आयतों की गहरी समझ', 'रहस्योद्घाटन का ऐतिहासिक संदर्भ', 'कुरान के भाषाई चमत्कार', 'दैनिक जीवन में कुरान के ज्ञान का अनुप्रयोग']
      }
    ]
  },
  {
    id: 'course-2',
    slug: 'qaida',
    image_url: 'https://images.unsplash.com/photo-1585036156171-384164a8c675?q=80&w=1000&auto=format&fit=crop',
    price: 5000,
    duration: '3 Months',
    level: 'Beginner',
    is_featured: true,
    is_published: true,
    lessons_count: 30,
    translations: [
      {
        locale: 'en',
        title: 'Qaida',
        short_description: 'The foundational course for learning how to read the Quran with proper Tajweed.',
        detailed_description: 'Our Noorani Qaida course is the perfect starting point for beginners. It is designed to build a strong foundation in Arabic pronunciation and reading. Step-by-step, students will learn the Arabic alphabet, correct articulation points (Makharij), and fundamental rules necessary to read the Quran fluently.',
        what_you_will_learn: ['Recognition of Arabic alphabets', 'Proper articulation (Makharij)', 'Joining letters to form words', 'Basic rules of Tajweed']
      },
      {
        locale: 'ur',
        title: 'قاعدہ',
        short_description: 'قرآن پڑھنا سیکھنے کے لیے بنیادی کورس۔',
        detailed_description: 'ہمارا نورانی قاعدہ کورس ابتدائی افراد کے لیے بہترین نقطہ آغاز ہے۔ یہ عربی تلفظ اور پڑھنے میں مضبوط بنیاد بنانے کے لیے ڈیزائن کیا گیا ہے۔ قدم بہ قدم، طلباء عربی حروف تہجی اور صحیح مخرج سیکھیں گے۔',
        what_you_will_learn: ['عربی حروف کی پہچان', 'صحیح مخرج اور تلفظ', 'حروف کو ملا کر الفاظ بنانا', 'تجوید کے بنیادی اصول']
      },
      {
        locale: 'ar',
        title: 'قاعدة',
        short_description: 'الدورة التأسيسية لتعلم كيفية قراءة القرآن.',
        detailed_description: 'تعتبر دورة القاعدة النورانية الخاصة بنا نقطة الانطلاق المثالية للمبتدئين. تم تصميمها لبناء أساس قوي في النطق والقراءة باللغة العربية. سيتعلم الطلاب خطوة بخطوة الحروف الأبجدية العربية ومخارج الحروف الصحيحة.',
        what_you_will_learn: ['التعرف على الحروف العربية', 'النطق الصحيح (المخارج)', 'ربط الحروف لتكوين الكلمات', 'القواعد الأساسية للتجويد']
      },
      {
        locale: 'zh',
        title: '基础教程 (Qaida)',
        short_description: '学习阅读古兰经的基础课程。',
        detailed_description: '我们的 Noorani Qaida 课程是初学者的完美起点。它旨在为阿拉伯语发音和阅读打下坚实的基础。学生将逐步学习阿拉伯语字母、正确的发音部位 (Makharij) 以及流利阅读古兰经所需的基本规则。',
        what_you_will_learn: ['识别阿拉伯字母', '正确的发音 (Makharij)', '连接字母组成单词', 'Tajweed 的基本规则']
      },
      {
        locale: 'hi',
        title: 'कायदा',
        short_description: 'कुरान पढ़ना सीखने के लिए बुनियादी पाठ्यक्रम।',
        detailed_description: 'हमारा नूरानी कायदा पाठ्यक्रम शुरुआती लोगों के लिए एकदम सही प्रारंभिक बिंदु है। इसे अरबी उच्चारण और पढ़ने में एक मजबूत नींव बनाने के लिए डिज़ाइन किया गया है। चरण-दर-चरण, छात्र अरबी वर्णमाला और सही उच्चारण सीखेंगे।',
        what_you_will_learn: ['अरबी अक्षरों की पहचान', 'सही उच्चारण (मखारिज)', 'शब्द बनाने के लिए अक्षरों को जोड़ना', 'तजवीद के मूल नियम']
      }
    ]
  },
  {
    id: 'course-3',
    slug: 'tarjuma',
    image_url: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=1000&auto=format&fit=crop',
    price: 8000,
    duration: '6 Months',
    level: 'Intermediate',
    is_featured: true,
    is_published: true,
    lessons_count: 60,
    translations: [
      {
        locale: 'en',
        title: 'Tarjuma',
        short_description: 'Understand the meaning of the Quranic verses in your language.',
        detailed_description: 'The Tarjuma course focuses on the word-by-word and contextual translation of the Holy Quran. It empowers students to understand the direct meaning of the Arabic text in their native language, bridging the gap between recitation and true comprehension.',
        what_you_will_learn: ['Word-by-word Arabic vocabulary', 'Contextual translation of Surahs', 'Grammatical structure of verses', 'Independent comprehension of the text']
      },
      {
        locale: 'ur',
        title: 'ترجمہ',
        short_description: 'اپنی زبان میں قرآنی آیات کے معنی سمجھیں۔',
        detailed_description: 'ترجمہ کورس قرآن پاک کے لفظ بہ لفظ اور سیاق و سباق کے ترجمے پر مرکوز ہے۔ یہ طلباء کو اپنی مادری زبان میں عربی متن کے براہ راست معنی سمجھنے کے قابل بناتا ہے، تاکہ تلاوت اور فہم کے درمیان فاصلہ ختم ہو سکے۔',
        what_you_will_learn: ['لفظ بہ لفظ عربی الفاظ کے معنی', 'سورتوں کا سیاق و سباق کے ساتھ ترجمہ', 'آیات کی گرامر کی ساخت', 'متن کی آزادانہ تفہیم']
      },
      {
        locale: 'ar',
        title: 'ترجمة',
        short_description: 'افهم معاني الآيات القرآنية بلغتك.',
        detailed_description: 'تركز دورة الترجمة على الترجمة الحرفية والسياقية للقرآن الكريم. إنها تمكن الطلاب من فهم المعنى المباشر للنص العربي بلغتهم الأم، وسد الفجوة بين التلاوة والفهم الحقيقي.',
        what_you_will_learn: ['مفردات عربية كلمة بكلمة', 'الترجمة السياقية للسور', 'التركيب النحوي للآيات', 'الفهم المستقل للنص']
      },
      {
        locale: 'zh',
        title: '翻译 (Tarjuma)',
        short_description: '用您的语言理解古兰经经文的含义。',
        detailed_description: '翻译课程侧重于《古兰经》的逐字和上下文翻译。它使学生能够用母语理解阿拉伯语文本的直接含义，从而弥合了诵读和真正理解之间的差距。',
        what_you_will_learn: ['逐字的阿拉伯语词汇', '古兰经章节的上下文翻译', '经文的语法结构', '文本的独立理解']
      },
      {
        locale: 'hi',
        title: 'तर्जुमा',
        short_description: 'अपनी भाषा में कुरान की आयतों का अर्थ समझें।',
        detailed_description: 'तर्जुमा पाठ्यक्रम पवित्र कुरान के शब्द-दर-शब्द और प्रासंगिक अनुवाद पर केंद्रित है। यह छात्रों को अपनी मूल भाषा में अरबी पाठ के प्रत्यक्ष अर्थ को समझने का अधिकार देता है, जिससे पाठ और वास्तविक समझ के बीच की खाई पाटती है।',
        what_you_will_learn: ['शब्द-दर-शब्द अरबी शब्दावली', 'सूरत का प्रासंगिक अनुवाद', 'छंदों की व्याकरणिक संरचना', 'पाठ की स्वतंत्र समझ']
      }
    ]
  },
  {
    id: 'course-4',
    slug: 'khatm-ul-quran',
    image_url: 'https://images.unsplash.com/photo-1519817650390-64a4560a340a?q=80&w=1000&auto=format&fit=crop',
    price: 7000,
    duration: '6 Months',
    level: 'All Levels',
    is_featured: true,
    is_published: true,
    lessons_count: 90,
    translations: [
      {
        locale: 'en',
        title: 'Khatm-ul-Quran',
        short_description: 'Guided recitation and completion of the Holy Quran.',
        detailed_description: 'This guided Khatm-ul-Quran program provides a structured schedule for students to complete the recitation of the entire Quran. Under the supervision of a qualified Hafiz or Qari, students will improve their reading fluency while maintaining correct Tajweed throughout their journey.',
        what_you_will_learn: ['Fluid and continuous recitation', 'Consistency in daily Quran reading', 'Maintenance of Tajweed rules', 'Completion of the entire Quran']
      },
      {
        locale: 'ur',
        title: 'ختم القرآن',
        short_description: 'قرآن پاک کی رہنمائی میں تلاوت اور تکمیل۔',
        detailed_description: 'یہ گائیڈڈ ختم القرآن پروگرام طلباء کو پورے قرآن کی تلاوت مکمل کرنے کے لیے ایک منظم شیڈول فراہم کرتا ہے۔ ایک مستند حافظ یا قاری کی نگرانی میں، طلباء اپنے سفر کے دوران صحیح تجوید کو برقرار رکھتے ہوئے اپنی پڑھنے کی روانی کو بہتر بنائیں گے۔',
        what_you_will_learn: ['روانی اور مسلسل تلاوت', 'روزانہ قرآن پڑھنے میں مستقل مزاجی', 'تجوید کے اصولوں کی بحالی', 'پورا قرآن مکمل کرنا']
      },
      {
        locale: 'ar',
        title: 'ختم القرآن',
        short_description: 'تلاوة موجهة وختم القرآن الكريم.',
        detailed_description: 'يوفر برنامج ختم القرآن الموجه جدولًا منظمًا للطلاب لإكمال تلاوة القرآن بأكمله. تحت إشراف حافظ أو قارئ مؤهل، سيقوم الطلاب بتحسين طلاقة القراءة مع الحفاظ على التجويد الصحيح طوال رحلتهم.',
        what_you_will_learn: ['تلاوة سلسة ومستمرة', 'الاتساق في قراءة القرآن اليومية', 'المحافظة على أحكام التجويد', 'ختم القرآن الكريم كاملا']
      },
      {
        locale: 'zh',
        title: '完成古兰经 (Khatm-ul-Quran)',
        short_description: '指导诵读并完成古兰经。',
        detailed_description: '这个指导性的 Khatm-ul-Quran 计划为学生提供了一个结构化的时间表，以完成整本古兰经的诵读。在合格的 Hafiz 或 Qari 的监督下，学生将提高他们的阅读流利度，同时在整个旅程中保持正确的 Tajweed。',
        what_you_will_learn: ['流畅和连续的诵读', '日常古兰经阅读的连贯性', '维护 Tajweed 规则', '完成整部古兰经']
      },
      {
        locale: 'hi',
        title: 'खत्म-उल-कुरान',
        short_description: 'निर्देशित पाठ और पवित्र कुरान का पूरा होना।',
        detailed_description: 'यह निर्देशित खत्म-उल-कुरान कार्यक्रम छात्रों को पूरे कुरान का पाठ पूरा करने के लिए एक संरचित कार्यक्रम प्रदान करता है। एक योग्य हाफिज या कारी की देखरेख में, छात्र अपनी पूरी यात्रा के दौरान सही तजवीद बनाए रखते हुए अपनी पढ़ने की प्रवाह में सुधार करेंगे।',
        what_you_will_learn: ['द्रव और निरंतर पाठ', 'दैनिक कुरान पढ़ने में निरंतरता', 'तजवीद नियमों का रखरखाव', 'पूरे कुरान का पूरा होना']
      }
    ]
  },
  {
    id: 'course-5',
    slug: 'hifz',
    image_url: 'https://images.unsplash.com/photo-1579621970221-50e531fb5b26?q=80&w=1000&auto=format&fit=crop',
    price: 15000,
    duration: '2 Years',
    level: 'Advanced',
    is_featured: true,
    is_published: true,
    lessons_count: 240,
    translations: [
      {
        locale: 'en',
        title: 'Hifz (Memorization)',
        short_description: 'Memorize the Holy Quran with proper Tajweed.',
        detailed_description: 'The Hifz program is a dedicated memorization course for dedicated students. Our experienced teachers use proven memorization techniques and daily revision strategies to help students memorize the Quran efficiently while retaining it in their long-term memory.',
        what_you_will_learn: ['Memorization of the entire Quran', 'Retention techniques and daily revision schedules', 'Perfecting Tajweed while reciting from memory', 'Spiritual discipline and focus']
      },
      {
        locale: 'ur',
        title: 'حفظ (قرآن یاد کرنا)',
        short_description: 'صحیح تجوید کے ساتھ قرآن پاک حفظ کریں۔',
        detailed_description: 'حفظ پروگرام ایک سرشار حفظ کورس ہے۔ ہمارے تجربہ کار اساتذہ طلباء کو مؤثر طریقے سے قرآن حفظ کرنے میں مدد کے لیے ثابت شدہ حفظ کی تکنیکوں اور روزانہ نظر ثانی کی حکمت عملیوں کا استعمال کرتے ہیں۔',
        what_you_will_learn: ['پورے قرآن کا حفظ', 'یاد رکھنے کی تکنیک اور روزانہ نظر ثانی کا شیڈول', 'یادداشت سے تلاوت کرتے ہوئے تجوید کو کامل بنانا', 'روحانی نظم و ضبط اور توجہ']
      },
      {
        locale: 'ar',
        title: 'حفظ',
        short_description: 'حفظ القرآن الكريم بالتجويد الصحيح.',
        detailed_description: 'برنامج الحفظ هو دورة حفظ مخصصة للطلاب المتفانين. يستخدم مدرسونا ذوو الخبرة تقنيات حفظ مجربة واستراتيجيات مراجعة يومية لمساعدة الطلاب على حفظ القرآن بكفاءة.',
        what_you_will_learn: ['حفظ القرآن الكريم كاملا', 'تقنيات الاستبقاء وجداول المراجعة اليومية', 'إتقان التجويد عند التلاوة عن ظهر قلب', 'الانضباط الروحي والتركيز']
      },
      {
        locale: 'zh',
        title: '背诵 (Hifz)',
        short_description: '用正确的 Tajweed 背诵古兰经。',
        detailed_description: 'Hifz 计划是为专职学生开设的专门背诵课程。我们经验丰富的老师使用经过验证的背诵技巧和每日复习策略，帮助学生高效背诵古兰经。',
        what_you_will_learn: ['背诵整本古兰经', '保留技巧和日常复习时间表', '凭记忆背诵时完善 Tajweed', '精神纪律和专注']
      },
      {
        locale: 'hi',
        title: 'हिफ़्ज़ (कंठस्थ करना)',
        short_description: 'सही तजवीद के साथ पवित्र कुरान को कंठस्थ करें।',
        detailed_description: 'हिफ़्ज़ कार्यक्रम समर्पित छात्रों के लिए एक समर्पित संस्मरण पाठ्यक्रम है। हमारे अनुभवी शिक्षक छात्रों को कुरान को कुशलतापूर्वक याद करने में मदद करने के लिए सिद्ध संस्मरण तकनीकों और दैनिक संशोधन रणनीतियों का उपयोग करते हैं।',
        what_you_will_learn: ['पूरे कुरान को कंठस्थ करना', 'प्रतिधारण तकनीक और दैनिक संशोधन कार्यक्रम', 'स्मृति से पाठ करते समय तजवीद को पूर्ण करना', 'आध्यात्मिक अनुशासन और ध्यान']
      }
    ]
  },
  {
    id: 'course-6',
    slug: 'islamic-studies',
    image_url: 'https://images.unsplash.com/photo-1596772740924-d2e3be77ce71?q=80&w=1000&auto=format&fit=crop',
    price: 6000,
    duration: '4 Months',
    level: 'Beginner',
    is_featured: true,
    is_published: true,
    lessons_count: 40,
    translations: [
      {
        locale: 'en',
        title: 'Islamic Studies',
        short_description: 'Fundamental concepts of Islam, Fiqh, and Seerah.',
        detailed_description: 'This foundational course in Islamic Studies provides essential knowledge about the core pillars of Islam. Students will learn basic Fiqh (Islamic jurisprudence), Seerah (life of Prophet Muhammad PBUH), and fundamental Islamic ethics required to live a righteous life according to the Sunnah.',
        what_you_will_learn: ['Core pillars of Islam and Iman', 'Basic Fiqh (Wudu, Salah, Fasting)', 'Seerah of Prophet Muhammad (PBUH)', 'Islamic manners and daily Duas']
      },
      {
        locale: 'ur',
        title: 'اسلامیات',
        short_description: 'اسلام، فقہ اور سیرت کے بنیادی تصورات۔',
        detailed_description: 'مطالعہ اسلام کا یہ بنیادی کورس اسلام کے بنیادی ستونوں کے بارے میں ضروری معلومات فراہم کرتا ہے۔ طلباء بنیادی فقہ، سیرت، اور سنت کے مطابق زندگی گزارنے کے لیے ضروری اسلامی اخلاقیات سیکھیں گے۔',
        what_you_will_learn: ['اسلام اور ایمان کے بنیادی ستون', 'بنیادی فقہ (وضو، نماز، روزہ)', 'سیرت النبی ﷺ', 'اسلامی آداب اور روزمرہ کی دعائیں']
      },
      {
        locale: 'ar',
        title: 'دراسات إسلامية',
        short_description: 'المفاهيم الأساسية للإسلام والفقه والسيرة.',
        detailed_description: 'توفر هذه الدورة التأسيسية في الدراسات الإسلامية المعرفة الأساسية حول الأركان الأساسية للإسلام. سيتعلم الطلاب الفقه الأساسي والسيرة النبوية والأخلاق الإسلامية الأساسية.',
        what_you_will_learn: ['الأركان الأساسية للإسلام والإيمان', 'الفقه الأساسي (الوضوء، الصلاة، الصيام)', 'سيرة النبي محمد (صلى الله عليه وسلم)', 'الآداب الإسلامية والأدعية اليومية']
      },
      {
        locale: 'zh',
        title: '伊斯兰研究',
        short_description: '伊斯兰教、Fiqh 和 Seerah 的基本概念。',
        detailed_description: '这门伊斯兰研究的基础课程提供了有关伊斯兰教核心支柱的基本知识。学生将学习基本的 Fiqh（伊斯兰教法）、Seerah（先知穆罕默德 PBUH 的生活）和基本的伊斯兰道德。',
        what_you_will_learn: ['伊斯兰教和伊玛尼的核心支柱', '基础 Fiqh（Wudu、Salah、禁食）', '先知穆罕默德 (PBUH) 的 Seerah', '伊斯兰礼仪和日常 Duas']
      },
      {
        locale: 'hi',
        title: 'इस्लामिक अध्ययन',
        short_description: 'इस्लाम, फ़िक़्ह और सीरत की मूलभूत अवधारणाएँ।',
        detailed_description: 'इस्लामी अध्ययन में यह मूलभूत पाठ्यक्रम इस्लाम के मुख्य स्तंभों के बारे में आवश्यक ज्ञान प्रदान करता है। छात्र सुन्नत के अनुसार जीवन जीने के लिए आवश्यक बुनियादी फ़िक़्ह, सीरत और बुनियादी इस्लामी नैतिकता सीखेंगे।',
        what_you_will_learn: ['इस्लाम और ईमान के मुख्य स्तंभ', 'बेसिक फ़िक़्ह (वुज़ू, नमाज़, रोज़ा)', 'पैगंबर मुहम्मद (PBUH) की सीरत', 'इस्लामी शिष्टाचार और दैनिक दुआएं']
      }
    ]
  }
];

export const mockLessons = [
  {
    id: 'lesson-1',
    course_id: 'course-1',
    day_number: 1,
    status: 'PUBLISHED',
    translations: [
      {
        locale: 'en',
        title: 'Introduction to Arabic Alphabet',
        description: 'Learn the first 7 letters of the Arabic alphabet.',
        content: 'The Arabic alphabet consists of 28 letters. In this lesson, we will cover Alif to Kha.'
      }
    ]
  }
];

export async function getCourses(locale: string) {
  return mockCourses.map(course => {
    const translation = course.translations.find(t => t.locale === locale) || course.translations[0];
    return {
      ...course,
      title: translation.title,
      short_description: translation.short_description,
      detailed_description: translation.detailed_description,
      what_you_will_learn: translation.what_you_will_learn,
    };
  });
}

export async function getCourseBySlug(slug: string, locale: string) {
  const course = mockCourses.find(c => c.slug === slug);
  if (!course) return null;
  
  const translation = course.translations.find(t => t.locale === locale) || course.translations[0];
  return {
    ...course,
    title: translation.title,
    short_description: translation.short_description,
    detailed_description: translation.detailed_description,
    what_you_will_learn: translation.what_you_will_learn,
  };
}
