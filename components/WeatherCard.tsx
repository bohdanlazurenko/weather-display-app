import { WeatherData } from '@/lib/types'

interface WeatherCardProps {
  weather: WeatherData
}

export default function WeatherCard({ weather }: WeatherCardProps) {
  const iconUrl = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`
  
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-auto">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          {weather.city}, {weather.country}
        </h2>
        
        <div className="flex items-center justify-center my-6">
          <img
            src={iconUrl}
            alt={weather.description}
            className="w-24 h-24"
          />
        </div>
        
        <div className="text-6xl font-bold text-gray-800 mb-2">
          {weather.temperature}°C
        </div>
        
        <p className="text-xl text-gray-600 capitalize mb-6">
          {weather.description}
        </p>
        
        <div className="grid grid-cols-2 gap-4 text-left">
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Humidity</p>
            <p className="text-2xl font-semibold text-blue-600">
              {weather.humidity}%
            </p>
          </div>
          
          <div className="bg-green-50 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Wind Speed</p>
            <p className="text-2xl font-semibold text-green-600">
              {weather.windSpeed} m/s
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}