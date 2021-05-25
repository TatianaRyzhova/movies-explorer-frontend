import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import {Route, Switch} from "react-router-dom";

function MovieCardList({movies}) {
  return (
    <section className="movies">
      <div className="movies__list">
        {movies.map((movie) => (
            <MovieCard
              key={movie._id ?? movie.id}
              movie={movie}
              // onCardClick={props.onCardClick}
              // onCardLike={props.onCardLike}
              // onCardDelete={props.onCardDelete}
            />
          )
        )}


        {/*<Switch>*/}
        {/*  <Route path="/movies">*/}
        {/*    <MovieCard liked={false}/>*/}
        {/*    <MovieCard liked={true}/>*/}
        {/*    <MovieCard liked={false}/>*/}
        {/*    <MovieCard liked={true}/>*/}
        {/*    <MovieCard liked={false}/>*/}
        {/*    <MovieCard liked={false}/>*/}
        {/*  </Route>*/}

        {/*  <Route path="/saved-movies">*/}
        {/*    <MovieCard liked={false}/>*/}
        {/*    <MovieCard liked={true}/>*/}
        {/*    <MovieCard liked={false}/>*/}
        {/*    <MovieCard liked={true}/>*/}
        {/*    <MovieCard liked={false}/>*/}
        {/*  </Route>*/}

        {/*</Switch>*/}

      </div>
    </section>

  )
}

export default MovieCardList;
