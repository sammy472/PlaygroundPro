# Flokiz Landing Page

## Overview

This is a modern, mobile-responsive landing page for Flokiz, an indoor amusement and playground center in Casablanca, Morocco. The application is built as a full-stack TypeScript application with a React frontend and Express.js backend, designed to showcase Flokiz's services and facilitate customer engagement through booking forms, newsletter subscriptions, and contact forms.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend and backend concerns:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database**: PostgreSQL with Drizzle ORM
- **Validation**: Zod schemas shared between frontend and backend
- **Session Management**: Express sessions with PostgreSQL store
- **API Design**: RESTful API endpoints with proper error handling

## Key Components

### Frontend Components
1. **Landing Page Sections**:
   - Hero section with call-to-action
   - About section highlighting unique features
   - Activities showcase with interactive cards
   - Commitment section emphasizing safety and hygiene
   - Testimonials from satisfied parents
   - Booking form for visit scheduling
   - Newsletter signup
   - Contact form
   - Footer with social links

2. **UI System**:
   - Consistent design system using shadcn/ui components
   - Responsive design optimized for mobile and desktop
   - Accessible components following WAI-ARIA guidelines
   - Toast notifications for user feedback

### Backend Components
1. **Database Schema**: 
   - Users table for potential admin functionality
   - Bookings table for visit requests
   - Newsletters table for email subscriptions
   - Contacts table for inquiries

2. **API Endpoints**:
   - POST /api/bookings - Create new booking requests
   - GET /api/bookings - Retrieve all bookings (admin)
   - POST /api/newsletter - Subscribe to newsletter
   - POST /api/contact - Submit contact form

3. **Storage Layer**:
   - Database abstraction with Drizzle ORM
   - Type-safe database operations
   - Connection pooling with Neon serverless PostgreSQL

## Data Flow

1. **User Interactions**: Users interact with forms on the landing page
2. **Client Validation**: Zod schemas validate data on the frontend
3. **API Requests**: TanStack Query manages API calls with proper error handling
4. **Server Validation**: Backend validates requests using shared Zod schemas
5. **Database Operations**: Drizzle ORM handles database interactions
6. **Response Handling**: Success/error feedback provided via toast notifications

## External Dependencies

### Core Technologies
- **Database**: Neon PostgreSQL serverless database
- **UI Framework**: Radix UI for accessible component primitives
- **Styling**: Tailwind CSS for utility-first styling
- **Icons**: Lucide React for consistent iconography
- **Fonts**: Google Fonts (Poppins, Inter, Fredoka One)

### Development Tools
- **Build System**: Vite with React plugin
- **Database Management**: Drizzle Kit for migrations
- **Type Safety**: TypeScript with strict configuration
- **Code Quality**: ESBuild for production bundling

### External Services
- **Images**: Unsplash for placeholder images
- **WhatsApp Integration**: Direct links for customer communication
- **Social Media**: Links to Facebook and Instagram (placeholder)

## Deployment Strategy

### Development Environment
- Vite dev server for frontend with HMR
- Express server with automatic reload using tsx
- Database schema migrations via Drizzle Kit
- Environment variables for database configuration

### Production Build
- Frontend: Vite builds optimized static assets
- Backend: ESBuild bundles server code for Node.js
- Database: PostgreSQL with connection pooling
- Static files served by Express in production

### Environment Configuration
- Development: Local development with file watching
- Production: Optimized builds with proper error handling
- Database: Environment-specific connection strings
- Assets: Served from dist/public directory

The application is designed to be easily deployable to platforms like Replit, Vercel, or similar hosting services with minimal configuration changes.

## Recent Changes

### January 21, 2025
- **Login/Signup Pages**: Created complete authentication pages at `/login` and `/signup` with form validation
- **Contact Page**: Added dedicated contact page at `/contact` with email functionality
- **Activities vs Workshops Separation**: 
  - Updated Activities section to show actual playground games (Laser Tag, Ball Pit, Obstacle Course, etc.)
  - Created new Workshops section for educational programs (Music, Science, Arts, etc.)
  - Added both sections to navigation menu
- **Backend Authentication**: Implemented signup/login API endpoints with user validation
- **Email Integration**: Added Nodemailer setup for contact form email functionality
- **UI Components**: Created all necessary shadcn/ui components (Button, Input, Card, etc.)
- **Event Rooms Section**: Added dedicated event spaces for birthdays and special celebrations
- **Pricing Structure**: Implemented 3-tier pricing system:
  - Quick Play (1.5 hours) - 150 MAD
  - Classic Experience (3 hours) - 250 MAD (Most Popular)
  - Flexi-Card (10 entries) - 800 MAD
- **Navigation Updates**: Added Events and Pricing links to main navigation