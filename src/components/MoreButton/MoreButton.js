import React from "react";

function MoreButton(props) {
  return (
    <div className="more-button__container">
      <button className= {`${props.filteredMovies.length === 0 || props.moviesQty > props.filteredMovies.length
        ? "more-button_not-visible" : "more-button"}`} type='button' aria-label='more'
              onClick={props.handleClickMoreButton}
      >
        More
      </button>
    </div>
  )
}

export default MoreButton;
