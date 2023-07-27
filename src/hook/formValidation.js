import { useState, useCallback } from "react";

export const useFormValidation = (
  defaultValues = {}, 
  defaultFormValidity = false
  ) => {
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState(defaultValues);
    const [inputValidities, setInputValidities] = useState({});
    const [isValid, setIsValid] = useState(defaultFormValidity);

    const handleChange = ({ target }) => {
      const { name, value, validationMessage, validity, form } = target;
      setErrors({...errors, [name]: validationMessage});
      setValues({...values, [name]: value});
      setInputValidities({...inputValidities, [name]: validity.valid});
      setIsValid(form.checkValidity());
    }
    const resetForm = useCallback(
      (newErrors = {}, newValues = {}, newinputValidities = {}, newIsValid = false) => {
        setErrors(newErrors);
        setValues(newValues);
        setInputValidities(newinputValidities);
        setIsValid(newIsValid);
      },
      [setErrors, setValues, setInputValidities, setIsValid]
    );

    return { values, handleChange, errors, isValid, resetForm, inputValidities };
};