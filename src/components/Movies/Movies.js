import React, {useState, useEffect} from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchBar from "../SearchBar/SearchBar";
import MovieCardList from "../MovieCardList/MovieCardList";
import MoreButton from "../MoreButton/MoreButton";
import {filterMovies, filterShortMovies} from "../../utils/filterUtils";
import {getMoreMovies, getMoviesQty} from "../../utils/moreButtonUtils";

function Movies({movies, loggedIn, onGetMovies, isMoviesLoading, isMoviesErrors}) {

  const [searchQuery, setSearchQuery] = useState('');
  const [isSwitchChecked, setIsSwitchChecked] = useState(false);
  const [moviesQty, setMoviesQty] = useState(getMoviesQty());
  const [availableMovies, setAvailableMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isSearchEmpty, setIsSearchEmpty] = useState(false);

  // const [filteredMovies, setFilteredMovies] = useState([]);
  // const [isShortMovie, setIsShortMovie] = useState(false);
  // const [isSearchEmpty, setIsSearchEmpty] = useState(false);

  function handleSwitch() {
    setIsSwitchChecked(!isSwitchChecked);
  }

  const handleSearchSubmit = (value) => {
    setSearchQuery(value);
    if (movies.length > 0) {
      onGetMovies();
    } else {
      setIsSearchEmpty(true);
    }
  };

  const handleClickMoreButton = () => {
    setMoviesQty(moviesQty + getMoreMovies());
  };

  useEffect(() => {
    const foundMovies = filterMovies(movies, searchQuery);
    const filteredMovies = filterShortMovies(foundMovies, isSwitchChecked);
    setAvailableMovies(filteredMovies);
    setFilteredMovies(filteredMovies.slice(0, moviesQty));

    if (!filteredMovies.length) {
      setIsSearchEmpty(true);
    } else {
      setIsSearchEmpty(false);
    }
  }, [movies, searchQuery, isSwitchChecked, moviesQty]);

  useEffect(() => {
    const updateWindowWidth = () => {
      setTimeout(() => {
        setMoviesQty(getMoviesQty());
        setFilteredMovies(availableMovies.slice(0, getMoviesQty()));
      }, 1000);
    };
    window.addEventListener("resize", updateWindowWidth);
    return () => window.removeEventListener("resize", updateWindowWidth);
  }, [availableMovies]);


  // function handleSearchButtonClick() {
  //   setAllMovies(
  //     utils.filterMovies(movies, searchQuery)
  //   )
  // }

  // const handleSearchButtonClick = () => {
  //   const result = filterMovies(movies, searchQuery);
  //   setAllMovies(result);
  // };

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
