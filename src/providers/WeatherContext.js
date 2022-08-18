import { createContext, useState } from 'react';

const localWeather = JSON.parse(localStorage.getItem('cityWeatherData')) || {};
const weatherContext = createContext(localWeather);

export const WeatherProvider = ({ children }) => {
  const [location, setLocation] = useState('Paris');
  const [weather, setWeather] = useState(localWeather);

  const data = {
    weather,
    setWeather,
    location,
    setLocation,
  };

  return (
    <weatherContext.Provider value={data}>{children}</weatherContext.Provider>
  );
};

export default weatherContext;
