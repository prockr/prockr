# Environment Variables Setup Guide

## Required Environment Variables

### Google Maps API
```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

**How to get:**
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable these APIs:
   - Maps JavaScript API
   - Geocoding API
   - Static Maps API
4. Create credentials → API Key
5. Restrict the API key to your domain

**Required for:**
- Interactive Maps (`components/InteractiveMap.tsx`)
- Location Detection (`components/LocationDetector.tsx`)

### Site Configuration
```bash
SITE_URL=https://prokr.com
```

### Contact Information
```bash
CONTACT_PHONE=+966-XX-XXX-XXXX
EMERGENCY_PHONE=+966-XX-XXX-XXXX
SUPPORT_EMAIL=support@prokr.com
```

## Setup Instructions

1. Create `.env.local` file in project root
2. Copy variables from above
3. Replace placeholder values with actual values
4. Never commit `.env.local` to Git
5. For production, set variables in hosting platform (Vercel/Netlify)

## Testing Locally Without API Key

If you don't have a Google Maps API key yet:
- Static maps will show fallback UI
- Interactive maps will display error message
- Location detection will be disabled
- All other features work normally

## Production Deployment

When deploying to Vercel:
```bash
vercel env add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
```

Or add via Vercel Dashboard → Settings → Environment Variables

