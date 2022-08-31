import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { WeatherProvider } from '../../providers/WeatherContext';
import { SearchBar } from './SearchBar';

describe('SearchBar Test', () => {
  test('Esperamos que renderice el componente searchBar', () => {
    render(<WeatherProvider><SearchBar/></WeatherProvider>);

    const searchInput = screen.getByPlaceholderText('search location');

    fireEvent.change(searchInput, { target: { value: 'Rome' } });

    const searchButton = screen.getByText('Search');

    fireEvent.click(searchButton);

    const element = screen.findByText('Rome');

    expect(element).toBeInTheDocument();
  });
});
