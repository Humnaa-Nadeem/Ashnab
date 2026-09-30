const fs = require('fs');
const path = require('path');

const locales = ['en', 'ur', 'ar', 'zh', 'hi'];
const messagesDir = path.join('W:', 'quraaninstitute', 'messages');

const newKeys = {
  en: {
    step1Subtitle: "Enter your email address to login or create a new account.",
    emailLabel: "Email Address",
    sendCode: "Send Verification Code",
    step2Subtitle: "We've sent a 6-digit verification code to your email.",
    verificationCode: "Verification Code",
    verifyCodePlaceholder: "Enter 6-digit code",
    verifyAndLogin: "Verify & Login",
    back: "Back",
    codeSent: "Verification code sent!",
    invalidCode: "Invalid code. For demo, use: 123456"
  },
  ur: {
    step1Subtitle: "لاگ ان کرنے یا نیا اکاؤنٹ بنانے کے لیے اپنا ای میل ایڈریس درج کریں۔",
    emailLabel: "ای میل ایڈریس",
    sendCode: "تصدیقی کوڈ بھیجیں",
    step2Subtitle: "ہم نے آپ کے ای میل پر 6 ہندسوں کا تصدیقی کوڈ بھیجا ہے۔",
    verificationCode: "تصدیقی کوڈ",
    verifyCodePlaceholder: "6 ہندسوں کا کوڈ درج کریں",
    verifyAndLogin: "تصدیق کریں اور لاگ ان کریں",
    back: "پیچھے",
    codeSent: "تصدیقی کوڈ بھیج دیا گیا!",
    invalidCode: "غلط کوڈ۔ ڈیمو کے لیے استعمال کریں: 123456"
  },
  ar: {
    step1Subtitle: "أدخل عنوان بريدك الإلكتروني لتسجيل الدخول أو إنشاء حساب جديد.",
    emailLabel: "عنوان البريد الإلكتروني",
    sendCode: "إرسال رمز التحقق",
    step2Subtitle: "لقد أرسلنا رمز تحقق مكون من 6 أرقام إلى بريدك الإلكتروني.",
    verificationCode: "رمز التحقق",
    verifyCodePlaceholder: "أدخل الرمز المكون من 6 أرقام",
    verifyAndLogin: "تحقق وسجل الدخول",
    back: "خلف",
    codeSent: "تم إرسال رمز التحقق!",
    invalidCode: "رمز غير صالح. للعرض التوضيحي، استخدم: 123456"
  },
  zh: {
    step1Subtitle: "输入您的电子邮件地址以登录或创建一个新帐户。",
    emailLabel: "电子邮件地址",
    sendCode: "发送验证码",
    step2Subtitle: "我们已将 6 位验证码发送至您的电子邮件。",
    verificationCode: "验证码",
    verifyCodePlaceholder: "输入 6 位代码",
    verifyAndLogin: "验证并登录",
    back: "后退",
    codeSent: "验证码已发送！",
    invalidCode: "无效代码。对于演示，请使用：123456"
  },
  hi: {
    step1Subtitle: "लॉग इन करने या नया खाता बनाने के लिए अपना ईमेल पता दर्ज करें।",
    emailLabel: "ईमेल पता",
    sendCode: "सत्यापन कोड भेजें",
    step2Subtitle: "हमने आपके ईमेल पर 6 अंकों का सत्यापन कोड भेजा है।",
    verificationCode: "सत्यापन कोड",
    verifyCodePlaceholder: "6 अंकों का कोड दर्ज करें",
    verifyAndLogin: "सत्यापित करें और लॉग इन करें",
    back: "पीछे",
    codeSent: "सत्यापन कोड भेजा गया!",
    invalidCode: "अमान्य कोड। डेमो के लिए, उपयोग करें: 123456"
  }
};

for (const locale of locales) {
  const filePath = path.join(messagesDir, `${locale}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  if (!data.StudentAccess) {
    data.StudentAccess = {};
  }
  
  data.StudentAccess = { ...data.StudentAccess, ...newKeys[locale] };
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

console.log("Translation keys added successfully!");
