# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a Next.js 15 application with TypeScript, using Tailwind CSS v4 and shadcn/ui components.

## Development Commands
```bash
# Start development server with Turbopack
npm run dev

# Build the application
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Font System
- **Primary Fonts**: Geist Sans and Geist Mono from next/font/google
- **Custom Fonts**: Two local fonts loaded as `--font-custom` and `--font-paragraph`
- **CSS Classes**: 
  - `.custom-headline`: Large headings (54px, custom font)
  - `.custom-feature-title`: Feature titles (33px, custom font)  
  - `.custom-paragraph`: Body text (18px, paragraph font)

## Architecture
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4 with custom theme configuration in `app/globals.css`
- **Component Library**: shadcn/ui components in `components/ui/`
- **UI Components**: Custom components (Hero1, Hero2, Feature3, Feature4) in `components/`
- **Type Safety**: TypeScript with strict mode enabled
- **Path Aliases**: `@/*` maps to the project root

## Key Dependencies
- `lucide-react`: Icon library
- `class-variance-authority`: Component variant management
- `@radix-ui/react-slot`: Polymorphic component support
- `tailwind-merge`: Tailwind class conflict resolution
- `tw-animate-css`: CSS animation utilities

## Custom Animations
- **Floating Badge Animation**: `.floating-badge-1` through `.floating-badge-4` classes with staggered `float-wobble` animations
- **Background**: Custom gradient background defined in `body` styles

## Component Structure
- **Landing Page Components**: Hero1, Hero2, Feature3, Feature4 with custom variants
- **Layout**: Header1 and Footer wrapping main content
- **Path Resolution**: Uses `@/*` alias pointing to project root