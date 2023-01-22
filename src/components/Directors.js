import React from "react";
import { directors } from "../data";

function Directors() {
  const generateList = (item, idx) => <li key={idx}>{item}</li>;
  return (
  <div>
    <h1>Directors Page</h1>
    {directors.map((director, idx) => {
      return(
        <div key={idx}>
          <p>{director.name}</p>
          <ul>
            {director.movies.map(generateList)}
          </ul>
        </div>)})}
  </div>);
}

export default Directors;
