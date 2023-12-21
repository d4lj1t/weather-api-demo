export const defaultPreviousSearches: PreviousSearchesType = {
  name: '',
  country: '',
  temperature: '',
  windSpeed: '',
  humidity: ''
}

export interface PreviousSearchesType {
  name: string
  country: string
  temperature: string
  windSpeed: string
  humidity: string
}
