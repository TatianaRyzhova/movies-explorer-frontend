import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchBar from "../SearchBar/SearchBar";
import MovieCardList from "../MovieCardList/MovieCardList";
import MoreButton from "../MoreButton/MoreButton";
import Preloader from "../Preloader/Preloader";

function Movies() {
  return (
    <div>

      <Header/>
      <SearchBar/>
      <Preloader/>
      <MovieCardList/>
      <MoreButton/>
      <Footer/>

    </div>

  )
}

export default Movies;
