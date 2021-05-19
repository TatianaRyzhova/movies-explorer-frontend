import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import {Route, Switch} from "react-router-dom";

function MovieCardList() {
  return (
    <section className="movies">
      <div className="movies__list">
        <Switch>
          <Route path="/movies">
            <MovieCard liked={false}/>
            <MovieCard liked={true}/>
            <MovieCard liked={false}/>
            <MovieCard liked={true}/>
            <MovieCard liked={false}/>
            <MovieCard liked={false}/>
          </Route>

          <Route path="/saved-movies">
            <MovieCard liked={false}/>
            <MovieCard liked={true}/>
            <MovieCard liked={false}/>
            <MovieCard liked={true}/>
            <MovieCard liked={false}/>
          </Route>

        </Switch>

      </div>
    </section>

  )
}

export default MovieCardList;
