import React, { useContext } from 'react'
import styles from '@/styles/PreviousSearches.module.css'
import { MyContext } from '@/api/context'

export default function PreviousSearches (): React.ReactNode {
  const { cityHistory } = useContext(MyContext)
  return (
        <div className={styles.container}>
            <h1>Previous Searches</h1>
            {cityHistory.map((city, index) => {
              return (city.temperature !== '' && (city.temperature !== undefined) && (
                <div key={index}>
                    {city.name} - {city.country}
                    <div>{`Temperature: ${city.temperature} degrees celsius`}</div>
                    <div>{`Humidity: ${city.humidity}%`}</div>
                    <div>{`Wind Speed: ${city.windSpeed} miles per hour`}</div>
                </div>
              ))
            })}
        </div>
  )
}
