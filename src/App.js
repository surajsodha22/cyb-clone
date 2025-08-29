import React from "react";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Routes from "./routes/Routes";
import Footer from "./components/footer/Footer";
import {footImg} from "./data/assetes";

const App = () => {
  let container = "max-w-7xl mx-auto px-4";
  return (
    <div>
      {/* Header */}
      <div className="bg-primary">
        <div className={container}>
          <Navbar />
        </div>
      </div>

      {/* Routes */}
      <Routes container={container} />

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
