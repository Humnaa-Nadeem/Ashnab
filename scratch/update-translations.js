const fs = require('fs');
const path = require('path');

const locales = ['en', 'ur', 'ar', 'zh', 'hi'];
const messagesDir = path.join('W:', 'quraaninstitute', 'messages');

const newKeys = {
  en: {
    aboutThisCourse: "About This Course",
    whatYouWillLearn: "What You Will Learn",
    level: "Level",
    duration: "Duration",
    certificate: "Certificate",
    yes: "Yes",
    askOnWhatsapp: "Ask on WhatsApp"
  },
  ur: {
    aboutThisCourse: "اس کورس کے بارے میں",
    whatYouWillLearn: "آپ کیا سیکھیں گے",
    level: "سطح",
    duration: "دورانیہ",
    certificate: "سرٹیفکیٹ",
    yes: "جی ہاں",
    askOnWhatsapp: "واٹس ایپ پر پوچھیں"
  },
  ar: {
    aboutThisCourse: "عن هذه الدورة",
    whatYouWillLearn: "ماذا ستتعلم",
    level: "المستوى",
    duration: "المدة",
    certificate: "شهادة",
    yes: "نعم",
    askOnWhatsapp: "اسأل على الواتساب"
  },
  zh: {
    aboutThisCourse: "关于本课程",
    whatYouWillLearn: "你将学到什么",
    level: "级别",
    duration: "持续时间",
    certificate: "证书",
    yes: "是的",
    askOnWhatsapp: "在 WhatsApp 上询问"
  },
  hi: {
    aboutThisCourse: "इस पाठ्यक्रम के बारे में",
    whatYouWillLearn: "आप क्या सीखेंगे",
    level: "स्तर",
    duration: "अवधि",
    certificate: "प्रमाणपत्र",
    yes: "हाँ",
    askOnWhatsapp: "व्हाट्सएप पर पूछें"
  }
};

for (const locale of locales) {
  const filePath = path.join(messagesDir, `${locale}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Merge into Courses namespace
  if (!data.Courses) {
    data.Courses = {};
  }
  
  data.Courses = { ...data.Courses, ...newKeys[locale] };
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

console.log("Translation keys added successfully!");
