import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '@/api/context'
import { getWeather } from '@/api/weather'
import styles from 'styles/WeatherDisplay.module.css'
import { type Weather } from '@/types/weather'
import { type PreviousSearchesType } from '@/types/previousSearches'

export default function WeatherDisplay (): React.ReactNode {
  const { city } = useContext(MyContext)
  const { setCityHistory } = useContext(MyContext)
  const [prevSearch, setPrevSearch] = useState<object | null>(null)
  const [weatherData, setWeatherData] = useState<Weather>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchWeatherData = async (): Promise<void> => {
      if (city.name !== '') {
        setLoading(true)
        setError(null)
        try {
          const data = await getWeather(city.name)
          setWeatherData(data)
          const newCityHistory = {
            name: city.name,
            country: city.country,
            temperature: data?.current.temp_c,
            humidity: data?.current.humidity,
            windSpeed: data?.current.wind_mph
          }
          setPrevSearch(newCityHistory)

          if (prevSearch !== null) {
            setCityHistory(prevCityHistory => [prevSearch, ...prevCityHistory] as PreviousSearchesType[])
          }
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
            {city.name !== '' && (
              <div>
                  {`${city.name} - ${city.country}`}
              </div>
            )}

            {(current != null) && (
                <>
                    <div>{`Temperature: ${current.temp_c} degrees celsius`}</div>
                    <div>{`Humidity: ${current.humidity}%`}</div>
                    <div>{`Wind Speed: ${current.wind_mph} miles per hour`}</div>
                </>
            )}
        </div>
  )
}
