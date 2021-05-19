import React from "react";

function AuthInput(props) {
  return(
    <div className="auth-input__info">

      <label>{props.label}</label>

      <input type={props.type} name={props.name}  id={props.id} className="auth-input"
             placeholder={props.placeholder} required onChange={props.handleChange}
      />

      <span id={`${props.name}-input-error`} className="input-error">
        {props.errorName || ''}
    </span>

    </div>


  )
}

export default AuthInput;
