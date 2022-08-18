import { useContext } from 'react';
import WeatherContext from '../../providers/WeatherContext';
import clear from '../../assets/Clear.png';
import lightCloud from '../../assets/LightCloud.png';
import lightRain from '../../assets/LightRain.png';
import heavyRain from '../../assets/HeavyRain.png';
import shower from '../../assets/Shower.png';
import cloudy from '../../assets/HeavyCloud.png';

const Home = () => {
  const { weather, setIsShowHome } = useContext(WeatherContext);

  return (
    <section className="home-section text-white">
      <div className="d-flex p-3">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setIsShowHome(false)}
        >
          Search for places
        </button>
      </div>
      <div className="d-flex flex-column align-items-center">
        <div>
          {weather?.current?.condition?.text === 'Clear' && (
            <img src={clear} alt="clear" />
          )}
          {weather?.current?.condition?.text === 'Partly cloudy' && (
            <img src={lightCloud} alt="lightCloud" />
          )}
          {weather?.current?.condition?.text === 'Light rain shower' && (
            <img src={lightRain} alt="lightRain" />
          )}
          {weather?.current?.condition?.text === 'Heavy rain' && (
            <img src={heavyRain} alt="heavyRain" />
          )}
          {weather?.current?.condition?.text === 'Patchy rain possible' && (
            <img src={shower} alt="shower" />
          )}
          {weather?.current?.condition?.text === 'Partly cloudy' && (
            <img src={cloudy} alt="cloudy" />
          )}
        </div>
        <h1 className="pt-3">{weather?.current?.temp_c} °C</h1>
        <h1 className="pt-3">{weather?.current?.condition?.text}</h1>
        <span className="pt-3">{weather?.location?.localtime}</span>
        <span className="py-4">{weather?.location?.name}</span>
      </div>
    </section>
  );
};

export default Home;
