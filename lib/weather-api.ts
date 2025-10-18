import { WeatherData, WeatherResponse } from './types'

export async function fetchWeather(city: string): Promise<WeatherResponse> {
  try {
    const response = await fetch(`/api/weather?city=${encodeURIComponent(city)}`)
    
    if (!response.ok) {
      const errorData = await response.json()
      return {
        error: errorData.error || 'Failed to fetch weather data',
        isLoading: false,
      }
    }
    
    const data = await response.json()
    return {
      data: data as WeatherData,
      isLoading: false,
    }
  } catch (error) {
    return {
      error: 'Network error occurred',
      isLoading: false,
    }
  }
}