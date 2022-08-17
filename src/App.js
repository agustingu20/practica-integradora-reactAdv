import './App.css';
import { Home } from './components/Home';
import { WeatherProvider } from './providers/WeatherContext';

function App() {
  return (
    <div className="App">
      <WeatherProvider>
      <Home />
      </WeatherProvider>
    </div>
  );
}

export default App;
