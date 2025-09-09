import React, {Suspense, lazy} from "react";
import {Routes, Route} from "react-router-dom";

const Home = lazy(() => import("../pages/home/Home"));
const About = lazy(() => import("../pages/about/About"));
const Careers = lazy(() => import("../pages/careers/Careers"));
const Partnership = lazy(() => import("../pages/partnership/Partnership"));

const RouterPage = ({container}) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home container={container} />} />
        <Route path="/about" element={<About container={container} />} />
        <Route path="/careers" element={<Careers container={container} />} />
        <Route
          path="/partnership"
          element={<Partnership container={container} />}
        />
      </Routes>
    </Suspense>
  );
};

export default RouterPage;
