import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";

function WatchList() {
  const { watchList } = useContext(GlobalContext);
  console.log(watchList)
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">İzlenecek Filmler</h1>
          <div className="count-pill">{watchList.length} movies</div>
        </div>

        {watchList.length > 0 ? (
          <div className="movie-grid">
            {watchList.map((movie) => (<MovieCard movie={movie} type="watchList" />))}
          </div>
        ) : <h2 className="no-movies">Lİsteinzde Film yok...</h2>}

      </div>

    </div>
  );
}

export default WatchList;