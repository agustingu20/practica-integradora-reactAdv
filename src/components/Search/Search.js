const Search = () => {
  return (
    <section className="d-flex flex-column justify-content-center w-25 bg-dark text-white">
      <div className="d-flex p-3">
        <button type="button" className="btn btn-secondary ">Search for places</button>
      </div>
      <div className="d-flex flex-column align-items-center">
        <h1>Imagen</h1>
        <h3 className="pt-3">Grados</h3>
        <h4 className="pt-3">Clima</h4>
        <span className="pt-3">Dia - Fecha</span>
        <span className="py-4">Ubicacion</span>
      </div>
    </section>
  );
};

export default Search;
