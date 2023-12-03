import { IS_LOGIN_REDUCERS } from "../actions/isLogin";

const initialState = { isLogin: false };
const isLoginReducer = (state = initialState, aciton) => {
  switch (aciton.type) {
    case IS_LOGIN_REDUCERS:
      return { isLogin: aciton.payload };
    default:
      return state;
  }
};

export default isLoginReducer;
