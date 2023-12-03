import { legacy_createStore as createStore } from "redux";
import { rootReducer } from "../reducers/rootReducer";
import localStorage from "redux-persist/es/storage";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: "root",
  storage: localStorage,
};

export const store = createStore(persistReducer(persistConfig, rootReducer));
