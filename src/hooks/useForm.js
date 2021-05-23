import React, {useCallback, useState} from "react";

export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [dirtyInputs, setDirtyInputs] = useState({});

  const handleChange = (evt) => {
    const input = evt.target;
    const value = input.value;
    const name = input.name;
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: input.validationMessage});
    setIsValid(input.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  )

  return {values, errors, isValid, handleChange, setValues, resetForm};
}
