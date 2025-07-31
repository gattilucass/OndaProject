# ONDA Fashion Landing Page

## Overview

This is a sophisticated full-stack application that serves as a landing page for ONDA, a fictional premium fashion brand showcasing an AI-designed yellow shirt. The project combines modern web technologies to create an elegant, responsive fashion e-commerce experience with interactive product displays, media galleries, and detailed product information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, using Vite as the build tool and development server
- **Styling**: Tailwind CSS for utility-first styling with custom CSS variables for brand colors
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible components
- **State Management**: React hooks for local state, TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing

### Backend Architecture
- **Framework**: Express.js with TypeScript running on Node.js
- **Server Structure**: Modular approach with separate route handlers and storage interfaces
- **Development**: Hot module replacement via Vite integration for seamless development experience

### Component Structure
- **Layout Components**: Enhanced Header with glassmorphism effects and animated navigation, Premium Footer with tool showcase and white background for better contrast
- **Feature Components**: Enhanced HeroSection with model toggle and size selection, Video Slideshow MediaGallery with 3 videos per gender
- **Interactive Components**: Redesigned PromptModal with categorized AI tool prompts and enhanced styling
- **UI Components**: Complete shadcn/ui component library with custom animations and premium styling

## Key Components

### Product Display System
- **Enhanced Model Toggle**: Visual gender selection with gradient backgrounds and animated icons
- **Size Selection**: Premium interactive size picker with hover effects and golden accents
- **Video Slideshow System**: Complete video gallery with 3 videos per gender, navigation controls, and thumbnail preview
- **Responsive Design**: Mobile-first approach with sophisticated animations and transitions

### Content Management
- **Video Integration**: Main product presentation with 3 vertical videos (9:16) per gender in hero section with navigation controls
- **Photo Gallery**: Separate photo gallery section with 3 key visual images (9:16 vertical) per gender
- **Dynamic Copy**: Context-aware product descriptions that change based on selected model
- **Interactive Elements**: Hover effects, smooth transitions, and glassmorphism styling

### Database Schema
- **User Management**: Basic user table with UUID primary keys
- **Schema Validation**: Zod integration with Drizzle for type-safe database operations
- **PostgreSQL Ready**: Configured for PostgreSQL with connection string environment variable

## Data Flow

1. **Component State**: Local React state manages UI interactions (model selection, size selection, modal visibility)
2. **Props Flow**: Parent-child communication via props for shared state and event handlers
3. **Media Loading**: External image/video sources loaded on-demand with responsive sizing
4. **Modal System**: Overlay-based modal for displaying AI prompt information

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form with Zod validation
- **UI Framework**: Radix UI primitives, Lucide React icons, class-variance-authority for styling variants
- **Data Management**: TanStack React Query, Drizzle ORM with Neon Database serverless connector
- **Styling**: Tailwind CSS, clsx for conditional classes, date-fns for date handling
- **Development**: Vite with React plugin, TypeScript, ESBuild for production builds

### Database Integration
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Connection**: Neon Database serverless connector for cloud database access
- **Migrations**: Drizzle Kit for schema management and migrations

## Deployment Strategy

### Build Process
- **Frontend Build**: Vite builds the React application to `dist/public`
- **Backend Build**: ESBuild bundles the Express server to `dist/index.js`
- **Development**: Concurrent development with Vite dev server and Express backend

### Environment Configuration
- **Database**: Requires `DATABASE_URL` environment variable for PostgreSQL connection
- **Node Environment**: Supports both development and production modes
- **Static Assets**: Frontend assets served from build directory in production

### Hosting Considerations
- **Full-Stack Deployment**: Single deployment with Express serving both API and static files
- **Database**: PostgreSQL database (Neon recommended) with connection pooling
- **Environment Variables**: Database URL and any other secrets managed through hosting platform

The application follows modern web development best practices with a focus on performance, accessibility, and maintainability. The modular architecture allows for easy extension and modification of features while maintaining a consistent user experience across devices.