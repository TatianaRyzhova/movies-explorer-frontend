import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchBar from "../SearchBar/SearchBar";
import MovieCardList from "../MovieCardList/MovieCardList";
import MoreButton from "../MoreButton/MoreButton";

function SavedMovies() {
  return (
    <div>

      <Header/>
      <SearchBar/>
      <MovieCardList/>
      <MoreButton/>
      <Footer/>

    </div>

  )
}

export default SavedMovies;
