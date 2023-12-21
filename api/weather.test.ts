import { getWeather } from './weather'
import {getCities} from "@/api/autocompleteCities"; // Import your getWeather function

// Mock the global fetch function
global.fetch = jest.fn()

describe('getWeather function', () => {
  it('fetches weather data for a given query', async () => {
    const mockResponse = [
      {}
    ]

    // Mock the fetch function to return a response with your mock data
    fetch.mockResolvedValue({
      json: async () => mockResponse
    })

    const query = 'New York'
    const weatherData = await getWeather(query)

    // Check that the fetch function was called with the correct URL
    expect(fetch).toHaveBeenCalledWith(
            `https://api.weatherapi.com/v1/current.json?key=5280a30432fb4a2cb39131417231310&q=${query}`
    )

    // Check that the function returned the expected data
    expect(weatherData).toEqual(mockResponse)
  })

  it('handles fetch errors', async () => {
    fetch.mockRejectedValue(new Error('Failed to fetch data'))

    const query = 'InvalidCity'

    await expect(getCities(query)).rejects.toThrow('Failed to fetch data')
  })
})
