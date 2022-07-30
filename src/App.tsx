import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Shop from "./Pages/Shop/Shop";
import Product from "./Pages/Product/Product";

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
};

export default App;
