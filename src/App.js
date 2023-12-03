import React from "react";
import GlobelStyle from "./GlobelStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Main from "./pages/Main";
import RequireAuth from "./components/common/RequireAuth";
import UnRequireAuth from "./components/common/UnRequireAuth";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ToastContainer />
        <GlobelStyle />
        <BrowserRouter>
          <Routes>
            <Route element={<UnRequireAuth />}>
              <Route path="/" element={<LoginPage />} />
            </Route>

            <Route element={<RequireAuth />}>
              <Route path="/main" element={<Main />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;