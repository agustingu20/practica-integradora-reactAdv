import { useContext } from 'react';
import WeatherContext from '../../providers/WeatherContext';

const Search = () => {
  const { weather } = useContext(WeatherContext);

  return (
    <section className="d-flex flex-column justify-content-center w-25 bg-dark text-white">
      <div className="d-flex p-3">
        <button type="button" className="btn btn-secondary ">Search for places</button>
      </div>
      <div className="d-flex flex-column align-items-center">
        <h1>Imagen</h1>
        <h3 className="pt-3">{weather?.current?.temp_c}</h3>
        <h4 className="pt-3">{weather?.current?.condition?.text}</h4>
        <span className="pt-3">{weather?.location?.localtime}</span>
        <span className="py-4">{weather?.location?.name}</span>
      </div>
    </section>
  );
};

export default Search;
