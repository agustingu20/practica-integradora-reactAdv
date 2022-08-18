/* eslint-disable operator-linebreak */
import React, { useContext, useEffect, useState } from 'react';
import useFetch from '../../Hooks/CustomFetch/UseFetch';
import WeatherContext from '../../providers/WeatherContext';

export const SearchBar = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [cityName, setCityName] = useState('');

  const { setWeather, location, setLocation } = useContext(WeatherContext);

  const cityData = useFetch(
    `http://api.weatherapi.com/v1/search.json?key=6be8c28794924ed8a2a184922222905&q=${location}`,
  );

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  const weatherData = useFetch(
    `http://api.weatherapi.com/v1/current.json?key=6be8c28794924ed8a2a184922222905&q=${cityName}`,
  );
  console.log('SearchBar ~ weatherData', weatherData);

  useEffect(() => {
    setWeather(weatherData.data);
    localStorage.setItem('cityWeatherData', JSON.stringify(weatherData.data));
  }, [weatherData]);

  const handleSearchBar = () => {
    setSuggestions(cityData.data);
  };

  return (
    <div className="search-section">
      <div className="pt-3">
        <input
          type="text"
          placeholder="search location"
          onChange={handleChange}
        />
        <button type="button" onClick={() => handleSearchBar()}>
          Search
        </button>
      </div>
      {suggestions &&
        suggestions.map((suggestion) => (
          <ul key={suggestion.id} className="mt-3">
            <li
              className="suggestions"
              onClick={() => {
                setCityName(suggestion?.name);
              }}
            >
              <a href="/">{suggestion?.name}</a>
            </li>
          </ul>
        ))}
    </div>
  );
};
