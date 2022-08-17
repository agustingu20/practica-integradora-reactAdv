import { createContext, useState } from 'react';

const weatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [location, setLocation] = useState('Paris');
  const [weather, setWeather] = useState({});

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
