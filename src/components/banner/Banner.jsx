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
  headCareers,
} from "../../data/assetes";

import BannerSection from "./BannerSection";
import HomeHero from "./heroes/HomeHero";
import AboutHero from "./heroes/AboutHero";
import CareerHero from "./heroes/CareerHero";
import ContactHero from "./heroes/ContactHero";
import TestimonialsHero from "./heroes/TestimonialsHero";

const Banner = ({container, location}) => {
  return (
    <>
      <div className="">
        {location?.pathname === "/" ? (
          <HomeHero
            button={{
              text: "Ready to go to!!",
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
          <CareerHero
            title="Carrier"
            image={headCareers}
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
          <ContactHero
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
          <TestimonialsHero
            title="Testimonial"
            image={testimoHead}
            container={container}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Banner;
