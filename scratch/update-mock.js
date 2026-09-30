const fs = require('fs');
const path = require('path');

const mockPath = path.join('W:', 'quraaninstitute', 'src', 'lib', 'data', 'mock.ts');
let content = fs.readFileSync(mockPath, 'utf8');

// The simplest way to add the translations for the courses without a complex AST is to replace the translations arrays manually.

const replacements = [
  {
    search: `    translations: [
      {
        locale: 'en',
        title: 'Tafsir',
        short_description: 'In-depth explanation and commentary of the Holy Quran.',
        detailed_description: 'Dive deep into the historical context, linguistic nuances, and profound wisdom of the Quran.',
      }
    ]`,
    replace: `    translations: [
      { locale: 'en', title: 'Tafsir', short_description: 'In-depth explanation and commentary of the Holy Quran.', detailed_description: 'Dive deep into the historical context.' },
      { locale: 'ur', title: 'تفسیر', short_description: 'قرآن پاک کی گہرائی سے وضاحت اور تفسیر۔', detailed_description: 'تاریخی تناظر میں غوطہ لگائیں۔' },
      { locale: 'ar', title: 'تفسير', short_description: 'شرح وتفسير متعمق للقرآن الكريم.', detailed_description: 'تعمق في السياق التاريخي.' },
      { locale: 'zh', title: '塔夫斯尔 (Tafsir)', short_description: '对古兰经的深入解释和评论。', detailed_description: '深入研究历史背景。' },
      { locale: 'hi', title: 'तफ़सीर', short_description: 'पवित्र कुरान की गहन व्याख्या और टिप्पणी।', detailed_description: 'ऐतिहासिक संदर्भ में गहराई से उतरें।' }
    ]`
  },
  {
    search: `    translations: [
      {
        locale: 'en',
        title: 'Qaida',
        short_description: 'The foundational course for learning how to read the Quran with proper Tajweed.',
        detailed_description: 'This course is designed for absolute beginners to learn the Arabic alphabet and basic pronunciation rules.',
      }
    ]`,
    replace: `    translations: [
      { locale: 'en', title: 'Qaida', short_description: 'The foundational course for learning how to read the Quran.', detailed_description: 'For absolute beginners.' },
      { locale: 'ur', title: 'قاعدہ', short_description: 'قرآن پڑھنا سیکھنے کے لیے بنیادی کورس۔', detailed_description: 'بالکل ابتدائی افراد کے لیے۔' },
      { locale: 'ar', title: 'قاعدة', short_description: 'الدورة التأسيسية لتعلم كيفية قراءة القرآن.', detailed_description: 'للمبتدئين تماما.' },
      { locale: 'zh', title: '基础教程 (Qaida)', short_description: '学习阅读古兰经的基础课程。', detailed_description: '绝对适合初学者。' },
      { locale: 'hi', title: 'कायदा', short_description: 'कुरान पढ़ना सीखने के लिए बुनियादी पाठ्यक्रम।', detailed_description: 'बिल्कुल शुरुआती लोगों के लिए।' }
    ]`
  },
  {
    search: `    translations: [
      {
        locale: 'en',
        title: 'Tarjuma',
        short_description: 'Understand the meaning of the Quranic verses in your language.',
        detailed_description: 'A comprehensive course covering word-by-word and contextual translation of selected Surahs.',
      }
    ]`,
    replace: `    translations: [
      { locale: 'en', title: 'Tarjuma', short_description: 'Understand the meaning of the Quranic verses.', detailed_description: 'Word-by-word translation.' },
      { locale: 'ur', title: 'ترجمہ', short_description: 'قرآنی آیات کے معنی سمجھیں۔', detailed_description: 'لفظ بہ لفظ ترجمہ۔' },
      { locale: 'ar', title: 'ترجمة', short_description: 'افهم معاني الآيات القرآنية.', detailed_description: 'ترجمة كلمة بكلمة.' },
      { locale: 'zh', title: '翻译 (Tarjuma)', short_description: '理解古兰经经文的含义。', detailed_description: '逐字翻译。' },
      { locale: 'hi', title: 'तर्जुमा', short_description: 'कुरान की आयतों का अर्थ समझें।', detailed_description: 'शब्द-दर-शब्द अनुवाद।' }
    ]`
  },
  {
    search: `    translations: [
      {
        locale: 'en',
        title: 'Khatm-ul-Quran',
        short_description: 'Guided recitation and completion of the Holy Quran.',
        detailed_description: 'A structured program to help you complete the recitation of the entire Quran under expert supervision.',
      }
    ]`,
    replace: `    translations: [
      { locale: 'en', title: 'Khatm-ul-Quran', short_description: 'Guided recitation and completion of the Quran.', detailed_description: 'Structured program.' },
      { locale: 'ur', title: 'ختم القرآن', short_description: 'قرآن پاک کی رہنمائی میں تلاوت اور تکمیل۔', detailed_description: 'منظم پروگرام۔' },
      { locale: 'ar', title: 'ختم القرآن', short_description: 'تلاوة موجهة وختم القرآن الكريم.', detailed_description: 'برنامج منظم.' },
      { locale: 'zh', title: '完成古兰经 (Khatm-ul-Quran)', short_description: '指导诵读并完成古兰经。', detailed_description: '结构化计划。' },
      { locale: 'hi', title: 'खत्म-उल-कुरान', short_description: 'निर्देशित पाठ और कुरान का पूरा होना।', detailed_description: 'संरचित कार्यक्रम।' }
    ]`
  },
  {
    search: `    translations: [
      {
        locale: 'en',
        title: 'Course 5',
        short_description: 'Coming soon. Stay tuned for more details.',
        detailed_description: 'This course is currently in development. More information will be provided soon.',
      }
    ]`,
    replace: `    translations: [
      { locale: 'en', title: 'Course 5', short_description: 'Coming soon. Stay tuned.', detailed_description: 'In development.' },
      { locale: 'ur', title: 'کورس 5', short_description: 'جلد آ رہا ہے۔', detailed_description: 'ترقی میں ہے۔' },
      { locale: 'ar', title: 'دورة 5', short_description: 'قريبا.', detailed_description: 'قيد التطوير.' },
      { locale: 'zh', title: '课程 5', short_description: '即将推出。', detailed_description: '开发中。' },
      { locale: 'hi', title: 'पाठ्यक्रम 5', short_description: 'जल्द आ रहा है।', detailed_description: 'विकास में है।' }
    ]`
  },
  {
    search: `    translations: [
      {
        locale: 'en',
        title: 'Course 6',
        short_description: 'Coming soon. Stay tuned for more details.',
        detailed_description: 'This course is currently in development. More information will be provided soon.',
      }
    ]`,
    replace: `    translations: [
      { locale: 'en', title: 'Course 6', short_description: 'Coming soon. Stay tuned.', detailed_description: 'In development.' },
      { locale: 'ur', title: 'کورس 6', short_description: 'جلد آ رہا ہے۔', detailed_description: 'ترقی میں ہے۔' },
      { locale: 'ar', title: 'دورة 6', short_description: 'قريبا.', detailed_description: 'قيد التطوير.' },
      { locale: 'zh', title: '课程 6', short_description: '即将推出。', detailed_description: '开发中。' },
      { locale: 'hi', title: 'पाठ्यक्रम 6', short_description: 'जल्द आ रहा है।', detailed_description: 'विकास में है।' }
    ]`
  }
];

let foundAll = true;
for (const r of replacements) {
  if (content.includes(r.search)) {
    content = content.replace(r.search, r.replace);
  } else {
    console.error('Could not find chunk:', r.search.trim().substring(0, 30));
    foundAll = false;
  }
}

if (foundAll) {
  fs.writeFileSync(mockPath, content);
  console.log("Mock data updated successfully!");
} else {
  console.log("Failed to update all mock data.");
}
