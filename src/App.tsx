import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import NavBar from "./Components/NavBar/NavBar";

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
