import {SHORT_MOVIE_DURATION} from "./constants";

export const filterMovies = (movies, searchQuery) => {
  return movies.filter((movie) => {
    return (
      movie.nameRU.toLowerCase().indexOf(searchQuery) >= 0 || movie.nameEN?.toLowerCase().indexOf(searchQuery) >= 0
    );
  });
};

export const filterShortMovies = (movies, isSwitchChecked) => {
  return movies.filter((movie) => (isSwitchChecked ? movie.duration <= SHORT_MOVIE_DURATION : Number));
};
