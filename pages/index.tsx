import Head from "next/head";
import {useEffect, useRef, useState} from "react";
import styles from "@/styles/Home.module.css";
import SearchBar from "@/components/SearchBar";
import { MyContext } from "@/api/context";
import WeatherDisplay from "@/components/WeatherDisplay";
import {City} from "@/types/city";

interface HomeProps {
    initialCity: City;
}

export default function Home({initialCity}: HomeProps) {
    const [city, setCity] = useState(initialCity);
    return (
        <>
            <Head>
                <title>Weather Api Demo</title>
                <meta name="description" content="Weather Api Demo"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/public/favicon.ico"/>
            </Head>
            <MyContext.Provider value={{city, setCity}}>
                <main className={styles.main}>
                    <SearchBar />
                    <WeatherDisplay />
                </main>
            </MyContext.Provider>
        </>
    )
}
