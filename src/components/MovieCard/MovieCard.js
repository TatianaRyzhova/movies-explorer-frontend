import React from "react";
import moviePicture from "../../images/movie-card.svg";
import {Route, Switch} from "react-router-dom";

function MovieCard(props) {
  return (
    <div className="movie-card">
        <img src={moviePicture} alt="movie cover" className="movie__photo"/>
      <div className="movie__description-container">
        <div className="movie__info">
          <p className="movie__description">33 слова о дизайне</p>
          <p className="movie__duration">1h42m</p>
        </div>

        <Switch>
          <Route path="/movies">
              <button type="button" aria-label="like"
                      className={`'movie__like-button' ${props.liked ? 'movie__like-button_active' : 'movie__like-button'}`}
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
