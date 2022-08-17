import './App.css';
import { Home } from './components/Home';
import { SearchBar } from './components/SearchBar/SearchBar';
import { WeatherProvider } from './providers/WeatherContext';

function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <Home />
        <SearchBar />
      </WeatherProvider>
    </div>
  );
}

export default App;
