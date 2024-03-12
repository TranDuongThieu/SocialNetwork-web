import React from "react";
import { Route, Routes } from "react-router-dom";
import path from "./utils/paths";
import Public from "./page/Public";
import Home from "./page/Home";
import LoginPage from "./page/LoginPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.LOGIN} element={<LoginPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
