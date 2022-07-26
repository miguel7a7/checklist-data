import { useState } from 'react';

export const useForm = (initialState = {}) => {
  const [FormValues, setFormValues] = useState(initialState);

  const handleInput = ({ target }) => {
    setFormValues({
      ...FormValues,
      [target.name]: target.value,
    });
  };

  const reset = () => {
    setFormValues(initialState);
  };
  return { FormValues, handleInput, reset };
};
