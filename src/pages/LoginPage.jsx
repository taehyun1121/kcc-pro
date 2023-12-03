import React, { useEffect, useState } from "react";
import styled from "styled-components";
import background from "../images/bakground.svg";
import logo from "../images/logo.svg";
import languege from "../data/languege.json";
import CustomRadio from "../components/common/CustomRadio";
import useValues from "../hooks/useValues";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import CustomCheckbox from "../components/common/CustomCheckbox";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { isLogin } from "../redux/actions/isLogin";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const { values, onChangeValues, setValues } = useValues({
    KCC_ID: "",
    KCC_PW: "",
    LANGUAGE: "kr",
    isIDSave: [],
  });

  const disatch = useDispatch();
  const navigate = useNavigate();

  const TEST_ID = {
    ID: "test1",
    PW: "1234",
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (values.KCC_ID === TEST_ID.ID && values.KCC_PW === TEST_ID.PW) {
      disatch(isLogin(true));
      navigate("/main");
    } else {
      toast.error("로그인에 실패하였습니다.");
    }
  };

  return (
    <LoginWrap>
      <div className="containers">
        <img src={logo} alt="로고" />
        <LoginFrom onSubmit={onSubmit}>
          <CustomRadio
            data={languege}
            values={values}
            id={"LANGUAGE"}
            setValues={setValues}
          />
          <div className="loginBox">
            <div className="inputBox">
              <Input
                id={"KCC_ID"}
                values={values}
                onChange={onChangeValues}
                placeholder={"ID"}
              />
              <Input
                id={"KCC_PW"}
                type="password"
                values={values}
                onChange={onChangeValues}
                placeholder={"Passworad"}
              />
            </div>
            <Button
              btnType={"primary"}
              type={"submit"}
              text={"Login"}
              style={{ padding: "0 2rem" }}
            />
          </div>
          <CustomCheckbox
            data={[
              {
                idx: 1,
                value: "Remember-me",
                label: "Remember-me",
              },
            ]}
            id={"isIDSave"}
            values={values}
            setValues={setValues}
          />
        </LoginFrom>
      </div>
    </LoginWrap>
  );
}

const LoginFrom = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .loginBox {
    display: flex;
    gap: 16px;
    .inputBox {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }
`;

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
