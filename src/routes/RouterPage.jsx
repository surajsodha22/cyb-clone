import React, {Suspense, lazy} from "react";
import {Routes, Route} from "react-router-dom";
import BusinessModernization from "../pages/business_modernization/BusinessModernization";
import UiUxDesign from "../pages/uiUxDesign/UiUxDesign";

const Home = lazy(() => import("../pages/home/Home"));
const About = lazy(() => import("../pages/about/About"));
const Careers = lazy(() => import("../pages/careers/Careers"));
const Partnership = lazy(() => import("../pages/partnership/Partnership"));
const Salesforce = lazy(() => import("../pages/salesforce/Salesforce"));
const Contact = lazy(() => import("../pages/contact/Contact"));

const AIDevelopment = lazy(() =>
  import("../pages/AI_Development/AIDevelopment")
);

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
        <Route
          path="/salesforce"
          element={<Salesforce container={container} />}
        />
        <Route
          path="/ai_development"
          element={<AIDevelopment container={container} />}
        />
        <Route
          path="/business_modernization"
          element={<BusinessModernization container={container} />}
        />
        <Route
          path="/ui_ux_design"
          element={<UiUxDesign container={container} />}
        />

        <Route path="/contact-us" element={<Contact container={container} />} />
        {/* <Route path="/contact-us" element={<Contact />} /> */}

        <Route path="/*" element={"page not found"} />
      </Routes>
    </Suspense>
  );
};

export default RouterPage;
