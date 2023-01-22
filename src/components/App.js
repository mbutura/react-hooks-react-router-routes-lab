import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";
import { movies, actors, directors } from "../data"

function App() {
  return <div>{
    <switch>
      <route  path='/movies'><Movies movies={movies}/></route>
      <route  path='/directors'><Directors directors={directors}/></route>
      <route  path='/actors'><Actors actors={actors}/></route>
      <route  path='/'><Home/></route>
    </switch>
    }</div>;
}

export default App;
