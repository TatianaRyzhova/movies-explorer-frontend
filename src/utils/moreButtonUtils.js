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


export const checkSavedMovies = (allMovies, savedMovies) => {
  savedMovies.forEach((savedMovie) => {
    const movie = allMovies.find((item) => item.nameRU === savedMovie.nameRU);
    movie.isSaved = true;
  });
  return allMovies;
};
