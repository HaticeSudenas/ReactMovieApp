import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";

function Watched() {
  const { watched } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">İzlenmiş Filmler</h1>
          <div className="count-pill">{watched.length} movies</div>
        </div> 
        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) => (<MovieCard movie={movie} type="watched"/>))}
          </div>
        ):<h2 className="no-movies">Lİsteinzde Film yok...</h2>}
      </div>
    </div>
  );
}

export default Watched;