import React, { useContext } from 'react'
import styles from '@/styles/PreviousSearches.module.css'
import { MyContext } from '@/api/context'

export default function PreviousSearches (): React.ReactNode {
  const { cityHistory } = useContext(MyContext)
  return (
      <div>
        <h1 className={styles.heading}>Previous Searches</h1>
        <div className={styles.container}>
            {cityHistory.map((city, index) => {
              return (city.temperature !== '' && (city.temperature !== undefined) && (
                <div className={styles.innerContainer} key={index}>
                    {city.name} - {city.country}
                    <div>{`Temperature: ${city.temperature} degrees celsius`}</div>
                    <div>{`Humidity: ${city.humidity}%`}</div>
                    <div>{`Wind Speed: ${city.windSpeed} miles per hour`}</div>
                </div>
              ))
            })}
        </div>
      </div>
  )
}
