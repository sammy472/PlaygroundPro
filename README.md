# Flokiz Landing Page

A comprehensive landing page for Flokiz indoor amusement playground in Casablanca, Morocco. Built with React, TypeScript, Express.js, and PostgreSQL.

## Features

- **Modern Landing Page**: Beautiful, mobile-responsive design
- **User Authentication**: Complete signup/login system
- **Email Integration**: Contact forms with Nodemailer
- **Activities & Workshops**: Separate sections for playground games and educational programs
- **Event Rooms**: Birthday party and special event booking
- **Flexible Pricing**: 3-tier pricing structure (1.5hr, 3hr, 10-entry card)
- **Database Integration**: PostgreSQL with Drizzle ORM

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui
- **Backend**: Node.js, Express.js, TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Express sessions with passport-local
- **Email**: Nodemailer for contact forms
- **Styling**: Tailwind CSS with custom design system

## Prerequisites

Before running this project locally, ensure you have:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- **PostgreSQL** database (local or cloud instance like Neon, Supabase, etc.)

## Local Setup Instructions

### 1. Clone/Download the Project

Download the project zip file and extract it, or clone if using git.

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory with the following variables:

```env
# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/flokiz_db"
PGHOST=localhost
PGPORT=5432
PGUSER=your_username
PGPASSWORD=your_password
PGDATABASE=flokiz_db

# Email Configuration (Optional - for contact forms)
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# Session Secret
SESSION_SECRET=your_random_secret_key_here
```

### 4. Database Setup

If you don't have PostgreSQL installed locally, you can:

**Option A: Install PostgreSQL locally**
- Download from [postgresql.org](https://www.postgresql.org/download/)
- Create a database named `flokiz_db`

**Option B: Use a cloud database (Recommended)**
- Create a free database on [Neon](https://neon.tech/) or [Supabase](https://supabase.com/)
- Copy the connection string to your `.env` file

### 5. Initialize Database Schema

Run the database migration to create tables:

```bash
npm run db:push
```

### 6. Start Development Server

```bash
npm run dev
```

This will start:
- Frontend (Vite) on `http://localhost:3000`
- Backend (Express) on the same port (served together)

### 7. Build for Production

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Project Structure

```
flokiz-landing/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utilities and configurations
├── server/                 # Express backend
│   ├── db.ts              # Database connection
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Data access layer
│   └── index.ts           # Server entry point
├── shared/                # Shared types and schemas
│   └── schema.ts          # Database schema definitions
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run db:push` - Push database schema changes
- `npm run db:studio` - Open Drizzle Studio (database GUI)

## Environment Variables Explained

- `DATABASE_URL`: PostgreSQL connection string
- `SESSION_SECRET`: Random secret for session encryption
- `EMAIL_USER`: Gmail address for sending contact emails
- `EMAIL_PASS`: Gmail app password (not regular password)

## Email Setup (Optional)

To enable contact form emails:

1. Enable 2-factor authentication on your Gmail account
2. Generate an "App Password" in Gmail settings
3. Use this app password in the `EMAIL_PASS` environment variable

## Deployment Options

### Option 1: Vercel (Recommended for frontend)
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Vercel
3. Set up environment variables in Vercel dashboard

### Option 2: Railway/Render (Full-stack)
1. Connect your repository
2. Set environment variables
3. Deploy with automatic builds

### Option 3: Traditional VPS
1. Build the project
2. Copy files to your server
3. Install dependencies and start with PM2

## Troubleshooting

**Database Connection Issues:**
- Verify your DATABASE_URL is correct
- Ensure PostgreSQL is running
- Check firewall settings for cloud databases

**Port Already in Use:**
- The app runs on port 5000 by default
- Kill any processes using this port: `lsof -ti:5000 | xargs kill -9`

**Build Errors:**
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear build cache: `rm -rf dist`

## Support

For issues or questions about the project setup, check:
1. Ensure all environment variables are set correctly
2. Verify database connection
3. Check console logs for specific error messages

## License

This project is for Flokiz indoor playground center.