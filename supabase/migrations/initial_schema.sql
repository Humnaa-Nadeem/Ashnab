-- Create types
CREATE TYPE enrollment_status AS ENUM ('PENDING_PAYMENT', 'PAYMENT_SUBMITTED', 'ACTIVE', 'REVOKED', 'COMPLETED');
CREATE TYPE payment_status AS ENUM ('PENDING', 'SUBMITTED', 'APPROVED', 'REJECTED', 'CORRECTION_REQUESTED');
CREATE TYPE lesson_status AS ENUM ('DRAFT', 'PUBLISHED');
CREATE TYPE assignment_status AS ENUM ('NOT_SUBMITTED', 'SUBMITTED', 'UNDER_REVIEW', 'APPROVED', 'NEEDS_REVISION');

-- Tables
CREATE TABLE site_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  institute_name TEXT NOT NULL DEFAULT 'Ashnab Quran Institute',
  logo_url TEXT,
  teacher_name TEXT NOT NULL DEFAULT 'Admin',
  teacher_photo_url TEXT,
  email TEXT,
  phone TEXT,
  whatsapp TEXT,
  easypaisa_number TEXT,
  easypaisa_account_name TEXT,
  currency TEXT DEFAULT 'PKR',
  timezone TEXT DEFAULT 'Asia/Karachi',
  default_language TEXT DEFAULT 'en',
  supported_languages TEXT[] DEFAULT '{"en", "ur", "ar"}',
  zoom_details TEXT,
  google_meet_details TEXT,
  certificate_signature_url TEXT,
  certificate_settings JSONB,
  social_links JSONB,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

CREATE TABLE courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  image_url TEXT,
  price NUMERIC(10, 2) NOT NULL DEFAULT 0,
  duration TEXT,
  level TEXT,
  is_featured BOOLEAN DEFAULT FALSE,
  is_published BOOLEAN DEFAULT FALSE,
  lessons_count INTEGER DEFAULT 0,
  sequential_unlock BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

CREATE TABLE course_translations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  locale TEXT NOT NULL,
  title TEXT NOT NULL,
  short_description TEXT,
  detailed_description TEXT,
  what_you_will_learn JSONB,
  requirements JSONB,
  UNIQUE(course_id, locale)
);

CREATE TABLE lessons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  day_number INTEGER NOT NULL,
  status lesson_status DEFAULT 'DRAFT',
  pdf_url TEXT,
  image_url TEXT,
  audio_url TEXT,
  video_url TEXT,
  external_video_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

CREATE TABLE lesson_translations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id UUID REFERENCES lessons(id) ON DELETE CASCADE,
  locale TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  content TEXT, -- rich text
  UNIQUE(lesson_id, locale)
);

CREATE TABLE enrollments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  reference_number TEXT UNIQUE NOT NULL, -- e.g. AQI-2026-000123
  student_name TEXT NOT NULL,
  student_email TEXT NOT NULL,
  student_whatsapp TEXT,
  student_country TEXT,
  preferred_language TEXT DEFAULT 'en',
  timezone TEXT,
  notes TEXT,
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  status enrollment_status DEFAULT 'PENDING_PAYMENT',
  access_token TEXT UNIQUE, -- for magic link/secure access
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  enrollment_id UUID REFERENCES enrollments(id) ON DELETE CASCADE,
  amount NUMERIC(10, 2) NOT NULL,
  transaction_id TEXT,
  screenshot_url TEXT,
  status payment_status DEFAULT 'PENDING',
  rejection_reason TEXT,
  submitted_at TIMESTAMP WITH TIME ZONE,
  reviewed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

CREATE TABLE lesson_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  enrollment_id UUID REFERENCES enrollments(id) ON DELETE CASCADE,
  lesson_id UUID REFERENCES lessons(id) ON DELETE CASCADE,
  is_completed BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMP WITH TIME ZONE,
  UNIQUE(enrollment_id, lesson_id)
);

CREATE TABLE assignments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id UUID REFERENCES lessons(id) ON DELETE CASCADE,
  due_days_after_enrollment INTEGER,
  allowed_file_types TEXT[],
  max_file_size_mb INTEGER DEFAULT 5,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

CREATE TABLE assignment_translations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  assignment_id UUID REFERENCES assignments(id) ON DELETE CASCADE,
  locale TEXT NOT NULL,
  title TEXT NOT NULL,
  instructions TEXT,
  UNIQUE(assignment_id, locale)
);

CREATE TABLE assignment_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  assignment_id UUID REFERENCES assignments(id) ON DELETE CASCADE,
  enrollment_id UUID REFERENCES enrollments(id) ON DELETE CASCADE,
  file_url TEXT,
  text_response TEXT,
  status assignment_status DEFAULT 'SUBMITTED',
  teacher_feedback TEXT,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  reviewed_at TIMESTAMP WITH TIME ZONE
);

CREATE TABLE live_classes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  class_date DATE NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  platform TEXT NOT NULL,
  meeting_url TEXT NOT NULL,
  meeting_id TEXT,
  meeting_password TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

CREATE TABLE certificates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  certificate_id TEXT UNIQUE NOT NULL, -- AQI-CERT-2026-00045
  enrollment_id UUID REFERENCES enrollments(id) ON DELETE CASCADE,
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  student_name TEXT NOT NULL,
  teacher_name TEXT NOT NULL,
  issue_date DATE NOT NULL,
  pdf_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

CREATE TABLE faq_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_index INTEGER DEFAULT 0,
  is_published BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

CREATE TABLE faq_translations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  faq_id UUID REFERENCES faq_items(id) ON DELETE CASCADE,
  locale TEXT NOT NULL,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  UNIQUE(faq_id, locale)
);

-- RLS setup (Assuming 'teacher' role uses Supabase Auth authenticated users)
-- For simplicity, since it's a single teacher platform, we'll allow all authenticated users (teachers) full access
-- Anonymous users will have selective read access and ability to insert enrollments/payments/submissions

ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read site settings" ON site_settings FOR SELECT USING (true);
CREATE POLICY "Auth can all site settings" ON site_settings FOR ALL USING (auth.role() = 'authenticated');

ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read published courses" ON courses FOR SELECT USING (is_published = true OR auth.role() = 'authenticated');
CREATE POLICY "Auth can all courses" ON courses FOR ALL USING (auth.role() = 'authenticated');

ALTER TABLE course_translations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read course translations" ON course_translations FOR SELECT USING (true);
CREATE POLICY "Auth can all course translations" ON course_translations FOR ALL USING (auth.role() = 'authenticated');

ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read published lessons" ON lessons FOR SELECT USING (status = 'PUBLISHED' OR auth.role() = 'authenticated');
CREATE POLICY "Auth can all lessons" ON lessons FOR ALL USING (auth.role() = 'authenticated');

ALTER TABLE lesson_translations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read lesson translations" ON lesson_translations FOR SELECT USING (true);
CREATE POLICY "Auth can all lesson translations" ON lesson_translations FOR ALL USING (auth.role() = 'authenticated');

ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Students can read their enrollment" ON enrollments FOR SELECT USING (current_setting('request.headers', true)::json->>'x-student-access-token' = access_token OR auth.role() = 'authenticated');
CREATE POLICY "Public can insert enrollment" ON enrollments FOR INSERT WITH CHECK (true);
CREATE POLICY "Auth can all enrollments" ON enrollments FOR ALL USING (auth.role() = 'authenticated');

ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Students can view their payments" ON payments FOR SELECT USING (
  enrollment_id IN (SELECT id FROM enrollments WHERE access_token = current_setting('request.headers', true)::json->>'x-student-access-token') 
  OR auth.role() = 'authenticated'
);
CREATE POLICY "Students can insert payments" ON payments FOR INSERT WITH CHECK (
  enrollment_id IN (SELECT id FROM enrollments WHERE access_token = current_setting('request.headers', true)::json->>'x-student-access-token')
);
CREATE POLICY "Auth can all payments" ON payments FOR ALL USING (auth.role() = 'authenticated');

ALTER TABLE lesson_progress ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Students can manage their progress" ON lesson_progress FOR ALL USING (
  enrollment_id IN (SELECT id FROM enrollments WHERE access_token = current_setting('request.headers', true)::json->>'x-student-access-token') 
  OR auth.role() = 'authenticated'
);

ALTER TABLE assignments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read assignments" ON assignments FOR SELECT USING (true);
CREATE POLICY "Auth can all assignments" ON assignments FOR ALL USING (auth.role() = 'authenticated');

ALTER TABLE assignment_translations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read assignment translations" ON assignment_translations FOR SELECT USING (true);
CREATE POLICY "Auth can all assignment translations" ON assignment_translations FOR ALL USING (auth.role() = 'authenticated');

ALTER TABLE assignment_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Students can manage their submissions" ON assignment_submissions FOR ALL USING (
  enrollment_id IN (SELECT id FROM enrollments WHERE access_token = current_setting('request.headers', true)::json->>'x-student-access-token') 
  OR auth.role() = 'authenticated'
);

ALTER TABLE live_classes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read live classes" ON live_classes FOR SELECT USING (true);
CREATE POLICY "Auth can all live classes" ON live_classes FOR ALL USING (auth.role() = 'authenticated');

ALTER TABLE certificates ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read certificates by ID" ON certificates FOR SELECT USING (true);
CREATE POLICY "Auth can all certificates" ON certificates FOR ALL USING (auth.role() = 'authenticated');

ALTER TABLE faq_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read published FAQs" ON faq_items FOR SELECT USING (is_published = true OR auth.role() = 'authenticated');
CREATE POLICY "Auth can all FAQs" ON faq_items FOR ALL USING (auth.role() = 'authenticated');

ALTER TABLE faq_translations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read FAQ translations" ON faq_translations FOR SELECT USING (true);
CREATE POLICY "Auth can all FAQ translations" ON faq_translations FOR ALL USING (auth.role() = 'authenticated');

-- Storage buckets setup (conceptual, usually done via Supabase dashboard or API, but here are the inserts for storage.buckets)
INSERT INTO storage.buckets (id, name, public) VALUES 
('course-images', 'course-images', true),
('course-materials', 'course-materials', false),
('assignment-submissions', 'assignment-submissions', false),
('payment-proofs', 'payment-proofs', false),
('certificates', 'certificates', true)
ON CONFLICT (id) DO NOTHING;

-- Note: Storage RLS policies need to be applied in the storage schema, usually handled separately but here's a conceptual overview
-- CREATE POLICY "Public can view course images" ON storage.objects FOR SELECT USING (bucket_id = 'course-images');
-- CREATE POLICY "Auth can upload images" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'course-images' AND auth.role() = 'authenticated');
-- And similarly for other buckets
