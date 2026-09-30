# Ashnab Quran Institute

A premium, production-ready Quran learning platform built with Next.js App Router, Tailwind CSS, shadcn/ui, and Supabase.

## Project Overview

This platform serves two main audiences:
1. **Public Visitors / Prospective Students**: Can browse courses, view details, and enroll via an intuitive EasyPaisa manual payment flow.
2. **Teacher / Admin**: A dedicated dashboard to manage courses, students, lessons, payments, live classes, and certificates.

## Tech Stack
- **Frontend**: Next.js 15 (App Router), React, TypeScript
- **Styling**: Tailwind CSS v4, shadcn/ui, Lucide Icons
- **Backend/Auth**: Supabase (PostgreSQL, Auth, Storage)
- **Internationalization**: next-intl (English, Urdu, Arabic with RTL support)
- **Forms & Validation**: React Hook Form, Zod
- **Charts**: Recharts (in Teacher Dashboard)
- **PDF Generation**: @react-pdf/renderer (available for certificates)

## Folder Structure
- `/src/app/[locale]` - Localized routes for next-intl
- `/src/app/[locale]/admin` - Protected Teacher Dashboard
- `/src/app/[locale]/courses` - Course listings and details
- `/src/app/[locale]/dashboard` - Student Dashboard
- `/src/components` - UI and shared components (shadcn)
- `/src/i18n` - next-intl configurations
- `/src/lib` - Utility functions, Supabase clients, and mock data
- `/messages` - Translation JSON files (en, ur, ar)
- `/supabase/migrations` - SQL schema for the database

## Setup & Installation

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Copy the `.env.example` file to `.env.local`:
```bash
cp .env.example .env.local
```
Fill in the Supabase credentials in `.env.local`:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

### 3. Supabase Setup
Run the SQL migration located at `supabase/migrations/20260927000000_initial_schema.sql` in your Supabase project's SQL Editor to create all necessary tables and RLS policies.
Alternatively, use the Supabase CLI:
```bash
supabase db push
```

### 4. Storage Buckets
Ensure the following buckets are created in your Supabase Storage:
- `course-images` (Public)
- `course-materials` (Private)
- `assignment-submissions` (Private)
- `payment-proofs` (Private)
- `certificates` (Public)

### 5. Teacher Account Setup
To create the teacher account, simply sign up via Supabase Auth (or the dashboard). The initial setup assumes any authenticated user is the admin (single-teacher model).

## Development Commands

Run the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
npm start
```

## How It Works

- **Languages**: To add a new language, add the locale code to `src/i18n/routing.ts` and create the corresponding `[locale].json` inside the `/messages` directory.
- **EasyPaisa / WhatsApp**: Configure the payment and contact details via the Teacher Dashboard Settings.
- **Live Classes**: Add Zoom or Google Meet links inside the Live Classes management section.
- **Certificates**: Generated upon course completion and teacher approval.

## Demo Data
If Supabase keys are missing, the application relies on mock data available in `src/lib/data/mock.ts` to ensure it can be previewed seamlessly.
