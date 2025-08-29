import React from "react";
import Navbar from "../../components/navbar/Navbar";
import HeroSection from "../../components/hero_sections/HeroSection";

const Home = ({container}) => {
  return (
    <>
      <div className="">
        <HeroSection container={container} />
      </div>
    </>
  );
};

export default Home;
