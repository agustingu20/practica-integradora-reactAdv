import './App.css';
import { Search } from './components/Search';
import { SearchBar } from './components/SearchBar/SearchBar';
import { WeatherProvider } from './providers/WeatherContext';

function App() {
  return (
    <div className="App">
      <WeatherProvider>
      <Search />
      <SearchBar />
      </WeatherProvider>
    </div>
  );
}

export default App;
