import React, { useContext, useState } from 'react';
import useFetch from '../../hooks/CustomFetch/UseFetch';
import WeatherContext from '../../providers/WeatherContext';

export const SearchBar = () => {
  const ciudades = ['London', 'Barcelona', 'Long Beach', 'Argentina'];
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const weatherData = useFetch(`http://api.weatherapi.com/v1/current.json?key=6be8c28794924ed8a2a184922222905&q=${inputValue}`);

  const { setWeather } = useContext(WeatherContext);

  const handleSearchBar = () => {
    setWeather(weatherData.data);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    let matches = [];
    if (inputValue.length >= 3) {
      // busco ciudades en la api (por ahora busco en el array ciudades)
      matches = ciudades.filter(ciudad => {
        const regex = new RegExp(`${inputValue}`, 'gi');
        return ciudad.match(regex);
      });
    }
    setSuggestions(matches);
  };
  console.log('caracteres ingresados:', inputValue);
  console.log('sugeridos:', suggestions);

  return (
    <div>
      <div>
        <input type='text' placeholder='search location' onChange={handleChange}/>
        <button type='button' onClick={() => handleSearchBar()}>Search</button>
      </div>
      {
      suggestions && suggestions.map((suggestion, i) => (
        <div
          key={i}
          className="suggestions "
        >
          {suggestion}
        </div>
      ))
      }
    </div>
  );
};
