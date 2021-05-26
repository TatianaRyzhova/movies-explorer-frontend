// export const filterMovies = (movies, searchQuery, isShort) => {
//   return movies.filter((movie) => {
//     if (!isShort) {
//       return (
//         movie.nameRU.toLowerCase().indexOf(searchQuery) >= 0 || movie.nameEN?.toLowerCase().indexOf(searchQuery) >= 0
//       );
//     } else {
//       return (
//         (movie.nameRU.toLowerCase().indexOf(searchQuery) >= 0 || movie.nameEN?.toLowerCase().indexOf(searchQuery) >= 0)
//         && movie.duration <= 40
//       );
//     }
//   });
// };

export const filterMovies = (movies, searchQuery) => {
  return movies.filter((movie) => {
    return (
      movie.nameRU.toLowerCase().indexOf(searchQuery) >= 0 || movie.nameEN?.toLowerCase().indexOf(searchQuery) >= 0
    );
  });
};

export const filterShortMovies = (movies, isSwitchChecked) => {
  return movies.filter((movie) => (isSwitchChecked ? movie.duration <= 40 : Number));
};

export const getMoviesAmount = () => {
  if (window.innerWidth <= 639) {
    return 5;
  } else if (window.innerWidth <= 1080) {
    return 8;
  } else {
    return 12;
  }
};

export const getMoreMovies = () => {
  if (window.innerWidth <= 1080) {
    return 2;
  } else {
    return 4;
  }
};


export const checkSavedMovies = (allMovies, savedMovies) => {
  savedMovies.forEach((savedMovie) => {
    const movie = allMovies.find((item) => item.nameRU === savedMovie.nameRU);
    movie.isSaved = true;
  });
  return allMovies;
};
