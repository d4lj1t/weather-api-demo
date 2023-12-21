import React, { useState } from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import SearchBar from '@/components/SearchBar'
import { MyContext } from '@/api/context'
import WeatherDisplay from '@/components/WeatherDisplay'
import PreviousSearches from '@/components/PreviousSearches'
import { type City, defaultCity } from '@/types/city'
import { type PreviousSearchesType } from '@/types/previousSearches'

interface HomeProps {
  initialCity: City
}

export default function Home ({ initialCity }: HomeProps): React.ReactNode {
  const [city, setCity] = useState<City>(defaultCity)
  const [cityHistory, setCityHistory] = useState<PreviousSearchesType[]>([])
  return (
        <>
            <Head>
                <title>Weather Api Demo</title>
                <meta name="description" content="Weather Api Demo"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/public/favicon.ico"/>
            </Head>
            <MyContext.Provider value={{ city, setCity, cityHistory, setCityHistory }}>
                <main className={styles.main}>
                    <SearchBar />
                    <WeatherDisplay />
                    <PreviousSearches />
                </main>
            </MyContext.Provider>
        </>
  )
}
