export const getMoviesQty = () => {
  if (window.innerWidth <= 700) {
    return 5;
  } else if (window.innerWidth <= 1220) {
    return 8;
  } else {
    return 12;
  }
};

export const getMoreMovies = () => {
  return window.innerWidth <= 1220 ? 2 : 4;
};
