import { createContext, useState } from 'react';

const weatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [location, setLocation] = useState('Paris');
  const [weather, setWeather] = useState({});
  const [isShowHome, setIsShowHome] = useState(true);

  const data = {
    weather,
    setWeather,
    location,
    setLocation,
    isShowHome,
    setIsShowHome,
  };

  return (
    <weatherContext.Provider value={data}>{children}</weatherContext.Provider>
  );
};

export default weatherContext;
