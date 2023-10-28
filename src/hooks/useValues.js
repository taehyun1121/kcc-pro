import { useState } from "react";

const useValues = (initialValue = {}) => {
  const [values, setValues] = useState(initialValue);
  const onChangeValues = (e) => {
    const { value, id } = e.target;
    setValues({ ...values, [id]: value });
  };
  return { values, setValues, onChangeValues };
};

export default useValues;
