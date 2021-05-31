import {
  BIG_SCREEN_MOVIE_DEFAULT_QTY,
  BIG_SCREEN_MOVIE_LOAD_MORE_QTY,
  MEDIUM_SCREEN_MOVIE_DEFAULT_QTY,
  MEDIUM_SMALL_SCREEN_MOVIE_LOAD_MORE_QTY,
  SMALL_SCREEN_MOVIE_DEFAULT_QTY
} from "./constants";

export const getMoviesQty = () => {
  if (window.innerWidth <= 700) {
    return SMALL_SCREEN_MOVIE_DEFAULT_QTY;
  } else if (window.innerWidth <= 1220) {
    return MEDIUM_SCREEN_MOVIE_DEFAULT_QTY;
  } else {
    return BIG_SCREEN_MOVIE_DEFAULT_QTY;
  }
};

export const getMoreMovies = () => {
  return window.innerWidth <= 1220 ?
    MEDIUM_SMALL_SCREEN_MOVIE_LOAD_MORE_QTY
    : BIG_SCREEN_MOVIE_LOAD_MORE_QTY;
};
