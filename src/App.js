/* eslint-disable object-curly-newline */
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { SearchBar } from './components/SearchBar/SearchBar';
import { WeatherProvider } from './providers/WeatherContext';

function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchBar />} />
          </Routes>
        </BrowserRouter>
      </WeatherProvider>
    </div>
  );
}

export default App;
