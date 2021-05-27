import React from "react";
import moviePicture from "../../images/movie-card.svg";
import {Route, Switch} from "react-router-dom";
import {MOVIES_BASE_URL, DEFAULT_TRAILER_LINK} from "../../utils/constants";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

function MovieCard({movie, onMovieLike, onMovieDelete, isSaved}) {
  const pathname = window.location.pathname;
  const imageUrl = movie?.image ? `${MOVIES_BASE_URL}${movie?.image?.url}` : moviePicture;
  const movieDuration = timeConverter(movie.duration);

  function timeConverter(time) {
    let hours = (time / 60);
    let minutes = (hours - Math.floor(hours)) * 60;
    return Math.floor(hours) + "h" + Math.round(minutes) + "m";
  }

  const isLiked = isSaved(movie);
  console.log('isliked ', isLiked);

  const movieCardLikeButtonClassName = (
    `movie__like-button ${isLiked ? 'movie__like-button_active' : 'movie__like-button'}`
  );


  function handleLikeClick() {
    onMovieLike(movie);
  }

  function handleDeleteClick() {
    onMovieDelete(movie);
  }

  return (
    <div className="movie-card">
      <a href={movie.trailer || movie.trailerLink || DEFAULT_TRAILER_LINK} target="_blank" rel="noreferrer">
        <img src={pathname === '/saved-movies' ? movie.image : imageUrl} alt={movie.nameEN} className="movie__photo"/>
      </a>

      <div className="movie__description-container">
        <div className="movie__info">
          <p className="movie__description">{movie.nameEN}</p>
          <p className="movie__duration">{movieDuration}</p>
        </div>

        <Switch>
          <Route path="/movies">
            <button type="button" aria-label="like"

              // className={`'movie__like-button' ${props.liked ? 'movie__like-button_active' : 'movie__like-button'}`}
                    className={movieCardLikeButtonClassName}
                    onClick={handleLikeClick}
            />
          </Route>

          <Route path="/saved-movies">
            <button type="button" aria-label="remove" className="movie__remove-button" onClick={handleDeleteClick}/>
          </Route>

        </Switch>
      </div>
    </div>
  )
}


export default MovieCard;
