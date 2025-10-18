# Weather Display App

A simple weather application built with Next.js 14, TypeScript, and Tailwind CSS that displays current weather information for any city.

## Features

- Get current weather data for any city
- Display temperature, weather conditions, humidity, and wind speed
- Beautiful and responsive UI with Tailwind CSS
- Error handling for invalid cities or API issues
- Loading states for better user experience

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- OpenWeatherMap API

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file in the root directory and add your OpenWeatherMap API key:
   ```
   OPENWEATHER_API_KEY=your_api_key_here
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Getting an API Key

1. Sign up at [OpenWeatherMap](https://openweathermap.org/api)
2. Get your free API key
3. Add it to your `.env.local` file as shown above

## Project Structure

```
weather-display-app/
├── app/
│   ├── api/
│   │   ├── weather/route.ts    # API endpoint for weather data
│   │   └── ping/route.ts       # Health check endpoint
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Main page
├── components/
│   ├── LoadingSpinner.tsx      # Loading indicator component
│   └── WeatherCard.tsx         # Weather display component
├── lib/
│   ├── types.ts                # TypeScript type definitions
│   └── weather-api.ts          # Weather API utility
└── ...config files
```