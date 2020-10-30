// write your custom hook here to control your checkout form
import { useState } from 'react';



export const useCheckout = (initialValue) => {
  const [values, setValues] = useState(initialValue);

  // const [values, setValues, handleChanges] = useForm(initialValue)
  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }



  return([value, handleChanges])
}