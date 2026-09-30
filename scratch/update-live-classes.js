const fs = require('fs');
const path = require('path');

const locales = ['en', 'ur', 'ar', 'zh', 'hi'];
const messagesDir = path.join('W:', 'quraaninstitute', 'messages');

const newKeys = {
  en: {
    title: "Live Interactive Classes",
    subtitle: "Experience personalized, one-on-one Quranic education with expert scholars from the comfort of your home.",
    featuresTitle: "Why Choose Our Live Classes?",
    f1Title: "1-on-1 Personalized Attention",
    f1Desc: "Every student gets dedicated focus from the instructor to ensure correct pronunciation and steady progress.",
    f2Title: "Flexible Scheduling",
    f2Desc: "Choose class timings that perfectly fit your daily routine and time zone.",
    f3Title: "Female Instructors Available",
    f3Desc: "Dedicated female scholars available for sisters and children, ensuring a comfortable learning environment.",
    f4Title: "Interactive Digital Tools",
    f4Desc: "Advanced screen-sharing and visual aids for an immersive Tajweed learning experience.",
    howItWorksTitle: "How It Works",
    step1Title: "1. Choose a Course",
    step1Desc: "Select from our range of specialized courses like Tajweed, Hifz, or Translation.",
    step2Title: "2. Schedule Your Class",
    step2Desc: "Pick a time that works best for you. Classes are available 24/7.",
    step3Title: "3. Start Learning",
    step3Desc: "Join your instructor live via Zoom or Google Meet and begin your journey.",
    ctaTitle: "Ready to start your journey?",
    ctaButton: "Browse Courses"
  },
  ur: {
    title: "لائیو انٹرایکٹو کلاسز",
    subtitle: "اپنے گھر کے آرام سے ماہر علمائے کرام کے ساتھ ذاتی نوعیت کی، ون آن ون قرآنی تعلیم کا تجربہ کریں۔",
    featuresTitle: "ہماری لائیو کلاسز کا انتخاب کیوں کریں؟",
    f1Title: "ون آن ون ذاتی توجہ",
    f1Desc: "صحیح تلفظ اور مستحکم ترقی کو یقینی بنانے کے لیے ہر طالب علم کو انسٹرکٹر کی مکمل توجہ ملتی ہے۔",
    f2Title: "لچکدار نظام الاوقات",
    f2Desc: "ایسے اوقات کا انتخاب کریں جو آپ کے روزمرہ کے معمولات اور ٹائم زون کے مطابق ہوں۔",
    f3Title: "خواتین اساتذہ دستیاب ہیں",
    f3Desc: "بہنوں اور بچوں کے لیے خواتین اساتذہ دستیاب ہیں تاکہ سیکھنے کا آرام دہ ماحول یقینی بنایا جا سکے۔",
    f4Title: "انٹرایکٹو ڈیجیٹل ٹولز",
    f4Desc: "تجوید سیکھنے کے بہترین تجربے کے لیے اسکرین شیئرنگ اور بصری معاونت۔",
    howItWorksTitle: "یہ کیسے کام کرتا ہے",
    step1Title: "1. کورس منتخب کریں",
    step1Desc: "تجوید، حفظ، یا ترجمہ جیسے ہمارے خصوصی کورسز میں سے انتخاب کریں۔",
    step2Title: "2. اپنی کلاس کا شیڈول بنائیں",
    step2Desc: "ایسا وقت منتخب کریں جو آپ کے لیے بہترین ہو۔ کلاسز 24/7 دستیاب ہیں۔",
    step3Title: "3. سیکھنا شروع کریں",
    step3Desc: "زوم یا گوگل میٹ کے ذریعے اپنے انسٹرکٹر کے ساتھ لائیو شامل ہوں۔",
    ctaTitle: "اپنا سفر شروع کرنے کے لیے تیار ہیں؟",
    ctaButton: "کورسز براؤز کریں"
  },
  ar: {
    title: "فصول تفاعلية مباشرة",
    subtitle: "جرب تعليمًا قرآنيًا مخصصًا فرديًا مع علماء خبراء من راحة منزلك.",
    featuresTitle: "لماذا تختار فصولنا المباشرة؟",
    f1Title: "اهتمام فردي مخصص",
    f1Desc: "يحصل كل طالب على تركيز مخصص من المعلم لضمان النطق الصحيح والتقدم المطرد.",
    f2Title: "جدولة مرنة",
    f2Desc: "اختر أوقات الفصول التي تتناسب تمامًا مع روتينك اليومي ومنطقتك الزمنية.",
    f3Title: "معلمات متاحين",
    f3Desc: "عالمات متخصصات متاحات للأخوات والأطفال، لضمان بيئة تعليمية مريحة.",
    f4Title: "أدوات رقمية تفاعلية",
    f4Desc: "مشاركة متقدمة للشاشة ووسائل مساعدة بصرية لتجربة تعليمية غامرة في التجويد.",
    howItWorksTitle: "كيف تعمل",
    step1Title: "1. اختر دورة",
    step1Desc: "اختر من بين مجموعتنا من الدورات المتخصصة مثل التجويد أو الحفظ أو الترجمة.",
    step2Title: "2. حدد موعد فصلك",
    step2Desc: "اختر الوقت الذي يناسبك. الفصول متاحة على مدار الساعة.",
    step3Title: "3. ابدأ التعلم",
    step3Desc: "انضم إلى معلمك مباشرة عبر Zoom أو Google Meet وابدأ رحلتك.",
    ctaTitle: "هل أنت مستعد لبدء رحلتك؟",
    ctaButton: "تصفح الدورات"
  },
  zh: {
    title: "现场互动课程",
    subtitle: "在舒适的家中与专家学者一起体验个性化的一对一古兰经教育。",
    featuresTitle: "为什么选择我们的直播课程？",
    f1Title: "一对一的个性化关注",
    f1Desc: "每个学生都会得到讲师的专心指导，以确保正确的发音和稳定的进步。",
    f2Title: "灵活的日程安排",
    f2Desc: "选择完全符合您日常生活和时区的上课时间。",
    f3Title: "提供女讲师",
    f3Desc: "专为姐妹和儿童提供女学者，确保舒适的学习环境。",
    f4Title: "交互式数字工具",
    f4Desc: "高级屏幕共享和视觉辅助工具，带来身临其境的 Tajweed 学习体验。",
    howItWorksTitle: "怎么运作的",
    step1Title: "1. 选择一门课程",
    step1Desc: "从我们的一系列专业课程中进行选择，如 Tajweed、Hifz 或 Translation。",
    step2Title: "2. 安排您的课程",
    step2Desc: "选择最适合您的时间。课程全天候提供。",
    step3Title: "3. 开始学习",
    step3Desc: "通过 Zoom 或 Google Meet 与您的讲师实时汇合，开始您的旅程。",
    ctaTitle: "准备好开始您的旅程了吗？",
    ctaButton: "浏览课程"
  },
  hi: {
    title: "लाइव इंटरएक्टिव कक्षाएं",
    subtitle: "अपने घर के आराम से विशेषज्ञ विद्वानों के साथ व्यक्तिगत, आमने-सामने कुरान शिक्षा का अनुभव करें।",
    featuresTitle: "हमारी लाइव कक्षाएं क्यों चुनें?",
    f1Title: "आमने-सामने व्यक्तिगत ध्यान",
    f1Desc: "सही उच्चारण और स्थिर प्रगति सुनिश्चित करने के लिए प्रत्येक छात्र को प्रशिक्षक से समर्पित ध्यान मिलता है।",
    f2Title: "लचीला समय निर्धारण",
    f2Desc: "कक्षा के समय का चयन करें जो आपकी दिनचर्या और समय क्षेत्र के अनुकूल हो।",
    f3Title: "महिला प्रशिक्षक उपलब्ध",
    f3Desc: "बहनों और बच्चों के लिए समर्पित महिला विद्वान उपलब्ध हैं, जो एक आरामदायक सीखने का माहौल सुनिश्चित करती हैं।",
    f4Title: "इंटरएक्टिव डिजिटल उपकरण",
    f4Desc: "एक इमर्सिव तजवीद सीखने के अनुभव के लिए उन्नत स्क्रीन-शेयरिंग और दृश्य सहायक सामग्री।",
    howItWorksTitle: "यह कैसे काम करता है",
    step1Title: "1. एक कोर्स चुनें",
    step1Desc: "तजवीद, हिफ़्ज़ या अनुवाद जैसे हमारे विशेष पाठ्यक्रमों की श्रृंखला में से चुनें।",
    step2Title: "2. अपनी कक्षा निर्धारित करें",
    step2Desc: "वह समय चुनें जो आपके लिए सबसे अच्छा हो। कक्षाएं 24/7 उपलब्ध हैं।",
    step3Title: "3. सीखना शुरू करें",
    step3Desc: "ज़ूम या Google मीट के माध्यम से अपने प्रशिक्षक के साथ लाइव जुड़ें और अपनी यात्रा शुरू करें।",
    ctaTitle: "क्या आप अपनी यात्रा शुरू करने के लिए तैयार हैं?",
    ctaButton: "पाठ्यक्रम ब्राउज़ करें"
  }
};

for (const locale of locales) {
  const filePath = path.join(messagesDir, `${locale}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  if (!data.LiveClasses) {
    data.LiveClasses = {};
  }
  
  data.LiveClasses = { ...data.LiveClasses, ...newKeys[locale] };
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

console.log("Translation keys added successfully!");
