'use client'

import { useState, useEffect } from 'react'
import { fetchWeather } from '@/lib/weather-api'
import { WeatherData } from '@/lib/types'
import WeatherCard from '@/components/WeatherCard'
import LoadingSpinner from '@/components/LoadingSpinner'

export default function Home() {
  const [city, setCity] = useState('London')
  const [inputCity, setInputCity] = useState('')
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const getWeather = async (cityName: string) => {
    if (!cityName.trim()) return
    
    setLoading(true)
    setError(null)
    
    try {
      const response = await fetchWeather(cityName)
      
      if (response.error) {
        setError(response.error)
        setWeather(null)
      } else if (response.data) {
        setWeather(response.data)
        setError(null)
      }
    } catch (err) {
      setError('Failed to fetch weather data')
      setWeather(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getWeather(city)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputCity.trim()) {
      setCity(inputCity.trim())
      getWeather(inputCity.trim())
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Weather Display
        </h1>
        
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputCity}
              onChange={(e) => setInputCity(e.target.value)}
              placeholder="Enter city name"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? 'Loading...' : 'Search'}
            </button>
          </div>
        </form>
        
        {loading && <LoadingSpinner />}
        
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-center">
            {error}
          </div>
        )}
        
        {weather && !loading && !error && <WeatherCard weather={weather} />}
      </div>
    </main>
  )
}