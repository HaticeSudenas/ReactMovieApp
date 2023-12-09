import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function MovieControls({ movie, type }) {
  const { removeMovieToWatchList, addMovieToWatched ,moveToWatchList,removeMovieToWatched} = useContext(GlobalContext);
  return (
    <div className="inner-card-controls">
      {
        type === "watchList" && (
          <>
            <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
              <i className="fa-fw far fa-eye"></i>
            </button>
            <button onClick={() => removeMovieToWatchList(movie.id)} className="ctrl-btn">
              <i className="fa-fw fa fa-times"></i>
            </button>
          </>
        )
      }

      {
        type === "watched" && (
          <>
            <button className="ctrl-btn" onClick={() => moveToWatchList(movie)}>
              <i className="fa-fw far fa-eye-slash"></i>
            </button>
            <button onClick={() => removeMovieToWatched(movie.id)} className="ctrl-btn">
              <i className="fa-fw fa fa-times"></i>
            </button>
          </>
        )
      }
    </div>
  );
}

export default MovieControls;