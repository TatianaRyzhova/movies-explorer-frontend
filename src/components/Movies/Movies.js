import React, {useState} from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchBar from "../SearchBar/SearchBar";
import MovieCardList from "../MovieCardList/MovieCardList";
import MoreButton from "../MoreButton/MoreButton";
import Preloader from "../Preloader/Preloader";
import {filterMovies, filterShortMovies} from "../../utils/utils";

function Movies({movies, loggedIn, onGetMovies, }) {

  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isShortMovie, setIsShortMovie] = useState(false);
  const [isSearchEmpty, setIsSearchEmpty] = useState(false);

  const [isSwitchChecked, setIsSwitchChecked] = useState(false);

  const handleSearchSubmit = (value) => {
    setSearchQuery(value);
    if (!movies.length) {
      onGetMovies();
    }
  };

  // useEffect(() => {
  //     setFilteredMovies(
  //       filterMovies(movies, searchQuery)
  //     )
  //   }, [searchQuery, movies]
  // )

  function handleSearchButtonClick() {
    setFilteredMovies(
      filterMovies(movies, searchQuery)
    )
  }

  function handleSwitch() {
    setIsSwitchChecked(!isSwitchChecked);
  }

  // const handleSearchButtonClick = () => {
  //   const result = filterMovies(movies, searchQuery, isShortMovie);
  //   if (!result.length) {
  //     setIsSearchEmpty(true);
  //   }
  //   setFilteredMovies(result);
  // };

  return (
    <div>

      <Header loggedIn={loggedIn}/>
      <SearchBar
        onSearchBarSubmit={handleSearchSubmit}
        setQuerySearch={setSearchQuery}
        handleSearchButtonClick={handleSearchButtonClick}
        // onSwitchClick={handleSwitch}

        switchChecked={isSwitchChecked}
        handleSwitch={handleSwitch}
      />
      <Preloader/>

      <MovieCardList
        movies={filteredMovies}
      />

      <MoreButton/>
      <Footer/>

    </div>

  )
}

export default Movies;
