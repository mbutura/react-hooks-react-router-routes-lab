import React from "react";
import { directors } from "../data";

function Directors({directors}) {
  return (
  <div>
    <h1>Directors page</h1>
    {directors.map((director) => {
      <div>
        (director.movies.length !==0)&&<ul>
          director.movies.map((movie) => {
            <li>{movie}</li>
          })
        (director.movies.length !==0)&&</ul>
      </div>
    })}
  </div>);
}

export default Directors;
