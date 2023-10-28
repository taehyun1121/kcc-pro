import React, { useEffect, useState } from "react";
import styled from "styled-components";
import background from "../images/bakground.svg";
import logo from "../images/logo.svg";
import languege from "../data/languege.json";
import CustomRadio from "../components/common/CustomRadio";
import useValues from "../hooks/useValues";
import Input from "../components/common/Input";

function LoginPage() {
  const { values, onChangeValues, setValues } = useValues({
    KCC_ID: "",
    KCC_PW: "",
    LANGUAGE: "kr",
  });

  return (
    <LoginWrap>
      <div className="containers">
        <img src={logo} alt="로고" />
        <LoginFrom>
          <CustomRadio
            data={languege}
            values={values}
            id={"LANGUAGE"}
            setValues={setValues}
          />
          <div className="loginBox">
            <Input id={"KCC_ID"} values={values} onChange={onChangeValues} />
            <Input
              id={"KCC_PW"}
              type="password"
              values={values}
              onChange={onChangeValues}
            />
          </div>
        </LoginFrom>
      </div>
    </LoginWrap>
  );
}

const LoginFrom = styled.form``;

const LoginWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  background-image: url(${background});
  width: 100%;
  height: 100vh;
  .containers {
    display: flex;
    max-width: 1200px;
    gap: 106px;
    width: 100%;
    height: auto;
  }
`;

export default LoginPage;
