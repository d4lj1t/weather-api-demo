import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '@/api/context'
import { getWeather } from '@/api/weather'
import styles from 'styles/WeatherDisplay.module.css'
import { type Weather } from '@/types/weather'

export default function WeatherDisplay (): React.ReactNode {
  const { city } = useContext(MyContext)

  console.log('cityAbove', city)

  const [weatherData, setWeatherData] = useState<Weather>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchWeatherData = async (): Promise<void> => {
      if ((city?.name) !== '') {
        setLoading(true)
        setError(null)
        try {
          const data = await getWeather(city.name)
          setWeatherData(data)
        } catch (error) {
          setError('Failed to fetch weather data.')
        } finally {
          setLoading(false)
        }
      }
    }

    void fetchWeatherData()
  }, [city])

  const { current } = weatherData ?? {}

  return (
        <div className={styles.container} data-testid="weatherDisplay">
            <div className={styles.information}>
                {loading && (
                    <div>Loading...</div>
                )}

                {(error != null) && (
                    <div>error fetching data</div>
                )}
            </div>
            {city?.name !== '' && (
              <div>
                {console.log('city', city)}
                  {/*{`${city.name} - ${city.country}`}*/}
              </div>
            )}

            {(current) && (
                <>
                    <div>{`Temperature: ${current.temp_c} degrees celsius`}</div>
                    <div>{`Humidity: ${current.humidity}%`}</div>
                    <div>{`Wind Speed: ${current.wind_mph} miles per hour`}</div>
                </>
            )}
        </div>
  )
}
