import { combineReducers } from "redux";
import isLoginReducer from "./isLoginReducer";

export const rootReducer = combineReducers({ isLogin: isLoginReducer });
