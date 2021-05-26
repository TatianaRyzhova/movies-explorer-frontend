import React from "react";

function MoreButton(props) {
  return (
    <div className="more-button__container">
      <button className="more-button" type='button' aria-label='more' onClick={props.handleClickMoreButton}>
        More
      </button>
    </div>
  )
}

export default MoreButton;
