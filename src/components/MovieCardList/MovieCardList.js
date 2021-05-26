import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import Preloader from "../Preloader/Preloader";

function MovieCardList({movies, isMoviesLoading, isMoviesErrors}) {
  return (

    <section className="movies">
      {isMoviesLoading || isMoviesErrors ? (
        <div>
            {isMoviesLoading ? <Preloader/> : isMoviesErrors}
        </div>

        )
        : (
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
          </div>
        )}
    </section>
  )
}

export default MovieCardList;
