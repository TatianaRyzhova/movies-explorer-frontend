import React from "react";
import notFoundPicture from "../../images/not-found.svg"
import {Link} from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found__page">
      <img src={notFoundPicture} alt="not found" className="not-found__picture"/>
      <p className="not-found__text">Page is not found</p>
      <Link to="/" className="not-found__link">
        Go Back
      </Link>
    </div>
  )
}

export default NotFound;
