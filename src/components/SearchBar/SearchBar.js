import React, { useContext, useEffect, useState } from 'react';
import useFetch from '../../Hooks/CustomFetch/UseFetch';
import WeatherContext from '../../providers/WeatherContext';

export const SearchBar = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [cityName, setCityName] = useState('');

  const {
    setWeather, location, setLocation, setIsShowHome,
  } = useContext(WeatherContext);

  const cityData = useFetch(
    `http://api.weatherapi.com/v1/search.json?key=6be8c28794924ed8a2a184922222905&q=${location}`,
  );

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  const weatherData = useFetch(
    `http://api.weatherapi.com/v1/current.json?key=6be8c28794924ed8a2a184922222905&q=${cityName}`,
  );

  useEffect(() => {
    setWeather(weatherData.data);
    if (cityName) setIsShowHome(true);
  }, [weatherData]);

  const handleSearchBar = () => {
    setSuggestions(cityData.data);
  };

  return (
    <div className="search-section">
      <div className="pt-3">
        <input
          className="input-search"
          type="text"
          placeholder="search location"
          onChange={handleChange}
        />
        <button
          className="search-button"
          type="button"
          onClick={() => handleSearchBar()}
        >
          Search
        </button>
      </div>
      {suggestions && suggestions.map((suggestion) => (
          <ul key={suggestion.id} className="mt-3">
            <li className="suggestions">
              <button
                className="button-cities btn btn-sm btn-info"
                onClick={() => {
                  setCityName(suggestion?.name);
                }}
                role = 'button'
              >
                {suggestion?.name}
              </button>
            </li>
          </ul>
      ))}
    </div>
  );
};
