# TimeCraft

TimeCraft is a SaaS tool designed to help users optimize their discretionary hours using Deep Work principles. Built with Next.js, TypeScript, Tailwind CSS, and Supabase.

## Project Overview

TimeCraft helps users audit their time, visualize discretionary hours, and create structured plans for personal growth, relationships, and intentional leisure. By combining Deep Work's focus principles with structured planning, TimeCraft helps users turn "unused" hours into meaningful progress.

## Features

- **Time Audit & Allocation**: Calculate discretionary hours and visualize time breakdowns
- **Customizable Templates**: Pre-built templates for common goals (Newsletter Creator, Fitness Enthusiast, etc.)
- **Deep Work Integration**: Scheduled focus sessions for distraction-free productivity

## Tech Stack

- **Frontend**: Next.js with TypeScript and Tailwind CSS
- **Backend**: Supabase (Auth, PostgreSQL, Edge Functions)
- **UI Components**: Custom components built with Tailwind CSS

## Project Structure

```
timecraft/
├── app/                  # Next.js app directory
│   ├── page.tsx          # Landing page
│   ├── dashboard/        # Dashboard routes
│   ├── auth/             # Authentication routes
│   └── api/              # API routes
├── components/           # React components
│   ├── ui/               # UI components
│   ├── forms/            # Form components
│   └── dashboard/        # Dashboard components
├── lib/                  # Utility functions
├── public/               # Static assets
└── supabase/             # Supabase schema
```

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Set up Supabase:
   - Create a Supabase project at [supabase.com](https://supabase.com)
   - Add your Supabase URL and anon key to `.env.local`

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) to see the app

## MVP Development Plan

1. **Phase 1**: Landing page and auth system
2. **Phase 2**: Time audit calculator and dashboard
3. **Phase 3**: Templates system
4. **Phase 4**: Deep Work timer and focus sessions

## License

MIT
