import { useState, useEffect } from 'react';

import { orderStatus } from '../components/orderFormStatus';

const INITIAL_STATE = {
  id: 0,
  email: '',
  name: '',
  surname: '',
  phone: '',
  position: '',
  type: 'Розница',
  provider: 'Поставщик 1',
  date: '',
  comment: '',
  status: orderStatus.New
};

function useFormValidation(initialState = INITIAL_STATE, validate, callback) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isValid, setValid] = useState(false);

  useEffect(() => {
    const noErrors = Object.keys(errors).length === 0;
    if (noErrors) {
      console.log('Valid!');
      setValid(true);
    } else {
      console.log('Invalid!');
      setValid(false);
    }
  }, [errors]);

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleBlur = () => {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    const noErrors = Object.keys(validationErrors).length === 0;
    if (noErrors) {
      callback(values);
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleBlur,
    isValid,
    handleSubmit
  };
}

export default useFormValidation;
