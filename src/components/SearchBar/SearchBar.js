import React, {useState} from "react";
import searchIcon from "../../images/loop-button-icon.svg";
import Switch from "../Switch/Switch";

function SearchBar({onSearchBarSubmit,handleSwitchClick,onSwitchChecked}) {
  const [data, setData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearchBarSubmit(data);
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
            onChange={(e) => setData(e.target.value)}
          />
          <button className="search-bar__button" type='submit' aria-label='save' name="submit">
            <img src={searchIcon} alt="loop search icon" className="search-bar__loop-icon"/>
          </button>
        </div>

        <Switch
          text={"Short films"}
          handleSwitchClick={handleSwitchClick}
          onSwitchChecked={onSwitchChecked}
        />

      </form>

    </div>
  )
}

export default SearchBar;
