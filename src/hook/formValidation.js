import { useState } from 'react';

export const useFormValidation = () => {
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({});
    const [inputValidities, setInputValidities] = useState({});
    const [isValid, setIsValid] = useState(false);
    
    const handleChange = ({ target }) => {
      const { name, value, validationMessage, validity, form } = target;
      setErrors({...errors, [name]: validationMessage});
      setValues({...values, [name]: value});
      setInputValidities({...inputValidities, [name]: validity.valid});
      setIsValid(form.checkValidity());
    }

    return { values, setValues, handleChange, errors, isValid, setIsValid, inputValidities };
};