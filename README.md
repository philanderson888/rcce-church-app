# RCCE Church App

Version: 1.0.0  
Date: March 11, 2024  
Authors: 
- Phil Anderson (Project Lead)
- Bolt (Technical Implementation)

## Overview

A demo application for Revival Christian Church of Enfield (RCCE) showcasing core features for a potential mobile app. This web application serves as a prototype to demonstrate key functionality and user experience.

## Features

### 1. Live Streaming
- Real-time church service streaming integration
- YouTube Live API integration
- Automatic stream detection
- Fallback to next service time when offline
- Service schedule display

### 2. Sermon Archive
- YouTube API integration for historical sermons
- Thumbnail previews
- Description and date information
- Direct links to full sermons
- Responsive video grid layout

### 3. Calendar System
- Dual implementation:
  - JSON API integration for custom styling
  - Embedded ChurchSuite calendar
- Event details and descriptions
- Date and time formatting
- Location information

### 4. Events
- ChurchSuite events integration
- Embedded calendar view
- Event registration capability
- Event categorization
- Search functionality

### 5. Social Media Integration
- Comprehensive social media links
- Platform-specific icons
- External links to:
  - Website
  - Facebook
  - Instagram
  - YouTube
  - X (Twitter)

### 6. Contact Information
- Church location details
- Service times
- Contact methods
- Interactive links
- Responsive layout

### 7. Navigation
- Responsive navigation system
- Mobile-friendly design
- Icon-based navigation
- Active page highlighting

## Technical Guide

### API Integrations

1. **YouTube Data API v3**
   - Endpoints:
     - `/youtube/v3/search`: Live stream detection
     - `/youtube/v3/playlistItems`: Sermon archive
   - Features:
     - Live stream status checking (30-second polling)
     - Video playlist retrieval
     - Thumbnail and metadata fetching

2. **ChurchSuite API**
   - Calendar JSON API: `https://philanderson888.churchsuite.com/-/calendar/[calendar-id]/json`
   - Features:
     - Event data retrieval
     - Location information
     - Event details and timing

### Embedded Services

1. **ChurchSuite Calendar**
   - Implementation: iFrame integration
   - Source: `https://rcce.churchsuite.com/embed/calendar/`
   - Features:
     - Interactive calendar view
     - Event registration
     - Search and filtering

2. **ChurchSuite Events**
   - Implementation: iFrame integration
   - Source: `https://rcce.churchsuite.com/embed/calendar/events`
   - Features:
     - Event listing
     - Category filtering
     - Sign-up integration

### Environment Variables

Required environment variables:
- `VITE_YOUTUBE_API_KEY`: YouTube Data API key for video and live stream integration

### Technology Stack

- **Frontend Framework**: React 18.3.1
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Development Tools**:
  - ESLint
  - TypeScript ESLint
  - PostCSS
  - Autoprefixer

## Development

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env` file with:
```
VITE_YOUTUBE_API_KEY=your_youtube_api_key
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## License

MIT License - See LICENSE file for details