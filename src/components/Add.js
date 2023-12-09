import { useContext, useState } from "react";
import ResultCart from "./ResultCart";

function Add() {
  const [query, setQuery] = useState();
  const [result, setResult] = useState([]);

  function onChange(e) {
    setQuery(e.target.value);
    fetch(` https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMBD_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
      .then((res) => res.json())
      .then((data) => setResult(data.results));
  }

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <img src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/9ZyAUZrfccsjtDwYgc7yvOBnqM9.jpg" />
          <div className="titles">
            <h1 className="titles">Hoş Geldiniz</h1>
            <h2>Milyonlarca Film, TV şovu ve keşfedilecek kişi.
              Şimdi keşfedin.
            </h2>
          </div>
          <div className="input-wrapper">
            <input value={query} onChange={onChange} type="text" placeholder="film,dizi,kişi ara..."></input>
          </div>
        </div>
        {result.length > 0 && (
          <ul className="results">
            {
              result.map((movie) => (
                <li key={movie.id}>
                  <ResultCart movie={movie}/>
                </li>
              ))
            }
          </ul>
        )}
      </div>
    </div>
  );
}

export default Add;