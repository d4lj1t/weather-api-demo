import { type City } from '@/types/city'

const baseUrl = 'https://api.weatherapi.com/v1/search.json'

export async function getCities (query: string): Promise<City[]> {
  const qs = `format=json&accept-language=en-US&q=${query}`
  const key = '5280a30432fb4a2cb39131417231310'
  const url = `${baseUrl}?key=${key}&${qs}`
  return await (await fetch(url)).json()
}
