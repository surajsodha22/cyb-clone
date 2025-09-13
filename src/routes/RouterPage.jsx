import React, {Suspense, lazy} from "react";
import {Routes, Route} from "react-router-dom";
import BusinessModernization from "../pages/business-modernization/BusinessModernization";
import UiUxDesign from "../pages/uiUxDesign/UiUxDesign";

import Devops from "../pages/devops/Devops";

const Home = lazy(() => import("../pages/home/Home"));
const About = lazy(() => import("../pages/about/About"));
const Careers = lazy(() => import("../pages/careers/Careers"));
const Partnership = lazy(() => import("../pages/partnership/Partnership"));
const Salesforce = lazy(() => import("../pages/salesforce/Salesforce"));
const Contact = lazy(() => import("../pages/contact/Contact"));
const MobileApp = lazy(() => import("../pages/mobileApp/MobileApp"));
const WebsiteDevelopment = lazy(() =>
  import("../pages/website-development/WebsiteDevelopment")
);
const SoftwareDevelopment = lazy(() =>
  import("../pages/software-development/SoftwareDevelopment")
);
const AIDevelopment = lazy(() =>
  import("../pages/ai-development/AIDevelopment")
);
const Testimonials = lazy(() => import("../pages/testimonials/Testimonials"));

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
          path="/ai-development"
          element={<AIDevelopment container={container} />}
        />
        <Route
          path="/business-modernization"
          element={<BusinessModernization container={container} />}
        />
        <Route
          path="/ui-ux-design"
          element={<UiUxDesign container={container} />}
        />
        <Route path="/contact-us" element={<Contact container={container} />} />
        <Route
          path="/testimonials"
          element={<Testimonials container={container} />}
        />
        <Route
          path="/mobile-app-development"
          element={<MobileApp container={container} />}
        />
        <Route
          path="/software-development"
          element={<SoftwareDevelopment container={container} />}
        />
        <Route path="/devops" element={<Devops container={container} />} />

        {/* will work */}
        <Route
          path="/website-development"
          element={<WebsiteDevelopment container={container} />}
        />
        <Route path="/on-demand" element={<Devops container={container} />} />
        <Route path="/*" element={"page not found"} />
      </Routes>
    </Suspense>
  );
};

export default RouterPage;
