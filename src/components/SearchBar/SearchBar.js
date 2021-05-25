import React, {useState} from "react";
import searchIcon from "../../images/loop-button-icon.svg";
import Switch from "../Switch/Switch";
import {useFormWithValidation} from "../../hooks/useForm";

function SearchBar({onSearchBarSubmit, querySearch, setQuerySearch, handleSearchButtonClick, handleSwitch, switchChecked}) {

  const {values, errors, isValid, handleChange, resetForm} = useFormWithValidation();

  // const [searchQuery, setSearchQuery] = useState('');
  // const [data, setData] = useState({});

  // const handleChange = (event) => {
  //   setData(event.target.value)
  // }
  //
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearchBarSubmit();
  }

  return (
    <div className="search-bar">
      <form className="search-bar__form" onSubmit={handleSubmit}>
        <div className="search-bar__form_input">
          <input
            type="text"
            id="header-search"
            placeholder="Movies"
            name="movies"
            required
            // value={querySearch}
            value={values.movies}
            onChange={(e) => setQuerySearch (e.target.value)}
          />
          <button className="search-bar__button" type='submit' aria-label='save' name="submit" onClick={handleSearchButtonClick}>
            <img src={searchIcon} alt="loop search icon" className="search-bar__loop-icon"/>
          </button>
        </div>

        <Switch
          text={"Short films"}
          handleSwitch={handleSwitch}
          switchChecked={switchChecked}
        />

      </form>

    </div>
  )
}

export default SearchBar;
