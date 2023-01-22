import React from "react";
import { actors } from "../data";

function Actors() {
  const generateList = (item, idx) => <li key={idx}>{item}</li>;
  return (
  <div>
    <h1>Actors Page</h1>
    {
      actors.map((actor, idx) => {
        return(
          <div key={idx}>
            <p>{actor.name}</p>
            <ul>
              {actor.movies.map(generateList)}
            </ul>
          </div>)})}
  </div>
  );
}

export default Actors;
