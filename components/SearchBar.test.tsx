import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import SearchBar from './SearchBar' // Import the SearchBar component

describe('SearchBar component', () => {
  it('handles search input', () => {
    render(<SearchBar />)

    const inputElement = screen.getByPlaceholderText('Search a city...')

    fireEvent.change(inputElement, { target: { value: 'New York' } })

    expect(inputElement).toHaveValue('New York')
  })
})
