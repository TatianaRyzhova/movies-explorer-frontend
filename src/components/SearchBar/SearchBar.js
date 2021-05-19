import React from "react";
import searchIcon from "../../images/loop-button-icon.svg";
import Switch from "../Switch/Switch";

function SearchBar() {
  return (
    <div className="search-bar">
      <form className="search-bar__form">
        <div className="search-bar__form_input">
          <input
            type="text"
            id="header-search"
            placeholder="Movies"
            name="movies"
            required
          />
          <button className="search-bar__button" type='submit' aria-label='save' name="submit">
            <img src={searchIcon} alt="loop search icon" className="search-bar__loop-icon"/>
          </button>
        </div>

        <Switch
          text={"Short films"}
        />

      </form>

    </div>
  )
}

export default SearchBar;
