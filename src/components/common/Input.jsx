import React from "react";
import styled from "styled-components";

function Input(props) {
  const { label, values, onChange, id, placeholder, type = "text" } = props;

  return (
    <InputWrap>
      {label && <label htmlFor={id}>{label}</label>}
      <input type={type} value={values[id]} id={id} onChange={onChange} placeholder={placeholder} />
    </InputWrap>
  );
}

const InputWrap = styled.div`
input{
  width: 27rem;
  height: 4rem;
  padding: 14px 16px;
  border: 1px solid var(--gray-line-op100);
  background: #fff;

  &::placeholder{
    color: var(--gray-line-op100);
  }
}
`;

export default Input;
