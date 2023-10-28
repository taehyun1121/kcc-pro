import React from "react";
import styled from "styled-components";

function Input(props) {
  const { label, values, onChange, id, type = "text" } = props;

  return (
    <InputWrap>
      {label && <label htmlFor={id}>{label}</label>}
      <input type={type} value={values[id]} id={id} onChange={onChange} />
    </InputWrap>
  );
}

const InputWrap = styled.div``;

export default Input;
