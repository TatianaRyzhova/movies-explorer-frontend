import React from "react";
import moviePicture from "../../images/movie-card.svg";
import {Route, Switch} from "react-router-dom";
import {MOVIES_BASE_URL} from "../../utils/constants";

function MovieCard({movie}) {
  const pathname = window.location.pathname;
  const imageUrl = movie?.image ? `${MOVIES_BASE_URL}${movie?.image?.url}` : moviePicture;
  const movieDuration = timeConverter(movie.duration);

  function timeConverter(time) {
    let hours = (time / 60);
    let minutes = (hours - Math.floor(hours)) * 60;
    return Math.floor(hours) + "h" + Math.round(minutes) + "m";
  }

  return (
    <div className="movie-card">
      <a href={movie.trailer || movie.trailerLink} target="_blank" rel="noreferrer">
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
                    className='movie__like-button'
            />
          </Route>

          <Route path="/saved-movies">
            <button type="button" aria-label="remove" className="movie__remove-button"/>
          </Route>

        </Switch>
      </div>
    </div>
  )
}


export default MovieCard;
