import { createContext, useState } from 'react';

const weatherContext = createContext();

export const WeatherProvider = ({ children }) => {
const [weather, setWeather] = useState({});

const data = { weather, setWeather };

  return (
        <weatherContext.Provider value={data}>
            {children}
        </weatherContext.Provider>
  );
};
