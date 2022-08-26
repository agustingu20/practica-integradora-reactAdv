import { fireEvent, render, screen } from '@testing-library/react';
import { WeatherProvider } from '../../providers/WeatherContext';
import { SearchBar } from './SearchBar';

describe('Search test', () => {
  test('Esperamos que se muestren los resultados del search', () => {
    render(
      <WeatherProvider>
        <SearchBar />
      </WeatherProvider>,
    );
    const searchInput = screen.getByPlaceholderText('search location');
    fireEvent.change(searchInput, { target: { value: 'Rome' } });
    console.log(searchInput);
    const searchButton = screen.getByText('Search');
    fireEvent.click(searchButton);
    const element = screen.findAllByText('Campo');
    console.log(element);
    expect(searchInput.closest('input').value).toEqual('Rome');
    // expect(element).toBeInTheDocument();
  });
});
