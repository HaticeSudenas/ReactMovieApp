import MovieControls from "./MovieControls";

function MovieCard({movie,type}) {
    return (
      <div className="movie-card">
        <div className="ovaelay"></div>
          {
            movie.poster_path 
            ?<img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={`${movie.poster_path}`} />
            :<div className="filler-poster"/>
          }
          <MovieControls movie={movie} type={type}/>
      </div>
    );
  }
  
  export default MovieCard;