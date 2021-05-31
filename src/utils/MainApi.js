import {BASE_URL, DEFAULT_TRAILER_LINK, MOVIES_BASE_URL} from './constants';

class MainApi {
  constructor({baseUrl}) {
    this._baseUrl = baseUrl;
  }

  _checkRequestStatus(result) {
    if (result.ok) {
      return result.json();
    }
    return Promise.reject(`Something went wrong: ${result.status}`);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
      }
    })
      .then(result => {
        return this._checkRequestStatus(result)
      })
  }

  updateUser(name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
      .then(result => {
        return this._checkRequestStatus(result)
      })
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
      }
    })
      .then(result => {
        return this._checkRequestStatus(result)
      })
  }

  postNewMovieCard(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        nameRU: movie.nameRU,
        nameEN: movie.nameEN || 'Unknown title',
        director: movie.director,
        country: movie.country || 'Unknown country',
        year: movie.year,
        duration: movie.duration,
        description: movie.description,
        trailer: movie.trailerLink || DEFAULT_TRAILER_LINK,
        image: MOVIES_BASE_URL + movie.image.url,
        thumbnail: MOVIES_BASE_URL + movie.image.url,
        movieId: movie.id
      })
    })
      .then(result => {
        return this._checkRequestStatus(result)
      })
  }

  deleteMovieCard(id) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
      }
    })
      .then(result => {
        return this._checkRequestStatus(result);
      })
  }
}

export const mainApi = new MainApi({
  baseUrl: BASE_URL
})
