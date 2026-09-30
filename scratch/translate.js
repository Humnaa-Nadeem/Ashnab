const fs = require('fs');
const path = require('path');

const locales = ['en', 'ur', 'ar', 'zh', 'hi'];

// Define all translations
const translations = {
  en: {
    Navigation: {
      home: "Home", courses: "Courses", about: "About Us", liveClasses: "Live Classes",
      faq: "FAQ", contact: "Contact", studentAccess: "Student Access", dashboard: "Dashboard",
      admin: "Admin"
    },
    Footer: {
      description: "Learn the Quran. Understand Its Message. Live Its Guidance.",
      quickLinks: "Quick Links", legal: "Legal", privacy: "Privacy Policy",
      terms: "Terms of Service", contact: "Contact", allRightsReserved: "All rights reserved."
    },
    HomePage: {
      heroTitle: "Learn the Quran. Understand Its Message. Live Its Guidance.",
      heroSubtitle: "Join Ashnab Quran Institute for authentic Islamic education with experienced teachers.",
      exploreCourses: "Explore Courses", studentAccess: "Student Access",
      whyChooseUs: "Why Learn With Ashnab Quran Institute",
      ourCourses: "Our Courses",
      explorePaths: "Explore our structured learning paths designed for all levels. Start your Quranic journey today.",
      expertTeachers: "Expert Teachers",
      expertTeachersDesc: "Learn from qualified instructors with deep knowledge of the Quran.",
      flexibleLearning: "Flexible Learning",
      flexibleLearningDesc: "Access your lessons anytime and follow a structured curriculum.",
      verifiedCertificates: "Verified Certificates",
      verifiedCertificatesDesc: "Earn a verifiable certificate upon successful completion of your course."
    },
    Admin: { login: "Login" },
    Courses: {
      title: "Our Courses", subtitle: "Choose from our structured courses designed for all levels.",
      enrollNow: "Enroll Now", viewDetails: "View Details", flexibleDuration: "Flexible duration",
      lessons: "Lessons", free: "Free", pkr: "PKR"
    },
    Enroll: {
      enrollIn: "Enroll in", provideDetails: "Please provide your details to begin the enrollment process.",
      fullName: "Full Name", emailAddress: "Email Address", emailHelp: "We'll use this to send your course access code.",
      whatsappNumber: "WhatsApp Number", country: "Country", courseFee: "Course Fee",
      continueToPayment: "Continue to Payment"
    },
    Payment: {
      proofReceived: "Payment Proof Received",
      awaitingVerification: "Your enrollment is currently awaiting verification.",
      referenceNumber: "We have received your payment proof for reference number",
      verificationNotice: "Our team will verify the transaction and activate your access shortly. You will receive your course access details via email or WhatsApp once approved.",
      returnToHome: "Return to Homepage",
      completePayment: "Complete Your Payment",
      followInstructions: "Follow the instructions below to complete your enrollment.",
      enrollmentRef: "Enrollment Ref:",
      courseFee: "Course Fee:",
      easypaisaInstructions: "EasyPaisa Instructions",
      accountDetails: "Account Details",
      accountName: "Account Name:",
      easypaisaNumber: "EasyPaisa Number:",
      step1: "Send the exact course fee to the EasyPaisa number above.",
      step2: "Take a screenshot of the successful transaction.",
      step3: "Upload the screenshot or enter the Transaction ID below.",
      transactionId: "Transaction ID (Optional)",
      paymentScreenshot: "Payment Screenshot",
      uploadPrompt: "Click to upload or drag and drop",
      fileTypes: "PNG, JPG or PDF (max. 5MB)",
      selectFile: "Select File",
      submitProof: "Submit Payment Proof"
    },
    Dashboard: {
      welcome: "Welcome to your Dashboard",
      activeCourses: "Active Courses",
      recentActivity: "Recent Activity",
      continueLearning: "Continue Learning"
    },
    StudentAccess: {
      title: "Student Access",
      subtitle: "Enter your access code to view your courses and progress.",
      accessCode: "Access Code",
      accessCodePlaceholder: "Enter your 6-digit code",
      accessCodeHelp: "Check your email or WhatsApp for your access code.",
      login: "Login to Dashboard"
    }
  },
  ur: {
    Navigation: {
      home: "ہوم", courses: "کورسز", about: "ہمارے بارے میں", liveClasses: "لائیو کلاسز",
      faq: "عمومی سوالات", contact: "رابطہ", studentAccess: "طالب علم کی رسائی", dashboard: "ڈیش بورڈ",
      admin: "ایڈمن"
    },
    Footer: {
      description: "قرآن سیکھیں۔ اس کا پیغام سمجھیں۔ اس کی رہنمائی پر عمل کریں۔",
      quickLinks: "فوری لنکس", legal: "قانونی", privacy: "رازداری کی پالیسی",
      terms: "سروس کی شرائط", contact: "رابطہ کریں", allRightsReserved: "جملہ حقوق محفوظ ہیں۔"
    },
    HomePage: {
      heroTitle: "قرآن سیکھیں۔ اس کا پیغام سمجھیں۔ اس کی رہنمائی پر عمل کریں۔",
      heroSubtitle: "تجربہ کار اساتذہ کے ساتھ مستند اسلامی تعلیم کے لیے اشناب قرآن انسٹی ٹیوٹ میں شامل ہوں۔",
      exploreCourses: "کورسز دریافت کریں", studentAccess: "طالب علم کی رسائی",
      whyChooseUs: "اشناب قرآن انسٹی ٹیوٹ کے ساتھ کیوں سیکھیں",
      ourCourses: "ہمارے کورسز",
      explorePaths: "تمام سطحوں کے لیے تیار کردہ ہمارے سیکھنے کے راستے دریافت کریں۔ آج ہی اپنا قرآنی سفر شروع کریں۔",
      expertTeachers: "ماہر اساتذہ",
      expertTeachersDesc: "قرآن کے گہرے علم کے حامل اہل اساتذہ سے سیکھیں۔",
      flexibleLearning: "لچکدار سیکھنا",
      flexibleLearningDesc: "کسی بھی وقت اپنے اسباق تک رسائی حاصل کریں اور ایک منظم نصاب پر عمل کریں۔",
      verifiedCertificates: "تصدیق شدہ سرٹیفکیٹ",
      verifiedCertificatesDesc: "اپنے کورس کی کامیاب تکمیل پر ایک قابل تصدیق سرٹیفکیٹ حاصل کریں۔"
    },
    Admin: { login: "لاگ ان کریں" },
    Courses: {
      title: "ہمارے کورسز", subtitle: "تمام سطحوں کے لیے تیار کردہ ہمارے کورسز میں سے انتخاب کریں۔",
      enrollNow: "ابھی داخلہ لیں", viewDetails: "تفصیلات دیکھیں", flexibleDuration: "لچکدار دورانیہ",
      lessons: "اسباق", free: "مفت", pkr: "روپے"
    },
    Enroll: {
      enrollIn: "میں داخلہ لیں", provideDetails: "داخلے کا عمل شروع کرنے کے لیے براہ کرم اپنی تفصیلات فراہم کریں۔",
      fullName: "پورا نام", emailAddress: "ای میل ایڈریس", emailHelp: "ہم آپ کا کورس رسائی کوڈ بھیجنے کے لیے اسے استعمال کریں گے۔",
      whatsappNumber: "واٹس ایپ نمبر", country: "ملک", courseFee: "کورس کی فیس",
      continueToPayment: "ادائیگی کی طرف بڑھیں"
    },
    Payment: {
      proofReceived: "ادائیگی کا ثبوت موصول ہوگیا",
      awaitingVerification: "آپ کا داخلہ فی الحال تصدیق کا منتظر ہے۔",
      referenceNumber: "ہمیں حوالہ نمبر کے لیے آپ کی ادائیگی کا ثبوت موصول ہوا ہے",
      verificationNotice: "ہماری ٹیم جلد ہی لین دین کی تصدیق کرے گی اور آپ کی رسائی کو چالو کرے گی۔ منظور ہونے کے بعد آپ کو اپنے کورس تک رسائی کی تفصیلات ای میل یا واٹس ایپ کے ذریعے موصول ہوں گی۔",
      returnToHome: "ہوم پیج پر واپس جائیں",
      completePayment: "اپنی ادائیگی مکمل کریں",
      followInstructions: "اپنا داخلہ مکمل کرنے کے لیے نیچے دی گئی ہدایات پر عمل کریں۔",
      enrollmentRef: "داخلہ حوالہ:",
      courseFee: "کورس کی فیس:",
      easypaisaInstructions: "ایزی پیسہ ہدایات",
      accountDetails: "اکاؤنٹ کی تفصیلات",
      accountName: "اکاؤنٹ کا نام:",
      easypaisaNumber: "ایزی پیسہ نمبر:",
      step1: "کورس کی صحیح فیس اوپر دیے گئے ایزی پیسہ نمبر پر بھیجیں۔",
      step2: "کامیاب لین دین کا اسکرین شاٹ لیں۔",
      step3: "اسکرین شاٹ اپ لوڈ کریں یا نیچے ٹرانزیکشن آئی ڈی درج کریں۔",
      transactionId: "ٹرانزیکشن آئی ڈی (اختیاری)",
      paymentScreenshot: "ادائیگی کا اسکرین شاٹ",
      uploadPrompt: "اپ لوڈ کرنے کے لیے کلک کریں یا ڈریگ اور ڈراپ کریں",
      fileTypes: "PNG، JPG یا PDF (زیادہ سے زیادہ 5MB)",
      selectFile: "فائل منتخب کریں",
      submitProof: "ادائیگی کا ثبوت جمع کروائیں"
    },
    Dashboard: {
      welcome: "اپنے ڈیش بورڈ میں خوش آمدید",
      activeCourses: "فعال کورسز",
      recentActivity: "حالیہ سرگرمی",
      continueLearning: "سیکھنا جاری رکھیں"
    },
    StudentAccess: {
      title: "طالب علم کی رسائی",
      subtitle: "اپنے کورسز اور پیشرفت دیکھنے کے لیے اپنا ایکسیس کوڈ درج کریں۔",
      accessCode: "ایکسیس کوڈ",
      accessCodePlaceholder: "اپنا 6 ہندسوں کا کوڈ درج کریں",
      accessCodeHelp: "اپنے ایکسیس کوڈ کے لیے اپنا ای میل یا واٹس ایپ چیک کریں۔",
      login: "ڈیش بورڈ میں لاگ ان کریں"
    }
  },
  ar: {
    Navigation: {
      home: "الرئيسية", courses: "الدورات", about: "معلومات عنا", liveClasses: "فصول مباشرة",
      faq: "الأسئلة الشائعة", contact: "اتصل بنا", studentAccess: "وصول الطلاب", dashboard: "لوحة القيادة",
      admin: "المسؤول"
    },
    Footer: {
      description: "تعلم القرآن. افهم رسالته. عش بتوجيهاته.",
      quickLinks: "روابط سريعة", legal: "قانوني", privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة", contact: "اتصل بنا", allRightsReserved: "كل الحقوق محفوظة."
    },
    HomePage: {
      heroTitle: "تعلم القرآن. افهم رسالته. عش بتوجيهاته.",
      heroSubtitle: "انضم إلى معهد أشناب للقرآن للحصول على تعليم إسلامي أصيل مع معلمين ذوي خبرة.",
      exploreCourses: "استكشف الدورات", studentAccess: "وصول الطلاب",
      whyChooseUs: "لماذا تتعلم مع معهد أشناب للقرآن",
      ourCourses: "دوراتنا",
      explorePaths: "استكشف مسارات التعلم المنظمة المصممة لجميع المستويات. ابدأ رحلتك القرآنية اليوم.",
      expertTeachers: "معلمون خبراء",
      expertTeachersDesc: "تعلم من مدربين مؤهلين لديهم معرفة عميقة بالقرآن.",
      flexibleLearning: "تعلم مرن",
      flexibleLearningDesc: "قم بالوصول إلى دروسك في أي وقت واتبع منهجًا منظمًا.",
      verifiedCertificates: "شهادات معتمدة",
      verifiedCertificatesDesc: "احصل على شهادة يمكن التحقق منها عند الانتهاء بنجاح من الدورة."
    },
    Admin: { login: "تسجيل الدخول" },
    Courses: {
      title: "دوراتنا", subtitle: "اختر من دوراتنا المنظمة المصممة لجميع المستويات.",
      enrollNow: "سجل الان", viewDetails: "عرض التفاصيل", flexibleDuration: "مدة مرنة",
      lessons: "دروس", free: "مجاني", pkr: "روبية"
    },
    Enroll: {
      enrollIn: "التسجيل في", provideDetails: "يرجى تقديم التفاصيل الخاصة بك لبدء عملية التسجيل.",
      fullName: "الاسم الكامل", emailAddress: "عنوان البريد الإلكتروني", emailHelp: "سنستخدم هذا لإرسال رمز الوصول إلى الدورة التدريبية الخاصة بك.",
      whatsappNumber: "رقم الواتساب", country: "البلد", courseFee: "رسوم الدورة",
      continueToPayment: "المتابعة للدفع"
    },
    Payment: {
      proofReceived: "تم استلام إثبات الدفع",
      awaitingVerification: "التسجيل الخاص بك ينتظر حاليا التحقق.",
      referenceNumber: "لقد تلقينا إثبات الدفع الخاص بك للرقم المرجعي",
      verificationNotice: "سيقوم فريقنا بالتحقق من المعاملة وتفعيل وصولك قريبًا. ستتلقى تفاصيل الوصول إلى الدورة التدريبية عبر البريد الإلكتروني أو واتساب بمجرد الموافقة عليها.",
      returnToHome: "العودة إلى الصفحة الرئيسية",
      completePayment: "أكمل الدفع الخاص بك",
      followInstructions: "اتبع التعليمات أدناه لإكمال تسجيلك.",
      enrollmentRef: "مرجع التسجيل:",
      courseFee: "رسوم الدورة:",
      easypaisaInstructions: "تعليمات إيزي بيسا",
      accountDetails: "تفاصيل الحساب",
      accountName: "اسم الحساب:",
      easypaisaNumber: "رقم إيزي بيسا:",
      step1: "أرسل رسوم الدورة الدقيقة إلى رقم إيزي بيسا أعلاه.",
      step2: "التقط لقطة شاشة للمعاملة الناجحة.",
      step3: "قم بتحميل لقطة الشاشة أو أدخل معرف المعاملة أدناه.",
      transactionId: "معرف المعاملة (اختياري)",
      paymentScreenshot: "لقطة شاشة الدفع",
      uploadPrompt: "انقر للتحميل أو السحب والإفلات",
      fileTypes: "PNG أو JPG أو PDF (بحد أقصى 5 ميجابايت)",
      selectFile: "حدد ملف",
      submitProof: "إرسال إثبات الدفع"
    },
    Dashboard: {
      welcome: "مرحبا بك في لوحة القيادة الخاصة بك",
      activeCourses: "الدورات النشطة",
      recentActivity: "النشاط الأخير",
      continueLearning: "مواصلة التعلم"
    },
    StudentAccess: {
      title: "وصول الطلاب",
      subtitle: "أدخل رمز الوصول الخاص بك لعرض دوراتك وتقدمك.",
      accessCode: "رمز الوصول",
      accessCodePlaceholder: "أدخل الرمز المكون من 6 أرقام",
      accessCodeHelp: "تحقق من بريدك الإلكتروني أو واتساب للحصول على رمز الوصول الخاص بك.",
      login: "تسجيل الدخول إلى لوحة القيادة"
    }
  },
  zh: {
    Navigation: {
      home: "首页", courses: "课程", about: "关于我们", liveClasses: "直播课程",
      faq: "常见问题", contact: "联系我们", studentAccess: "学生入口", dashboard: "仪表板",
      admin: "管理员"
    },
    Footer: {
      description: "学习古兰经。理解其信息。遵循其指导。",
      quickLinks: "快速链接", legal: "法律", privacy: "隐私政策",
      terms: "服务条款", contact: "联系我们", allRightsReserved: "版权所有。"
    },
    HomePage: {
      heroTitle: "学习古兰经。理解其信息。遵循其指导。",
      heroSubtitle: "加入 Ashnab 古兰经学院，与经验丰富的教师一起接受正宗的伊斯兰教育。",
      exploreCourses: "探索课程", studentAccess: "学生入口",
      whyChooseUs: "为什么选择 Ashnab 古兰经学院",
      ourCourses: "我们的课程",
      explorePaths: "探索我们为所有级别设计的结构化学习路径。今天开始您的古兰经之旅。",
      expertTeachers: "专家教师",
      expertTeachersDesc: "向具有深厚古兰经知识的合格讲师学习。",
      flexibleLearning: "灵活学习",
      flexibleLearningDesc: "随时访问您的课程并遵循结构化的课程。",
      verifiedCertificates: "认证证书",
      verifiedCertificatesDesc: "成功完成课程后获得可验证的证书。"
    },
    Admin: { login: "登录" },
    Courses: {
      title: "我们的课程", subtitle: "从我们为所有级别设计的结构化课程中进行选择。",
      enrollNow: "立即注册", viewDetails: "查看详情", flexibleDuration: "灵活的持续时间",
      lessons: "课程", free: "免费", pkr: "卢比"
    },
    Enroll: {
      enrollIn: "注册", provideDetails: "请提供您的详细信息以开始注册过程。",
      fullName: "全名", emailAddress: "电子邮件地址", emailHelp: "我们将使用此信息发送您的课程访问代码。",
      whatsappNumber: "WhatsApp 号码", country: "国家", courseFee: "课程费用",
      continueToPayment: "继续付款"
    },
    Payment: {
      proofReceived: "收到付款证明",
      awaitingVerification: "您的注册目前正在等待验证。",
      referenceNumber: "我们已收到您的付款证明，参考号为",
      verificationNotice: "我们的团队将尽快验证交易并激活您的访问权限。批准后，您将通过电子邮件或 WhatsApp 收到您的课程访问详细信息。",
      returnToHome: "返回首页",
      completePayment: "完成您的付款",
      followInstructions: "请按照以下说明完成注册。",
      enrollmentRef: "注册参考号:",
      courseFee: "课程费用:",
      easypaisaInstructions: "EasyPaisa 说明",
      accountDetails: "帐户详细信息",
      accountName: "帐户名称:",
      easypaisaNumber: "EasyPaisa 号码:",
      step1: "将准确的课程费用发送至上述 EasyPaisa 号码。",
      step2: "截取成功交易的屏幕截图。",
      step3: "上传屏幕截图或在下方输入交易 ID。",
      transactionId: "交易 ID（可选）",
      paymentScreenshot: "付款截图",
      uploadPrompt: "点击上传或拖放",
      fileTypes: "PNG、JPG 或 PDF（最大 5MB）",
      selectFile: "选择文件",
      submitProof: "提交付款证明"
    },
    Dashboard: {
      welcome: "欢迎来到您的仪表板",
      activeCourses: "活跃课程",
      recentActivity: "最近活动",
      continueLearning: "继续学习"
    },
    StudentAccess: {
      title: "学生入口",
      subtitle: "输入您的访问代码以查看您的课程和进度。",
      accessCode: "访问代码",
      accessCodePlaceholder: "输入您的 6 位代码",
      accessCodeHelp: "检查您的电子邮件或 WhatsApp 以获取您的访问代码。",
      login: "登录仪表板"
    }
  },
  hi: {
    Navigation: {
      home: "मुख्य पृष्ठ", courses: "पाठ्यक्रम", about: "हमारे बारे में", liveClasses: "लाइव कक्षाएं",
      faq: "सामान्य प्रश्न", contact: "संपर्क", studentAccess: "छात्र पहुंच", dashboard: "डैशबोर्ड",
      admin: "व्यवस्थापक"
    },
    Footer: {
      description: "कुरान सीखें। इसके संदेश को समझें। इसके मार्गदर्शन को जिएं।",
      quickLinks: "त्वरित लिंक", legal: "कानूनी", privacy: "गोपनीयता नीति",
      terms: "सेवा की शर्तें", contact: "संपर्क करें", allRightsReserved: "सर्वाधिकार सुरक्षित।"
    },
    HomePage: {
      heroTitle: "कुरान सीखें। इसके संदेश को समझें। इसके मार्गदर्शन को जिएं।",
      heroSubtitle: "अनुभवी शिक्षकों के साथ प्रामाणिक इस्लामी शिक्षा के लिए अशनाब कुरान संस्थान से जुड़ें।",
      exploreCourses: "पाठ्यक्रम देखें", studentAccess: "छात्र पहुंच",
      whyChooseUs: "अशनाब कुरान संस्थान के साथ क्यों सीखें",
      ourCourses: "हमारे पाठ्यक्रम",
      explorePaths: "सभी स्तरों के लिए डिज़ाइन किए गए हमारे संरचित शिक्षण पथों का अन्वेषण करें। आज ही अपनी कुरान की यात्रा शुरू करें।",
      expertTeachers: "विशेषज्ञ शिक्षक",
      expertTeachersDesc: "कुरान के गहरे ज्ञान वाले योग्य प्रशिक्षकों से सीखें।",
      flexibleLearning: "लचीला शिक्षण",
      flexibleLearningDesc: "किसी भी समय अपने पाठों तक पहुंचें और एक संरचित पाठ्यक्रम का पालन करें।",
      verifiedCertificates: "सत्यापित प्रमाण पत्र",
      verifiedCertificatesDesc: "अपने पाठ्यक्रम के सफल समापन पर एक सत्यापन योग्य प्रमाण पत्र अर्जित करें।"
    },
    Admin: { login: "लॉग इन" },
    Courses: {
      title: "हमारे पाठ्यक्रम", subtitle: "सभी स्तरों के लिए डिज़ाइन किए गए हमारे संरचित पाठ्यक्रमों में से चुनें।",
      enrollNow: "अभी नामांकन करें", viewDetails: "विवरण देखें", flexibleDuration: "लचीली अवधि",
      lessons: "पाठ", free: "मुफ़्त", pkr: "रुपये"
    },
    Enroll: {
      enrollIn: "में नामांकन करें", provideDetails: "नामांकन प्रक्रिया शुरू करने के लिए कृपया अपना विवरण प्रदान करें।",
      fullName: "पूरा नाम", emailAddress: "ईमेल पता", emailHelp: "हम इसका उपयोग आपका कोर्स एक्सेस कोड भेजने के लिए करेंगे।",
      whatsappNumber: "व्हाट्सएप नंबर", country: "देश", courseFee: "कोर्स शुल्क",
      continueToPayment: "भुगतान के लिए आगे बढ़ें"
    },
    Payment: {
      proofReceived: "भुगतान प्रमाण प्राप्त हुआ",
      awaitingVerification: "आपका नामांकन वर्तमान में सत्यापन की प्रतीक्षा कर रहा है।",
      referenceNumber: "हमें संदर्भ संख्या के लिए आपका भुगतान प्रमाण प्राप्त हुआ है",
      verificationNotice: "हमारी टीम लेनदेन का सत्यापन करेगी और जल्द ही आपकी पहुंच को सक्रिय कर देगी। स्वीकृत होने के बाद आपको ईमेल या व्हाट्सएप के माध्यम से अपने पाठ्यक्रम की पहुंच का विवरण प्राप्त होगा।",
      returnToHome: "होमपेज पर लौटें",
      completePayment: "अपना भुगतान पूरा करें",
      followInstructions: "अपना नामांकन पूरा करने के लिए नीचे दिए गए निर्देशों का पालन करें।",
      enrollmentRef: "नामांकन संदर्भ:",
      courseFee: "कोर्स शुल्क:",
      easypaisaInstructions: "ईजीपैसा निर्देश",
      accountDetails: "खाता विवरण",
      accountName: "खाते का नाम:",
      easypaisaNumber: "ईजीपैसा नंबर:",
      step1: "सटीक पाठ्यक्रम शुल्क ऊपर दिए गए ईजीपैसा नंबर पर भेजें।",
      step2: "सफल लेनदेन का स्क्रीनशॉट लें।",
      step3: "स्क्रीनशॉट अपलोड करें या नीचे लेनदेन आईडी दर्ज करें।",
      transactionId: "लेनदेन आईडी (वैकल्पिक)",
      paymentScreenshot: "भुगतान स्क्रीनशॉट",
      uploadPrompt: "अपलोड करने के लिए क्लिक करें या ड्रैग और ड्रॉप करें",
      fileTypes: "PNG, JPG या PDF (अधिकतम 5MB)",
      selectFile: "फ़ाइल चुनें",
      submitProof: "भुगतान प्रमाण जमा करें"
    },
    Dashboard: {
      welcome: "आपके डैशबोर्ड में आपका स्वागत है",
      activeCourses: "सक्रिय पाठ्यक्रम",
      recentActivity: "हाल की गतिविधि",
      continueLearning: "सीखना जारी रखें"
    },
    StudentAccess: {
      title: "छात्र पहुंच",
      subtitle: "अपने पाठ्यक्रम और प्रगति देखने के लिए अपना एक्सेस कोड दर्ज करें।",
      accessCode: "एक्सेस कोड",
      accessCodePlaceholder: "अपना 6 अंकों का कोड दर्ज करें",
      accessCodeHelp: "अपने एक्सेस कोड के लिए अपना ईमेल या व्हाट्सएप देखें।",
      login: "डैशबोर्ड में लॉग इन करें"
    }
  }
};

// Write JSON files
const messagesDir = path.join('W:', 'quraaninstitute', 'messages');
if (!fs.existsSync(messagesDir)) {
  fs.mkdirSync(messagesDir);
}

for (const [locale, data] of Object.entries(translations)) {
  fs.writeFileSync(path.join(messagesDir, `${locale}.json`), JSON.stringify(data, null, 2));
}

console.log("Written translation files!");
