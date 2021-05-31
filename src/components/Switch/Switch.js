import React from "react";

function Switch(props) {
  return (
    <div className="switch">
      <p className="switch__text">{props.text}</p>
      <label className="switch__label">
        <input type="checkbox"
               onChange={props.handleSwitchClick}
               checked={props.onSwitchChecked}
        />
        <span className="switch__slider"></span>
      </label>
    </div>

  )
}

export default Switch;
