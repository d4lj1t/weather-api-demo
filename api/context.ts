import type React from 'react'
import { createContext } from 'react'
import { type City, defaultCity } from '@/types/city'

interface MyContextType {
  city: City
  setCity: React.Dispatch<City>
  cityHistory: City[]
  setCityHistory: React.Dispatch<React.SetStateAction<City[]>>
}
export const MyContext = createContext<MyContextType>({
  city: defaultCity,
  setCity: () => {},
  cityHistory: [defaultCity],
  setCityHistory: () => {}
})
