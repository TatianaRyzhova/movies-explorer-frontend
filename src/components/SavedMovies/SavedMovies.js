import React, {useEffect, useState} from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchBar from "../SearchBar/SearchBar";
import MovieCardList from "../MovieCardList/MovieCardList";
import {filterMovies, filterShortMovies} from "../../utils/filterUtils";
import MoreButton from "../MoreButton/MoreButton";
import {getMoreMovies, getMoviesQty} from "../../utils/moreButtonUtils";

function SavedMovies({loggedIn, savedMovies, onMovieDelete, isMoviesErrors, isMoviesLoading, isSaved}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSwitchChecked, setIsSwitchChecked] = useState(false);
  const [likedMovies, setLikedMovies] = useState([]);
  const [moviesQty, setMoviesQty] = useState(getMoviesQty());
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isSearchEmpty, setIsSearchEmpty] = useState(false);

  useEffect(() => {
    const foundMovies = filterMovies(savedMovies, searchQuery);
    const filteredMovies = filterShortMovies(foundMovies, isSwitchChecked);
    setLikedMovies(filteredMovies);
    setFilteredMovies(filteredMovies.slice(0, moviesQty));

    if (!filteredMovies.length) {
      setIsSearchEmpty(true);
    } else {
      setIsSearchEmpty(false);
    }
  }, [savedMovies, searchQuery, isSwitchChecked, moviesQty]);

  useEffect(() => {
    const handleScreenWidth = () => {
      setTimeout(() => {
        setMoviesQty(getMoviesQty());
        setFilteredMovies(likedMovies.slice(0, getMoviesQty()));
      }, 1000);
    };
    window.addEventListener("resize", handleScreenWidth);
    return () => window.removeEventListener("resize", handleScreenWidth);
  }, [likedMovies]);

  const handleSearchSubmit = (value) => {
    setSearchQuery(value);
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
            onMovieDelete={onMovieDelete}
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

export default SavedMovies;
