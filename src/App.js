import React from "react";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import RouterPage from "./routes/RouterPage";
import Footer from "./components/footer/Footer";
import {footImg} from "./data/assetes";

import {banner2} from "./data/assetes";
import {useLocation, useParams, useSearchParams} from "react-router-dom";
import Banner from "./components/banner/Banner";

const App = () => {
  let container = "max-w-7xl mx-auto px-4";

  const location = useLocation();
  let style = {};
  if (location.pathname == "/") {
    style = {
      backgroundColor: "#FFFAF4",
    };
  } else {
    style = {
      backgroundImage: `url(${banner2})`,
      backgroundSize: "cover",
      backgroundPosition: "",
      backgroundRepeat: "no-repeat",
      width: "100%",
      height: "400px",
    };
  }

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
      <RouterPage container={container} />

      {/*Footer */}
      <div className="bg-primary">
        <div className={container}>
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
