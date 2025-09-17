import React from "react";

import Navbar from "./components/navbar/Navbar";
import RouterPage from "./routes/RouterPage";
import Footer from "./components/footer/Footer";
import {footImg} from "./data/assetes";

import {banner2} from "./data/assetes";
import {useLocation} from "react-router-dom";
import Banner from "./components/banner/Banner";
import Section13 from "./components/hero_sections/Section13";
import Section6 from "./components/hero_sections/Section6";

const App = () => {
  let container = "max-w-7xl mx-auto px-4";

  const location = useLocation();

  let style = {};
  const gradientStyle = {
    background:
      "linear-gradient(261.39deg, rgba(254, 187, 77, 0.5) 0.6%, rgba(255, 237, 207, 0.5) 15.85%, rgba(254, 220, 165, 0.5) 24.28%, rgba(252, 199, 112, 0.5) 32.74%, rgba(254, 187, 77, 0.5) 46.07%, rgba(254, 201, 114, 0.404237) 67.03%, rgba(255, 216, 153, 0.306318) 78.79%, rgba(255, 226, 177, 0.188318) 81.36%, rgba(255, 233, 196, 0.1) 100%)",
    width: "100%",
    paddingBottom: "10px",
  };
  const gradientStyle2 = {
    background:
      "linear-gradient(261.39deg, rgba(254, 187, 77, 0.5) 0.6%, rgba(255, 237, 207, 0.5) 15.85%, rgba(254, 220, 165, 0.5) 24.28%, rgba(252, 199, 112, 0.5) 32.74%, rgba(254, 187, 77, 0.5) 46.07%, rgba(254, 201, 114, 0.404237) 67.03%, rgba(255, 216, 153, 0.306318) 78.79%, rgba(255, 226, 177, 0.188318) 81.36%, rgba(255, 233, 196, 0.1) 100%)",
    width: "100%",
    paddingBottom: "10px",
  };

  if (location.pathname === "/") {
    style = {
      backgroundColor: "#FFFAF4",
    };
  } else if (
    location.pathname === "/salesforce" ||
    location.pathname === "/ai-development" ||
    location.pathname === "/software-development" ||
    location.pathname === "/ui-ux-design"
  ) {
    style = gradientStyle;
  } else {
    style = {
      backgroundImage: `url(${banner2})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      width: "100%",
      paddingBottom: "10px",
    };
  }

  // background: ;

  return (
    <div>
      {/* Header */}
      <div className="" style={style}>
        <div className={container}>
          <Navbar />
          <Banner container={container} location={location} />
        </div>
      </div>

      {/* Routes */}
      <div className="">
        <RouterPage container={container} />
      </div>

      {/*Footer */}
      <div className="bg-primary">
        <div className={container}>
          <Section6 />
          <Section13 />
          <Footer container={container} />
        </div>
        <div className="w-full">
          <img
            src={footImg}
            alt="Footer background"
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
