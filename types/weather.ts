export const defaultWeather: Weather = {
  current: {
    temp_c: '',
    humidity: '',
    wind_mph: ''
  }
}

export interface Weather {
  current: {
    temp_c: string
    humidity: string
    wind_mph: string
  }
}
