import React from "react";
import {FaRocket} from "react-icons/fa";
import {aboutBanner, image, partner, headSalesForces} from "../../data/assetes";

import Button from "../reusable/Button";
import BannerSection from "./BannerSection";

const Banner = ({container, location}) => {
  if (location.pathname == "/") {
  }
  return (
    <>
      <div>
        {location.pathname == "/" ? (
          <BannerSection
            title="Driving The"
            highlight1="Vision"
            highlight2="Innovators"
            subtitle="We shape the future by solving business challenges with smart ideas and flexible solutions"
            description="Our customers love to work with us Clutch 4.9 ★★★★"
            button={{
              text: "Speak to Our Experts",
              icon: FaRocket,
              onClick: () => alert("Experts"),
            }}
            image={image}
            pathname={location.pathname}
          />
        ) : location.pathname == "/about" ? (
          <BannerSection
            title="About Us"
            image={aboutBanner}
            pathname={location.pathname}
          />
        ) : location.pathname == "/careers" ? (
          <BannerSection
            title="Carrier"
            image={aboutBanner}
            pathname={location.pathname}
          />
        ) : location.pathname == "/partnership" ? (
          <BannerSection
            title="Partner With Us"
            image={partner}
            pathname={location.pathname}
          />
        ) : location.pathname == "/salesforce" ? (
          <BannerSection
            title="Salesforce Development Company"
            description={
              "Cybdeer is a leading mobile app development company with expertise in developing cross-platform and native mobile applications. Hire our dedicated Mobile app developers to build award-winning apps and give wings to your ideas."
            }
            image={headSalesForces}
            pathname={location.pathname}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Banner;
