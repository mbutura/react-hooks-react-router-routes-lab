import React from "react";
import { movies } from "../data";

function Movies() {
  const generateList = (item, idx) => <li key={idx}>{item}</li>;
  return (
  <div>
    <h1>Movies Page</h1>
    {movies.map((movie, idx)=>{
      return(
        <div key={idx}>
          <p>{movie.title}</p>
          <p>{movie.time}</p>
          <ul>
            {movie.genres.map(generateList)}
          </ul>
        </div>)})}
  </div>
  );
}

export default Movies;
