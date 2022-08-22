import './App.css';
import { useContext } from 'react';
import { Home } from './components/Home';
import { SearchBar } from './components/SearchBar/SearchBar';
import WeatherContext from './providers/WeatherContext';

function App() {
  const { isShowHome } = useContext(WeatherContext);

  return (
    <div className="App">{isShowHome === true ? <Home /> : <SearchBar />}</div>
  );
}

export default App;
