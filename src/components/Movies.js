import React from "react";

function Movies({movies}) {
  const generateList = (genre) => <li>{genre}</li>;
  return( 
  <div>
    <h1>Movies Page</h1>
    movies.map((movie) => 
    {
      <p>{movie.title}</p>
      <p>{movie.time}</p>
      (movie.genres.length !==0)&&<ul>
      {movie.genres.map(generateList)
      (entry.genres.length !==0)&&</ul>;
    })
  </div>
  );
}

export default Movies;
