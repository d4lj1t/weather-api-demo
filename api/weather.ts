import {type Weather} from '@/types/weather'

const baseUrl = 'https://api.weatherapi.com/v1/current.json'

export async function getWeather (query: string): Promise<Weather> {
  const qs = query
  const key = '5280a30432fb4a2cb39131417231310'
  const url = `${baseUrl}?key=${key}&q=${qs}`
  return await (await fetch(url)).json()
}
