import type React from 'react'
import { createContext } from 'react'
import { type City, defaultCity } from '@/types/city'
import { type PreviousSearchesType, defaultPreviousSearches } from '@/types/previousSearches'

interface MyContextType {
  city: City
  setCity: React.Dispatch<City>
  cityHistory: PreviousSearchesType[]
  setCityHistory: React.Dispatch<React.SetStateAction<PreviousSearchesType[]>>
}
export const MyContext = createContext<MyContextType>({
  city: defaultCity,
  setCity: () => {},
  cityHistory: [defaultPreviousSearches],
  setCityHistory: () => {}
})
