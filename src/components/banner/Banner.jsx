import React from "react";
import {FaRocket} from "react-icons/fa";
import {
  aboutBanner,
  image,
  partner,
  headSalesForces,
  aiImg,
  businessHeadImg,
  uiUxHeadImg,
  contactHead,
  softwareHead,
  mobileHead,
  webHead,
  devopsHead,
  testimoHead,
} from "../../data/assetes";

import BannerSection from "./BannerSection";
import AboutHero from "./heroes/AboutHero";
import HomeHero from "./heroes/HomeHero";
import TestimonialHero from "./heroes/TestimonialHero";

const Banner = ({container, location}) => {
  return (
    <>
      <div className="">
        {location?.pathname === "/" ? (
          <HomeHero
            button={{
              text: "Speak to Our Experts",
              icon: FaRocket,
              onClick: () => alert("Experts"),
            }}
            image={image}
            container={container}
          />
        ) : location?.pathname === "/about" ? (
          <AboutHero
            title="About Us"
            image={aboutBanner}
            pathname={location?.pathname}
          />
        ) : location?.pathname === "/careers" ? (
          <BannerSection
            title="Carrier"
            image={aboutBanner}
            pathname={location?.pathname}
          />
        ) : location?.pathname === "/partnership" ? (
          <BannerSection
            title="Partner With Us"
            image={partner}
            pathname={location?.pathname}
          />
        ) : location?.pathname === "/salesforce" ? (
          <BannerSection
            title="Salesforce Development Company"
            description={
              "Cybdeer is a leading mobile app development company with expertise in developing cross-platform and native mobile applications. Hire our dedicated Mobile app developers to build award-winning apps and give wings to your ideas."
            }
            image={headSalesForces}
            pathname={location?.pathname}
          />
        ) : location?.pathname === "/ai-development" ? (
          <BannerSection
            title="AI Development"
            description={
              "Cybdeer is a leading mobile app development company with expertise in developing cross-platform and native mobile applications. Hire our dedicated Mobile app developers to build award-winning apps and give wings to your ideas."
            }
            image={aiImg}
            pathname={location?.pathname}
          />
        ) : location?.pathname === "/business-modernization" ? (
          <BannerSection
            title="Business Modernization"
            description={
              "Cybdeer is a leading mobile app development company with expertise in developing cross-platform and native mobile applications. Hire our dedicated Mobile app developers to build award-winning apps and give wings to your ideas."
            }
            image={businessHeadImg}
            pathname={location?.pathname}
          />
        ) : location?.pathname === "/ui-ux-design" ? (
          <BannerSection
            title="UI UX Design "
            description={
              "Cybdeer is a leading mobile app development company with expertise in developing cross-platform and native mobile applications. Hire our dedicated Mobile app developers to build award-winning apps and give wings to your ideas."
            }
            image={uiUxHeadImg}
            pathname={location?.pathname}
          />
        ) : location?.pathname === "/contact-us" ? (
          <BannerSection
            title="Get in Touch "
            image={contactHead}
            pathname={location?.pathname}
          />
        ) : location?.pathname === "/mobile-app-development" ? (
          <BannerSection
            title="Mobile App Development"
            description={
              "Cybdeer is a leading mobile app development company with expertise in developing cross-platform and native mobile applications. Hire our dedicated Mobile app developers to build award-winning apps and give wings to your ideas."
            }
            image={mobileHead}
            pathname={location?.pathname}
          />
        ) : location?.pathname === "/software-development" ? (
          <BannerSection
            title="Software Development"
            description={
              "As the premier software company, we empower your growth and innovation with a future-forward vision for software development. We focus on your long-term goals, ensuring you are equipped to thrive in this competitive environment."
            }
            image={softwareHead}
            pathname={location?.pathname}
          />
        ) : location?.pathname === "/website-development" ? (
          <BannerSection
            title="Web Development "
            description={
              "Cybdeer is a leading mobile app development company with expertise in developing cross-platform and native mobile applications. Hire our dedicated Mobile app developers to build award-winning apps and give wings to your ideas."
            }
            image={webHead}
            pathname={location?.pathname}
          />
        ) : location?.pathname === "/devops" ? (
          <BannerSection
            title="DevOps Services Solutions"
            description={
              "Cybdeer is a leading mobile app development company with expertise in developing cross-platform and native mobile applications. Hire our dedicated Mobile app developers to build award-winning apps and give wings to your ideas."
            }
            image={devopsHead}
            pathname={location.pathname}
          />
        ) : location?.pathname === "/testimonials" ? (
          <TestimonialHero image={testimoHead} container={container} />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Banner;
