import React from "react";
import styled, { css } from "styled-components";

function CustomRadio(props) {
  const { data, id, values, setValues } = props;
  return (
    <RadioWrap>
      {data.map((el) => {
        const isChecked = el.value === values[id];
        return (
          <RadioEl key={el.idx} htmlFor={el.value} checked={isChecked}>
            <div className="customCheck" />
            <span>{el.label}</span>
            <input
              type="radio_"
              id={el.value}
              checked={isChecked}
              onClick={() =>
                setValues((prev) => {
                  return { ...prev, [id]: el.value };
                })
              }
              readOnly={true}
            />
          </RadioEl>
        );
      })}
    </RadioWrap>
  );
}

const RadioEl = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  .customCheck {
    display: inline-block;
    width: 16px;
    aspect-ratio: 1/1;
    background: #fff;
    border: 1px solid #929292;
    border-radius: 50%;
    ${({ checked }) =>
      checked &&
      css`
        border: 4px solid #7ca0d2;
      `}
  }
  input {
    display: none;
  }
`;
const RadioWrap = styled.div`
  display: flex;
  gap: 16px;
`;

export default CustomRadio;
