import React from "react";
import styled, { css } from "styled-components";

function Button(props) {
  const { type, text, onClick, style, disabled, icon, size, btnType } = props;
  return (
    <CustomButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={style}
      icon={icon}
      size={size}
      $btnType={btnType}
    >
      {text}
      {icon && <div className="icon"></div>}
    </CustomButton>
  );
}

const CustomButton = styled.button`
border-radius: 8px;
    padding: ${({style}) => style?.padding && style.padding};
  ${({ size }) => {
    switch (size) {
      case "Large":
        return css`
          padding: 0 20px 0 16px;
          height: 40px;
        `;
      case "DeFault":
        return css`
          padding: 0 16px 0 12px;
          height: 32px;
        `;
      case "Cell":
        return css`
          padding: 0 12px 0 8px;
          height: 28px;
        `;
      default:
        return;
    }
  }}
  ${({ $btnType }) => {
    switch ($btnType) {
      case "primary":
        return css`
          background-color: var(--tertiary-100);
          color: #fff;
          &:hover {
            background-color: var(--tertiary-80);
          }
          &:disabled {
            background-color: var(--grayBasice-80);
          }
        `;
      case "secondary":
        return css`
          background-color: ;
          color: ;
          &:hover {
            background-color: ;
          }
          &:disabled {
            background-color: ;
          }
        `;
      case "primaryOutline":
        return css`
          background-color: ;
          color: ;
          &:hover {
            background-color: ;
          }
          &:disabled {
            background-color: ;
          }
        `;
      case "secondaryOutline":
        return css`
            background-color: ;
            border:
            color: ;
            &:hover{
                background-color: ;
            }
            &:disabled{
                background-color: ;
            }
        `;
      case "primaryText":
        return css`
          background-color: ;
          color: ;
          &:hover {
            background-color: ;
          }
          &:disabled {
            background-color: ;
          }
        `;

      case "secondaryText":
        return css`
          background-color: ;
          color: ;
          &:hover {
            background-color: ;
          }
         &:disabled {
            background-color: ;
          }
        `;

      default:
        return;
    }
  }}
`;

export default Button;
