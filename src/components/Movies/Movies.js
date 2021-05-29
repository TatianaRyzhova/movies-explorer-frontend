import React, {useEffect, useState} from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchBar from "../SearchBar/SearchBar";
import MovieCardList from "../MovieCardList/MovieCardList";
import MoreButton from "../MoreButton/MoreButton";
import {filterMovies, filterShortMovies} from "../../utils/filterUtils";
import {getMoreMovies, getMoviesQty} from "../../utils/moreButtonUtils";

function Movies({movies, loggedIn, onGetMovies, isMoviesLoading, isMoviesErrors, onMovieLike, searchButtonClick, isSaved}) {

  const [searchQuery, setSearchQuery] = useState('');
  const [isSwitchChecked, setIsSwitchChecked] = useState(false);
  const [moviesQty, setMoviesQty] = useState(getMoviesQty());
  const [availableMovies, setAvailableMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isSearchEmpty, setIsSearchEmpty] = useState(false);

  useEffect(() => {
    const foundMovies = filterMovies(movies, searchQuery.toLowerCase());
    const filteredMovies = filterShortMovies(foundMovies, isSwitchChecked);
    setAvailableMovies(filteredMovies);
    setFilteredMovies(filteredMovies.slice(0, moviesQty));

    if (!filteredMovies.length) {
      setIsSearchEmpty(true);
    } else {
      setIsSearchEmpty(false);
    }
  }, [movies, searchQuery.toLowerCase(), isSwitchChecked, moviesQty]);

  useEffect(() => {
    const handleScreenWidth = () => {
      setTimeout(() => {
        setMoviesQty(getMoviesQty());
        setFilteredMovies(availableMovies.slice(0, getMoviesQty()));
      }, 1000);
    };
    window.addEventListener("resize", handleScreenWidth);
    return () => window.removeEventListener("resize", handleScreenWidth);
  }, [availableMovies]);

  const handleSearchSubmit = (value) => {
    setSearchQuery(value);
    if (movies.length > 0) {
      onGetMovies();
    } else {
      setIsSearchEmpty(true);
    }
  };

  function handleSwitch() {
    setIsSwitchChecked(!isSwitchChecked);
  }

  const handleClickMoreButton = () => {
    setMoviesQty(moviesQty + getMoreMovies());
  };

  return (
    <div>

      <Header loggedIn={loggedIn}/>
      <SearchBar
        onSearchBarSubmit={handleSearchSubmit}
        onSwitchChecked={isSwitchChecked}
        handleSwitchClick={handleSwitch}
        searchButtonClick={searchButtonClick}
      />

      {isSearchEmpty ?
        (
          <div className="movies__not-found">
            <p className="movies__not-found_text">Nothing found...</p>
          </div>
        )
      : (
          <MovieCardList
            movies={filteredMovies}
            isMoviesLoading={isMoviesLoading}
            isMoviesErrors={isMoviesErrors}
            onMovieLike={onMovieLike}
            isSaved={isSaved}
          />
        )
      }

      <MoreButton
        handleClickMoreButton={handleClickMoreButton}
        filteredMovies={filteredMovies}
        moviesQty={moviesQty}
      />
      <Footer/>

    </div>

  )
}

export default Movies;
