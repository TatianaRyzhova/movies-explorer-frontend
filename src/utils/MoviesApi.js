import {MOVIES_BASE_URL} from './constants';

class MoviesApi {
  constructor({moviesBaseUrl}) {
    this._moviesBaseUrl = moviesBaseUrl;
  }

  _checkRequestStatus(result) {
    if (result.ok) {
      return result.json();
    }
    return Promise.reject(`Something went wrong: ${result.status}`);
  }

  getMovies() {
    return fetch(`${this._moviesBaseUrl}/beatfilm-movies`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(result => {
        return this._checkRequestStatus(result)
      })
  }
}

export const moviesApi = new MoviesApi({
  moviesBaseUrl: MOVIES_BASE_URL
})
