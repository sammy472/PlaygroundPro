# Flokiz Local Deployment Guide

## Quick Start Instructions

### 1. Download and Extract Project
- Download the project as a ZIP file from Replit
- Extract to your desired local directory

### 2. Install Node.js
Make sure you have Node.js version 18 or higher:
```bash
node --version  # Should be 18.x or higher
```
Download from: https://nodejs.org/

### 3. Install Dependencies
Open terminal in project directory and run:
```bash
npm install
```

### 4. Set Up Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

Edit the `.env` file with your database credentials:

#### Option A: Use Neon Database (Recommended - Free Cloud)
1. Go to https://neon.tech/
2. Create free account and new project
3. Copy the connection string
4. Replace `DATABASE_URL` in your `.env` file

Example:
```env
DATABASE_URL="postgresql://username:password@ep-xxx.us-east-2.aws.neon.tech/neondb?sslmode=require"
```

#### Option B: Local PostgreSQL
If you have PostgreSQL installed locally:
```env
DATABASE_URL="postgresql://postgres:your_password@localhost:5432/flokiz_db"
PGHOST=localhost
PGPORT=5432
PGUSER=postgres
PGPASSWORD=your_password
PGDATABASE=flokiz_db
```

#### Required Environment Variables
```env
DATABASE_URL="your_postgresql_connection_string"
SESSION_SECRET="any_random_long_string_here"
NODE_ENV=development

# Optional (for email contact forms)
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password
```

### 5. Initialize Database
Create the database tables:
```bash
npm run db:push
```

### 6. Start the Application
```bash
npm run dev
```

The application will start at: http://localhost:5000

## Available Commands

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm start          # Start production server (after build)
npm run db:push    # Update database schema
npm run check      # Type check TypeScript
```

## Production Build

To create a production-ready build:

1. Build the application:
```bash
npm run build
```

2. Start production server:
```bash
npm start
```

## Project Structure

```
flokiz-landing/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/          # Page components  
│   │   ├── hooks/          # Custom hooks
│   │   └── lib/            # Utilities
├── server/                 # Express backend
│   ├── db.ts              # Database connection
│   ├── routes.ts          # API endpoints
│   ├── storage.ts         # Data layer
│   └── index.ts           # Server entry
├── shared/                # Shared schemas
│   └── schema.ts          # Database models
├── README.md              # Setup instructions
└── .env.example           # Environment template
```

## Features Included

✅ **Landing Page Sections:**
- Hero with call-to-action
- About Flokiz center
- Activities (playground games)
- Workshops (educational programs)
- Event rooms (birthdays & parties)
- Pricing (3 tiers: 1.5hr, 3hr, 10-entry card)
- Testimonials
- Contact form
- Newsletter signup

✅ **Authentication System:**
- User signup/login pages
- Session management
- Protected routes

✅ **Database Integration:**
- PostgreSQL with Drizzle ORM
- User management
- Booking system
- Contact forms
- Newsletter subscriptions

✅ **Email Functionality:**
- Contact form emails
- Newsletter confirmations

## Troubleshooting

### Common Issues:

**"Cannot connect to database"**
- Check your DATABASE_URL is correct
- Ensure database is running (if local)
- Verify network access (if cloud)

**"Port 5000 already in use"**
```bash
# Kill process using port 5000
npx kill-port 5000
```

**"Module not found" errors**
```bash
# Clear and reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

**Build errors**
```bash
# Clear build cache
rm -rf dist
npm run build
```

### Email Setup (Optional)

To enable contact form emails:
1. Use Gmail with 2-factor authentication
2. Generate an "App Password" in Gmail settings
3. Use this app password in EMAIL_PASS (not your regular password)

### Database GUI (Optional)

To view/edit database with a visual interface:
```bash
npx drizzle-kit studio
```
Opens at: http://localhost:4983/

## Deployment to Production

### Option 1: Vercel (Frontend Focus)
1. Connect GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically

### Option 2: Railway/Render (Full-Stack)
1. Connect repository
2. Set environment variables
3. Choose Node.js build

### Option 3: VPS/Server
1. Upload files to server
2. Install Node.js and dependencies
3. Use PM2 for process management:
```bash
npm install -g pm2
pm2 start dist/index.js --name flokiz
```

## Support

The project is fully configured and ready to run. If you encounter issues:

1. Verify all environment variables are set
2. Check database connection
3. Ensure Node.js version is 18+
4. Review error messages in console

All dependencies and configurations are included in the project.