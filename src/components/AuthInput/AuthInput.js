import React from "react";
import InputError from "../InputError/InputError";

function AuthInput(props) {
  return(
    <div className="auth-input__info">
      <label>{props.label}</label>
      <input type={props.type} name={props.name}  id={props.id} className="auth-input"
             placeholder={props.placeholder} required
      />
      <InputError name={props.name}/>
    </div>


  )
}

export default AuthInput;
