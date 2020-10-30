// write your custom hook here to control your checkout form
import { useState } from 'react';



export const useForm = (initialValue) => {
  const [values, setValues] = useState(initialValue);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // const [values, setValues, handleChanges] = useForm(initialValue)
  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };

  return([values, handleChanges, showSuccessMessage, setShowSuccessMessage]);
}
