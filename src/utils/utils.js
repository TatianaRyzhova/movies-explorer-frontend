

export const filterMovies = (movies, searchQuery) => {
  return movies.filter((movie) => {
    return (
      movie.nameRU.toLowerCase().indexOf(searchQuery) >= 0 || movie.nameEN?.toLowerCase().indexOf(searchQuery) >= 0
    );
  });
};

export const filterShortMovies = (movies, searchQuery) => {
  return movies.filter((movie) => {
    return (
      (movie.nameRU.toLowerCase().indexOf(searchQuery) >= 0 || movie.nameEN?.toLowerCase().indexOf(searchQuery) >= 0) && movie.duration <= 40
    );
  });
}


