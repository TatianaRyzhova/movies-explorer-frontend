import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchBar from "../SearchBar/SearchBar";
import MovieCardList from "../MovieCardList/MovieCardList";
import MoreButton from "../MoreButton/MoreButton";
import Preloader from "../Preloader/Preloader";

function Movies({loggedIn}) {
  return (
    <div>

      <Header loggedIn={loggedIn}/>
      <SearchBar/>
      <Preloader/>
      <MovieCardList/>
      <MoreButton/>
      <Footer/>

    </div>

  )
}

export default Movies;
