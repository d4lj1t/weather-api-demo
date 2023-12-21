import React from 'react'
import { type City } from '@/types/city'
import styles from 'styles/SearchBarCities.module.css'

interface ParamsType {
  cities: City[]
  changeCity: (selectedCity: City) => void
}
export default function SearchBarCities ({
  cities,
  changeCity
}: ParamsType): React.ReactNode {
  if (cities.length === 0) {
    return (
      <ul className={styles.list}>
        <li className={styles.listItem}>No city found</li>
      </ul>
    )
  } else {
    return (
      <ul className={styles.list}>
        {cities.map(item => (
          <li key={item.id} className={styles.listItem}>
            <a onClick={() => { changeCity(item) }}>
              {item.name} - {item.country}
            </a>
          </li>
        ))}
      </ul>
    )
  }
}
