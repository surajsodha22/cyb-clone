import React from "react";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import {Routes, Route} from "react-router-dom";

const RouterPage = ({container}) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home container={container} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default RouterPage;
