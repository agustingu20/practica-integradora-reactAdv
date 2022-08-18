/* eslint-disable object-curly-newline */
import './App.css';
import { useContext, useState } from 'react';
import { Home } from './components/Home';
import { SearchBar } from './components/SearchBar/SearchBar';
import WeatherContext, { WeatherProvider } from './providers/WeatherContext';

function App() {
  // const { isShowHome } = useContext(WeatherContext);
  const [isShowHome, setIsShowHome] = useState(true);

  return (
    <div className="App">
      <WeatherProvider>{isShowHome ? <Home /> : <SearchBar />}</WeatherProvider>
    </div>
  );
}

export default App;
